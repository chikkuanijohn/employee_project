// import React,{useState,useEffect} from "react";
// import axios from 'axios'


// const TaskList=()=>{
//     const [employs,setEmp]=useState([]);
//     const [editing,setEditing]=useState(false);
//     const [currentEmp, setCurrentEmp]= useState({id:null,empid:'',name:'',address:'',position:'',salary:'',experience:'',phone:'',email:'',empid:''});

//     useEffect(()=>{
//         axios.get('https://aiswarya2325.pythonanywhere.com/employemanagement/employees/')
//         .then(response => setEmp(response.data))
//         .catch(error => console.log(error));
//     },[]);

//     const deleteDtls =(id) =>{
//         axios.delete('https://aiswarya2325.pythonanywhere.com/employemanagement/employees/${id}/')
//         .then(response =>{
//             setEmp(employs.filter(emp=> emp.id !== id));
//         })
//         .catch(error=>console.log(error));
//     };

//     const editDetails=(dtl)=>{
//         setEditing(true);
//         setCurrentEmp(dtl);
//     }

//     const updateDtls=(id,updatedDtls)=>{
//         setEditing(false);
//         axios.put('https://aiswarya2325.pythonanywhere.com/employemanagement/employees/${id}/',updatedDtls)
//         .then(response=>{
//             setEmp(employs.map(dtl=>(dtl.id===id? response.data:dtl)));
//         })
//         .catch(error=>console.log(error));
//     }
    
//     return(
//         <div className="container mt-3">
//             <h2>Employee Table</h2>
//             <table className="table table-bordered table-hover">
//                 {employs.map(emp => (
//                     <tr key={emp.id}>
//                         <td>{emp.empid}</td>
//                         <td>{emp.name}</td>
//                         <td>{emp.address}</td>
//                         <td>{emp.position}</td>
//                         <td>{emp.salary}</td>
//                         <td>{emp.experience}</td>
//                         <td>{emp.email}</td>
//                         <td>{emp.empid}</td>
//                         <td><button className="btn btn-warning px-3" onClick={() =>editDetails(emp)}>Edit</button></td>
//                         <td><button className="btn btn-danger" onClick={() =>deleteDtls(emp.id)}>Delete</button></td>
//                     </tr>
//                 ))}
//             </table>
//             {editing ?(
//                 <EditTaskForm
//                  currentEmp={currentEmp}
//                  updateDtls={updateDtls}
//                 />
//             ):null}
//         </div>
// );
// };
//  const EditTaskForm=({currentEmp,updateDtls})=>{
//     const [employs,setEmp]=useState(currentEmp);

//      const handelInputChange=(e)=>{
//         const{name,value}=e.target;
//         setEmp({...employs,[name]:value});
//      };

//      const handelSubmit =(e)=>{
//         e.preventDefault();
//         updateDtls(employs.id,employs)
//      };
//      return(
//         <form onSubmit={handelSubmit}>
//             <h2>Edit Details</h2>
//             <div>
//                 <label>Name</label>
//                 <input
//                 type="text"
//                 name="name"
//                 value={employs.name}
//                 onChange={handelInputChange}
//                 />
//             </div>
//             <div>
//                 <label>Address</label>
//                 <textarea
//                 name="address"
//                 value={employs.address}
//                 onChange={handelInputChange}
//                 />
//             </div>
//             <div>
//                 <label>Position</label>
//                 <textarea
//                 name="position"
//                 value={employs.position}
//                 onChange={handelInputChange}
//                 />
//             </div>
//             <div>
//                 <label>salary</label>
//                 <textarea
//                 name="salary"
//                 value={employs.salary}
//                 onChange={handelInputChange}
//                 />
//             </div>
//             <div>
//                 <label>experience</label>
//                 <textarea
//                 name="experience"
//                 value={employs.experience}
//                 onChange={handelInputChange}
//                 />
//             </div>
//             <div>
//                 <label>phone</label>
//                 <textarea
//                 name="phone"
//                 value={employs.phone}
//                 onChange={handelInputChange}
//                 />
//             </div>
//             <div>
//                 <label>email</label>
//                 <textarea
//                 name="email"
//                 value={employs.email}
//                 onChange={handelInputChange}
//                 />
//             </div>
//             <div>
//                 <label>empid</label>
//                 <textarea
//                 name="empid"
//                 value={employs.empid}
//                 onChange={handelInputChange}
//                 />
//             </div>
            
           
           
