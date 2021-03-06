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
  CardText,
  ListGroup,
  ListGroupItem } from 'reactstrap';

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

    <div className="form">

      <div className="selector">

        <ListGroup flush>
  
          <ListGroupItem
            href="#"
            tag="a"
          >
            Dados Pessoais
          </ListGroupItem>

          <ListGroupItem
            href="#"
            tag="a"
          >
            Reservas
          </ListGroupItem>

        </ListGroup>

      </div>

      <div className="">

        <h1>Dados Pessoais</h1>

        <div className="selectordados">

          <ListGroup flush>

            <ListGroupItem
              id="item"
              disabled
              href="#"
              tag="a"
            >
              Atualize suas informa????es e saiba como elas s??o utilizadas.
            </ListGroupItem>
    
              <ListGroupItem
                id="item"
                href="#"
                tag="a"
              >
                Forma de Pagamento 
                <Button id="item2" color="info">Editar</Button>
              </ListGroupItem>

            <ListGroupItem
              id="item"
              href="#"
              tag="a"
            >
              Nome
              <Button id="item2" color="info">Editar</Button>
            </ListGroupItem>

            <ListGroupItem
                id="item"
                href="#"
                tag="a"
              >
                Nome de Exibi????o
                <Button id="item2" color="info">Editar</Button>
              </ListGroupItem>

            <ListGroupItem
              id="item"
              href="#"
              tag="a"
            >
              E-mail
              <Button id="item2" color="info">Editar</Button>
            </ListGroupItem>

            <ListGroupItem
                id="item"
                href="#"
                tag="a"
              >
                Telefone
                <Button id="item2" color="info">Editar</Button>
              </ListGroupItem>

            <ListGroupItem
              id="item"
              href="#"
              tag="a"
            >
              Data de Nascimento
              <Button id="item2" color="info">Editar</Button>
            </ListGroupItem>

            <ListGroupItem
                id="item"
                href="#"
                tag="a"
              >
                Nacionalidade
                <Button id="item2" color="info">Editar</Button>
              </ListGroupItem>

            <ListGroupItem
              id="item"
              href="#"
              tag="a"
            >
              G??nero
              <Button id="item2" color="info">Editar</Button>
            </ListGroupItem>

            <ListGroupItem
              id="item"
              href="#"
              tag="a"
            >
              Endere??o
              <Button id="item2" color="info">Editar</Button>
            </ListGroupItem>

            <ListGroupItem
              id="item"
              href="#"
              tag="a"
            >
              Deletar Conta
              <Button id="item2" color="danger">Deletar</Button>
            </ListGroupItem>

          </ListGroup>

        </div>

      </div>

    </div>

    <div className="footer">

      <NavItem className="navp">
        <NavLink className="navtext"
        href="#">
          Tarif??rio
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
          Localiza????o
        </NavLink>
      </NavItem>

    </div>

    <div className="downfooter">

      <p>Direitos autorais ?? 2020???2021 Morada de Poseidon???. Todos os direitos reservados.</p>

      <ul>

          <li>
            <span>
              <strong>* Endere??o: </strong>
              Rua Tanana de Tanana, n??69 - Tananana de Tanana
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

        <h5>LOCALIZA????O</h5>

        <div className="localizacaoapi">



        </div>

      </div>

    </div>

    </div>
  );
}

export default App;
