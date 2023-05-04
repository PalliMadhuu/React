import React, { FC } from 'react';
import Formulas from '../../GetMathFormulas/Formulas/Formulas';
// import WeatherComp from '../../HttpInterceptors /WeatherComp/WeatherComp';
import AddTodo from '../../ToDo-Operations/Add-Todo/Add-Todo';
import './Home.css';


interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return(
  <div className="Home" data-testid="Home">
     <div className="topnav">
  <a className="active" href="#home">Home</a>
  <a href="#news">Delete Task</a>
  <a href="#contact">Edit Task</a>
  <a href="#about">ALL Tasks</a>
</div>
<div className="sidenav">
  <a href="#about">About</a>
  <a href="#services">Services</a>
  <a href="#clients">Clients</a>
  <a href="#contact">Contact</a>
</div>
<div className="sidenav">
  <a href="#about">Delete Task</a>
  <a href="#services">Edit Task</a>
  <a href="#clients">All Tasks</a>
</div>
<div className="main">
</div>
<div id="welcomemsg">
      <h1 > Welcome To the To-Do App </h1>
      
      <Formulas></Formulas>
</div>
  </div>
  )
}
export default Home;
