import React,{useState,useEffect} from "react";
import axios from 'axios'


const TaskList=()=>{
    const [employs,setEmp]=useState([]);
    const [editing,setEditing]=useState(false);
    const [currentEmp, setCurrentEmp]= useState({id:null,name:'',address:''});

    useEffect(()=>{
        axios.get('https://aiswarya2325.pythonanywhere.com/employemanagement/employees/')
        .then(response => setEmp(response.data))
        .catch(error => console.log(error));
    },[]);

    
    return(
        <div className="container mt-3">
            <h2>Employee Table</h2>
            <table className="table table-bordered table-hover">
                {employs.map(emp => (
                    <tr key={emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.address}</td>
                        <td><button className="btn btn-warning px-3" onClick={() =>editTask(task)}>Edit</button></td>
                        <td><button className="btn btn-danger" onClick={() =>deleteTask(task.id)}>Delete</button></td>
                    </tr>
                ))}
            </table>
            {/* {editing ?(
                <EditTaskForm
                 currentTask={currentTask}
                 updateTask={updateTask}
                />
            ):null} */}
        </div>
    );
};

export default TaskList