import './App.css';
import Home from './Pages/Home';
import {Route,Switch } from 'react-router-dom'
import Footer from './Components/Footer';
import LatestProducts from './Components/LatestProducts';
import Sliders from './Components/Sliders';
import Navbar from './Components/Navbar/Navbar'
const App=()=> {
  return (
    <>
    <Navbar/>
    {/* <Preloader/> */}
       <Switch>
      
   
   
       <Route path="/">
       <Home/>
          </Route>
     
 


    

  </Switch>
  <Footer/>
    
    </>
 
  );
}

export default App;
