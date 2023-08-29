import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCSRFToken } from "../../../services/CSRFToken/getCSRFToken";
import { postLogin } from "../../../services/auth/authLogin/postLogin";
import s from "./AuthLogin.module.css";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import LogoSimCity from "./src/assets/LogoSimCity.png";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://www.cellnex.com/fr-fr/"
        target="_blank"
      >
        Cellnex Telecom
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export const AuthLogin = () => {
  const navigate = useNavigate();
  const [emailData, setEmailData] = useState<string>("");
  const [passwordData, setPasswordData] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  // const [rememberData, setRememberData] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await postLogin(
        await getCSRFToken(),
        emailData,
        passwordData
        // rememberData
      );
      navigate("/dashboard");
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <div className={s.AuthCard}>
      <ThemeProvider theme={defaultTheme}>
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
            <div className={s.title}>
              {/* <Typography component="h1" variant="h3">
                SIMCITY
              </Typography> */}
              <img
                className={s.imgLogo}
                src={"./src/assets/LogoSimCity.png"}
                alt="LogoSimCity"
              />
            </div>

            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              {error ? (
                <div className={s.error}>Email ou mot de passe incorrect</div>
              ) : null}
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(event) => setEmailData(event.target.value)}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(event) => setPasswordData(event.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="primary"
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link
                    href="mailto: support.dev@cellnextelecom.fr"
                    target="_blank"
                    variant="body2"
                  >
                    Problème de mot de passe ?
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </div>
  );
};
