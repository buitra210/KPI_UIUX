import { Box, SxProps } from "@mui/material";
import React from "react";

type BoxCustomProps = {
  children: React.ReactNode;
  sx?: SxProps;
};
export default function ButtonCustom({ children, sx }: BoxCustomProps) {
  return (
    <Box
      sx={{
        // color: "red",
        backgroundColor: "#7ca792",
        cursor: "pointer",
        fontWeight: 600,
        py: 1,
        px: 1,
        borderRadius: "15px",
        display: "flex",
        alignItems: "center",
        border: "2px solid #3f6c62",
        boxShadow: "0px 1px 5px 0px #00000021",

        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
