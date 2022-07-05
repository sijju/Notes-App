import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = (props) => {
   
  const logout = async () => {
    await fetch(`/api/logout` ,{
        method:'POST',
        headers: {'Content-Type':'application/json'},
        credentials:'include',
      })
      props.setName('')
  }

  let menu;
  if(props.name ===''){
      menu = (
      <nav className='nav'>
      
        <ul>
           
           <li className='nav-items'>
                      <Link to ='/login'>Login</Link>
                  </li>
                  <li className='nav-items'>
                      <Link to ='/register'>Signup</Link>
                  </li>
        </ul>
        </nav>
      )
  }else{
   menu= (   
    <nav className='nav'>
    
    <ul>
               <li className='nav-items'>
                  <Link to ='/login' onClick={logout}>Logout</Link>
               </li>
    </ul>
</nav>
  )}


return (
  <nav className='nav'>
      
    <Link to='/'><h1 className='nav-header'>Notes App</h1></Link>
    {menu}

   
   </nav>
)
}

export default Navbar