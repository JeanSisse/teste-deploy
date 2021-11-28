import { useStyles } from './style';

export default function CardTotal({img, color, title, registros}) {
  const classes = useStyles();
  
  let valorTotal = 0;

  if (registros) { 
    valorTotal = registros.reduce(( sum, registro) => {
      return { valor: sum.valor + registro.valor } 
    }).valor;
  }


  return(
    <div className={classes.card} style={{background: color}}>
      <img src={img} alt="" />
      <div className={classes.card_text}>
        <span >{title}</span>
        <span className={classes.card_valor_total}>{`R$ ${valorTotal}`}</span>
      </div>
    </div>
  )
}