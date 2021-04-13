import React from "react";
import { Button, TextField, Typography, Link } from "@material-ui/core";
import axios from "axios";

class Home extends React.Component<
  any | any,
  {
    email: any;
    password: any;
    servername: any;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: "",
      password: "",
      servername: "",
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount() {
    console.log(this.props)
    this.setState({
      servername: localStorage.getItem("servername"),
    }, () => {
      localStorage.removeItem('user_email');
      localStorage.removeItem('user_name');
    });
  }

  handleLogin() {
    let { servername, email, password } = this.state;
    axios
      .post(`${servername}/user/login`, { email, password })
      .then((res) => {
        console.log(res.data)
        localStorage.setItem('user_email', res.data.email);
        localStorage.setItem('user_name', res.data.first_name);
        this.props.history.push('/home')
      })
      .catch((err) => {
        alert('Incorrect email or password. Try it again')
        console.log(err.message)
      });
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <TextField
          onChange={(e) => {
            this.setState({
              email: e.target.value
            })
          }}
          value={this.state.email}
          id="filled-basic"
          label="Email"
          variant="filled"
          style={{ marginBottom: "30px", width: 400 }}
        />
        <TextField
          onChange={e => {
            this.setState({
              password: e.target.value
            })
          }}
          value={this.state.password}
          id="filled-basic"
          label="Password"
          variant="filled"
          style={{ marginBottom: "30px", width: 400 }}
        />
        <Button
          onClick={this.handleLogin}
          style={{
            width: "200px",
            height: "50px",
            backgroundColor: "#24b552",
            color: "white",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          Log In
        </Button>
        <Link
          href="/register"
          style={{ marginTop: "20px", color: "black", textDecoration: "none" }}
        >
          <Typography>Don't have an account? Sign up now</Typography>
        </Link>
      </div>
    );
  }
}

export default Home;
