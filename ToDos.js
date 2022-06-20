import React from 'react'
import TodoItem from './TodoItem'

const ToDos = (props) => {
  let myStyle = {
    minheight:"70vh",
    margin :"40px auto",
  }
  return (
    <div className='container my-3' style={myStyle}>
      <h3 className='my-3'>Todos List</h3>
      {props.todo.length===0? "No Todos to Display":
        props.todo.map((todo) => {
          //Note:-always wrapp up jsx into empty bracket(<></>) or in div(<div></div>) like below.
           return(<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
      )

          })
        }
      
     </div>
  )
}

export default ToDos
