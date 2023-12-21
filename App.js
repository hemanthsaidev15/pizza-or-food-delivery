import './App.css';
// eslint-disable-next-line no-unused-vars
import Funcomp from './Funcomp';
import  LoginForm  from './components/LoginForm';

// import Signup from './Signup.jsx';
// eslint-disable-next-line no-unused-vars
import {Routes,Route} from "react-router-dom"
import SignupForm from './components/SignupForm';
import CartPage from './Cart';
import Cards from './Cards';


 

function App() {
  return (
    <>
     {/* <SignupForm/>
     <LoginForm/> */}
{/* 
     <Funcomp/>
     <CartPage/> */}
     <Routes>
       <Route path='/home' element={<Funcomp/>} />
       <Route path='/' element={<LoginForm/>} />
       <Route path='/register'  element={<SignupForm/>} />
       <Route path='/cart' element={<CartPage/>} />
     </Routes>
    </>
   
  );
}

export default App;
