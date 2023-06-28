import React from 'react';
import ItemListContainer from './Components/ItemListContainer';
import Navbar from './Components/NavBar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-icons/iconfont/material-icons.css';


const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Bienvenido a la tienda Online" />
    </div>
  );
};

export default App;
