import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function Content({ headerHeight }: { headerHeight: string }) {
  return (
    <Container
      sx={{
        minHeight: `calc(100svh - ${headerHeight})`,
        backgroundColor: "#f4f5f6",
      }}
    >
      <Outlet />
    </Container>
  );
}
