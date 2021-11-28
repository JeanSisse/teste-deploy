import { Typography, TextField, Button, InputLabel } from "@material-ui/core";
import { useStyles } from './style';
import { useState } from 'react';
import close_button from '../../assets/close.svg'
import Modal from "../Modal";
import clients_icon from '../../assets/clients-icon.svg';
import useAuth from '../../Hooks/Hook-Authentication/useAuth';
import attention_icon from '../../assets/attention_icon.svg'

export default function ModalRegisterClient({setModalRegisterClient, setSuccessfullyRegistered}) {
  const classes = useStyles();  
  
  const BASE_URL = 'https://api-devs-maycry.herokuapp.com/';
  const resource = "clientes";
  
  const { token } = useAuth();
  const bearer_token = 'Bearer ' + token; 

  const headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': bearer_token,
  });

  const limparErros = {    
    message: '',
    nome:false,
    email:false, 
    cpf:false, 
    tel:false, 
    endereco: false, 
    cep: false, 
    complemento: false, 
    bairro: false,
    cidade: false,
    estado: false,
    api: false
  }

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState(''); 
  const [cpf, setCpf] = useState(''); 
  const [tel, setTel] = useState('');
  const [endereco, setEndereco] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cep, setCep] = useState('');
  const [bairro, setBairro] = useState(''); 
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('')
  
  const [erros, setErros] = useState(limparErros)
    
  const handleSubmit = (e) => { 
    e.preventDefault();
    
    setErros(limparErros);
    
    if (!nome) {
      return setErros({...limparErros, nome: true, message: "O nome é obrigatório"})
    }
    
    if (!email) {
      return setErros({...limparErros, email: true, message: "O email é obrigatório"})
    }

    if (!email.includes("@")) {
      return setErros({...limparErros, email: true, message: "Digite um email válido"})
    }
    
    if (!cpf) {
      return setErros({...limparErros, cpf: true, message: "O cpf é obrigatório"})
    }
    
    if (cpf.length!==11) { 
      return setErros({...limparErros, cpf: true, message: "O cpf deve ter 11 números"})
    }
    
    if (!tel) {
      return setErros({...limparErros, tel: true, message: "O tel é obrigatório"})
    }

    if (tel.length!==11) { 
      return setErros({...limparErros, tel: true, message: "Telefone deve ter 11 números (com DDD)"})
    }
   
    if (cep && cep.length<8) { 
      return setErros({...limparErros, cep: true, message: "Cep deve ter 8 números"})
    }
    
    if (estado && estado.length!==2) { 
      return setErros({...limparErros, estado: true, message: "UF deve ter 2 letras"})
    }

    let newClient = { 
      nome, 
      email, 
      cpf, 
      telefone: tel,
      endereco_completo: endereco, 
      cep, 
      complemento, 
      bairro,
      cidade,
      uf: estado
    }

    async function registerClient(client) {
  
      const response = await fetch( BASE_URL + resource, {
        method: 'POST',
        body: JSON.stringify(client),
        headers
      });
      const data = await response.json();

      if (!response.ok) {
        return setErros({...erros, api: true, message: data.mensagem})
      }

      setModalRegisterClient(false);
      setSuccessfullyRegistered(true);
    }
        
    registerClient(newClient)
  } 
  
  return(
    <Modal>
      <img className={classes.close_button} src={close_button} onClick={()=>setModalRegisterClient(false)} alt="" />
      <div style={{display: 'flex'}}>
        <img src={clients_icon} alt="icone de clientes"/>
        <Typography className={classes.title}>Cadastro do cliente</Typography>
      </div>
      <form className={classes.form}>
        <div className={classes.input_container}>
          <InputLabel className={classes.label}>Nome*</InputLabel>
          <TextField 
            className={classes.input} 
            variant="outlined" 
            placeholder="Digite seu nome" 
            onChange={(e)=>setNome(e.target.value)}
            value={nome}
            error={erros.nome}
            FormHelperTextProps={{style: {fontSize:"14px"}}}
            helperText={erros.nome && erros.message}
            InputProps={{ 
              style: { 
                fontFamily: 'Inter', 
                fontSize: '16px', 
                lineHeight: '24px', 
                height: '37px',
                boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
              },
            }}/>
        </div>
        
        <div className={classes.input_container}>
          <InputLabel className={classes.label}>E-mail*</InputLabel>
          <TextField 
            className={classes.input} 
            variant="outlined" 
            placeholder="Digite seu e-mail" 
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
            error={erros.email}
            helperText={erros.email && erros.message}
            FormHelperTextProps={{style: {fontSize:"14px"}}}
            InputProps={{
              style: { 
                fontFamily: 'Inter', 
                fontSize: '16px', 
                lineHeight: '24px', 
                height: '37px',
                boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
              },
            }}/>
        </div>
        
        <div className={classes.inputs_menores}>
          <div className={classes.input_container}>
            <InputLabel className={classes.label}>CPF*</InputLabel>
            <TextField 
              className={`${classes.input} ${classes.input_menor}`} 
              variant="outlined" 
              placeholder="Digite seu cpf" 
              onChange={(e)=>setCpf(e.target.value)} 
              value={cpf}
              error={erros.cpf}
              helperText={erros.cpf && erros.message}
              FormHelperTextProps={{style: {fontSize:"14px"}}}
              InputProps={{
                style: { 
                  fontFamily: 'Inter', 
                  fontSize: '16px', 
                  lineHeight: '24px', 
                  height: '37px',
                  boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
                },
              }}/>
          </div>

          <div className={classes.input_container}>
            <InputLabel className={classes.label}>Telefone*</InputLabel>
            <TextField 
              className={`${classes.input} ${classes.input_menor}`} 
              variant="outlined" 
              placeholder="Digite seu telefone" 
              onChange={(e)=>setTel(e.target.value)}
              value={tel}
              error={erros.tel}
              helperText={erros.tel && erros.message}
              FormHelperTextProps={{style: {fontSize:"14px"}}}
              InputProps={{
                style: { 
                  fontFamily: 'Inter',
                  fontSize: '16px',
                  lineHeight: '24px',
                  height: '37px',
                  boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
                },
              }}/>
          </div>
        </div>
        <div className={classes.input_container}>
          <InputLabel className={classes.label}>Endereço</InputLabel>
          <TextField 
            className={classes.input} 
            variant="outlined" 
            placeholder="Digite seu endereço" 
            onChange={(e)=>setEndereco(e.target.value)}
            value={endereco}
            error={erros.endereco}
            helperText={erros.endereco && erros.message}
            FormHelperTextProps={{style: {fontSize:"14px"}}}
            InputProps={{
              style: { 
                fontFamily: 'Inter',
                fontSize: '16px',
                lineHeight: '24px',
                height: '37px', 
                boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
              },
            }
          }/>
        </div>
        <div className={classes.input_container}>
          <InputLabel className={classes.label}>Complemento</InputLabel>
          <TextField 
            className={classes.input} 
            variant="outlined" 
            placeholder="Digite o complemento" 
            onChange={(e)=>setComplemento(e.target.value)}
            value={complemento}
            error={erros.complemento}
            helperText={erros.complemento && erros.message}
            FormHelperTextProps={{style: {fontSize:"14px"}}}
            InputProps={{
              style: { 
                fontFamily: 'Inter',
                fontSize: '16px',
                lineHeight: '24px',
                height: '37px', 
                boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
              },
            }}
          />
        </div>

        <div className={classes.inputs_menores}>
          <div className={classes.input_container}>
            <InputLabel className={classes.label}>CEP</InputLabel>
            <TextField 
              className={`${classes.input} ${classes.input_menor}`} 
              variant="outlined" 
              placeholder="Digite seu CEP" 
              onChange={(e)=>setCep(e.target.value)} 
              value={cep}
              error={erros.cep}
              helperText={erros.cep && erros.message}
              FormHelperTextProps={{style: {fontSize:"14px"}}}
              InputProps={{
                style: { 
                  fontFamily: 'Inter', 
                  fontSize: '16px', 
                  lineHeight: '24px', 
                  height: '37px',
                  boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
                },
              }}/>
          </div>

          <div className={classes.input_container}>
            <InputLabel className={classes.label}>Bairro</InputLabel>
            <TextField 
              className={`${classes.input} ${classes.input_menor}`} 
              variant="outlined" 
              placeholder="Digite seu bairro" 
              onChange={(e)=>setBairro(e.target.value)}
              value={bairro}
              error={erros.bairro}
              helperText={erros.bairro && erros.message}
              FormHelperTextProps={{style: {fontSize:"14px"}}}
              InputProps={{
                style: { 
                  fontFamily: 'Inter',
                  fontSize: '16px',
                  lineHeight: '24px',
                  height: '37px', 
                  boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
                },
              }}/>
          </div>
        </div>

        <div className={classes.inputs_menores}>
          <div className={classes.input_container}>
            <InputLabel className={classes.label}>Cidade</InputLabel>
            <TextField 
              className={`${classes.input} ${classes.input_menor}`} 
              variant="outlined" 
              placeholder="Digite sua cidade" 
              onChange={(e)=>setCidade(e.target.value)} 
              value={cidade}
              error={erros.cidade}
              helperText={erros.cidade && erros.message}
              FormHelperTextProps={{style: {fontSize:"14px"}}}
              InputProps={{
                style: { 
                  fontFamily: 'Inter', 
                  fontSize: '16px', 
                  lineHeight: '24px', 
                  height: '37px',
                  boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
                },
              }}/>
          </div>

          <div className={classes.input_container}>
            <InputLabel className={classes.label}>Estado</InputLabel>
            <TextField 
              className={`${classes.input} ${classes.input_menor}`} 
              variant="outlined" 
              placeholder="Digite seu UF" 
              onChange={(e)=>setEstado(e.target.value)}
              value={estado}
              error={erros.estado}
              helperText={erros.estado && erros.message}
              FormHelperTextProps={{style: {fontSize:"14px"}}}
              InputProps={{
                style: { 
                  fontFamily: 'Inter',
                  fontSize: '16px',
                  lineHeight: '24px',
                  height: '37px', 
                  boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
                },
              }}/>
          </div>
        </div>

        <Button className={classes.button} onClick={e=>handleSubmit(e)}>Aplicar</Button>
        { erros.api && 
              <Modal>
                <img src={close_button} className={classes.close_button} onClick={()=>setErros({...erros, api: false, message: ''})} alt="close icon" />
                <img src={attention_icon} alt="sucess icon" />
                <Typography style={{fontSize: '24px'}}>Não foi possível alterar o cadastro</Typography>
                <span>{erros.message}</span>
              </Modal>
            }
      </form>
    </Modal>
  )
}