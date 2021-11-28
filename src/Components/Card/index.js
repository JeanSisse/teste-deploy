import { useStyles } from './style';
import { format } from 'date-fns'

export default function Card({icon, title, registros, counter_background, counter_color}) {
  
  const classes = useStyles();
  
  return (
    <div className={classes.card}>
      <div className={classes.card_header}>
        <h4>
          {icon ? <img src={icon} className={classes.card_img} alt="" />:'' }
          {title}
        </h4>
        <span className={classes.card_counter} style={{background: counter_background, color: counter_color }}>
          {registros? registros.length : '0'}
        </span>
      </div>
      <table className={classes.table}>
        <thead>
          <tr className={classes.card_table_title}>
            <td>Cliente</td>
            <td>{icon? 'Data de venc.' :'ID da cob.'} </td>
            <td>Valor</td>
          </tr>
        </thead>
        <tbody className={classes.card_table_body}>
          {
            registros?.map(registro =>{
              return(
                <tr key={registro.id} className={classes.card_table_row}>
                  <td>{registro.nome}</td>
                  <td>{icon ? format(registro.data, 'dd/MM/yyyy'): registro.id}</td>
                  <td>{`R$ ${registro.valor}`}</td>
                </tr>
              )
            })
          }
          <tr>
            <td>
              <button className={classes.card_link}>Ver todos</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}