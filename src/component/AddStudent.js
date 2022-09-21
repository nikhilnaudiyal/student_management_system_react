import React, { Component } from 'react'
import StudentService from '../services/StudentService';

export default class AddStudent extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            middleName:'',
            lastName: '',
            studentId: '',
            branchCode: '',
            attendance: '',
            rollNumber: '',
            // age: '',
            // phone: '',
            // address: '',
            // email: '',
            
        }
        document.title = "Add Student";
      }

      
      
    handleSubmit = (e) => {
        e.preventDefault();
        let { firstName,middleName,lastName,studentId,branchCode,attendance,rollNumber} = this.state;

        if(!/^[a-zA-Z]+$/.test(firstName)) {
            this.setState({
                firstName: ''
            })
           
            this.props.showAlert('First name should be only alphabets', 'danger');
            return;
        }

        if(!/^[a-zA-Z]+$/.test(middleName)) {
            this.setState({
                middleName: ''
            })
            this.props.showAlert('Last name should be only alphabets', 'danger');
            return;
        }

        if(!/^[a-zA-Z]+$/.test(lastName)) {
            this.setState({
                lastName: ''
            })
            this.props.showAlert('Last name should be only alphabets', 'danger');
            return;
        }

        //   if(!/^[1-9][0-9]{9}$/.test(studentId)) {
        //     this.setState({
        //         studentId: ''
        //     })
        //     this.props.showAlert('Student ID should be only numbers and contain 10 digit', 'danger');
        //     return;
        // }

        // if(!/^[1-9][0-9]{9}$/.test(branchCode)) {
        //     this.setState({
        //         branchCode: ''
        //     })
        //     this.props.showAlert('Branch Code should be only numbers and contain 10 digit', 'danger');
        //     return;
        // }
        
        // if(!/^[1-9][0-9]{9}$/.test(attendance)) {
        //     this.setState({
        //         attendance: ''
        //     })
        //     this.props.showAlert('Branch Code should be only numbers and contain 10 digit', 'danger');
        //     return;
        // }

        // if(!/^[1-9][0-9]{9}$/.test(rollNumber)) {
        //     this.setState({
        //         rollNumber: ''
        //     }) 
        //    this.props.showAlert('Branch Code should be only numbers and contain 10 digit', 'danger');
        //     return;
        // }
        // if(!/^[1-9][0-9]{9}$/.test(phone)) {
        //     this.setState({
        //         phone: ''
        //     })
        //     this.props.showAlert('Phone number should be only numbers and contain 10 digit', 'danger');
        //     return;
        // }
        // if(!/^[0-9]+$/.test(age)) {
        //     this.setState({
        //         age: ''
        //     })
        //     this.props.showAlert('Age should be only numbers', 'danger');
        //     return;
        // }
        let student = {
            firstName,
            middleName,
            lastName,
            studentId,
            branchCode,
            attendance,
            rollNumber,
            // phone,
            // address,
            // email,
            // age,
            
        }
        this.props.newStudent(student);
        this.setState({
            firstName: '',
            middleName: '',
            lastName: '',
            studentId : '',
            branchCode: '',
            attendance: '',
            rollNumber: '',
            // phone: '',
            // address: '',
            // email: '',
            // age: ''
        })

        // console.log('student => ' + JSON.stringify(student));

        StudentService.createStudent(student).then(res =>{
            console.log(student);
           // this.props.history.push('/student/info/save');
        });

        
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
      
  render() {
    return (
        <div className="container">
            <h1 className='text-center mb-5'>Add Student Details</h1>
            <form className="row g-3" onSubmit={this.handleSubmit}>
                <div className="col-md-4">
                    <label htmlFor="validationDefault01" className="form-label">First name</label>
                    <input type="text" className="form-control" name="firstName" value={this.state.firstName} onChange={this.handleChange} id="validationDefault01" required/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationDefault03" className="form-label">Middle name</label>
                    <input type="text" className="form-control" name="middleName" value={this.state.middleName} onChange={this.handleChange} id="validationDefault03" required/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationDefault02" className="form-label">Last name</label>
                    <input type="text" className="form-control" name="lastName" value={this.state.lastName} onChange={this.handleChange} id="validationDefault02" required/>
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationDefaultAge" className="form-label">Student ID</label>
                    <input type="text" className="form-control" name="studentId" value={this.state.studentId} onChange={this.handleChange} id="validationDefaultstudentId"  aria-describedby="inputGroupPrepend2" required/>
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationDefaultbranchCode" className="form-label">Branch Code</label>
                    <input type="text" className="form-control" name="branchCode" value={this.state.branchCode} onChange={this.handleChange} id="validationDefaultbranchCode"  aria-describedby="inputGroupPrepend2" required/>
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationDefaultattendance" className="form-label">Attendance</label>
                    <input type="text" className="form-control" name="attendance" value={this.state.attendance} onChange={this.handleChange} id="validationDefaultattendance"  aria-describedby="inputGroupPrepend2" required/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationDefaultrollNumber" className="form-label">Roll No.</label>
                    <input type="text" className="form-control" name="rollNumber" value={this.state.rollNumber} onChange={this.handleChange} id="validationDefaultrollNumber"  aria-describedby="inputGroupPrepend2" required/>
                </div>
                {/* <div className="col-md-4">
                    <label htmlFor="validationPhone" className="form-label">Phone No.</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text text-white" id="inputGroupPrepend3">+91</span>
                        <input type="text" className="form-control" name="phone" value={this.state.phone} onChange={this.handleChange} id="validationPhone" required/>
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" name="address" value={this.state.address} onChange={this.handleChange} id="validationAddress" required/>
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.handleChange} id="validationEmail" required/>
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationDefaultAge" className="form-label">Age</label>
                    <input type="text" className="form-control" name="age" value={this.state.age} onChange={this.handleChange} id="validationDefaultAge"  aria-describedby="inputGroupPrepend2" required/>
                </div>*/
                <div className="col-12">
                    <button className="btn btn-success" type="submit">Submit</button>
                </div> }
            </form>
        </div>
      )
  }
}
