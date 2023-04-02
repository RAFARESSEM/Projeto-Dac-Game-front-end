import React from 'react';
import './App.css';
import cavaleiro from "./img/cavaleiro.jpg"
import mago from "./img/mago.jpg"
import hunter from "./img/hunter.jpg"

export default class App extends React.Component{
  
state={
  textsimple: "you are located in the square is: ",
  location: "",
  result: ""
}




sum = () => {
  const result = this.state.textsimple + this.state.location;
  this.setState({result});
}
imgkight=()=> {  
  const knight1= <img src={cavaleiro} alt="knight" title="knight"/>
  this.setState({knight1});
  
}
imgmago=()=> {  
  const mago1=<img src={mago} alt="mago" title="mago"/>
  this.setState({mago1});
}
imghunter=()=> {  
  const hunter1=<img src={hunter} alt="hunter" title="hunter"/>
  this.setState({hunter1});
}
  render() {
    return (
      <div className="App">
            <label> choose your piece class: </label>
            <br />
            
            <button onClick = {this.imgkight} >knight</button>
            <button onClick = {this.imgmago} >mage</button>
            <button onClick = {this.imghunter} >hunter</button>
            
            <br />
            <br />
            <label> choose the position in the square: </label>
            <br />
            <input type="text" value={this.state.location} onChange={(e)=>{this.setState({location: e.target.value})}}/>
            <br />
          <br />
          <button onClick = {this.sum} >position</button>
          <br />
          <br />
          <label>  {this.state.knight1}</label>
          <label>  {this.state.mago1}</label>
          <label>  {this.state.hunter1}</label>
          <br />
          <label>  {this.state.result}</label>
      </div>
    );
  }

}
