import { makeStyles, withStyles } from '@material-ui/core/styles';
import StepConnector from '@material-ui/core/StepConnector';

export const ColorlibConnector = withStyles({
  root: {
    padding: 0,
    flexGrow: 0,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(14, 135, 80) 0%,rgb(14, 135, 80) 50%,rgb(14, 135, 80) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(14, 135, 80) 0%,rgb(14, 135, 80) 50%,rgb(14, 135, 80) 100%)',
    },
  },
  vertical: {
    padding: 0,
    marginLeft: 14,
  },
  line: {
    height: 40,
    width: 5,
    border: 0,
    backgroundColor: '#0e8750',
    borderRadius: 1,
  }
})(StepConnector);

export const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#0e8750',
    zIndex: 1,
    color: '#fff',
    width: 32,
    height: 32,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 95deg,rgb(14, 135, 80) 0%,rgb(14, 135, 80) 50%,rgb(14, 135, 80) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 95deg,rgb(14, 135, 80) 0%,rgb(14, 135, 80) 50%,rgb(14, 135, 80) 100%)',
  },
});

export default makeStyles((theme) => ({
  root: {
    cursor: 'pointer',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  stepperBackgroundColor: {
    backgroundColor: '#F0F0F5',
    marginBottom: theme.spacing(4),
    height: '21.2rem',
    width: '18vw',
    padding: 0,
  },
  stepLabel: {
    color: '#fff',
  },
  stepperContainer: {
    position: 'relative'
  }
}));
