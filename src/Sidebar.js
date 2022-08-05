import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';
import {selectUser} from './features/userSlice';
import { useSelector } from 'react-redux';

function Sidebar() {
  const user =useSelector(selectUser)
  const recentItem =(topic)=>(
    <div className='sidebar_recentItem'>
      <span className='sidebar_hash'>#</span>
      <p>{topic}</p>
    </div>

  )
  return (
    <div className='sidebar'>
      <div className='sidebar_top'>
        <img src='https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        <Avatar src={user.photoUrl} className='sidebar_avatar'>
          {user.email[0]}
          </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className='sidebar_stats'>
      <div className='sidebar_stat'>
        <p>Who viewed you</p>
        <p className='sidebar_statNumber'>2,534</p>
        </div>
        <div className='sidebar_stat'>
        <p>views on post</p>
        <p className='sidebar_statNumber'>1,534</p>
        </div>
      </div>
      <div className='sidebar_bottom'>
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('softwareengineering')}
        {recentItem('design')}
        {recentItem('developer')}

      </div>
    </div>
  ) 
}

export default Sidebar