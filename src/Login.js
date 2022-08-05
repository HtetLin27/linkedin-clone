import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import './Login.css';
import {auth} from './firebase';
import {login} from './features/userSlice'

function Login() {
    const [email,setEmail] =useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState("");
    const [profilePic,setProfile] =useState("");
    const dispatch =useDispatch();
  const logintoApp = (e)=>{
    
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
    .then(userAuth=>{
      dispatch(login({
        email:userAuth.user.email,
        uid:userAuth.user.uid,
        displayName:userAuth.user.displayName,
        profileUrl:userAuth.user.photoURL,

      }))
    }).catch(error=>alert(error));

  };
  const register =()=>{
    if(!name){
      return alert('Please Enter a full name!')
    }
    auth.createUserWithEmailAndPassword(email,password)
    .then((userAuth)=>{
      userAuth.user.updateProfile({
        displayName:name,
        photoURL:profilePic,
      })
      .then(()=>{
        dispatch(login({
          email:userAuth.user.email,
          uid:userAuth.user.uid,
          displayName:name,
          photoURL:profilePic
        }))

      })
    }).catch(error=>alert(error));
   
  };
  return (
    <div className='login'>
      <img src='https://www.technipages.com/wp-content/uploads/2020/09/LinkedIn-Does-Not-Load-Images-fix.jpg'/>
      <form>
        <input value={name} onChange={e=>setName(e.target.value)} type='text' placeholder='Full name (required  if registring)'/>
        <input value={profilePic} onChange={(e)=>setProfile(e.target.value)} type='text' placeholder='Profile pic URL (Optional)'/>
        <input value={email}  onChange={e=>setEmail(e.target.value)} type='email' placeholder='Email'/>
        <input value={password} onChange={e=>setPassword(e.target.value)} type='password' placeholder='Password'/>
        <button type='submit' onClick={logintoApp}>Sign In</button>
      </form>
      <p>Not a member?{" "}
        <span className='login_register' onClick={register}>Register Now</span>
      </p>

    </div>
  )
}

export default Login