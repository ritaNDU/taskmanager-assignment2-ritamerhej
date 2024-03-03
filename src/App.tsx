import Home from "./features/Home";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#D3D3D3",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
