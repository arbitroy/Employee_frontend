import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import CreateEmployeeComponent from "../components/CreateEmployeeComponent";

function Register() {
    return (
      <div>
      <HeaderComponent />
      <div className="container">
        <CreateEmployeeComponent />
      </div>
        <FooterComponent />
        </div>
    );
  }
  
  export default Register;
  