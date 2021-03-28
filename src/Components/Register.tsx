import React from "react";
import { Button, TextField, Typography, Link } from '@material-ui/core';

class Register extends React.Component<any | any> {
  constructor(props: any) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            <div>
                <TextField id="outlined-basic" label="First Name" variant="outlined" style={{width: 250, marginRight: 20}}/>
                <TextField id="outlined-basic" label="Last Name" variant="outlined" style={{width: 250}}/>
            </div>
            <TextField id="outlined-basic" label="Email" variant="outlined" style={{width: 520, marginTop: 30}} />
            <TextField id="outlined-basic" label="Password" variant="outlined" style={{width: 520, marginTop: 30}} />
            <TextField id="outlined-basic" label="Confirm Password" variant="outlined" style={{width: 520, marginTop: 30}} />
            <Button style={{width: 520, height: '50px', backgroundColor: '#24b552', 
                            color: 'white', fontWeight: 'bold', fontSize: '18px', marginTop: 30}}>
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
