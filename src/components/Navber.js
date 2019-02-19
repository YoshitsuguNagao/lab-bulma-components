import CoolButton from "./CoolButton";
import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar is-transparent">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"></img>
          </a>
        </div>

        <div id="navbarExampleTransparentExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" href="https://bulma.io/">
              Home
            </a>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <CoolButton isSmall isInfo href="https://github.com/jgthms/bulma/releases/download/0.7.4/bulma-0.7.4.zip">Login</CoolButton>
                  {/* <a class="button is-info" href="https://github.com/jgthms/bulma/releases/download/0.7.4/bulma-0.7.4.zip">
                    <span>Login</span>
                  </a> */}
                </p>
                <p class="control">
                  <CoolButton isSmall isPrimary href="https://github.com/jgthms/bulma/releases/download/0.7.4/bulma-0.7.4.zip">Signup</CoolButton>
                  {/* <a class="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.7.4/bulma-0.7.4.zip">
                    <span>Signup</span>
                  </a> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
