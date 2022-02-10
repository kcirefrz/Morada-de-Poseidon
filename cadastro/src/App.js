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

    <div className="cadastro">

      <h4>Cadastro</h4>

      <div className="formcadastro">

        <div className="formpart1">

          <div className="part1">

            <FormGroup>
              <Label>
                Nome
              </Label>
                <Input placeholder="Insira seu nome..." id="input1" />
            </FormGroup>

            <FormGroup>
              <Label>
                Nascimento
              </Label>
                <Input type="date" id="input2" />
            </FormGroup>

            <FormGroup>
              <Label>
                Idade
              </Label>
              <Input placeholder="25..." type="number" id="input3" />
            </FormGroup>

            <FormGroup>
              <Label>
                Profissão
              </Label>
                <Input placeholder="Insira sua profissão..." id="input4" />
            </FormGroup>

            <FormGroup>
              <Label>
                Nacionalidade
              </Label>
                <Input type="select" id="input5">
                  <option disabled selected>SELECIONE</option>
                  <option>Brasileiro</option>
                  <option>Estrangeiro</option>
                </Input>
            </FormGroup>

            <FormGroup>
              <Label>
                Sexo
              </Label>
                <Input type="select" id="input6">
                  <option disabled selected>SELECIONE</option>
                  <option>Masculino</option>
                  <option>Feminino</option>
                </Input>
            </FormGroup>

          </div>

          <div className="part2">

          <FormGroup>
              <Label>
                Tipo Documento
              </Label>
                <Input type="select" id="input7">
                  <option disabled selected>SELECIONE</option>
                  <option>RG</option>
                  <option>Passaporte</option>
                  <option>RNE</option>
                </Input>
            </FormGroup>

            <FormGroup>
              <Label>
                Nº Documento
              </Label>
                <Input placeholder="Insira o número..." id="input8" />
            </FormGroup>

            <FormGroup>
              <Label>
                Órgão Expeditor
              </Label>
                <Input placeholder="Insira o órgão..." id="input9" />
            </FormGroup>

            <FormGroup>
              <Label>
                UF
              </Label>
                <Input placeholder="Insira..." id="input10" />
            </FormGroup>

            <FormGroup>
              <Label>
                CEP
              </Label>
                <Input placeholder="Insira seu CEP..." id="input11" />
            </FormGroup>

            <FormGroup>
              <Label>
                Endereço
              </Label>
                <Input placeholder="Insira seu Endereço..." id="input12" />
            </FormGroup>

          </div>

        </div>

        <div className="formpart2">

          <div className="part3">

            <FormGroup>
              <Label>
                Nº
              </Label>
                <Input placeholder="Insira..." id="input13" />
            </FormGroup>

            <FormGroup>
              <Label>
                Bairro
              </Label>
                <Input placeholder="Insira o Bairro..." id="input14" />
            </FormGroup>

            <FormGroup>
              <Label>
                Cidade
              </Label>
                <Input placeholder="Insira a cidade..." id="input15" />
            </FormGroup>

            <FormGroup>
              <Label>
                Estado
              </Label>
                <Input placeholder="Insira o estado..." id="input16" />
            </FormGroup>

            <FormGroup>
              <Label>
                País
              </Label>
                <Input placeholder="Insira o país..." id="input17" />
            </FormGroup>

            <FormGroup>
              <Label>
                E-mail
              </Label>
                <Input placeholder="Insira seu e-mail..." id="input18" />
            </FormGroup>

          </div>

          <div className="part4">

            <FormGroup>
              <Label>
                Telefone (Com DDD)
              </Label>
                <Input placeholder="Insira seu telefone com DDD..." id="input19" />
            </FormGroup>

            <FormGroup>
              <Label>
                Celular (Com DDD)
              </Label>
                <Input placeholder="Insira seu celular com DDD..." id="input20" />
            </FormGroup>

            <Button color="info">
              Enviar
            </Button>

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
