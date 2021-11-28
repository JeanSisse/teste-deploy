import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        marginTop: '3.2rem',
    },
    textField: {
        width: '344px',
    },
    OutlinedInput: {
        [`& fieldset`]: {
            borderRadius: '8px',
        },
        background: '#fff',
        '&::placeholder': {
            fontFamily: "Inter",
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '16px',
            lineHeight: '24px',
            color: '#667085',
        },
        fontSize: '16px',
        marginTop: '6px',
    },
    label: {
        fontFamily: 'Nunito',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '20px',
        color: '#344054'
    },
    esqueceuSenha: {
        color: '#DA0175',
        cursor: 'pointer',
    },
    labelContainer: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    helperText: {
        fontSize: '1.3rem',
        // "&.MuiFormHelperText-root.Mui-error" :{
        //   color: 'red',
        // },

        error: {

        },
    },


}));
