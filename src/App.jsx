import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main'
import Accordion from './components/accordion/Accordion';

const App = ()=> {
    return (
        <div>
            <Header/>
            <Main/>
            <Accordion
              title="Como contratar os serviços Express JS ?"
       content="Cadastre-se em nosso site e verifique as oportunidades como um dos nossos parceiros."
            />
            <Accordion
              title="Como acompanho o rastreamento do meu pedido?"
       content="Após o cadastro em nosso site, através do código fornecido acompanhe o status do seu pedido em nossa aba de rastreamento."
            />
            <Accordion
              title="Sobre oque você gostaria de tratar?"
       content="
   <p>Soluções para o meu Negócio.</p>
   </br>
   <p>Preços, Prazos e Serviços.</p>
   </br>
   <p>Elogios, Sugestões e Reclamações.</p>"
            />
        </div>
    )
}

export default App; 