//             <button type="submit">Update Details</button>
//         </form>
//      );
//  };
// export default TaskList


import React,{useState,useEffect} from "react";
import axios from 'axios'


const TaskList=()=>{
    const [employs,setEmp]=useState([]);
    const [seremp,setSerEmp]=useState([]);
    const [filteredemp,setFilteredEmp]=useState([]);
    const [editing,setEditing]=useState(false);
    const [currentEmp, setCurrentEmp]= useState({id:null,empid:'',name:'',address:'',position:''});

    useEffect(()=>{
        axios.get('https://alan2325.pythonanywhere.com/employe/employees/')
        .then(response =>{ 
            setEmp(response.data)
            setFilteredEmp(response.data)
        })
        .catch(error => console.log(error));
    },[]);

    const deleteDtls =(id) =>{
        axios.delete(`https://alan2325.pythonanywhere.com/employe/employees/${id}/`)
        .then(response =>{
            setEmp(employs.filter(emp=> emp.id !== id));
        })
        .catch(error=>console.log(error));
    };

    const editDetails=(dtl)=>{
        setEditing(true);
        setCurrentEmp(dtl);
    }

    const updateDtls=(id,updatedDtls)=>{
        setEditing(false);
        axios.put(`https://alan2325.pythonanywhere.com/employe/employees/${id}/`,updatedDtls)
        .then(response=>{
            setEmp(employs.map(dtl=>(dtl.id===id? response.data:dtl)));
        })
        .catch(error=>console.log(error));
    };

    useEffect(() => {
        const result = employs.filter(e =>
            e.name.includes(seremp) ||
            e.position.includes(seremp) ||
            e.experiance.toString().includes(seremp) ||
            e.salary.toString().includes(seremp)
        );
        setFilteredEmp(result);
    }, [seremp, employs]);
    
    
    
    return(
        <div className="container mt-3">
            <h2>Employee Table</h2>
            <input type="search" placeholder="search" value={seremp} onChange={(e)=>setSerEmp(e.target.value)}/>
            <table className="table table-bordered table-hover">
             <thead>
                <tr>
                    <td>Emp id</td>
                    <td>Name</td>
                    <td>Address</td>
                    <td>Position</td>
                    <td>Experiance</td>
                    <td>Salary</td>
                    <td>Email</td>
                    <td>Phone Number</td>
                </tr>
            </thead>   
            <tbody>
             {filteredemp.map(emp => (
                    <tr key={emp.id}>
                        <td>{emp.empid}</td>
                        <td>{emp.name}</td>
                        <td>{emp.address}</td>
                        <td>{emp.position}</td>
                        <td>{emp.experiance}</td>
                        <td>{emp.salary}</td>
                        <td>{emp.email}</td>
                        <td>{emp.phone}</td>
                        <td><button className="btn btn-warning px-3" onClick={() =>editDetails(emp)}>Edit</button></td>
                        <td><button className="btn btn-danger" onClick={() =>deleteDtls(emp.id)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>   
            </table>
            {editing ?(
                <EditTaskForm
                 currentEmp={currentEmp}
                 updateDtls={updateDtls}
                />
            ):null}
        </div>
);
};
 const EditTaskForm=({currentEmp,updateDtls})=>{
    const [employs,setEmp]=useState(currentEmp);

     const handelInputChange=(e)=>{
        const{name,value}=e.target;
        setEmp({...employs,[name]:value});
     };

     const handelSubmit =(e)=>{
        e.preventDefault();
        updateDtls(employs.id,employs)
     };
     return(
        <form onSubmit={handelSubmit}>
            <h2>Edit Details</h2>
            <div>
                <label>Name</label>
                <input
                type="text"
                name="name"
                value={employs.name}
                onChange={handelInputChange}
                />
            </div>
            <div>
                <label>Address</label>
                <textarea
                name="address"
                value={employs.address}
                onChange={handelInputChange}
                />
            </div>
            <div>
                <label>Position</label>
                <textarea
                name="position"
                value={employs.position}
                onChange={handelInputChange}
                />
            </div>
            <button type="submit">Update Details</button>
        </form>
     );
 };
export default TaskList
    