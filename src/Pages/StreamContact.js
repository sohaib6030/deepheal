import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input/max";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Link from "@mui/material/Link";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { COLORS } from "../Styles/Colors";
import { useIsFocusVisible } from "@material-ui/core";
import { SettingsBluetoothRounded } from "@material-ui/icons";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#CC0948",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#ffcc00",
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

export default function StartStream() {
  const [value, setValue] = useState(null);
  const [focus, setfocus] = useState(false);
  const Colors = { Primary: "#CC0948", Secondary: "black" };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      phone: data.get("phone"),
      phone: data.get("phone"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      {console.log(focus)}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <PhoneInput
              international
              defaultCountry="US"
              value={value}
              onChange={setValue}
              onFocus={() => setfocus(true)}
              onBlur={() => setfocus(false)}
              style={{ padding: 40 }}
            />

            <Button
              //  type="submit"
              fullWidth
              variant="contained"
              //  onClick={() => history.push("/StartStream")}
              //    style={{ backgroundColor: COLORS.primary }}
              sx={{ mt: 3, mb: 2 }}
            >
              Send Text Message
            </Button>

            <Button
              //  type="submit"
              fullWidth
              variant="contained"
              //       onClick={() => history.push("/StartStream")}
              //    style={{ backgroundColor: COLORS.primary }}
              sx={{ mt: 3, mb: 2 }}
            >
              Go Live
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
