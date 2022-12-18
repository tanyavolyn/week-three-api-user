
import { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
person: null
  }

  async componentDidMount(){
    const url = "https://api.randomuser.me/";
    const responce = await fetch(url);
    const data = await responce.json();
   this.setState({person: data.results[0]});


  }

  render(){
  return (
    <div className="App">
      {!this.state.person ? <p>Loading...</p> :  
      <div>
           <img src={this.state.person.picture.large} alt="bild"/>
      <p>{this.state.person.name.first} {this.state.person.name.last}</p>
  
      <p>{this.state.person.location.city}, {this.state.person.location.country}</p>
    
      </div>
      }
   
     
   
 
    </div>
  );
}}

export default App;
