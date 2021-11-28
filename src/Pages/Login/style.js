import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    loginContainer: {
        display: 'flex',
        padding: 0,
        margin: 0,
    },
    formContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '70vw',
    },
    imgContainer: {
        display: 'flex',
        justifyContent: 'center',
        backgroundImage: 'url("./assets/background-login.png")',
        width: '30vw',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        position: 'relative'
    },
    senhaContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    cadastroContainer: {
        display: 'flex'
    },
    title: {
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        fontSize: '24px',
        lineHeight: '130%',
        marginBottom: '42px',
        color: '#343447'
    },
    label: {
        fontFamily: 'Nunito',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '20px',
        marginBottom: '6px',
        color: '#344054'
    },
    flexRow: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    cadastro: {
        marginLeft: '2px',
        color: '#DA0175'
    },
    input: {
        width: '344px',
        marginBottom: '20px',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
        [`& fieldset`]: {
            borderRadius: '10px',
        },
        background: '#FFF'
    },
    button: {
        fontFamily: 'Nunito',
        fontSize: '18px',
        lineHeight: '25px',
        borderRadius: '10px',
        color: '#F8F8F9',
        background: '#DA0175',
        textTransform: 'none',
        width: '160px',
        height: '33px',
        marginTop: '26px',
        marginBottom: '15px',
        '&:hover': {
            background: '#f00482',
            transform: 'scale(1.1)'
        },
    },
    esqueceuSenha: {
        color: '#DA0175'
    },
    imgTitle: {
        fontFamily: 'Montserrat',
        fontWeight: '600',
        fontSize: '24px',
        lineHeight: '130%',
        color: '#034A2A',
    },
    imgTitleContainer: {
        textAlign: 'center',
        width: '482px',
        padding: '0 44px 0 44px',
        marginTop: '163px'
    }
}));