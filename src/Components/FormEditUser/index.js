import { Typography, TextField, Button, InputLabel, InputAdornment, IconButton } from "@material-ui/core";
import { useStyles } from './styles';
import { useEffect, useState } from 'react';
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import close_button from '../../assets/close.svg'
import Modal from "../Modal";
import useAuth from '../../Hooks/Hook-Authentication/useAuth';
import attention_icon from '../../assets/attention_icon.svg';
import useGlobal from '../../Hooks/Hook-Global/useGlobal';

export default function ModalEditUser({ setModalEditUser, setSuccessfullyUpdated }) {
  //Não pode mandar o dado para o back caso ele não esteja preenchido!! 
  const { setUsuario } = useGlobal();
  const classes = useStyles();

  const BASE_URL = 'https://api-devs-maycry.herokuapp.com/';
  const resource = "usuario";

  const { token } = useAuth();
  const bearer_token = 'Bearer ' + token;

  const headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': bearer_token,
  });

  const cleanErrors = {
    message: '',
    nome: false,
    email: false,
    cpf: false,
    tel: false,
    password: false,
    passwordConfirmation: false,
    api: false,
  }

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState(null);
  const [tel, setTel] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordConfirmation, setPasswordConfirmation] = useState(null);
  const [erros, setErros] = useState(cleanErrors)

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await fetch(BASE_URL + resource, {
        method: 'GET',
        headers
      });

      const { nome, email, cpf, telefone } = await response.json();

      if (!response.ok) {
        return;
      }

      setNome(nome)
      setEmail(email)
      setCpf(cpf)
      setTel(telefone)
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    setErros(cleanErrors);

    if (!nome) {
      return setErros({ ...cleanErrors, nome: true, message: "O nome é obrigatório" })
    }

    if (!email.includes('@')) {
      return setErros({ ...cleanErrors, email: true, message: "Digite um email válido" })
    }

    if (!email) {
      return setErros({ ...cleanErrors, email: true, message: "O email é obrigatório" })
    }

    if (cpf && cpf.length !== 11) {
      return setErros({ ...cleanErrors, cpf: true, message: "O cpf deve ter 11 números" })
    }

    if (tel && tel.length !== 11) {
      return setErros({ ...cleanErrors, tel: true, message: "Telefone deve ter 11 números (com DDD)" })
    }

    console.log(password)
    if (password && password < 5) {
      return setErros({ ...cleanErrors, password: true, message: "A senha deve ter mais de 5 caracteres" })
    }
    if (password && !passwordConfirmation) {
      return setErros({ ...cleanErrors, passwordConfirmation: true, message: "A confirmação de senha é obrigatória" })
    }

    if (password !== passwordConfirmation) {
      return setErros({ ...cleanErrors, passwordConfirmation: true, message: "A confirmação de senha deve ser igual à senha" })
    }
    let editedUser = {
      nome,
      email,
      cpf,
      telefone: tel,
      ...(password && { password })
    }
    async function updateUser(user) {

      const response = await fetch(BASE_URL + resource, {
        method: 'PATCH',
        body: JSON.stringify(user),
        headers
      });
      const data = await response.json();

      if (!response.ok) {
        return setErros({ ...erros, api: true, message: data })
      }

      setModalEditUser(false);
      setSuccessfullyUpdated(true);
    }

    updateUser(editedUser);
    setUsuario(editedUser);
  }

  return (
    <Modal>
      <img className={classes.close_button} src={close_button} onClick={() => setModalEditUser(false)} alt="" />
      <Typography className={classes.title}>Edite seu cadastro</Typography>
      <form className={classes.form}>
        <div className={classes.input_container}>
          <InputLabel className={classes.label}>Nome*</InputLabel>
          <TextField
            className={classes.input}
            variant="outlined"
            placeholder="Digite seu nome"
            onChange={(e) => setNome(e.target.value)}
            value={nome}
            error={erros.nome}
            helperText={erros.nome && erros.message}
            FormHelperTextProps={{ style: { fontSize: "14px" } }}
            InputProps={{
              style: {
                fontFamily: 'Inter',
                fontSize: '16px',
                lineHeight: '24px',
                height: '44px',
                boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
              },
            }} />
        </div>

        <div className={classes.input_container}>
          <InputLabel className={classes.label}>E-mail*</InputLabel>
          <TextField
            className={classes.input}
            variant="outlined"
            placeholder="Digite seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            error={erros.email}
            helperText={erros.email && erros.message}
            FormHelperTextProps={{ style: { fontSize: "14px" } }}
            InputProps={{
              style: {
                fontFamily: 'Inter',
                fontSize: '16px',
                lineHeight: '24px',
                height: '44px',
                boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
              },
            }} />
        </div>

        <div className={classes.inputs_menores}>
          <div className={classes.input_container}>
            <InputLabel className={classes.label}>CPF</InputLabel>
            <TextField
              className={`${classes.input} ${classes.input_menor}`}
              variant="outlined"
              placeholder="Digite seu cpf"
              onChange={(e) => setCpf(e.target.value)}
              value={cpf ?? ''}
              error={erros.cpf}
              helperText={erros.cpf && erros.message}
              FormHelperTextProps={{ style: { fontSize: "14px" } }}
              InputProps={{
                style: {
                  fontFamily: 'Inter',
                  fontSize: '16px',
                  lineHeight: '24px',
                  height: '44px',
                  boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
                },
              }} />
          </div>

          <div className={classes.input_container}>
            <InputLabel className={classes.label}>Telefone</InputLabel>
            <TextField
              className={`${classes.input} ${classes.input_menor}`}
              variant="outlined"
              placeholder="Digite seu telefone"
              onChange={(e) => setTel(e.target.value)}
              value={tel ?? ''}
              error={erros.tel}
              helperText={erros.tel && erros.message}
              FormHelperTextProps={{ style: { fontSize: "14px" } }}
              InputProps={{
                style: {
                  fontFamily: 'Inter',
                  fontSize: '16px',
                  lineHeight: '24px',
                  height: '44px',
                  boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
                },
              }} />
          </div>
        </div>

        <div className={classes.input_container}>
          <InputLabel className={classes.label}>Nova senha*</InputLabel>
          <TextField
            className={classes.input}
            variant="outlined"
            placeholder="Digite sua nova senha"
            type={showPassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            error={erros.password}
            helperText={erros.password && erros.message}
            FormHelperTextProps={{ style: { fontSize: "14px" } }}
            InputProps={{
              style: {
                fontFamily: 'Inter',
                fontSize: '16px',
                lineHeight: '24px',
                height: '44px',
                boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
              },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(prev => !prev)}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </div>

        <div className={classes.input_container}>
          <InputLabel className={classes.label}>Confirmar senha*</InputLabel>
          <TextField
            className={`${classes.input} ${erros.passwordConfirmation && classes.erro}`}
            variant="outlined"
            placeholder="Digite novamente sua nova senha"
            type={showPassword ? "text" : "password"}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            error={erros.passwordConfirmation}
            helperText={erros.passwordConfirmation && erros.message}
            FormHelperTextProps={{ style: { fontSize: "14px" } }}
            InputProps={{
              style: {
                fontFamily: 'Inter',
                fontSize: '16px',
                lineHeight: '24px',
                height: '44px',
                boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
              },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(prev => !prev)}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </div>
        {erros.api &&
          <Modal>
            <img src={close_button} className={classes.close_button} onClick={() => setErros({ ...erros, api: false, message: '' })} alt="close icon" />
            <img src={attention_icon} alt="sucess icon" />
            <Typography style={{ fontSize: '24px' }}>Não foi possível alterar o cadastro</Typography>
            <span>{erros.message}</span>
          </Modal>
        }
        <Button className={classes.button} onClick={e => handleSubmit(e)}>Aplicar</Button>
      </form>
    </Modal>
  )
}