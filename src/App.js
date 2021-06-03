import React,{useReducer} from "react";
import {Container} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import {TodoContext} from "./context/TodoContext";
import todoReducer from "./context/reducer";

import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";
import Logo1 from "./images/todologo.png";
const App = () => {
  const [todos,dispatch] = useReducer(todoReducer,[]);
  return (
    <TodoContext.Provider value={{todos,dispatch}}>
         <Container fluid >
         <h1>Todo APP with Context API</h1>
         <img src={Logo1} alt="" className="logo"/>
         <Todos />
         <TodoForm />
         </Container >
    </TodoContext.Provider>
  );
};
export default App;
