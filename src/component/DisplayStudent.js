import React,{useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import axios from 'axios';

export default function DisplayStudent(props) {

    const [student,setStudent] = useState([])
    useEffect(() => {
        document.title="Student Details";
        loadUsers();
    
      }, []);

      const loadUsers = async () => {
        await fetch("http://localhost:8080/student/info/get")
        .then((response) => response.json())
        .then(res => {
            setStudent(res);
            // console.log(res)
        //   console.log(json);
        });
      }

      const deleteStudent = async (id) => {
        await axios.delete(`http://localhost:8080/student/info/delete/${id}`);
         loadUsers();
      };

      console.log(student);
    
    // if (props.students.length < 1) {
    //     return (
    //         <div className="container">
    //             <div className="row">
    //                 <div className="col-md-12">
    //                     <h1 className="text-center">No Student Found</h1>
    //                     <Link to="/add" className="btn btn-success">Add Student</Link>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }

    
    return (
        <div className='container'>
            <h1 className='text-center mb-5'>Student Details</h1>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Midddle Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">rollno</th>
                    <th scope="col">brcode</th>
                    <th scope="col">attd</th>
                    
                    {/* <th scope="col">Age</th>
                    <th scope="col">Phone No.</th>
                    <th scope="col">Email</th>
                    <th scope="col">Address</th> */}
                    {/* <th scope="col">Edit</th> */}
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    
            {student.map((item,i) => {
              return <tr key={i}>

                <td>{item.studentId}</td>
                <td>{item.firstName}</td>
                <td>{item.middleName}</td>
                <td>{item.lastName}</td>
                <td>{item.rollNumber}</td>
                <td>{item.branchCode}</td>
                <td>{item.attendance}</td>
                <td className='text-decoration-none text-center'><Link to={`/edituser/${item.studentId}`}>✎</Link></td>
                {/* <td className='text-center cursor' onClick={()=>{props.deleteStudent(i)}}>🗑</td> */}
                <td className='text-center cursor' onClick={()=>{deleteStudent(item.studentId)}}>🗑</td>
                
              </tr>



           })}
          
                    {

                    /* {props.students.map((element, i) => {
                        return (
                            <tr key={i}>
                                <th scope="row">{i+1}</th>
                                <td>{element.fname} {element.midname}{element.lname}</td>
                                <td>{element.brcode}</td>
                                <td>{element.attd}</td>
                                <td>{element.rollno}</td>
                                <td>{element.age}</td>
                                <td>{element.phone}</td>
                                <td>{element.email}</td>
                                <td>{element.address}</td>
                                <td className='text-decoration-none text-center'><Link to={'/edit/'+i}>✎</Link></td>
                                <td className='text-center cursor' onClick={()=>{props.deleteStudent(i)}}>🗑</td>
                            </tr>
                        )
                    })} */}
                </tbody>
            </table>
        </div>
    )
    
}
