import './App.css';
import Header from './Components/Header/Header';
import Card from './Components/Card/Card';
import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header tittle="MucONline"/>
      <div className="row">
          <Card tittle="iPhone 14 Pro Max de 128 GB"
              desc="Negro espacial"
              photo="https://d3tctca4ed2xlu.cloudfront.net/images/spree/images/1815931/attachments/large/Apple_iPhone_14_Pro_Max_Negro_Espacial_1.jpg?1662938051"/>
          <Card tittle="iPhone 13 Pro Max de 128 GB"
            desc="Pine Green"
            photo="https://d3tctca4ed2xlu.cloudfront.net/images/spree/images/1766345/attachments/large/Apple_iPhone_13_Pro_Max_Green_1.jpeg?1659973396"/>
          <Card tittle="iPhone 13 mini de 128 GB"
            desc="Blue"
            photo="https://d3tctca4ed2xlu.cloudfront.net/images/spree/images/1766224/attachments/large/Apple_iPhone_13_mini_Blue_1.jpg?1659972200"/>

      </div>
      <Footer
        text ="copyright © 2023 apple inc. todos los derechos reservados"
      />
    </>
  );
}

export default App;
