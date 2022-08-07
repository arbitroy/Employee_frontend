import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import UpdateEmployeeComponent from '../components/UpdateEmployeeComponent';

function Update() {
    return (
      <div>
      <HeaderComponent />
      <div className="container">
        <UpdateEmployeeComponent />
      </div>
        <FooterComponent />
        </div>
    );
  }
  
  export default Update;
  