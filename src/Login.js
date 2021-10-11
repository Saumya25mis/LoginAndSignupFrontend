import React from 'react';
import Modal from "react-modal";
class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoginOpen: false,
        username:'',
		    password:'',
      }
      this.toggleLogin = this.toggleLogin.bind(this);
}

  toggleLogin(e) {
    this.setState({ isLoginOpen: !this.state.isLoginOpen })
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
  const User = {
    username:this.state.username,
    password:this.state.password,
    };
      fetch("http://localhost:4000/Users/login",{
        method:"POST",
        headers:{
          'Content-type':"application/json"
        },
        body:JSON.stringify(User)
      }).then((res)=>{res.json()
      .then(user=>console.log(user))
      })
      this.toggleLogin();
    this.setState({
      username:'',
      password:'',
    })
  };
render(){
    return(
        <div> 
        <button onClick={(e) => this.toggleLogin(e)}>Login</button>
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
              width: '30vw',
              height: '60vh'
            }
          }}

          isOpen={this.state.isLoginOpen}
          onRequestClose={this.toggleLogin}
          contentLabel="My dialog"
        >
          <h1 style={{ textAlign: 'center' }}>Login</h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', width: '100%' }}>
            <div style={{ width: '100%', textAlign: 'left', fontSize: '1.5vw', marginTop: '2px' }}><label for="username">Username</label>
              <div><input 
              onChange={this.onChange}
              value={this.state.username} 
              style={{ width: '100%', borderRadius: 2, border: 0, height: '3vw', marginTop: 2, backgroundColor: '#f5f5f0', fontSize: '1.5vw' }} type="text" id="username" name="username" /></div></div>
            <div style={{ width: '100%', textAlign: 'left', fontSize: '1.5vw', marginTop: '2px' }}><label for="password">Password</label>
              <div><input 
              onChange={this.onChange}
              value={this.state.password}
              style={{ width: '100%', borderRadius: 2, border: 0, height: '3vw', marginTop: 2, backgroundColor: '#f5f5f0', fontSize: '1.5vw' }} type="password" id="password" name="password" /></div></div>
            <input type="submit" value="Login" onClick={this.onSubmit}  style={{
              backgroundColor: '#D8EF04',
              marginTop: 8,
              border: 0,
              borderRadius: 4,
              width: '6vw',
              height: '3vw',
              marginLeft: 'auto',
              marginRight: 'auto',
              fontSize: '1.3vw',
              marginTop: '10vh'
            }} />
          </div>
        </Modal>
        </div>
    );
}
}
export default Login;
