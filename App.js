import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import ToDos from './MyComponents/ToDos';
import TodoItem from './MyComponents/TodoItem';
import AddTodo from './MyComponents/AddTodo';
import About from './MyComponents/About';
import React, { useState, useEffect } from 'react';
//for routing purpose
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  //localStorage-- allows you to save key/value pairs in the browser
   //localStorage.getItem---read Data from Local Storage
  if (localStorage.getItem("todos") === null) {
    initTodo = [];

  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  //arrow function 
  const onDelete = (todo) => {
    console.log("I am on delete of todo", todos);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    //to save todo on local storage 
    //JSON.stringify --- converting javascript object into string for sending data to web server
    //localStorage.setItem---Save Data to Local Storage
    localStorage.setItem("todos", JSON.stringify(todos));

  }

  //for adding todo arrow function
  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    // if all todos are empty
    let sno;
    if (todos.length == 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    //create myTodo object
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);


    //while we adding todo if local storage of get item is undefined
    // if(localStorage.getItem("todos"))
    // {
    //   localStorage.setItem("todos",JSON.stringify(todos));
    // }

  }

  const [todos, setTodos] = useState(initTodo);
  //use effect hooks  arrow function working 
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos])
  //This is for to delete by default 3 todo when we loading page.
  // {
  //   sno:1,
  //   title: "Go to Market",
  //   desc: "You need to go to market to get this job done1"
  // },
  // {
  //   sno:2,
  //   title: "Go to Mall",
  //   desc: "You need to go to mall to get this job done2"
  // },
  // {
  //   sno:3,
  //   title: "Go to Office",
  //   desc: "You need to go to Office to get this job done3"
  // }

  return (
    <>
      <Router>
        <Header title="My Todo List" searchBar={false} />
        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
       
          <Routes>
            <Route
             path="/" 
            element={
              <React.Fragment>
                <>
                  <AddTodo addTodo={addTodo} />
                  <ToDos todo={todos}  onDelete={onDelete} />
                </>
                </React.Fragment>
            }
          

            />
            <Route path="/about"  element= {<About />}>
             
            </Route>
          </Routes>
        
        <Footer />
      </Router>
    </>
  );
}

export default App;
