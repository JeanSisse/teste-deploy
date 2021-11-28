import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { FormHelperText } from '@material-ui/core';
import clsx from 'clsx';
import { useState } from 'react';
import useAuth from '../../../Hooks/Hook-Authentication/useAuth';
import useStyles from './style';

export default function InputPassword() {

    const classes = useStyles();
    const { setSenha, erroSenha, mensagemErro, setErroSenha } = useAuth();
    const [values, setValues] = useState({
        password: '',
        showPassword: false,
    });


    const handleChangePassword = (prop) => (event) => {
        setSenha(event.target.value);
        setErroSenha(false);
        setValues({ ...values, [prop]: event.target.value });
    };



    const firstHandleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };



    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className={classes.root}>
            <FormControl
                className={clsx(classes.margin, classes.textField)}
                variant="outlined"


            >
                <div className={classes.labelContainer}>

                    <label className={classes.label} htmlFor="outlined-adornment-password">Senha</label>
                    <p className={`${classes.label} ${classes.esqueceuSenha}`} >Esqueceu sua senha?</p>
                </div>
                <OutlinedInput
                    error={erroSenha}
                    className={classes.OutlinedInput}
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChangePassword('password')}
                    placeholder='Digite sua senha'
                    inputProps={{
                        style: { height: '6px' },
                    }}
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
                {!!erroSenha && (
                    <FormHelperText
                        error
                        className={classes.helperText}
                        id="accountId-error"
                    >
                        {mensagemErro}
                    </FormHelperText>
                )}
            </FormControl>

        </div>
    );
}
