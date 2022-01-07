import { createTheme } from "@material-ui/core/styles";
import { useStateValue } from "../ContextAPI/globalState";
import { ThemeProvider } from "@material-ui/styles";

function CreateThemeProvider({ children }) {
  // get data from global state
  const { darkMode } = useStateValue();

  // create theme
  const Theme = createTheme({
    palette: {
      type: darkMode ? "red" : "light",
      primary: {
        main: darkMode ? "red" : "#FFFFFF",
      },
      secondary: {
        main: darkMode ? "red" : "#ebebeb",
      },
      background: {
        default: darkMode ? "red" : "#ebebeb",
      },
    },
    shape: {
      borderRadius: "20px",
    },
  });

  // theme provider
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>;
}

export default CreateThemeProvider;
