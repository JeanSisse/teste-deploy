import { useStyles } from './styles';

export default function Modal({children}) {
  const classes = useStyles();

  return(
    <div className={classes.modal}>
      <div className={classes.card}>
        {children}
      </div>
    </div>
  )
}