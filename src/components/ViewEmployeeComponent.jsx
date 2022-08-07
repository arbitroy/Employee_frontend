import { useState, useEffect} from "react";
import EmployeeService from "../service/EmployeeService";
import { useParams, useNavigate} from "react-router-dom";
const ViewEmployeeComponent = () => {
    let navigate = useNavigate();
    const params = useParams();
    const [state, setState] = useState({
    id: params.id,
    employee : {}
    });
    useEffect(() => {
        let mounted = true;
        if (mounted === true) {
        EmployeeService.getEmployeeById(state.id).then((res) => {
            setState({employee : res.data});
        })
        }
        return () => mounted = false;
    }, [state.id])
    return(
        <>
        <div className="card col-md-6 offset-md-3">
            <h3 className="text-center">View Employee Details</h3>
            <div className="card-body">
                <div className="row">
                    <label>Employee First Name:</label>
                    <div className="text-primary">{state.employee.firstName}</div>
                </div>
                <div className="row">
                    <label>Employee Last Name:</label>
                    <div className="text-primary">{state.employee.lastName}</div>
                </div>
                <div className="row">
                    <label>Employee Email Id:</label>
                    <div className="text-primary">{state.employee.emailId}</div>
                </div>
                <div className="text-center">
                <button className="btn btn-danger m-3" onClick={() =>navigate("/")}>Back</button>
                </div>
            </div>
        </div>
        </>
        
    )
}

export default ViewEmployeeComponent;