
import { Avatar, Typography } from '@mui/material';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import close_button from '../../assets/close.svg'
import arrow from '../../assets/arrow-down.svg';
import edit from '../../assets/edit.svg';
import exit from '../../assets/exit.svg';
import FormEditUser from '../FormEditUser';
import Modal from '../Modal'
import success_icon from '../../assets/success.svg'
import useStyles from './style';
import useGlobal from '../../Hooks/Hook-Global/useGlobal';
import useAuth from '../../Hooks/Hook-Authentication/useAuth';

function Header({ title, smallTitle }) {

    const { usuario, removeUsuario, removeCurrentPage } = useGlobal();
    const { setToken } = useAuth();

    const history = useHistory();

    const inicialUsuario = usuario.nome.charAt(0).toUpperCase();

    const handleClickSair = () => {

        localStorage.removeItem('token');
        removeUsuario();
        setToken('');

        removeCurrentPage();
        history.push('/login');

    }
    function handleClickEdit() {
        setModalEditUser(true)
        setOpenModal(false)
    }
    const classes = useStyles();
    const [openModal, setOpenModal] = useState(false);
    const [modalEditUser, setModalEditUser] = useState(false);
    const [successfullyUpdated, setSuccessfullyUpdated] = useState(false);

    return (
        <header className={classes.header}>
            {
                title ?
                    <h1 className={classes.title}>{title}</h1> :
                    <h1 className={classes.smallTitle}>{smallTitle}</h1>
            }
            <div className={classes.headerDivNameImg}>
                <Avatar className={classes.headerAvatar}>{inicialUsuario}</Avatar>
                <h2 className={classes.headerName}>{usuario.nome}</h2>
                <img src={arrow} alt="Arrow" className={classes.btnArrow} onClick={e => setOpenModal(!openModal)} />
                {openModal && <div className={classes.modal}>
                    <div className={classes.triangle}></div>
                    <div className={classes.cardEditExit}>
                        <img src={edit} alt='Editar' className={classes.btnArrow} onClick={handleClickEdit} />
                        <img src={exit} alt="Sair" className={classes.btnArrow} onClick={handleClickSair} />
                    </div>
                </div>}
            </div>
            {modalEditUser &&
                <FormEditUser setModalEditUser={setModalEditUser} setSuccessfullyUpdated={setSuccessfullyUpdated} />
            }
            {successfullyUpdated &&
                <Modal>
                    <img src={close_button} className={classes.close_button} onClick={() => setSuccessfullyUpdated(false)} alt="close icon" />
                    <img src={success_icon} alt="sucess icon" />
                    {/*O texto abaixo tá no tamanho errado. O classes.title está sendo aplicado, mas o font-size está sendo sobrescrito*/}
                    <Typography style={{ fontSize: '24px' }}>Cadastro alterado com sucesso!</Typography>
                </Modal>
            }
        </header>
    );
}
export default Header;