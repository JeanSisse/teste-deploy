import { Typography, TextField, Button, InputLabel } from '@material-ui/core';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import useAuth from '../../Hooks/Hook-Authentication/useAuth';
import 'react-toastify/dist/ReactToastify.css';
import InputPassword from './CustomPasswordInput';
import { validateLogin } from '../../Helpers';
import useStyles from './style';
import useGlobal from '../../Hooks/Hook-Global/useGlobal';
import { handleGetUsuario, BASE_URL } from '../../Services';

function Login() {
    const classes = useStyles();
    const { email, senha, setErroSenha, erroSenha, setMensagemErro, setEmail, mensagemErro, erroEmail, setErroEmail, token, setToken, setUsuario } = useAuth();
    const history = useHistory();
    const { currentPage } = useGlobal();

    const notify = (erro) => {
        toast.error(erro, {
            theme: 'colored',
        });
    }

    async function handleLogin(email, senha) {
        const dados = { email, senha };
        const resource = 'login';
        try {
            const response = await fetch(BASE_URL + resource, {
                method: 'POST',
                body: JSON.stringify(dados),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            setToken(data.token);
            localStorage.setItem("token", data.token);
            const usuarioLogado = await handleGetUsuario(data.token);
            setUsuario(usuarioLogado);
            history.push("/home");

            return data;

        } catch (error) {
            if (error.message === 'jwt malformed') {
                notify('Usuário ou senha inválidos');
                return;

            }
            notify(error.message);
        }

    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            validateLogin(email, senha, setErroEmail, setErroSenha, erroEmail, erroSenha);
            const dados = await handleLogin(email, senha);
            if (!dados) {
                return;
            }

        } catch (error) {
            setMensagemErro(error.message);
        }


    }
    useEffect(() => {

        if (token) {
            if (currentPage === "home") {
                return history.push("/home");
            }
            else if (currentPage === "cliente") {
                return history.push("/cliente");
            }
        }
    }, [token, currentPage, history]);


    const handleOnChangeEmail = (event) => {
        event.preventDefault();
        setEmail(event.target.value);
        setErroEmail(false);
    }

    return (
        <div className={classes.loginContainer}>
            <ToastContainer />
            <div className={classes.imgContainer}>
                <div className={classes.imgTitleContainer}>
                    <Typography className={classes.imgTitle}>Gerencie todos os pagamentos da sua empresa em um só lugar.</Typography>
                </div>
            </div>
            <form
                onSubmit={handleSubmit}
                className={classes.formContainer}
            >
                <Typography className={classes.title}>Faça seu login!</Typography>
                <div className={classes.emailContainer}>
                    <InputLabel className={classes.label}>E-mail</InputLabel>
                    <TextField
                        error={erroEmail}
                        helperText={!!erroEmail && mensagemErro}
                        FormHelperTextProps={{ style: { fontSize: '1.3rem', backgroundColor: '#F8F8F9' } }}
                        value={email}
                        onChange={handleOnChangeEmail}
                        className={classes.input}
                        variant="outlined"
                        placeholder="Digite seu e-mail"
                        InputProps={{
                            style: {
                                fontFamily: 'Inter',
                                fontSize: '16px',
                                lineHeight: '24px',
                                height: '44px'
                            },
                        }}

                    >
                    </TextField>
                </div>
                <div className={classes.senhaContainer}>
                    <InputPassword

                    />
                    <div className={classes.flexRow}>

                    </div>
                </div>
                <Button
                    type='Submit'
                    className={classes.button}
                >
                    Entrar
                </Button>
                <div className={classes.cadastroContainer}>
                    <div className={classes.flexRow}>
                        <Typography className={classes.label}>Ainda não possui uma conta?</Typography>
                        <Link to='/cadastro' className={`${classes.label} ${classes.cadastro}`}>Cadastre-se</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;