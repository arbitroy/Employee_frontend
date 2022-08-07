import HeaderComponent from "../components/HeaderComponent";
import ListEmployeeComponent from "../components/ListEmployeeComponent";
import FooterComponent from "../components/FooterComponent";

function Home() {
  return (
    <div>
    <HeaderComponent />
    <div className="container">
      <ListEmployeeComponent />
    </div>
      <FooterComponent />
      </div>
  );
}

export default Home;
