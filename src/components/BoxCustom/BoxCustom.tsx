import { Box, SxProps } from "@mui/material";
import React from "react";

type BoxCustomProps = {
  children: React.ReactNode;
  sx?: SxProps;
};
export default function BoxCustom({ children, sx }: BoxCustomProps) {
  return (
    <Box
      sx={{
        px: 3,
        py: 2,
        borderRadius: "15px",
        border: "1.6px solid #0e0001c9",
        // boxShadow: "0px 1px 5px 0px #00000021",

        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
