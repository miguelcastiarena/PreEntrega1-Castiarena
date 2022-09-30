import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';



export default class App extends Component {
  
  
  render () {
    return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer greeting={"Bienvenidos a la Tienda Online"} />
      </header>
    </div>
  );
  }
  
}
