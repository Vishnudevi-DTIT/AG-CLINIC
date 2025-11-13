
import './App.css'
import Banner from './Components/Banner';
import Service from './Components/Service';
import Header from './Components/Header';
import Offers from './Components/Offers';
import FAQ from './Components/FAQ';
import Feedback from './Components/Feedback';
import Nav from './Components/Nav';
import NavBar from "./Components/NavBar"
import Footer from './Components/Footer';
import Appointment from './Components/Appointment';
import Contact from "./Components/Contact";
import BookAppoint from './Components/BookAppoint';
function App() {
  

  return (
    <>
      <Header/>
      
      <Nav/>
       <Service/>
      <Offers/>  
      <FAQ/>  
          
        
         <Feedback/>
         <Appointment/>
         
         <BookAppoint/> 
       <Footer/> 

    </>
  )
}

export default App
