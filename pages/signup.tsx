import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
const [token, setToken] = useState(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    const response = await fetch("http://localhost:3001/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: data.get("username"),
        email: data.get("email"),
        password: data.get("password"),
        passwordValidity: data.get("passwordValidity"),
      }),
    });

    if (response.ok) {
      // 회원가입 성공 처리
      const {token} = await response.json();
      localStorage.setItem("token", token);
      setToken(token);
      alert("회원가입이 정상적으로 완료되었습니다.");
    } else {
      
      const { message } = await response.json();
      setErrorMessage(message);
    }
  };
  useEffect(() => {
      const getToken = localStorage.getItem("token");
      if (getToken) {
        router.push("/ready");
      }
    }, [token]);

  return (
    <ThemeProvider theme={theme}>
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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
          <Typography component="h1" variant="h5">
            회원가입
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField name="username" required fullWidth id="username" label="아이디" autoFocus autoComplete="given-name" />
              </Grid>

              <Grid item xs={12}>
                <TextField required fullWidth name="email" label="이메일" id="email" autoComplete="email" />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth name="password" label="비밀번호" type="password" id="password" autoComplete="new-password" />
              </Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}>
                <TextField required fullWidth name="passwordValidity" label="비밀번호 확인" type="password" id="passwordValidity" autoComplete="new-password" />
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
            {errorMessage && <p style={{ color: "red", fontWeight: "bold" }}>{errorMessage}</p >}
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              회원가입
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  이미 계정이 있으신가요? 로그인
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
