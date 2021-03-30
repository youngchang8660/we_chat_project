import React from "react";
import { Button, TextField, Typography, Link } from '@material-ui/core';

class Register extends React.Component<any | any> {
  firstName: any;
  lastName: any;
  email: any;
  password: any;
  confirmPassword: any;
  constructor(props: any) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword:''
    };
    this.registerNewUser = this.registerNewUser.bind(this);
  }

  registerNewUser() {
    let { firstName, lastName, email, password, confirmPassword } = this.state;
    console.log(firstName)
  }

  render() {
    
    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            <div>
                <TextField 
                  id="outlined-basic" 
                  label="First Name" 
                  variant="outlined" 
                  style={{width: 250, marginRight: 20}}
                  onChange={(e) => this.setState({
                    firstName: e.target.value
                  })}
                />
                <TextField id="outlined-basic" label="Last Name" variant="outlined" style={{width: 250}} onChange={(e) => this.setState({
                    lastName: e.target.value
                  })}/>
            </div>
            <TextField id="outlined-basic" label="Email" variant="outlined" style={{width: 520, marginTop: 30}} onChange={(e) => this.setState({
                    email: e.target.value
                  })} />
            <TextField id="outlined-basic" label="Password" variant="outlined" style={{width: 520, marginTop: 30}} onChange={(e) => this.setState({
                    password: e.target.value
                  })} />
            <TextField id="outlined-basic" label="Confirm Password" variant="outlined" style={{width: 520, marginTop: 30}} onChange={(e) => this.setState({
                    confirmPassword: e.target.value
                  })} />
            <Button style={{width: 520, height: '50px', backgroundColor: '#24b552', 
                            color: 'white', fontWeight: 'bold', fontSize: '18px', marginTop: 30}}
                    onClick={() => this.registerNewUser()}>
                Register Now
            </Button>
            <Link href="/login" style={{marginTop: '20px', color: 'black', textDecoration: 'none'}}>
                <Typography>Already have an account? Log In</Typography>
            </Link>
        </div>
    )
  }
}

export default Register;
