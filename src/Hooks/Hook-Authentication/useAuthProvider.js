import { useState } from 'react';
import useGlobal from '../Hook-Global/useGlobal';


function useAuthProvider() {
    const { setUsuario } = useGlobal();
    const [token, setToken] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');
    const [erroEmail, setErroEmail] = useState(false);
    const [erroSenha, setErroSenha] = useState(false);

    const handleToken = () => {
        if (!token) {
            return setToken(localStorage.getItem('token'));
        }
    }


    return {
        setUsuario,
        setMensagemErro,
        token,
        setToken,
        senha,
        setSenha,
        email,
        setEmail,
        mensagemErro,
        erroEmail,
        erroSenha,
        setErroEmail,
        setErroSenha,
        handleToken,
    }
}

export default useAuthProvider;
