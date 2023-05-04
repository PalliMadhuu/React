import React, { FC, useEffect, useRef, useState } from 'react';
import './Add-Todo.css';
import { Form, Button} from 'react-bootstrap';
import { postToDo,getTaskById,deleteTask,EditTask} from '../TodoAxios/TodoAxios';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface AddTodoProps {}

const AddTodo: FC<AddTodoProps> = () => {
  const [currentTask,setCurrentTask]=useState({})
  const [isDelClicked,setDelClicked]=useState(false);
  const formRef=useRef<HTMLFormElement>(null);
  const [isEditClicked,setEditClicked]=useState(false)
  const[getTaskId,setGetEditId]=useState(0);
 async function onDelClicked(taskId:any,buttonClicked:any)
  {
   if( window.confirm("Do you really want to Delete?"))
   {
        await deleteTask(taskId);
        if(buttonClicked)
        {
          setDelClicked(true);
        }
        else{
          setDelClicked(false)
        }
   }
  }
  let [myAllTasks,setAllTasks]=useState([])
  useEffect(()=>{
  axios.get('http://localhost:3000/To-Do')
  .then(response => {
    setAllTasks(response.data);
    console.log(response.data)
  })
  .catch(error => {
    console.error(error);
    return error
  });
},[currentTask,isDelClicked,isEditClicked])

let  error:any;
  const toDo=({
    taskName:'',
    date:'',
    Note:'',
    taskStatus:'',
  })
  function handleSubmit(event:any)
  {
    event.preventDefault();
    if(!isEditClicked)
    {
    if(toDo.taskName!==''&& toDo.Note!=='' && toDo.date!==''&& toDo.taskStatus!=='')
    {
      postToDo(toDo)
      setCurrentTask(toDo)
      toast('Task Added SuccessFully')
    }
    else{
         error='Please Fill All The Fields'
    }
  }
  else{
    if(formRef.current)
    {
    toDo.Note=formRef.current.note.value;
    toDo.date=formRef.current.date.value;
    toDo.taskName=formRef.current.taskName.value;
    toDo.taskStatus=formRef.current.status.value;
    EditTask(getTaskId,toDo)
    setEditClicked(false);

    }
   

  }
  if(formRef.current)
  {
    formRef.current.reset();
  }
  }
 async function onEditClick(taskId:any)
  {
    setGetEditId(taskId)
         let todo=await getTaskById(taskId);
         if(formRef.current)
         {
          formRef.current.taskName.value=todo.taskName;
          formRef.current.date.value=todo.date;
          formRef.current.note.value=todo.Note;
          formRef.current.status.value=todo.taskStatus;
         }
              setEditClicked(true) 
  }
  return(
  <div className="Add-Todo" data-testid="AddTodo">
     
<Form onSubmit={handleSubmit} ref={formRef}>
  <div className="myDiv">
      <Form.Group controlId="formName" >
        <Form.Control type="text" placeholder="Enter your Task" onChange={(event)=>{toDo.taskName=event.target.value}} name="taskName" />
      </Form.Group>
      <Form.Group controlId="formDate">
        <Form.Control type="date" onChange={(event)=>{toDo.date=event.target.value}} name="date" />
      </Form.Group>
      </div>
      <div className="myDiv">
      <Form.Group controlId="formNote">
        <Form.Control type="text" placeholder="Note" onChange={(event)=>{toDo.Note=event.target.value}} name="note"/>
      </Form.Group>
      <Form.Group controlId="formStatus">
      <select onChange={(event)=>{toDo.taskStatus=event.target.value}} name="status">
        <option value="">Status</option>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
        <option value="OnGoing">OnGoing</option>
      </select>  
          </Form.Group>
          </div>
          {!isEditClicked?
      <Button variant="primary" type="submit" id="todoBtn">
        Submit
      </Button>:<Button variant="primary" type="submit" id="todoBtn">
       Save
      </Button>
}
    </Form>   
    <table>
      <thead >
        <tr>
          <th >TaskName</th>
          <th >Start Date</th>
          <th >Note</th>
          <th >Status</th>
          <th >Delete</th>
          <th >Edit</th>
        </tr>

      </thead>
         <tbody>
          {myAllTasks.map((task:any,index:any)=>
          (
                       <tr key={index} >
                        <td >
                          {task.taskName}
                        </td>
                        <td >
                          {task.date}
                        </td>
                        <td >
                          {task.Note}
                        </td>
                        <td >
                          {task.taskStatus}
                        </td>
                        <td >
                           <button type='submit' onClick={()=>onDelClicked(task.id,isDelClicked?false:true)}>Delete</button>
                        </td>
                        <td >
                          <button type="submit" onClick={()=>onEditClick(task.id)}>Edit </button>
                        </td>
                       </tr>
          )
          )}
          </tbody>
        
      </table>
      
  </div>
  )
}

export default AddTodo;
