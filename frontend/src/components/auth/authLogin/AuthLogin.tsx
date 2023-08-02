import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCSRFToken } from "../../../CSRFToken/getCSRFToken";
import s from "./AuthLogin.module.css";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
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

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export const AuthLogin = () => {
  const navigate = useNavigate();
  const [emailData, setEmailData] = useState<string | undefined>();
  const [passwordData, setPasswordData] = useState<string | undefined>();
  const [rememberData, setRememberData] = useState<boolean | undefined>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const csrfToken: string = await getCSRFToken();
      const response = await fetch("http://127.0.0.1:8000/api/user/login", {
        method: "POST",
        mode: "cors",
        headers: new Headers({
          Accept: "application/json",
          "Content-type": "application/json; charset=UTF-8",
          "X-CSRF-Token": csrfToken,
        }),
        body: JSON.stringify({
          email: emailData,
          password: passwordData,
          remember_me: rememberData,
        }),
      });

      if (!response.ok) {
        // Gérer les erreurs en fonction du statut de la réponse (response.status)
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const data = await response.json();
      console.log(data);
      localStorage.setItem("user", "token : " + data.token);
      navigate("/dashboard");
    } catch (error: any) {
      console.error("Error:", error.message);
      // Gérer l'erreur ici, par exemple, afficher un message à l'utilisateur
    }
  };

  return (
    <div className={s.homeBody}>
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
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
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
              <FormControlLabel
                control={
                  <Checkbox
                    value="true"
                    onChange={() => setRememberData(!rememberData)}
                    color="primary"
                  />
                }
                label="Remember me"
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
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
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
