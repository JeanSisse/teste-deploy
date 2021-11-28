import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import useGlobal from '../../Hooks/Hook-Global/useGlobal';
import useStyles from './styles';

export default function NameEmail() {
  const classes = useStyles();

  const { nome, setNome, email, setEmail, nameEmailErrors } = useGlobal();
  
  return (
    <div className={classes.root}>
      <div className={classes.divInput}>
        <label className={classes.label} htmlFor="outlined-start-adornment">Nome*</label>
        <TextField
          id="outlined-start-adornment"
          className={clsx(classes.margin, classes.textField)}
          placeholder='Digite seu nome'
          variant="outlined"
          onChange={(e) => setNome(e.target.value)}
          value={nome}
          InputProps={{
            classes: { input: classes.input },
            style: { height: '44px', color: '#000' }
          }}
          FormHelperTextProps={{style: {fontSize:"1.3rem"}}}
          error={nameEmailErrors.name ? true: false}
          helperText={nameEmailErrors.name}
        />
      </div>

      <div className={classes.divInput}>
        <label className={classes.label} htmlFor="outlined-start-adornment-2">E-mail*</label>
        <TextField
          id="outlined-start-adornment-2"
          className={clsx(classes.textField)}
          placeholder='Digite seu e-mail'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          variant="outlined"
          InputProps={{
            classes: { input: classes.input },
            style: { height: '44px' }
          }}
          FormHelperTextProps={{style: {fontSize:"1.3rem"}}}
          error={nameEmailErrors.emailValido ? true: false}
          helperText={nameEmailErrors.emailValido}
        />
      </div>

    </div>
  );
}
