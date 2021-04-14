import React from "react";
import SideNav from './SideNav'

class Home extends React.Component<any | any, {
  userName: any,
  email: any,
}> {
  constructor(props: any) {
    super(props);
    this.state = {
      userName: '',
      email: '',

    };
  }

  componentDidMount() {
    if(localStorage.getItem('user_email') && localStorage.getItem('user_name')) {
      this.setState({
        userName: localStorage.getItem('user_name'),
        email: localStorage.getItem('user_email')
      })
    }
    else {
      this.props.history.push('/login')
    }
  }

  render() {
    return (
      <div>
        <SideNav />
        
      </div>
    )
  }
}

export default Home;
