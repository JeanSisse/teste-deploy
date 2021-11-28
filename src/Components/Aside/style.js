import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({

    aside: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#F0F0F5',
        width: '100px',
        paddingTop: '54.5px',
        position: 'fixed',
        left:0
    },
    asideImg: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6.25rem',
    },
    displayRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    img: {
        cursor: 'pointer',
        width: '4rem',
    },
    sideBar: {
        position: 'relative',
        left: '31px',
    }
}));