import './styles.css';

function CardHelperMessage() {
  return (
    <div className='register-helper-msg display-flex-column gap-helper-msg'>
      <div className='helper-msg display-flex-column'>
        <h3>Cadastre-se</h3>
        <p>Por favor, escreva seu nome e e-mail.</p>
      </div>

      <div className='helper-msg display-flex-column'>
        <h3>Escolha uma senha</h3>
        <p>Escolha uma senha segura</p>
      </div>

      <div className='helper-msg display-flex-column'>
        <h3>Cadastro realizado com sucesso</h3>
        <p>E-mail e senha cadastrados com sucesso</p>
      </div>
    </div>
  );
}

export default CardHelperMessage;