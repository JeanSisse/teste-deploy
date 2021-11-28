import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    header: {
        width: '100%',
        height: '112px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid #ACD9C5',
        padding: '0 8rem 0 2rem ',
        position: 'sticky',
        top:0,
        zIndex: '20',
        backgroundColor: '#F8F8F9'
    },
    headerDivNameImg: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.938rem',
        position: 'relative'
    },
    headerAvatar: {
        bgcolor: "#DEDEE9",
        color: "#0E8750",
    },
    headerName: {
        fontFamily: "Nunito",
        fontStyle: 'normal',
        fontWeight: 600,
        fonSize: '18px',
        lineHeight: '25px',
        color: '#0E8750',
    },
    btnArrow: {
        cursor: 'pointer',
    },
    cardEditExit: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '8px 15px',
        position: 'absolute',

        backgroundColor: '#FFFFFF',
        borderRadius: '8px',
        gap: '15px',

    },
    modal: {
        position: 'absolute',
        width: '49px',
        height: '59px',
        right: '-25px',
        top: '50px',
    },
    triangle: {
        position: 'absolute',
        left: '1px',
        top: '-10px',
        Width: 0,
        Height: 0,
        border: '15px solid transparent',
        borderTop: 0,
        borderBottom: '15px solid #FFFFFF',
    },
    title: {
        fontFamily: "Montserrat",
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '26px',
        lineHeight: '130%',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#343447',
    },
    smallTitle: { 
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '24px',
        fontFamily: 'Inter',
        color: '#0E8750',
        alignSelf:'flex-end'
    },
    close_button: { 
        position: 'relative', 
        left: '195px',
        bottom: '15px',
        cursor: 'pointer' 
    }  
}));