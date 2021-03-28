import React from "react";
import { Button, TextField, Typography, Link } from '@material-ui/core';

class Home extends React.Component<any | any> {
  constructor(props: any) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <TextField id="filled-basic" label="User ID or Email" variant="filled" style={{marginBottom: '30px', width: 400}}/>
        <TextField id="filled-basic" label="Password" variant="filled" style={{marginBottom: '30px', width: 400}}/>
        <Button style={{width: '200px', height: '50px', backgroundColor: '#24b552', color: 'white', fontWeight: 'bold', fontSize: '18px'}}>Log In</Button>
        <Link href="/register" style={{marginTop: '20px', color: 'black', textDecoration: 'none'}}>
          <Typography>Don't have an account? Sign up now</Typography>
        </Link>
      </div>
    )
  }
}

export default Home;
