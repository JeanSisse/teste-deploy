import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
  card: {
    display: 'flex', 
    minWidth: 'fit-content',
    flexDirection: 'row',
    justifyContent:'center',
    fontFamily: 'Montserrat',
    fontSize: '18px',
    fontWeight: 700,
    lineHeight: '23px',
    padding: '23px 40px',
    gap: '46px',
    borderRadius: '30px'
  }, 
  card_valor_total: { 
    fontSize: '24px'
  },
  card_text: { 
    display: 'flex', 
    minWidth: 'fit-content',
    flexDirection: 'column', 
    gap: '10px',
  }
})