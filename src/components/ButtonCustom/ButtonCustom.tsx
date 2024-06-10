import { Box, SxProps } from "@mui/material";
import { homedir } from "os";
import React from "react";

type BoxCustomProps = {
  children: React.ReactNode;
  sx?: SxProps;
};
export default function ButtonCustom({ children, sx }: BoxCustomProps) {
  return (
    <Box
      sx={{
        color: "white",
        backgroundColor: "#c60413",
        cursor: "pointer",
        py: 1,
        px: 1,
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #520208",
        boxShadow: "0px 1px 5px 0px #00000021",
        ":hover": {
          backgroundColor: "#f20418",
        },

        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
