import ModalRegisterClient from '../../Components/FormClientRegister';
import { useStyles } from './style';
import Aside from '../../Components/Aside';
import Header from '../../Components/Header';
import clients_icon from '../../assets/clients-icon.svg'
import { Button, Typography, OutlinedInput } from '@material-ui/core';
import { useState } from 'react';
import Modal from '../../Components/Modal';
import close_button from '../../assets/close.svg';
import success_icon from '../../assets/success.svg';
import search_icon from '../../assets/search-icon.svg';
import filters from '../../assets/filter.svg';
import useGlobal from '../../Hooks/Hook-Global/useGlobal';

export default function Cliente() {
  const { setCurrentPage } = useGlobal();
  setCurrentPage('cliente');

  const classes = useStyles();

  const [modalRegisterClient, setModalRegisterClient] = useState(false);
  const [successfullyRegistered, setSuccessfullyRegistered] = useState(false);
  const [search, setSearch] = useState('');

  return (
    <div style={{ display: 'flex' }}>
      <Aside />
      <main className={classes.main}>
        <Header smallTitle='Clientes' />

        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: '23px' }}>
            <img src={clients_icon} alt="clientes" />
            <h1 className={classes.title}>Clientes</h1>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Button className={classes.button} onClick={() => setModalRegisterClient(true)}>+ Adicionar cliente</Button>
            <Button className={classes.filter_button} ><img src={filters} alt='icone de filtros' /></Button>
            <OutlinedInput
              id="outlined-adornment-weight"
              placeholder="Pesquisa"
              className={classes.input}
              inputProps={{
                style: {
                  padding: '0 8px',
                  fontFamily: 'Nunito',
                  fontSize: '18px',
                  lineHeight: '24px',
                  height: '39px',
                  color: '#747488',
                  background: 'white'
                },
              }}
              endAdornment={<img src={search_icon} alt="filtro de clientes" />}
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </div>
        </div>

        {modalRegisterClient &&
          <ModalRegisterClient
            setModalRegisterClient={setModalRegisterClient}
            setSuccessfullyRegistered={setSuccessfullyRegistered}
          />
        }
        {successfullyRegistered &&
          <Modal>
            <img src={close_button} className={classes.close_button} onClick={() => setSuccessfullyRegistered(false)} alt="close icon" />
            <img src={success_icon} alt="sucess icon" />
            <Typography style={{ fontSize: '24px' }}>Cadastro alterado com sucesso!</Typography>
          </Modal>
        }
      </main>

    </div>
  )
}