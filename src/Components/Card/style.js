import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
  card: {
    color: 'black',
    height: 'fit-content',
    boxShadow: '0px 4px 4px rgba(172, 217, 197, 0.25)',
    borderRadius: '30px',
    width: '100%'
  },
  table: {
    width: '100%'
  },
  card_header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: '18px',
    paddingTop: '18px',   
    paddingBottom: '16px',   
    color: '#3F3F55',
    borderBottom: '1px solid #EFF0F6'
  }, 
  card_counter: { 
    color: "rgba(0,0,0,0.3)",
    borderRadius: '8px',
    padding: '0px 15px'
  },
  card_table_title: { 
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '50px',
    color: '#3F3F55',
    borderBottom: '1px solid #EFF0F6'
  },
  card_table_row: { 
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    color: '#6E6E85',
    borderBottom: '1px solid #EFF0F6',
    lineHeight: '56px'
  }, 
  card_link: { 
    width: "100%",
    all: 'unset',
    fontFamily: 'Nunito',
    fontSize: '18px',
    fontWeight: 400,
    textAlign: 'center',
    textDecoration: 'underline',
    color:'#DA0175',
    lineHeight: '48px',
    cursor: 'pointer'
  }, 
  card_img: { 
    marginRight:'10px'
  }
});
