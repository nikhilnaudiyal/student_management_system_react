// import React from 'react'
// import { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Cookies from 'universal-cookie';
// import { useNavigate } from 'react-router-dom';
// import StudentService from '../services/StudentService';
// const cookies = new Cookies();

// export default function EditStudent(props) {
//     const Navigate = useNavigate();
//     document.title = "Edit Student Details";
//     var {id} = useParams();
//     id = parseInt(id);
//     let a = props.students;
//     const [firstName, setfirstName] = useState(a[id].firstName);
//     const [middleName, setmiddleName] = useState(a[id].middleName);
//     const [lastName, setlastName] = useState(a[id].lastName);
//     const [branchCode, setbranchCode] = useState(a[id].branchCode);
//     const [attendance, setattendance] = useState(a[id].attendance);
//     const [rollNumber, setrollNumber] = useState(a[id].rollNumber);
//     // const [phone, setPhone] = useState(a[id].phone);
//     // const [address, setAddress] = useState(a[id].address);
//     // const [email, setEmail] = useState(a[id].email);
//     // const [age, setAge] = useState(a[id].age);

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if(!/^[a-zA-Z]+$/.test(firstName)) {
//             setfirstName('')
//             props.showAlert('First name should be only alphabets', 'danger');
//             return;
//         }
//         if(!/^[a-zA-Z]+$/.test(middleName)) {
//             setmiddleName("")
//             props.showAlert('Middle name should be only alphabets', 'danger');
//             return;
//         }
//         if(!/^[a-zA-Z]+$/.test(lastName)) {
//             setlastName("")
//             props.showAlert('Last name should be only alphabets', 'danger');
//             return;
//         }
//         // if(!/^[0-9]+$/.test(branchCode)) {
//         //     setbranchCode("")
//         //     props.showAlert('branchCode should be only numbers', 'danger');
//         //     return;
//         // }
//         // if(!/^[0-9]+$/.test(attendance)) {
//         //     setattendance("")
//         //     props.showAlert('Attendance should be only numbers', 'danger');
//         //     return;
//         // }
//         // if(!/^[0-9]+$/.test(rollNumber)) {
//         //     setrollNumber("")
//         //     props.showAlert('Roll No should be only numbers', 'danger');
//         //     return;
//         // }
//         // if(!/^[1-9][0-9]{9}$/.test(phone)) {
//         //     setPhone("")
//         //     props.showAlert('Phone number should be only numbers and contain 10 digit', 'danger');
//         //     return;
//         // }
        
//         // if(!/^[0-9]+$/.test(age)) {
//         //     setAge("")
//         //     props.showAlert('Age should be only numbers', 'danger');
//         //     return;
//         // }
//         // if(address.length < 1) {
//         //     setAddress("")
//         //     props.showAlert('Address should not be empty', 'danger');
//         // }
//         let student = {
//             firstName,
//             middleName,
//             lastName,
//             branchCode,
//             attendance,
//             rollNumber,
//             // phone,
//             // address,
//             // email,
//             // age
//         }
//         editStudent(id, student);
//     }
//     const editStudent = (id, student) => {
//         let prev = props.students;
//         prev[id] = student;
//         props.setStudents(prev);
//         cookies.remove('data', { path: '/' });
//         cookies.set('data', prev, { path: '/' });
//         props.showAlert('success', 'Student updated successfully');
        
//         Navigate('/display');
//       }
//     const handleChange = (e) => {
//         let { name, value } = e.target;
//         if(name === 'firstName') {
//             setfirstName(value);
//         }
//         if(name === 'middleName') {
//             setmiddleName(value);
//         }
//         if(name === 'lastName') {
//             setlastName(value);
//         }
//         if(name === 'branchCode') {
//             setbranchCode(value);
//         }
//         if(name === 'attendance') {
//             setattendance(value);
//         }
//         if(name === 'rollNumber') {
//             setrollNumber(value);
//         }
//         // if(name === 'phone') {
//         //     setPhone(value);
//         // }
//         // if(name === 'address') {
//         //     setAddress(value);
//         // }
//         // if(name === 'email') {
//         //     setEmail(value);
//         // }
//         // if(name === 'age') {
//         //     setAge(value);
//         // }

//         StudentService.updateStudent(students).then(res =>{
//             console.log(students);
//            // this.props.history.push('/student/info/save');
//         });
//     }
      
//     return (
//         <div className="container">
//             <h1 className='text-center mb-5'>Edit Student Details</h1>
//             <form className="row g-3" onSubmit={handleSubmit}>
//                 <div className="col-md-4">
//                     <label htmlFor="validationDefault01" className="form-label">First name</label>
//                     <input type="text" className="form-control" name="firstName" value={firstName} onChange={handleChange} id="validationDefault01" required/>
//                 </div>
//                 <div className="col-md-4">
//                     <label htmlFor="validationDefault01" className="form-label">Middle Name</label>
//                     <input type="text" className="form-control" name="middleName" value={middleName} onChange={handleChange} id="validationDefault01" required/>
//                 </div>
//                 <div className="col-md-4">
//                     <label htmlFor="validationDefault02" className="form-label">Last name</label>
//                     <input type="text" className="form-control" name="lastName" value={lastName} onChange={handleChange} id="validationDefault02" required/>
//                 </div>
//                 <div className="col-md-3">
//                     <label htmlFor="validationDefaultbranchCode" className="form-label">Branch Code</label>
//                     <input type="text" className="form-control" name="branchCode" value={branchCode} onChange={handleChange} id="validationDefaultbranchCode"  aria-describedby="inputGroupPrepend2" required/>
//                 </div>
//                 <div className="col-md-3">
//                     <label htmlFor="validationDefaultattendance" className="form-label">Attendance</label>
//                     <input type="text" className="form-control" name="attendance" value={attendance} onChange={handleChange} id="validationDefaultattendance"  aria-describedby="inputGroupPrepend2" required/>
//                 </div>
//                 <div className="col-md-3">
//                     <label htmlFor="validationDefaultrollNumber" className="form-label">Roll No.</label>
//                     <input type="text" className="form-control" name="rollNumber" value={rollNumber} onChange={handleChange} id="validationDefaultrollNumber"  aria-describedby="inputGroupPrepend2" required/>
//                 </div>
//                 {/* <div className="col-md-4">
//                     <label htmlFor="validationPhone" className="form-label">Phone No.</label>
//                     <div className="input-group has-validation">
//                         <span className="input-group-text text-white" id="inputGroupPrepend3">+91</span>
//                         <input type="text" className="form-control" name="phone" value={phone} onChange={handleChange} id="validationPhone" required/>
//                     </div>
//                 </div>
//                 <div className="col-md-6">
//                     <label htmlFor="validationAddress" className="form-label">Address</label>
//                     <input type="text" className="form-control" name="address" value={address} onChange={handleChange} id="validationAddress" required/>
//                 </div>
//                 <div className="col-md-3">
//                     <label htmlFor="validationEmail" className="form-label">Email</label>
//                     <input type="email" className="form-control" name="email" value={email} onChange={handleChange} id="validationEmail" required/>
//                 </div>
//                 <div className="col-md-3">
//                     <label htmlFor="validationDefaultAge" className="form-label">Age</label>
//                     <input type="text" className="form-control" name="age" value={age} onChange={handleChange} id="validationDefaultAge"  aria-describedby="inputGroupPrepend2" required/>
//                 </div> */}
//                 <div className="col-12">
//                     <button className="btn btn-success" type="submit">Save Changes</button>
//                 </div>
//             </form>
//         </div>
//     )
// }

