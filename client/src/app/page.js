'use client';
import { useRouter } from 'next/navigation';
import './style/styles.css';
import React from 'react';



const Home= ()=> {
  const router = useRouter();
    const handleRouting  = (action) => {
router.push(action);
    };
  

  return (
    <div className='header'>
      <nav className='nav'>
        <div className='logo'>cosmetics</div>
        <div className='button'>
          <button onClick={()=>handleRouting('/login')}> login</button>
          <button onClick={()=>handleRouting('/register')}> register</button>
        </div>
      </nav>
      <div className='body'>
        <h3 className='greeting'>welcome to our shop</h3>
      </div>
    </div>
   )

}
export default Home;
