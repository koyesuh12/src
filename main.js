import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './css/Main.css';
import axios from "axios";


function Header() {
    return (
      <header>
        <div className="main-container">
          <Link to="/pageA" className="circle">AI</Link>
          <Link to="/" className="circle">메인</Link>
          <Link to="/pageC" className="circle">검색</Link>
          <Link to="/pageD" className="circle">커뮤</Link>
        </div>
      </header>
    );
  }
  
  function Body() {
    return (
      <div className="body-container">
        <div className='con1'>
        </div>
        <div className='con1-1'>
          <div className='con1-1-top'>내용 </div>
        </div>
        <div className="con2">
          <div className='con2-top'>내용 위</div>
          <div className='con2-bottom'>내용 아래</div>
        </div>
        <div className="con3">내용</div>
        <div className='con3-1'>
        </div>
      </div>
    );
  }
  
  /*
  const mode = S;
  let content = null;
  
  if( S === 'WELCOME'){
    content = <Body />
  
  } else if( S === 'READ'){
    content = null;
  }
  */
  
  const Main = () => {
    const [auth, setAuth] = useState('');

    // useEffect(() => {
    //     axios.post('/login')
    //         .then((res) => {
    //             setAuth(res.data);
    //         })
    // }, []);

    return (
      <div>
        <div>{auth}님 안녕하세요.</div>
        <Header />
        <Body />
      </div>
    );
  }


export default Main;