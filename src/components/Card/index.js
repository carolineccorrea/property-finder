import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAll } from '../../actions';


class Card extends Component {
    
  componentDidMount(){
   this.props.getAll()
  
  }  
      
    render() {
      return (
        <div>

          <div className="container">
    {this.props.rents.map((item)=>{
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

function mapStateToProps(state) {
  return {
    rents: state.rents
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAll: bindActionCreators(getAll, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);