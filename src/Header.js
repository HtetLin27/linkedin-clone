import React from 'react';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
  return (
    <div className='header'>
        <div className='header_left'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUCzh235oNzm1iF8ldAns6hBTLDicgwDwyzg&usqp=CAU' alt=''/>

            <div className='header_search'>
                <SearchIcon/>
                <input type="text" placeholder='Search'/>
            </div>

        </div>
        <div className='header_right'>
            <HeaderOption Icon = {HomeIcon} title='Home'/>
            <HeaderOption Icon= {SupervisorAccountIcon}  title='My Network'/>
            <HeaderOption Icon = {BusinessCenterIcon} title='Jobs'/>
            <HeaderOption Icon = {ChatIcon} title='Messaging'/>
            <HeaderOption Icon = {NotificationsIcon} title='Notifications'/>
            <HeaderOption avatar= 'https://randomuser.me/api/portraits/men/9.jpg' title='Me'/>
         
            
        </div>
    </div>
  )
}

export default Header