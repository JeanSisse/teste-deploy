import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { handleRegister } from '../../Services';
import { useLocalStorage } from 'react-use';

function useGlobalProvider() {
  const history = useHistory();

  const emailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  const [steppPassword, setSteppPassword] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [currentPage, setCurrentPage, removeCurrentPage] = useLocalStorage('currentPage', '');
  const [usuario, setUsuario, removeUsuario] = useLocalStorage('usuario', '');
  const [nameEmailErrors, setNameEmailErrors] = useState({});
  const [passwordsErrors, setPasswordsErrors] = useState({});


  const fieldNameEmailValidator = () => {
    let temp = {};
    temp.name = nome ? '' : 'Este campo é obrigatório';
    temp.emailValido = emailFormat.test(email) ? '' : 'E-mail inválido';
    setNameEmailErrors({
      ...temp
    });

    return Object.values(temp).every(x => x === "");
  }

  const fieldPasswordValidator = () => {
    let temp = {};
    temp.senha = senha && senha.length > 4 ? '' : 'Este campo é obrigatório com pelo menos 5 caracteres.';
    temp.confirmSenha = confirmarSenha !== senha ? 'Senhas não conferem' : '';
    setPasswordsErrors({
      ...temp
    });

    return Object.values(temp).every(x => x === "");
  }

  async function handleSubmitRegister(event) {
    event.preventDefault();

    if (!fieldPasswordValidator()) return;

    const body = {
      nome,
      email,
      senha
    };

    const result = await handleRegister('cadastro', body);

    if (result) {
      setSteppPassword(false);
      setRegisterSuccess(true);

      setTimeout(() => {
        setRegisterSuccess(false);
        setNome('');
        setEmail('');
        history.push('/login');
      }, 3000);
    }
  }

  function handleNext(event) {
    event.preventDefault();

    if (!fieldNameEmailValidator()) {
      return console.log('Nome e email são obrigatórios.');
    }
    setSteppPassword(true);
  }

  return {
    nome,
    setNome,
    email,
    setEmail,
    senha,
    setSenha,
    confirmarSenha,
    setConfirmarSenha,
    steppPassword,
    setSteppPassword,
    registerSuccess,
    setRegisterSuccess,
    currentPage,
    setCurrentPage,
    handleSubmitRegister,
    handleNext,
    nameEmailErrors,
    passwordsErrors,
    setUsuario,
    usuario,
    removeUsuario,
    removeCurrentPage,
  }
}

export default useGlobalProvider;
