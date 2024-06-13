import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function Content({ headerHeight }: { headerHeight: string }) {
  return (
    <Container
      sx={{
        minHeight: `calc(100svh - ${headerHeight})`,
        left: { sm: "15%", xs: "0" },
        right: { sm: "15%", xs: "0" },
        width: { sm: "70%", xs: "100%" },
      }}
    >
      <Outlet />
    </Container>
  );
}
