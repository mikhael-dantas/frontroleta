import { Avatar, Box, Button, Checkbox, CssBaseline, FormControl, FormControlLabel, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import background from "../../services/randomImagesBackground";
import LinkMaterial from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { RequisitionBackend } from "./../../services/http/login/index";
import { AuthContext } from "./../../services/context/";
import { useContext } from "react";
import { loadState, removeState, saveState } from "./../../services/localStorage";
import LoadingImage from "../../components/loadingImage";


function Login() {

    const [remenberMe, setRemenberMe] = useState(true);
    const [remenberMeLogin, setRemenberMeLogin] = useState();
    const [erroLogin, setErroLogin] = useState(false);
    const [valid, setValid] = useState();
    const { isLogged, setIsLogged } = useContext(AuthContext);
    const [loading, setLoading] = useState(true)
    let navigate = useNavigate();

    const {
        register,
        formState: { errors },
        reset,
        handleSubmit,
    } = useForm({ criteriaMode: "all", mode: "onChange" });

    const onSubmit = (data) => {
        logar(data)
    };

    const theme = createTheme();


    const logar = (data) => {
        const { http } = RequisitionBackend();

        http
            .post("/login", {
                email: data.email,
                password: data.password,

            })
            .then((res) => {
                console.log("re aqui", res)
                if (res.data.isLogged === true) {
                    setIsLogged(true)
                    saveState("user", { email: data.email })
                    saveState("userId", res.data.user.id)
                    console.log(remenberMe)
                    if (remenberMe === true) { 
                        saveState("login", { email: data.email, password: data.password })
                    } else {
                        removeState("login")
                    }
                }
            })
            .catch(async function (err) {

            });
    };

    useEffect(() => {
        let loginRemenber = loadState("login");
        if (loginRemenber !== undefined) {
            setRemenberMeLogin(loginRemenber);
        } else {
            setRemenberMeLogin({ email: "", password: "" });
        }

        setLoading(false);
    }, [])

    return (
        <>
            {loading === true && (
                <LoadingImage></LoadingImage>
            )}
            {loading === false && (
                <ThemeProvider theme={theme}>
                    <Grid container component="main" sx={{ height: "100vh" }}>
                        <CssBaseline />
                        <Grid
                            item
                            xs={false}
                            sm={4}
                            md={8}
                            sx={{
                                backgroundImage: `url(${background})`,
                                backgroundRepeat: "no-repeat",
                                backgroundColor: (t) =>
                                    t.palette.mode === "light"
                                        ? t.palette.grey[50]
                                        : t.palette.grey[900],
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        />
                        <Grid
                            item
                            xs={12}
                            sm={8}
                            md={4}
                            component={Paper}
                            elevation={6}
                            square
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Box
                                sx={{
                                    my: 10,
                                    mx: 4,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                                    <LockOutlinedIcon />
                                </Avatar>
                                <Typography component="h1" variant="h5">
                                    Logar
                                </Typography>


                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <FormControl fullWidth id="category-editor-form" style={{ marginBottom: 30, marginTop: 50 }}>
                                        <TextField
                                            label="Email"
                                            error={errors?.email}
                                            variant="outlined"
                                            defaultValue={remenberMeLogin?.email}
                                            size="small"
                                            {...register("email", {
                                                required: true,
                                                validate: {
                                                    matchPattern: (v) =>
                                                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                                                        "Email address must be a valid address",
                                                },
                                            })}
                                        ></TextField>
                                        {errors?.email?.types?.required && (
                                            <span style={{ color: "red" }}>Email obrigatório</span>
                                        )}
                                        {errors?.email?.types?.minLength && (
                                            <span style={{ color: "red" }}>Menos de 5 caracteres</span>
                                        )}
                                        {errors?.email?.types?.matchPattern && (
                                            <span style={{ color: "red" }}>Formato de e-mail não válido</span>
                                        )}
                                    </FormControl>


                                    {window.csrf_token}

                                    <FormControl fullWidth id="category-editor-form" style={{ marginBottom: 10 }}>
                                        <TextField
                                            label="Password"
                                            type="password"
                                            error={errors.password}
                                            variant="outlined"
                                            defaultValue={remenberMeLogin?.password}
                                            size="small"
                                            {...register("password", {
                                                required: true,
                                                minLength: 5,
                                            })}
                                        ></TextField>
                                        {errors?.password?.types?.required && (
                                            <span style={{ color: "red" }}>Senha obrigatório</span>
                                        )}
                                        {errors?.password?.types?.minLength && (
                                            <span style={{ color: "red" }}>Menos de 5 caracteres</span>
                                        )}
                                    </FormControl>

                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                value="remember"
                                                defaultChecked
                                                color="primary"
                                                onClick={() => {
                                                    setRemenberMe(!remenberMe);
                                                }}
                                            />
                                        }
                                        label="Lembre-me"
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        Logar
                                    </Button>

                                </form>
                                {/* <Grid container>
                                        <Grid item xs justifyContent="space-between">
                                            <Link
                                                to={`/external/recovery-acess`}
                                            >
                                                Esqueceu sua senha?
                                            </Link>
                                        </Grid>
                                    </Grid> */}
                                {/* <Copyright sx={{ mt: 5 }} /> */}
                            </Box>
                        </Grid>
                    </Grid>
                </ThemeProvider>
            )}
        </>
    );
}

function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <LinkMaterial
                color="inherit"
                href="https://www.viaradnet.com.br/"
                target="_blank"
            >
                Radnet Telecom
            </LinkMaterial>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

export default Login;