import { Box } from "@mantine/core";
import "./App.scss";

import Header from "./components/Header/Header";
import MainSection from "./components/MainSection/MainSection";
import MeetSection from "./components/MeetSection/MeetSection";

function App() {
  return (
    <Box>
      <Header />
      <MainSection />
      <MeetSection />
    </Box>
  );
}

export default App;
