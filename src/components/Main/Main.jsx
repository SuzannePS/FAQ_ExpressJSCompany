import React from 'react';
import { Div, Form, Inputs, InputText, Text, Texto, InputTextarea, Botao, Icon } from './style';

const Main = () => {
    return (
      <Div> 
            <Form>
              <Text><Texto>Deixe sua mensagem e vamos te responder em breve.</Texto></Text>
              <Inputs>
                <InputText type='text' placeholder='Nome'/>
                <InputText type='text' placeholder='E-mail de contato'/>
                <InputTextarea placeholder='Mensagem'/>
                <Botao>Enviar</Botao>
              </Inputs>
            </Form>
        </Div>
    );
  };
  
  export default Main;