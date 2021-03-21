import '../global/styles.css';


import Home from '../components/Home/home';
import Header from '../components/Header/header';
import About from '../components/About/about';
import Portfolio from '../components/Portfolio/portfolio';
import Editions from '../components/Editions/editions';
import Timeline from '../components/Timeline/timeline';
import Depositions from '../components/Depositions/depositions';
import Companies from '../components/Companies/companies';
import Footer from '../components/Footer/footer';

function App() {
  return (
   
    <div className="container">
      <div className="content">
        <Header/>
        <Home/>
        <About/>
        <Portfolio/>
        <Editions/>
        <Timeline/>
        <Companies/>
        <Depositions/>
        <Footer/>
        </div>
    </div>
    
  );
}

export default App;
