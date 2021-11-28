import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import clsx from 'clsx';
import { useState } from 'react';
import useStyles from './styles';
import useGlobal from '../../Hooks/Hook-Global/useGlobal';
import { FormHelperText } from '@material-ui/core';
import { helperTextStyles } from './styles';

export default function InputPassword() {

  const { setSenha, setConfirmarSenha, passwordsErrors } = useGlobal();
  const helperTextClass = helperTextStyles();

  const classes = useStyles();
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });

  const [confirmPassword, setConfirmPassword] = useState({
    password: '',
    showPassword: false,
  });

  const handleChangePassword = (prop) => (event) => {
    setSenha(event.target.value);
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleChangeConfirmPassword = (prop) => (event) => {
    setConfirmarSenha(event.target.value);
    setConfirmPassword({ ...confirmPassword, [prop]: event.target.value });
  };

  const firstHandleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const secondHandleClickShowPassword = () => {
    setConfirmPassword({ ...confirmPassword, showPassword: !confirmPassword.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.root}>
      <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
        <label className={classes.label} htmlFor="outlined-adornment-password">Senha</label>
        <OutlinedInput
          className={classes.OutlinedInput}
          id="outlined-adornment-password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChangePassword('password')}
          placeholder='Digite sua senha'
          inputProps={{
            style: { height: '6px' },
          }}
          error={passwordsErrors.senha ? true : false}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={firstHandleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>

            </InputAdornment>
          }
          />
          {!!passwordsErrors.senha && (
            <FormHelperText
              error
              className={helperTextClass.root}
              id="accountId-error"
            >
              {passwordsErrors.senha}
            </FormHelperText>
          )}
      </FormControl>
      <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
        <label className={classes.label} htmlFor="outlined-adornment-password">Confirmar senha</label>
        <OutlinedInput
          className={classes.OutlinedInput}
          id="outlined-adornment-password"
          type={confirmPassword.showPassword ? 'text' : 'password'}
          value={confirmPassword.password}
          onChange={handleChangeConfirmPassword('password')}
          placeholder='Repita a senha'
          inputProps={{
            style: { height: '6px' },
          }}
          error={passwordsErrors.confirmSenha ? true : false}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={secondHandleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {confirmPassword.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
        {!!passwordsErrors.confirmSenha && (
            <FormHelperText
              error
              className={helperTextClass.root}
              id="accountId-error"
            >
              {passwordsErrors.confirmSenha}
            </FormHelperText>
          )}
      </FormControl>
    </div>
  );
}
