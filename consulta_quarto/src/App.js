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
  List } from 'reactstrap';

function App() {

  // Modal Login
  const [modallogin, setModallogin] = React.useState(false);
  
  // Toggle for Modal Login
  const toggle = () => setModallogin(!modallogin);

  return (
    <div className="">

      <Nav
    className="nav"
    >
      <div class="logo"> 

      </div>

      <NavItem className="navp">
        <NavLink className="navtext"
          active
          href="#"
        >
          Home
        </NavLink>
      </NavItem>

      <NavItem className="navp">
        <NavLink className="navtext"
        href="#">
          Quartos
        </NavLink>
      </NavItem>

      <NavItem className="navp">
        <NavLink className="navtext"
          href="#"
        >
          Serviços
        </NavLink>
      </NavItem>

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

    <div className="formquartos">

      <div className="consulta">

        <h4>Filtro</h4>

        <FormGroup>
            <Label>
              Check-in
            </Label>
              <Input type="date" />
          </FormGroup>


          <FormGroup>
            <Label>
              Check-out
            </Label>
              <Input type="date" />
          </FormGroup>


          <FormGroup>
            <Label>
              Acompanhantes
            </Label>
              <Input placeholder="Insira..." type="number" />
          </FormGroup>

          <FormGroup>
            <Label>
              Tudo pronto?
            </Label>
              <Button
                color="warning"
              >
                CONSULTAR QUARTOS DISPONÍVEIS
              </Button>
          </FormGroup>

      </div>

      <div class="quartoselect">

        <div className="selectsquarto">

          <FormGroup id="quartotipo">
            <Label>
              Tipo do Quarto
            </Label>
              <Input type="select" id="tipoquarto">
                <option disabled selected>SELECIONE</option>
                <option>1</option>
                <option>2</option>
              </Input>
          </FormGroup>

          <FormGroup>
            <Label>
              Categoria
            </Label>
              <Input type="select" id="categoriaquarto">
                <option disabled selected>SELECIONE</option>
                <option>1</option>
                <option>2</option>
              </Input>
          </FormGroup>

        </div>

        <div className="roomselect">

          <div className="item">

            <div className="itemimg">



            </div>

            <div className="inf">

              <a className="quarto" href="#">Quarto 1</a> <br />

              <p className="descricao">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo eu sapien ultricies dignissim.</p>

            </div>



            <div className="check">

            <FormGroup>
              <Label>
              </Label>
                <Button
                  color="info"
                >
                  Visualizar preços
                </Button>
            </FormGroup>
            
            </div>

          </div>

          <div className="item">

            <div className="itemimg">



            </div>

            <div className="inf">

              <a className="quarto" href="#">Quarto 1</a> <br />

              <p className="descricao">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo eu sapien ultricies dignissim.</p>

            </div>

            <div className="check">

            <FormGroup>
              <Label>
              </Label>
                <Button
                  color="info"
                >
                  Visualizar preços
                </Button>
            </FormGroup>
            
            </div>

          </div>

          <div className="item">

            <div className="itemimg">



            </div>

            <div className="inf">

              <a className="quarto" href="#">Quarto 1</a> <br />

              <p className="descricao">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo eu sapien ultricies dignissim.</p>

            </div>

            <div className="check">

            <FormGroup>
              <Label>
              </Label>
                <Button
                  color="info"
                >
                  Visualizar preços
                </Button>
            </FormGroup>

            </div>

          </div>

          <div className="item">

            <div className="itemimg">



            </div>

            <div className="inf">

              <a className="quarto" href="#">Quarto 1</a> <br />

              <p className="descricao">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo eu sapien ultricies dignissim.</p>

            </div>

            <div className="check">

            <FormGroup>
              <Label>
              </Label>
                <Button
                  color="info"
                >
                  Visualizar preços
                </Button>
            </FormGroup>

            </div>

          </div>

          <div className="item">

            <div className="itemimg">



            </div>

            <div className="inf">

              <a className="quarto" href="#">Quarto 1</a> <br />

              <p className="descricao">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo eu sapien ultricies dignissim.</p>

            </div>

            <div className="check">

            <FormGroup>
              <Label>
              </Label>
                <Button
                  color="info"
                >
                  Visualizar preços
                </Button>
            </FormGroup>

            </div>

          </div>

          <div className="item">

            <div className="itemimg">



            </div>

            <div className="inf">

              <a className="quarto" href="#">Quarto 1</a> <br />

              <p className="descricao">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo eu sapien ultricies dignissim.</p>

            </div>

            <div className="check">

            <FormGroup>
              <Label>
              </Label>
                <Button
                  color="info"
                >
                  Visualizar preços
                </Button>
            </FormGroup>

            </div>

          </div>

          <div className="item">

            <div className="itemimg">



            </div>

            <div className="inf">

              <a className="quarto" href="#">Quarto 1</a> <br />

              <p className="descricao">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo eu sapien ultricies dignissim.</p>

            </div>

            <div className="check">

            <FormGroup>
              <Label>
              </Label>
                <Button
                  color="info"
                >
                  Visualizar preços
                </Button>
            </FormGroup>

            </div>

          </div>

        </div>

      </div>

    </div>

    <div className="footer">

      <div className="contato">

        <h5>DADOS PARA CONTATO</h5>

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

      </div>

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
