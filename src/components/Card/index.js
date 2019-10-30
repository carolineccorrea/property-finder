import React, { Component } from 'react';
import Axios from 'axios';


class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
          nutri: []
        };
      }
    
    componentDidMount(){
      Axios.get('https://my-json-server.typicode.com/eduardobvale/demo/rentals')
      .then((res)=>{
        this.setState({nutri: res.data})
      })
  
  }  
      
    render() {
        return (
          <div>

            <div className="container">
      {this.state.nutri.map((item)=>{
        return(
          <article key={item.id}> 
            <div className="card" >
            <img className="card-img-top" src={item.image} style={{maxWidth:'420px', maxHeight:'300px'}} alt=""/>
        
            <div className="card-block">
        
              <h3 className="card-title">{item.title}</h3>
              <h5 className="" style={{color:'green'}}>${item.value}</h5>
              <p className="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
              <a href="/#" className="btn btn-outline-info">Contatar anunciante</a>
            </div>
          </div>
          </article> 
          );
       })}
      
      </div>
          </div>
        );
    }
}


export default Card;