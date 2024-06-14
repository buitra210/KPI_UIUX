import {
  Container,
  Box,
  Paper,
  Typography,
  SelectChangeEvent,
  TextField,
  Button,
  MenuItem,
  FormHelperText,
  FormControl,
  InputLabel,
  Select,
  IconButton,
} from "@mui/material";
import { useUserInfo } from "src/context/KPIModalContext/KPIModalContext";
import StarIcon from "@mui/icons-material/Star";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import BoxCustom from "src/components/BoxCustom/BoxCustom";
import { useState } from "react";
import ImageIcon from "@mui/icons-material/Image";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import TodoList from "../AddTask/TodoList/TodoList";
import ButtonCustom from "src/components/ButtonCustom/ButtonCustom";
export default function DetailKPI() {
  const { userInfo, setUserInfo } = useUserInfo();
  const [selectedFileName, setSelectedFileName] = useState("");
  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    file: false,
    name: false,
    date1: false,
    date2: false,
    tag: false,
    target: false,
    metrics: false,
    task: false,
    status: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserInfo((prev) => ({
          ...prev,
          file: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setSelectedFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserInfo((prev) => ({
          ...prev,
          file: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClearFile = () => {
    setSelectedFileName("");
    setUserInfo((prev) => ({
      ...prev,
      file: null,
    }));
  };

  const handleTypeChange = (event: SelectChangeEvent) => {
    setUserInfo((prev) => ({
      ...prev,
      type: event.target.value,
    }));
  };

  const validateForm = () => {
    const newErrors = {
      file: userInfo.file === null,
      name: userInfo.name.trim() === "",
      status: userInfo.status.trim() === "",
      target: userInfo.target.trim() === "",
      metrics: userInfo.metrics.trim() === "",
      task: userInfo.task.length === 0,
      date1: userInfo.date1.trim() === "",
      date2: userInfo.date2.trim() === "",
      tag: userInfo.tag.trim() === "",
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSave = () => {
    navigate("/KPIManage2");
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    if (validateForm()) {
      console.log(userInfo);
      localStorage.removeItem("userInfo");
      setUserInfo({
        file: null,
        name: "",
        tag: "",
        target: "",
        metrics: "",
        task: [],
        date1: "",
        date2: "",
        status: "",
      });
      setSelectedFileName("");
      toast.success("Profile details saved successfully");
    } else {
      toast.error("Please fill in all required fields.");
    }
  };
  console.log(userInfo);
  return (
    <Container>
      <Box>
        <Paper sx={{ px: 3, py: 3, my: 5 }}>
          <Box sx={{ borderBottom: "1px solid black" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <ArrowBackOutlinedIcon sx={{ fontSize: 30 }} />
              <Typography sx={{ fontSize: "30px", fontWeight: 550 }}>
                {userInfo.name}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                my: 2,
              }}
            >
              <Box>
                <Typography sx={{ fontSize: "18px", fontWeight: 540 }}>
                  Description
                </Typography>
                <Typography sx={{ fontSize: "13px" }}>
                  Accumulate 80 teaching hrs in May.
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <StarIcon sx={{ fontSize: 30, color: "#FFD700" }} />
                <DeleteOutlineOutlinedIcon sx={{ fontSize: 30 }} />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                my: 2,
              }}
            >
              <BoxCustom
                sx={{
                  backgroundColor: "#F68484",
                  color: "black",
                  py: 0.5,
                  borderRadius: "10px",
                }}
              >
                {" "}
                Education
              </BoxCustom>
            </Box>
          </Box>
          <Box sx={{ my: 1 }}>
            <Typography sx={{ fontSize: "18px", fontWeight: 540 }}>
              General
            </Typography>
            <Box>
              {" "}
              <Container>
                <Box>
                  <Paper sx={{ px: 3, py: 3, my: 5 }}>
                    <Box>
                      <Box sx={{ mt: 3, pb: 3 }}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyItems: "center",
                            alignItems: "center",
                          }}
                        >
                          <ErrorOutlineIcon sx={{ pr: 2, fontSize: "40px" }} />
                          <Typography
                            variant="subtitle1"
                            color="blue-gray-600"
                            className="mb-1"
                          >
                            KPI Information
                          </Typography>
                        </Box>
                        <Box sx={{ my: 4 }}>
                          <Typography variant="body1" sx={{ mb: 2 }}>
                            Name
                          </Typography>
                          <TextField
                            name="name"
                            value={userInfo.name}
                            required
                            label="KPI's Name"
                            fullWidth
                            helperText="Please enter your KPI's name"
                            onChange={handleInputChange}
                          ></TextField>
                        </Box>
                        <Box sx={{ my: 8 }}>
                          <Typography sx={{ mb: 2 }}>KPI's Status</Typography>
                          <FormControl required sx={{ minWidth: 120 }}>
                            <InputLabel>Status</InputLabel>
                            <Select
                              name="status"
                              value={userInfo.status}
                              label="Status *"
                              onChange={handleTypeChange}
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value="On Going">On Going</MenuItem>
                              <MenuItem value="Complete">Complete</MenuItem>
                            </Select>
                            <FormHelperText>
                              Please enter your KPI's status
                            </FormHelperText>
                          </FormControl>
                        </Box>

                        <Box sx={{ my: 4, display: "flex", gap: 2 }}>
                          <Box>
                            <Typography sx={{ mb: 2 }}>Target</Typography>
                            <TextField
                              value={userInfo.target}
                              multiline
                              required
                              name="target"
                              onChange={handleInputChange}
                              label="Your KPI's target"
                              fullWidth
                              helperText="Please enter your KPI's target"
                            ></TextField>
                          </Box>
                          <Box>
                            {" "}
                            <Typography sx={{ mb: 2 }}>Metric</Typography>
                            <TextField
                              value={userInfo.metrics}
                              multiline
                              required
                              name="metrics"
                              onChange={handleInputChange}
                              label="KPI's Metric"
                              fullWidth
                              helperText="Please enter your KPI's metric"
                            ></TextField>
                          </Box>
                        </Box>

                        <Box sx={{ my: 4 }}>
                          <Typography sx={{ mb: 2 }}>Tag</Typography>
                          <TextField
                            value={userInfo.tag}
                            required
                            name="tag"
                            onChange={handleInputChange}
                            label="KPI's Tag"
                            fullWidth
                            helperText="Please enter your KPI's task"
                          ></TextField>
                        </Box>
                      </Box>
                    </Box>
                  </Paper>
                  <Paper sx={{ px: 3, py: 3, my: 5 }}>
                    <Box>
                      <Box sx={{ mt: 3, pb: 3 }}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyItems: "center",
                            alignItems: "center",
                          }}
                        >
                          <LocationOnIcon sx={{ pr: 2, fontSize: "40px" }} />
                          <Typography
                            variant="subtitle1"
                            color="blue-gray-600"
                            className="mb-1"
                          >
                            Time
                          </Typography>
                        </Box>

                        <Box>
                          <Box sx={{ my: 4, display: "flex", gap: 2 }}>
                            <Box>
                              <Typography sx={{ mb: 2 }}>Start</Typography>
                              <TextField
                                value={userInfo.date1}
                                multiline
                                required
                                name="date1"
                                onChange={handleInputChange}
                                label="Time Start"
                                fullWidth
                                helperText="Please enter your KPI's time start"
                              ></TextField>
                            </Box>
                            <Box>
                              {" "}
                              <Typography sx={{ mb: 2 }}>End</Typography>
                              <TextField
                                value={userInfo.date2}
                                multiline
                                required
                                name="date2"
                                onChange={handleInputChange}
                                label="Time End"
                                fullWidth
                                helperText="Please enter your KPI's time end"
                              ></TextField>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Paper>
                  <Paper sx={{ px: 3, py: 3, my: 5 }}>
                    <Box>
                      <Box sx={{ mt: 3, pb: 3 }}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyItems: "center",
                            alignItems: "center",
                          }}
                        >
                          <LocationOnIcon sx={{ pr: 2, fontSize: "40px" }} />
                          <Typography
                            variant="subtitle1"
                            color="blue-gray-600"
                            className="mb-1"
                          >
                            All Tasks
                          </Typography>
                        </Box>

                        <Box>
                          <Box sx={{ my: 4, display: "flex" }}>
                            <Box>
                              <Typography sx={{ mb: 2 }}>Main Task</Typography>
                              <TextField
                                value={userInfo.task}
                                multiline
                                required
                                name="task"
                                onChange={handleInputChange}
                                label="Task"
                                fullWidth
                                helperText="Please enter your KPI's task"
                              ></TextField>
                              <Box sx={{ mt: 2 }}>
                                <Typography sx={{ mb: 2 }}>Task</Typography>
                                <TodoList />
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Paper>
                  <Paper sx={{ px: 3, py: 3, my: 5 }}>
                    <Box sx={{ pb: 3 }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyItems: "center",
                          alignItems: "center",
                        }}
                      >
                        <ImageIcon sx={{ pr: 2, fontSize: "40px" }} />
                        <Typography
                          variant="subtitle1"
                          color="blue-gray-600"
                          className="mb-1"
                        >
                          Upload file
                        </Typography>
                      </Box>
                      <Typography variant="body1" sx={{ my: 2 }}>
                        Upload the file you want to render KPI!
                      </Typography>
                      <input
                        type="file"
                        id="fileInput"
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                      />
                      <div
                        style={{
                          border: "2px dashed #ccc",
                          borderRadius: "5px",
                          padding: "20px",
                          textAlign: "center",
                        }}
                        onDragOver={(e) => {
                          e.preventDefault();
                        }}
                        onDrop={handleDrop}
                      >
                        <Box
                          sx={{
                            py: 3,
                            display: "grid",
                            alignItems: "center",
                            justifyItems: "center",
                            gap: 1,
                          }}
                        >
                          <Button
                            variant="outlined"
                            onClick={() => {
                              const fileInput =
                                document.getElementById("fileInput");
                              if (fileInput) {
                                fileInput.click();
                              }
                            }}
                          >
                            Add File
                          </Button>
                          <Typography color="blue-gray-600">
                            Or drag and drop files
                          </Typography>
                          {selectedFileName && (
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <Typography color="blue-gray-600">
                                {selectedFileName}
                              </Typography>
                              <IconButton onClick={handleClearFile}>
                                X
                              </IconButton>
                            </div>
                          )}

                          <div>
                            {userInfo.file && (
                              <img
                                style={{
                                  maxWidth: "250px",
                                  height: "auto",
                                }}
                                src={userInfo.file}
                                alt="Selected Image"
                              />
                            )}
                          </div>
                        </Box>
                      </div>
                    </Box>
                  </Paper>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                  <Box onClick={handleSave}>
                    <ButtonCustom>Submit</ButtonCustom>
                  </Box>
                </Box>
              </Container>
            </Box>
            <Box />
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}
