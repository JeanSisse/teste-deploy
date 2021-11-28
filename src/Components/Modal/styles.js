import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
  modal: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center',
    background: '#919A964D', 
    position: 'fixed', 
    top: 0, 
    left: 0, 
    right:0,
    bottom: 0,
    zIndex: '20'
  },
  card: {
    position: 'absolute',
    borderRadius: '30px',
    display: 'flex',
    background: '#FFF',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px 56px'
  }
})