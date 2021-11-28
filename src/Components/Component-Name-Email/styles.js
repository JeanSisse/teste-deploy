import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    marginTop: '3.2rem',
  },
  divInput: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  label: {
    fontFamily: 'Nunito',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '20px',
    color: '#344054'
  },
  textField: {
    width: '344px',
    // boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    [`& fieldset`]: {
      borderRadius: '10px',
      zIndex: 0,
    },
    background: '#fff',
    borderRadius: '10px',
  },
  input: {
    '&::placeholder': {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '16px',
      lineHeight: '24px',
      color: '#667085',
    },
    fontSize: '16px',
  },
}));
