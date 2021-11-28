import clsx from 'clsx';
import { Link } from 'react-router-dom';
import NameEmail from '../../Components/Component-Name-Email';
import InputPassword from '../../Components/Component-Password-Input';
import CustomProgressBar from '../../Components/CustomProgressBar/CustomProgressBar';
import VerticalSteppers from '../../Components/CustomSteeper/VerticalStepper';
import useGlobal from '../../Hooks/Hook-Global/useGlobal';
import CardSuccessRegister from './CardSuccessRegister/CardSuccessRegister';
import './styles.css';

function Cadastro() {

  const {
      registerSuccess,
      steppPassword,
      handleSubmitRegister,
      handleNext
    } = useGlobal();

  return (
    <div className={clsx('register display-flex-row')} autoComplete="off">
      <div className='left-side'>
        <VerticalSteppers />
      </div>

      <div className='right-side display-flex-column justify-content-center'>

        {!registerSuccess && <h3 className='register-title font-montserrat'> Adicione seus dados</h3>}

        <form onSubmit={handleSubmitRegister} className='display-flex-column'>
          {!registerSuccess && !steppPassword ?
            <NameEmail />
            :
            !registerSuccess &&
            <InputPassword />
          }
          {
            steppPassword && !registerSuccess &&
            <button
              className='btn
              font-nunito'
            >
              Cadastrar
            </button>
          }
        </form>

        {registerSuccess && <CardSuccessRegister />}

        {
          !steppPassword && !registerSuccess &&
          <button
            className='btn
            font-nunito'
            onClick={handleNext}
          >
            Continuar
          </button>
        }

        {
          registerSuccess &&
          <button
            className='btn font-nunito'
          >
            <Link className='link-login font-nunito' to='/login' >Ir para login</Link>
          </button>
        }

        {!registerSuccess &&
          <span className='right-span'>
            Já tem uma conta?
            Faça seu <Link className='register-login-link' to='/login' >Login</Link>
          </span>
        }

        <CustomProgressBar />
      </div>
    </div>
  );
}

export default Cadastro;
