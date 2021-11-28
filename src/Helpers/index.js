

const validateLogin = (email, senha, setErroEmail, setErroSenha, erroEmail, erroSenha) => {
    const regex = /\S+@\S+\.\S+/;
    if (!email) {
        setErroEmail(!erroEmail)
        throw new Error("O campo e-mail deve ser preenchido");
    }
    if (regex.test(email) === false) {
        setErroEmail(!erroEmail)
        throw new Error("Preencher com um e-mail válido");
    }
    if (!senha) {
        setErroSenha(!erroSenha)
        throw new Error("O campo de senha deve ser preenchido");
    }
    if (senha.length < 5) {
        setErroSenha(!erroSenha)
        throw new Error("A senha deve ter no mínimo 5 caracteres");
    }

    return (email, senha);

}

export { validateLogin }