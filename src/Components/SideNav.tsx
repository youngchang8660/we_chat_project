import React from "react";
import "../App.css";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SmsIcon from "@material-ui/icons/Sms";
import ContactsIcon from "@material-ui/icons/Contacts";
import InstagramIcon from "@material-ui/icons/Instagram";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";

class SideNav extends React.Component<any | {}> {
  constructor(props: any) {
    super(props);
    this.state = {
        
    };

  }

  logout() {
    localStorage.removeItem("user_email");
    localStorage.removeItem("user_name");
  }

  render() {
    return (
      <div>
        <div className="sideNavHome">
          <div className="sideBarIcons">
            <AccountBoxIcon id="sideIcon" />
            <SmsIcon id="sideIcon" />
            <Link to='/contacts'>
              <ContactsIcon id="sideIcon" />
            </Link>
            <Link to='/posts'>
              <InstagramIcon id="sideIcon" />
            </Link>
          </div>
          <div className="sideBarExitIcon">
            <Link onClick={this.logout} to="/login">
              <ExitToAppIcon id="sideIcon" onClick={this.logout} />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SideNav;
