import React,{Component} from 'react';
import {Link} from 'react-router-dom';
//import './App.css'
const Header = (
        
            <div className ="App-header">
                <Link to ='/'>홈</Link>
                <Link to ='/cal1'>맞춤변환기</Link>
                <Link to ='/cal2'>제품선택변환기</Link>
                <Link to ='/comp'>제품비교</Link>
                <Link to ='/commu'>커뮤니티</Link>
            </div>
        );
    


export default Header;