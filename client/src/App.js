
import './App.css';
import Routes from './Routes';
import { UserContext } from './context/UserContext';
import { useState } from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  //states for user info
  const [details,setDetails]=useState({
    user:'',
    password:''
  })

  return  (
    <>
    <UserContext.Provider value={[details,setDetails]}>
    <ToastContainer autoClose={2000}/>
    <Routes/>
    </UserContext.Provider>
    </>
  )
  
}

export default App;
