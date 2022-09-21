import axios from "axios";

 const STUDENT_API_BASE_URL = 'http://localhost:8080/student/info/save';
 const STUDENT_API_BASE_URL_UPDATE = 'http://localhost:8080/student/info/update';
 const STUDENT_API_BASE_URL_DELETE = 'http://localhost:8080/student/info/delete';


class StudentService {
    getStudent(){
        return axios.get(STUDENT_API_BASE_URL);
    }

    createStudent(student){
        return axios.post(STUDENT_API_BASE_URL, student)
    }
    
    updateStudent(student){
        return axios.put(STUDENT_API_BASE_URL_UPDATE, student)
    }

    deleteStudent(student){
        return axios.put(STUDENT_API_BASE_URL_DELETE, student)
    }
}

export default new StudentService();