import { Box } from "@mui/material";
import Content from "./content/Content";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import Important from "./important/Important";
import { KPIProvider } from "src/context/KPIModalContext/KPIModalContext";

export default function Layout() {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <KPIProvider>
        <Sidebar />
        <Header />
        <Important />
        <Content headerHeight={"63.5px"} />
      </KPIProvider>
    </Box>
  );
}
