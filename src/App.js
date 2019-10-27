import React from 'react';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header/>
    
      <div className="card" style={{maxWidth:'320px'}}>
        <img className="card-img-top" src={"https://www.ideiasdecor.com/wp-content/uploads/2018/09/plantas-de-casas-57.jpg"}/>

        <div className="card-block">

          <h3 className="card-title">TITULO</h3>
          <p className="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
          <a href="#" className="btn btn-outline-info">Contatar anunciante</a>
        </div>
      </div>





    </div>
  );
}

export default App;
