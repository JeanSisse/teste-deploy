import './styles.css';

function CardSuccessRegister() {
  return (
    <div className='card-success display-flex-column justify-content-center'>
      <img src='./assets/register-success.svg' alt='Cadastrado com sucesso.' />
      <h1 className="card-sucess--h1">Cadastro Realizado com Sucesso!</h1>
    </div>
  );
}

export default CardSuccessRegister;