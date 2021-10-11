import React from 'react';
import Modal from "react-modal";
class Signup extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isSignupOpen: false,
		    Firstname:'',
		    Lastname:'',
		    username:'',
		    email:'',
		    password:'',
        confirmpassword:'',
		    organisation_name:'',
		    organisation_code:'', 
        role :'user',
      }
      this.toggleSignup = this.toggleSignup.bind(this);
}
onChange = e => {
  this.setState({ [e.target.id]: e.target.value });
};
onSubmit = e => {
  e.preventDefault();
const User = {
  Firstname:this.state.Firstname,
  Lastname:this.state.Lastname,
  username:this.state.username,
  email:this.state.email,
  password:this.state.password,
  organisation_name:this.state.organisation_name,
  organisation_code:this.state.organisation_code,
  role :this.state.role,
  };
  if(this.state.password!==this.state.confirmpassword){
    alert("Passwords Do not match")
  }
  else{
    fetch("http://localhost:4000/Users/signup",{
      method:"POST",
      headers:{
        'Content-type':"application/json"
      },
      body:JSON.stringify(User)
    }).then((res)=>res.json()).then(user=>console.log(user))
    this.toggleSignup();
  }
  this.setState({
    Firstname:'',
    Lastname:'',
    username:'',
    email:'',
    password:'',
    confirmpassword:'',
    organisation_name:'',
    organisation_code:'', 
    role :'user',
  })
};
toggleSignup(e) {
    this.setState({ isSignupOpen: !this.state.isSignupOpen })
  }
render(){
    return(
        <div> 
        <button onClick={(e) => this.toggleSignup(e)}>SignUp</button>
        <Modal

style={{
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)'
  },
  content: {
    position: 'absolute',
    top: '40px',
    marginRight: 'auto',
    marginLeft: 'auto',
    bottom: '40px',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px',
    width: '40vw',
    height: 'auto'
  }
}}

isOpen={this.state.isSignupOpen}
onRequestClose={this.toggleSignup}
contentLabel="My dialog"
>
<h1 style={{ textAlign: 'center' }}>SignUp</h1>
<form onSubmit={this.onSubmit}>
<div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', width: '100%' }}>
  <div style={{ width: '100%', textAlign: 'left', fontSize: '3vh', marginTop: '2px',paddingTop:'4px' }}><label for="Firstname">First Name</label>
    <input onChange={this.onChange}
    value={this.state.Firstname}
    style={{ width: '50%', borderRadius: 2,float:'right', border: 0, height: '5vh', marginTop: 2, backgroundColor: '#f5f5f0', fontSize: '1.5vw' }} 
     type="text" id="Firstname" name="Firstname" /></div>
    <div style={{ width: '100%', textAlign: 'left', fontSize: '3vh', marginTop: '2px',paddingTop:'4px' }}><label for="Lastname">Last Name</label>
    <input 
    onChange={this.onChange}
    value={this.state.Lastname}
    style={{ width: '50%', borderRadius: 2, float:'right',border: 0, height: '5vh', marginTop: 2, backgroundColor: '#f5f5f0', fontSize: '1.5vw' }} type="text" id="Lastname" name="Lastname" /></div>
    <div style={{ width: '100%', textAlign: 'left', fontSize: '3vh', marginTop: '2px',paddingTop:'4px' }}><label for="email">Email</label>
    <input  onChange={this.onChange}
            value={this.state.email}
    style={{ width: '50%', borderRadius: 2,float:'right', border: 0, height: '5vh', marginTop: 2, backgroundColor: '#f5f5f0', fontSize: '1.5vw' }} type="text" id="email" name="email" /></div>
  <div style={{ width: '100%', textAlign: 'left', fontSize: '3vh', marginTop: '2px',paddingTop:'4px' }}><label for="role">Role</label>
  <select
  onChange={this.onChange}
  value={this.state.role}
  style={{ width: '50%', borderRadius: 2,float:'right', border: 0, height: '5vh', marginTop: 2, backgroundColor: '#f5f5f0', fontSize: '1.5vw' }}
  name="role" id="role">
  <option value="User">User</option>
  <option value="Doctor">Doctor</option>
  <option value="Other">Other</option>
</select>
    </div>
    <div style={{ width: '100%', textAlign: 'left', fontSize: '3vh', marginTop: '2px',paddingTop:'4px' }}><label for="username">Username</label>
    <input
    onChange={this.onChange}
    value={this.state.username} 
    style={{ width: '50%', borderRadius: 2,float:'right', border: 0, height: '5vh', marginTop: 2, backgroundColor: '#f5f5f0', fontSize: '1.5vw' }} type="text" id="username" name="username" /></div>
  <div style={{ width: '100%', textAlign: 'left', fontSize: '3vh', marginTop: '2px',paddingTop:'4px' }}><label for="password">Password</label>
    <input 
    onChange={this.onChange}
    value={this.state.password}
    style={{ width: '50%', borderRadius: 2, float:'right',border: 0, height: '5vh', marginTop: 2, backgroundColor: '#f5f5f0', fontSize: '1.5vw' }} type="password" id="password" name="password" /></div>
  <div style={{ width: '100%', textAlign: 'left', fontSize: '3vh', marginTop: '2px' ,paddingTop:'4px'}}><label for="confirmpassword">Confirm Password</label>
    <input
    onChange={this.onChange}
    value={this.state.confirmpassword}
     style={{ width: '50%', borderRadius: 2,float:'right', border: 0, height: '5vh', marginTop: 2, backgroundColor: '#f5f5f0', fontSize: '1.5vw' }} type="password" id="confirmpassword" name="confirmpassword" /></div>
    <div style={{ width: '100%', textAlign: 'left', fontSize: '3vh', marginTop: '2px',paddingTop:'4px' }}><label for="organisation_name">Organisation Name</label>
    <input 
    onChange={this.onChange}
    value={this.state.organisation_name}
    style={{ width: '50%', borderRadius: 2,float:'right', border: 0, height: '5vh', marginTop: 2, backgroundColor: '#f5f5f0', fontSize: '1.5vw' }} type="text" id="organisation_name" name="organisation_name" /></div>
    <div style={{ width: '100%', textAlign: 'left', fontSize: '3vh', marginTop: '2px',paddingTop:'4px' }}><label for="organisation_code">Organisation Code</label>
    <input 
    onChange={this.onChange}
    value={this.state.organisation_code}
    style={{ width: '50%', borderRadius: 2,float:'right', border: 0, height: '5vh', marginTop: 2, backgroundColor: '#f5f5f0', fontSize: '1.5vw' }} type="text" id="organisation_code" name="organisation_code" /></div>
  <input type="submit" value="SignUp" onClick={this.onSubmit} style={{
    backgroundColor: '#D8EF04',
    border: 0,
    borderRadius: 4,
    width: '6vw',
    height: '3vw',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: '1.3vw',
    marginTop: '8vh'
  }} />
</div>
</form>
</Modal>
        </div>
    );
}
}
export default Signup;
