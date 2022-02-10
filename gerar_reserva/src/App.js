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
  FormText,
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

      <div className="dadosreservas">

        <div className="checkinout">

          <ListGroup flush>

            <h5>Dados de sua Reserva</h5>

            <span className="entrada">Entrada</span>

            <ListGroupItem
            >
              Sex, 26 de nov. de 2021 <br />

              <span className="entradahora">14:00 - 22:00</span>
            </ListGroupItem>

            <span className="saida">Saída</span>

            <ListGroupItem
            >
              Dom, 28 de nov. de 2021 <br />

              <span className="saidahora">07:00 - 12:00</span>
            </ListGroupItem>

          </ListGroup>


          <ListGroup flush>

            <ListGroupItem>

              <h6>Duração total da hospedagem:</h6>

              <span className="diaria">2 Diárias</span>

            </ListGroupItem>

            <ListGroupItem
            >
              <h6>Você selecionou:</h6>

              <span className="suite">Suíte Standard</span>
            </ListGroupItem>

            <ListGroupItem
            >
              <h6>Resumo do Preço:</h6>

              <h4>500 R$</h4>
            </ListGroupItem>

          </ListGroup>

        </div>

      </div>

      <div className="forminfs">

      <Form>
  <FormGroup>
    <h1 className="insiradados">Insira seus Dados</h1>
    <Label>
      Nome
    </Label>
    <Input
      placeholder="Insira seu nome..."
    />
  </FormGroup>
  <FormGroup>
    <Label>
      Sobrenome
    </Label>
    <Input
      placeholder="Insira seu sobrenome..."
    />
  </FormGroup>
  <FormGroup>
    <Label>
      E-mail
    </Label>
    <Input
      placeholder="Insira seu E-mail..."
    />
    <span className="emailconfirm">A confirmação será enviada para este e-mail.</span>
  </FormGroup>
  <FormGroup>
    <Label>
      Confirmação de E-mail
    </Label>
    <Input
      placeholder="Insira novamente seu E-mail..."
    />
  </FormGroup>
  <FormGroup tag="fieldset">
    <legend>
      Para quem é esta reserva?
    </legend>
    <FormGroup check>
      <Input
        name="radio1"
        type="radio"
      />
      {' '}
      <Label check>
      Eu sou o hóspede principal
      </Label>
    </FormGroup>
    <FormGroup check>
      <Input
        name="radio1"
        type="radio"
      />
      {' '}
      <Label check>
      Reservando para outra pessoa
      </Label>
    </FormGroup>
  </FormGroup>

  <FormGroup>
    <h1 className="insiradados">Insira seu Endereço</h1>
    <Label>
      Endereço
    </Label>
    <Input
      placeholder="Rua, Nº, etc..."
    />
  </FormGroup>
  <FormGroup>
    <Label>
      Cidade
    </Label>
    <Input
      placeholder="Insira sua Cidade..."
    />
  </FormGroup>
  <FormGroup>
    <Label>
      Código Postal
    </Label>
    <Input
      placeholder="Ex.: 32502-564..."
    />
  </FormGroup>
  <FormGroup>
    <Label>
      País
    </Label>
    <Input
      placeholder="Insira seu País..."
    />
  </FormGroup>
  <FormGroup>
    <Label>
      Estado
    </Label>
    <Input
      placeholder="Insira seu Estado..."
    />
  </FormGroup>
  <FormGroup>
    <Label>
      Número de Telefone com DDD (preferencialmente celular)
    </Label>
    <Input
      placeholder="Ex.: +55 (00) 00000-0000"
    />
  </FormGroup>
  <FormGroup tag="fieldset">
    <FormGroup check>
      <Input
        name="radio1"
        type="radio"
      />
      {' '}
      <Label check>
      Sim, gostaria de receber uma confirmação digital gratuita (recomendado)
      </Label>
    </FormGroup>
  </FormGroup>

  <FormGroup>
    <h1 className="insiradados">Como você gostaria de pagar?</h1>
    <Label>
      Titular do Cartão
    </Label>
    <Input
      placeholder="Insira o titular do Cartão..."
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleSelect">
      Bandeira do Cartão
    </Label>
    <Input
      id="exampleSelect"
      name="select"
      type="select"
    >
      <option disabled selected>
        SELECIONE
      </option>
      <option>
        MasterCard
      </option>
      <option>
        Visa
      </option>
    </Input>
  </FormGroup>
  <FormGroup>
    <Label>
      Número do Cartão
    </Label>
    <Input
      placeholder="Ex.: 0000 0000 0000 0000..."
      type="number"
    />
  </FormGroup>
  <FormGroup>
    <Label>
      Data de Validade
    </Label>
    <Input
      type="date"
    />
  </FormGroup>
  <FormGroup>
    <Label>
      CVV
    </Label>
    <Input
      type="number"
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleSelect">
      Opções de Parcelamento
    </Label>
    <Input
      id="exampleSelect"
      name="select"
      type="select"
    >
      <option selected>
        1x de 500 R$
      </option>
      <option>
        2x de 250 R$ (sem juros)
      </option>
    </Input>
  </FormGroup>
  <Button
  color="info"
  id="submitdados">
    Enviar
  </Button>
</Form>
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