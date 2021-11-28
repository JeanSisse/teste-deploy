import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import DotIcon from '@material-ui/icons/FiberManualRecordRounded';
import Done from '@material-ui/icons/Done';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import StepButton from '@material-ui/core/StepButton';
import useStyles from './styles';
import { ColorlibConnector, useColorlibStepIconStyles } from './styles';
import CardHelperMessage from '../../Pages/Cadastro/CardHelperMessage/CardHelperMessage';
import useGlobal from '../../Hooks/Hook-Global/useGlobal';

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const initialIcons = {
    1: <DotIcon />,
    2: <DotIcon />,
    3: <DotIcon />,
  };

  const doneIcons = {
    1: <Done />,
    2: <Done />,
    3: <Done />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {completed ? doneIcons[String(props.icon)] : initialIcons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};


function getSteps() {
  return ['Cadastre-se', 'Escolha uma senha', 'Cadastro realizado com sucesso'];
}

export default function VerticalSteppers() {
  
  const {
    steppPassword, registerSuccess
  } = useGlobal();

  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = (index) => {

    if (registerSuccess) return;

    if (index === 0 && steppPassword) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }

    // index === 0 ? registerSuccess = steppPassword = false : 
    // index === 1 ? steppPassword = false : steppPassword = false;
  };

  useEffect(() => {
    if (steppPassword || registerSuccess) {
      handleNext();
      // TODO: realizar uma verificação do retorno da requisição do cadastro para setar o último stepp
      // TODO: remover registerSuccess no if a seguir:
      if (registerSuccess) {
        handleNext();
      }
    }
  }, [steppPassword, registerSuccess])

  return (
    <div className={classes.stepperContainer}>
      <Stepper
        orientation='vertical'
        activeStep={activeStep}
        connector={<ColorlibConnector />}
        className={classes.stepperBackgroundColor}
      >
        {
          steps.map((label, index) => (
            <Step key={label}>
              <StepButton onClick={() => handleBack(index)}>
                <StepLabel className={classes.root} StepIconComponent={ColorlibStepIcon} />
              </StepButton>
            </Step>
          ))
        }
      </Stepper>
      <CardHelperMessage />
    </div>
  );
}
