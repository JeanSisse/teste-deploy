import Card from "../../Components/Card";
import iconClientNotOk from '../../assets/client_not_ok.svg';
import iconClientOk from '../../assets/client_ok.svg';
import { useStyles } from './style';
import Grid from '@mui/material/Grid';
import CardTotal from "../../Components/CardTotal";
import documentOk from '../../assets/document_ok.svg'
import documentNotOk from '../../assets/document_not_ok.svg'
import documentPending from '../../assets/document_pending.svg'
import { useState, useEffect } from 'react';
import Header from '../../Components/Header/index';
import Aside from '../../Components/Aside/index';
import useGlobal from "../../Hooks/Hook-Global/useGlobal";



export default function Home() {

  const { setCurrentPage } = useGlobal();
  setCurrentPage('home');


  const registros = [
    { nome: 'Sara', id: '1', data: new Date('02/13/2020'), valor: 1000, pago: false },
    { nome: 'Sara2', id: '2', data: new Date(), valor: 2000, pago: true },
    { nome: 'Sara3', id: '3', data: new Date('12/10/2021'), valor: 1000, pago: false },
    { nome: 'Sara4', id: '4', data: new Date('12/20/2021'), valor: 1050, pago: true },
    { nome: 'Sara5', id: '5', data: new Date('01/22/2020'), valor: 1200, pago: true },
    { nome: 'Sara6', id: '6', data: new Date('10/10/2020'), valor: 1500, pago: false },
    { nome: 'Sara7', id: '7', data: new Date('10/10/2020'), valor: 1500, pago: false },
    { nome: 'Sara8', id: '8', data: new Date('12/10/2021'), valor: 1500, pago: false }
  ]

  const classes = useStyles();

  const [registrosPorStatus, setRegistrosPorStatus] = useState();

  useEffect(() => {
    organizandoRegistrosPorStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function organizandoRegistrosPorStatus(params) {
    const registrosOrganizados = { pagos: [], previstos: [], vencidos: [] };

    for (let registro of registros) {
      if (registro.pago) {
        registrosOrganizados.pagos.push(registro);
      } else {
        //TODO: Levar em consideração apenas o dia (e não a hora!)
        if (registro.data.getTime() < (new Date()).getTime()) {
          registrosOrganizados.vencidos.push(registro);
        } else {
          registrosOrganizados.previstos.push(registro);
        }
      }
    }
    setRegistrosPorStatus(registrosOrganizados)

  }

  return (<>
    <div style={{ display: 'flex' }}>
      <Aside />
      <main className={classes.main}>
        <Header title='Resumo das Cobranças' />
        <Grid
          direction='row'
          justifyContent='center'
          alignItems='center'
          style={{ maxWidth: '100%' }}
          container spacing={2}
        >
          <Grid item xs={3.54}>
            <CardTotal
              img={documentNotOk}
              title="Cobranças Vencidas"
              color='#FFEFEF'
              registros={registrosPorStatus?.vencidos}
            />
          </Grid>
          <Grid item xs={3.54}>
            <CardTotal
              img={documentPending}
              title="Cobranças Previstas"
              color='#FCF6DC'
              registros={registrosPorStatus?.previstos}
            />
          </Grid>
          <Grid item xs={3.54}>
            <CardTotal
              img={documentOk}
              title="Cobranças Pagas"
              color='#EEF6F6'
              registros={registrosPorStatus?.pagos}
            />
          </Grid>
          <Grid style={{ alignSelf: 'flex-start' }} item xs={3.54}>
            <Card
              title="Cobranças vencidas"
              counter_background='#FFEFEF'
              counter_color='#971D1D'
              registros={registrosPorStatus?.vencidos}
            />
          </Grid>
          <Grid style={{ alignSelf: 'flex-start' }} item xs={3.54}>
            <Card
              title="Cobranças previstas"
              counter_background='#FCF6DC'
              counter_color='#C5A605'
              registros={registrosPorStatus?.previstos}
            />
          </Grid>
          <Grid style={{ alignSelf: 'flex-start' }} item xs={3.54}>
            <Card
              title="Cobranças pagas"
              counter_background='#EEF6F6'
              counter_color='#1FA7AF'
              registros={registrosPorStatus?.pagos}
            />
          </Grid>
          <Grid style={{ alignSelf: 'flex-start' }} item xs={5.31}>
            <Card
              title="Clientes inadimplentes"
              counter_background='#FFEFEF'
              counter_color='#971D1D'
              registros={registrosPorStatus?.vencidos}
              icon={iconClientNotOk}
            />
          </Grid>
          <Grid style={{ alignSelf: 'flex-start' }} item xs={5.31}>
            <Card
              title="Clientes em dia"
              counter_background='#EEF6F6'
              counter_color='#1FA7AF'
              registros={registrosPorStatus?.pagos.concat(registrosPorStatus.previstos)}
              icon={iconClientOk}
            />
          </Grid>
        </Grid>
      </main>
    </div>
  </>
  )
}