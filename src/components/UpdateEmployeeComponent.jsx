import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";
import { useParams } from "react-router-dom";
const UpdateEmployeeComponent = () => {
  let employee;
  let navigate = useNavigate();
  const params = useParams();
  const [state, setState] = useState({
    id: params.id,
    firstName: "",
    lastName: "",
    emailId: ""
  });
  useEffect(() => {
    let mounted = true;
    if (mounted === true) {
      EmployeeService.getEmployeeById(state.id).then((res) => {
        let employee = res.data;
        setState((values) => ({
            ...values,
            firstName: employee.firstName,
            lastName: employee.lastName,
            emailId : employee.emailId
        }));
    })
    }
    return () => mounted = false;
}, [state.id]) 

  const updateEmployee = (event) => {
    event.preventDefault();
    employee = {firstName : state.firstName, lastName : state.lastName, emailId : state.emailId}
    console.log('employee =>' + JSON.stringify(employee));
    EmployeeService.updateEmployee(employee, state.id).then((res) => navigate("/"))
  }
  
  const handleFirstNameInputChange = (event) => { 
    setState((values) => ({
      ...values,
      firstName: event.target.value
    }));
    console.log(state.firstName);
  };
  const handleLastNameInputChange = (event) => {
    event.preventDefault() 
    setState((values) => ({
      ...values,
      lastName: event.target.value,
    }));
    console.log(state.lastName);
  };
  
  const handleEmailInputChange = (event) => {
    setState((values) => ({
      ...values,
      emailId: event.target.value,
    }));
    console.log(state.emailId);
  };
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3 mt-5'>
            <h3 className='text-center'>Update Employee</h3>
            <div className='card-body'>
              <form >
                <div className=" m-3">
                  <label>First Name :</label>
                  <input placeholder='First Name' name="firstName" className='form-control' 
                  defaultValue={state.firstName} onChange={handleFirstNameInputChange} />
                </div>
                <div className=" m-3">
                  <label>Last Name :</label>
                  <input placeholder='Last Name' name="lastName" className='form-control' defaultValue={state.lastName} onChange = {handleLastNameInputChange} />
                </div>
                <div className=" m-3">
                  <label>Email :</label>
                  <input placeholder='Email' name="emailId"  className='form-control' defaultValue={state.emailId} onChange = {handleEmailInputChange} />
                </div>
                  <button className="btn btn-success" onClick={updateEmployee}>Save</button>
                  <button className="btn btn-danger m-3" onClick={() =>navigate("/")}>Cancel</button>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default UpdateEmployeeComponent; 
