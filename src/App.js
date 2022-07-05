import{HashRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css';
import { useState,useEffect } from 'react';
import Home from './pages/Home';
import NotePage from './pages/NotePage';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
function App() {
  let [name,setName] = useState('')

  useEffect(() =>{
       Auth()
  },[])

  let Auth = async () => {
      
          const response = await fetch(`/api/user`,{
              headers:{'Content-Type':'application/json'},
              credentials:'include',
          });

          const content =  await response.json();
          setName(content[0].id)
        }
  return (
    <Router>
    
    <Navbar name={name} setName={setName}/>
    <div className="container dark">
      <div className='app'>
    <Routes>
        
      <Route path = '/' element ={<Home name={name}/>}/>
      <Route path = '/note/:id' element ={<NotePage/>}/>
      <Route path='/login' element ={<Login setName={setName}/>}/>
      <Route path='/register' element={<Signup/>}/>
    </Routes>
      </div>
    </div>
    
    </Router>
  );
}

export default App;
