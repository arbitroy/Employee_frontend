import { useState} from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";
const CreateEmployeeComponent = () => {
  let employee;
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
  });
  
  const saveEmployee = (event) => {
    event.preventDefault();
    employee ={firstName : state.firstName, lastName : state.lastName, emailId : state.emailId}
    EmployeeService.createEmployee(employee);
    setState((values) => ({
      ...values,
      firstName: "",
      lastName: "",
      emailId : ""
  }));
  console.log(alert('employee added!'));
  }
  let navigate = useNavigate();
  const handleFirstNameInputChange = (event) => {
    setState((values) => ({
      ...values,
      firstName: event.target.value,
    }));
  };
  const handleLastNameInputChange = (event) => {
    setState((values) => ({
      ...values,
      lastName: event.target.value,
    }));
  };
  
  const handleEmailInputChange = (event) => {
    setState((values) => ({
      ...values,
      emailId: event.target.value,
    }));
  };
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3 mt-5'>
            <h3 className='text-center'>Add Employee</h3>
            <div className='card-body'>
              <form >
                <div className=" m-3">
                  <label>First Name:</label>
                  <input placeholder='First Name' name="firstName" className='form-control' 
                  value={state.firstName} onChange={handleFirstNameInputChange}/>
                </div>
                <div className=" m-3">
                  <label>Last Name:</label>
                  <input placeholder='Last Name' name="lastName" className='form-control' value={state.lastName} onChange = {handleLastNameInputChange} />
                </div>
                <div className=" m-3">
                  <label>Email :</label>
                  <input placeholder='Email' name="emailId" type ="email" className='form-control' value={state.emailId} onChange = {handleEmailInputChange} />
                </div>
                  <button className="btn btn-success" onClick={saveEmployee}>Save</button>
                  <button className="btn btn-danger m-3" onClick={() =>navigate("/")}>Cancel</button>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CreateEmployeeComponent
