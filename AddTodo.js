
import React, { useState } from 'react'

const AddTodo = (props,addTodo) => {
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const submit = (e) => {
      e.preventDefault();//to avoid page reloading
        if(!title || !desc){
            alert("title or Description cannor be blank");
        }
        else{

        
          props.addTodo(title,desc); // to add todo in our list using props
          //this is for doing to blank the values inside text field
         setTitle("");
         setDesc("");
        }
    }
    return (
        <div className='container my-3'>
            <h3>Add Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title"/>
                   
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo
