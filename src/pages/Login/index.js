import React, { useState } from "react";
import { IconName } from "react-icons/md";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

import CssBaseline from "@material-ui/core/CssBaseline";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { findByLabelText } from "@testing-library/react";
import { spacing } from "@material-ui/system";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
// import imageBandeira from '../Login/Login.svg';


const useStyles = makeStyles((theme) => ({
  loginButton: {
    display: "flex",
    width: "192px",
    height: "44px",
    backgroundColor: "#4C4889",
    color: "#FFFFFF",
    borderRadius: "40px",
    flexDirection: "center",
    justifyContent: "center",
    alignItems: "center"

  },
  signUp: {
    color: "#BEBEC0",
    marginTop: "20px",
    textDecorationLine: "underline",
  },
  paper: {
    position: "absolute",
    width: 600,
  height: "650px",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    // margin: "52px 0px 52px 0px"
  },
  infoCadastro: {
    display: "flex",
    flexDirection: "row",
  },

  infoEmail: {
    margin: "0",
    fontSize: "10px",
    textAlign: "end",
    marginRight: "12px",
  },

  info: {
    color: "#6D6D6D",
    margin: "0px 20px",
  },

  containerButton: {
    display: "flex",
    flexDirection: "center",
    alignItens: "center",
    justifyContent: "center"
  }

  // bandeira: {
  //   width: "250px",
  //   height: "250px"
  // },
}));




const ContainerLogin = styled.div`
  display: flex;
`;

const ContainerInputs = styled.div`
  display: grid;
  margin: 20px 0;
`;

const FormBox = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 35px;
  align-items: center;
`;

const Background = styled.div`
  display: flex;
  height: 900px;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #5e5aa8 0%, rgba(8, 155, 84, 0.63) 100%);
`;

const ContainerInfos = styled.div`
  display: flex;
  width: 680px;
  height: 450px;
`;

const ImageSpace = styled.div`
  background-color: #4c4889;
  width: 55%;
`;

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = React.useState("female");
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <Background>
      <ContainerInfos>
        <ImageSpace />
        <FormBox>
          <ContainerLogin>
            <ContainerInputs>
              <TextField
                id="email"
                label="Email"
                variant="filled"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon style={{ color: "#666" }} />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                id="password"
                type="password"
                label="digite sua senha"
                variant="filled"
                style={{ margin: "20px 0 0 0" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <LockIcon style={{ color: "#959597" }} />
                    </InputAdornment>
                  ),
                }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </ContainerInputs>
          </ContainerLogin>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={gender}
              onChange={handleChange}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Lembre-me"
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Esqueci minha senha"
              />
            </RadioGroup>
          </FormControl>
          <Button
            variant="contained"
            className={classes.loginButton}
            href="#contained-buttons"
          >
            Entrar
          </Button>
          <Link href="#" className={classes.signUp} onClick={handleOpen}>
            Cadastre-se
          </Link>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <SignUp modalStyle={modalStyle} />
          </Modal>
        </FormBox>
      </ContainerInfos>
    </Background>
  );
};

const SignUp = ({ modalStyle }) => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dayNascimento, setDayNascimento] = useState("");
  const [monthNascimento, setMonthNascimento] = useState("");
  const [yearNascimento, setYearNascimento] = useState("");
  const [cel, setCel] = useState("");
  const [numberCel, setNumberCel] = useState("");
  
  
  

  console.log({ firstName, lastName, email, password, confirmPassword, dayNascimento, monthNascimento, yearNascimento 
  
});

return (
    <div style={modalStyle} className={classes.paper}>
      <p className={classes.info}>Nome</p>
      <div className={classes.infoCadastro}>
        <TextField
          id="firstName"
          label="Nome"
          variant="filled"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          style={{ margin: "10px", width: "100%" }}
        />
        <TextField
          id="lastName"
          label="Sobrenome"
          variant="filled"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          style={{ margin: "10px", width: "100%" }}
        />
      </div>
      <p className={classes.info}>E-mail</p>
      <div className={classes.infoCadastro}>
        <TextField
          id="email"
          // label="email"
          variant="filled"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ margin: "10px", width: "100%" }}
        />
      </div>
      <p className={classes.infoEmail}>Será enviado um e-mail de confirmação para você</p>
      <p className={classes.info}>Senha</p>
      <div className={classes.infoCadastro}>
        <TextField
          id="password"
          // label="digite a senha"
          type="password"
          variant="filled"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ margin: "10px", width: "100%" }}
        />
      </div>
      <p className={classes.info}>Confirmar senha</p>
      <div className={classes.infoCadastro}>
        <TextField
          id="confirmPassword"
          // label="confirme a senha"
          variant="filled"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={{ margin: "10px", width: "100%" }}
        />
      </div>

      <p className={classes.info}>Data de Nascimento</p>
      <div className={classes.infoCadastro}>
        <TextField
          id="dayNascimento"
          label=""
          variant="filled"
          value={dayNascimento}
          onChange={(e) => setDayNascimento(e.target.value)}
          style={{ margin: "10px", width: "100%" }}
        />

        <Select>
          <MenuItem value={10}>Janeiro</MenuItem>
          <MenuItem value={20}>Fevereiro</MenuItem>
          <MenuItem value={30}>Março</MenuItem>
          <MenuItem value={30}>Abril</MenuItem>
          <MenuItem value={30}>Maio</MenuItem>
          <MenuItem value={30}>Junho</MenuItem>
          <MenuItem value={30}>Julho</MenuItem>
          <MenuItem value={30}>Agosto</MenuItem>
          <MenuItem value={30}>Setembro</MenuItem>
          <MenuItem value={30}>Outubro</MenuItem>
          <MenuItem value={30}>Novembro</MenuItem>
          <MenuItem value={30}>Dezembro</MenuItem>
        </Select>

        <TextField
          id="yearNascimento"
          label=""
          variant="filled"
          value={yearNascimento}
          onChange={(e) => setYearNascimento(e.target.value)}
          style={{ margin: "10px", width: "100%" }}
        />
      </div>

      <p className={classes.info}>Celular</p>
      {/* <img className={classes.bandeira} src={imageBandeira} alt='Logo da bandeira' /> */}
      <div className={classes.infoCadastro}>
        <TextField
          id="cel"
          label="+55"
          variant="filled"
          value={cel}
          onChange={(e) => setCel(e.target.value)}
          style={{ margin: "10px", width: "100%" }}
        />
        <TextField
          id="numberCel"
          label="ex: (ddd) 9 9999-9999"
          variant="filled"
          value={numberCel}
          onChange={(e) => setNumberCel(e.target.value)}
          style={{ margin: "10px", width: "100%" }}
        />
      </div>
      <div className={classes.containerButton}>
        <Button
          variant="contained"
          className={classes.loginButton}
          href="#contained-buttons"
        >
          Cadastrar
        </Button>
      </div>
      
    </div>
  );

};

export default Login;
