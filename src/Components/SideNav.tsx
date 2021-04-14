import React from "react";
import "../App.css";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SmsIcon from "@material-ui/icons/Sms";
import ContactsIcon from "@material-ui/icons/Contacts";
import InstagramIcon from "@material-ui/icons/Instagram";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

class SideNav extends React.Component<any | any, {}> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <div className="sideNavHome">
          <div className="sideBarIcons">
            <AccountBoxIcon id="sideIcon" />
            <SmsIcon id="sideIcon" />
            <ContactsIcon id="sideIcon" />
            <InstagramIcon id="sideIcon" />
          </div>
          <div className="sideBarExitIcon">
            <ExitToAppIcon id="sideIcon" />
          </div>
        </div>
      </div>
    );
  }
}

export default SideNav;
