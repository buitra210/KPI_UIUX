import { Box, Container } from "@mui/material";
import GetStart from "./components/GetStart/GetStart";
import ActionStart from "./components/ActionStart/ActionStart";
import RecentDasboard from "./components/RecentDasboard/RecentDasboard";
import Tutorial from "./components/Tutorial/Tutorial";

export default function HomePage() {
  return (
    <Container>
      <GetStart />
      <ActionStart />
      <RecentDasboard />
      <Tutorial />
    </Container>
  );
}
