import { Box, SxProps } from "@mui/material";
import React from "react";

type BoxCustomProps = {
  children: React.ReactNode;
  sx?: SxProps;
};
export default function BoxCustomChild({ children, sx }: BoxCustomProps) {
  return (
    <Box
      sx={{
        px: 3,
        py: 2,
        borderRadius: "15px",
        boxShadow: "0px 1px 5px 0px #00000021",

        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
