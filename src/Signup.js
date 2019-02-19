import React, { Component } from 'react';
import Navbar from "./components/Navber";
import FormField from "./components/FormField";
import CoolButton from "./components/CoolButton";

class Signup extends Component {
  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" placeholder="********" />
        <CoolButton isSmall isDanger className="is-rounded my-class">Submit</CoolButton>
      </div>
    );
  }
}

export default Signup;