import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
  main: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '19px',
    justifyContent: 'center',
    padding:'0 32px', 
    marginBottom: '37px',
    marginLeft: '100px',
  }, 
  title: {
    fontFamily: "Montserrat",
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '26px',
    lineHeight: '130%',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#343447',
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
    width: '266px',
    height: '33px',
    '&:hover': {
        background: '#f00482',
        transform: 'scale(1.1)'
    },
  },
    close_button: { 
      position: 'relative', 
      left: '195px',
      bottom: '15px',
      cursor: 'pointer' 
  }, 
  filter_button: { 
    background: '#FFF'
  } 
})