import './App.css';
import React, { useState } from 'react';
import { Nav,
  NavItem,
  NavLink,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  List,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText } from 'reactstrap';

function App() {

  // Modal Login
  const [modallogin, setModallogin] = React.useState(false);
  
  // Toggle for Modal Login
  const toggle = () => setModallogin(!modallogin);

  //--------------------------------------------------------------//

  return (

    <div className="">
      
      <div>
    <Nav
    className="nav"
    >
      <div class="logo"> 

      </div>

      <div>
      
      <div className="logo2"
      onClick={toggle}>

      </div>

            <Modal isOpen={modallogin} toggle={toggle} size="sm">

                <ModalHeader
                    toggle={toggle}>Login
                </ModalHeader>

                <ModalBody id="modallogin" className="modal-login">

                <Input className="loginbox"
                  id=""
                  name="email"
                  placeholder="Log-in..."
                  type=""
                />

                <Input
                  id=""
                  name="email"
                  placeholder="Senha..."
                  type="password"
                />

                <a href="" className="">Esqueceu a senha?</a>

                </ModalBody>

                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Entrar</Button>
                    <Button href="#" target="_blank" color="info" >Cadastre-se</Button>
                </ModalFooter>

            </Modal>

      </div>

    </Nav>

    </div>

    <div className="infcontainer">

      <h1>Controle de Conta</h1>

      <div className="cardgroup">

        <Card id="cards">
          <a href="#" target="_blank">
            <CardBody>
              <CardTitle tag="h5">
                Dados Pessoais
              </CardTitle>
            <CardSubtitle
            className="mb-2 text-muted"
            tag="h6">
            Atualize suas informações e saiba como são utilizadas.
            </CardSubtitle>
            <CardText>
              <a href="#">Gerenciar dados pessoais</a>
            </CardText>
            </CardBody>
          </a>
        </Card>

        <Card id="cards">
          <a href="#" target="_blank">
            <CardBody>
              <CardTitle tag="h5">
                Reservas
              </CardTitle>
              <CardSubtitle
              className="mb-2 text-muted"
              tag="h6">
                Edite, consulte ou cancele sua reserva.
              </CardSubtitle>
              <CardText>
                <a href="#">Gerenciar Reservas</a>
              </CardText>
            </CardBody>
          </a>
        </Card>
        
      </div>

    </div>

    <div className="footer">

      <NavItem className="navp">
        <NavLink className="navtext"
        href="#">
          Tarifário
        </NavLink>
      </NavItem>

      <NavItem className="navp navp5">
        <NavLink className="navtext"
        href="#">
          Contato
        </NavLink>
      </NavItem>

      <NavItem className="navp navp6">
        <NavLink className="navtext"
        href="#">
          Localização
        </NavLink>
      </NavItem>

    </div>

    <div className="downfooter">

      <p>Direitos autorais © 2020–2021 Morada de Poseidon™. Todos os direitos reservados.</p>

      <ul>

          <li>
            <span>
              <strong>* Endereço: </strong>
              Rua Tanana de Tanana, nº69 - Tananana de Tanana
              <br />
              Ilha Bela/SP - CEP: 16351-685
            </span>
          </li>

          <li>
            <span>
              <strong>* Telefone: </strong>
              (12) 3369-6669 - Secretaria
            </span>
          </li>

          <li>
            <span>
              <strong>* E-mail: </strong>
              <a href="">pousadaposeidon@gmail.com</a>
            </span>
          </li>

        </ul>

        <div className="localizacao">

        <h5>LOCALIZAÇÃO</h5>

        <div className="localizacaoapi">



        </div>

      </div>

    </div>

  </div>

  );
}

export default App;
