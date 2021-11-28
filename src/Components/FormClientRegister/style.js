import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
  close_button: { 
    position: 'relative', 
    left: '261px',
    bottom: '10px',
    cursor: 'pointer' 
  },
  title: {
    textAlign: 'left',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '130%',
    marginLeft: '22px',
    color: '#343447'
  },
  label: {
    fontFamily: 'Nunito',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '20px',
    marginBottom: '6px',
    color: '#344054'
  },
  input: {
    width: '488px',
    padding: 0,
    marginBottom: '10px',
    [`& fieldset`]: {
        borderRadius: '10px',
    },
    background: '#FFF'
  },
  input_menor: {
    width: '232px',
  },
  inputs_menores: {
    display: 'flex',
    gap: '24px'
  },
  form:{
    marginTop: '42px',
    display:'flex',
    flexDirection: 'column'
  },
  button: {
    fontFamily: 'Nunito',
    fontSize: '18px',
    lineHeight: '25px',
    borderRadius: '10px',
    alignSelf: 'center',
    color: '#F8F8F9',
    background: '#DA0175',
    textTransform: 'none',
    width: '160px',
    height: '33px',
    marginTop: '16px',
    '&:hover': {
        background: '#f00482',
        transform: 'scale(1.1)'
    },
  }, 
})