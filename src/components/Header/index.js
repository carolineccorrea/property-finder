import React from 'react';
import logo from "../../logocasa.png";

function Header() {
  return (
    <div className="container-fluid">
        <nav className="navbar navbar-expand-md navbar-light bg-light" style={{backgroundColor: '#e3f2fd'}}>

          <a className="navbar-brand" href="/#">
           <img className="image-responsive" style={{maxWidth:'150px'}} src={logo} alt=""/>
          </a>
          <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Buscar imóvel" aria-label="Search"/>
            <button class="btn btn-outline-info" type="submit">Procurar</button>
          </form>

         <section className="collapse navbar-collapse" id="navbarToggler">
          <div className="navbar-nav ml-auto">
            <a className="navbar-item nav-link" href="/#">Cadastro</a>
            <a className="navbar-item nav-link" href="/#">Anunciar imóvel</a>
            <a className="navbar-item nav-link" href="/#">Ajuda</a>
            <button type="button" class="btn btn-outline-info">Entrar</button>
            </div>
          </section>
            
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler"
          aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
    </div>
  );
}

export default Header;
