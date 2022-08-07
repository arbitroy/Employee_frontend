import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import ViewEmployeeComponent from "../components/ViewEmployeeComponent";
function View() {
    return (
      <div>
      <HeaderComponent />
      <div className="container">
        <ViewEmployeeComponent />
      </div>
        <FooterComponent />
        </div>
    );
  }
  
  export default View;
  