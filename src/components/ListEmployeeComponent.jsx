import { useState, useEffect} from "react";
import EmployeeService from "../service/EmployeeService";
import { useNavigate } from "react-router-dom";
const URL = 'https://jsonplaceholder.typicode.com/users'

function useAPi(url) {
  const [data, setData] = useState([])

  useEffect(() => {
    let mounted = true;
    if (mounted) {
        getData()
    }
    return () => mounted = false;
  }, [])

  const getData = async () => {
    const response = await EmployeeService.getEmployees()
    setData(response.data)
  }
  
  const removeData = (id) => {
    EmployeeService.deleteEmployee(id).then(() => {
      const del = data.filter((item) => id !== item.id)
      setData(del)
    })
  }

  return { data, removeData }
}


const ListEmployeeComponent = () => {
     const { data, removeData } = useAPi(URL)
     let navigate = useNavigate();

    const renderHeader = () => {
        let headerElement = ['id', 'First Name', 'Last Name', 'email', 'Operation']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
        return data && data.map(({ id, firstName, lastName, emailId }) => {
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{emailId}</td>
                    <td className='operation'>
                        <button className='btn btn-info' onClick={(e) => navigate(`/update-employee/${id}`)}>Update</button>
                        <button style = {{marginLeft:"10px"}}className='btn btn-danger' onClick={(e) => removeData(id)}>Delete</button>
                        <button style = {{marginLeft:"10px"}}className='btn btn-primary' onClick={(e) => navigate(`/view-employee/${id}`)}>View</button>
                    </td>
                </tr>
            )
        })
    }

    return (
        <>
            <h1 className="text-center">List Employees</h1>
                <button className="btn btn-primary" onClick={(e) => navigate('register')}>Add Employee</button>
            <div className="row">
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>
                    {renderBody()}
                </tbody>
            </table>
            </div>
        </>
    )
}





export default ListEmployeeComponent;