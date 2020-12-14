// Jared Borst, 12/13/2020
import React, { Component } from "react";
 
class Signin extends Component {
  render() {
    return (
      <div>
        <h2>Sign in below.</h2>
        <form>
            <label>
                Account Name:
                <input type="text" name="nameSignIn" /><br />
            </label>
            <label>
            <br />Password:
                <input type="text" name="knownPassword" />
            </label>
            <br /><br /><input type="submit" value="Submit" />
        </form>
        
        <h2>Or if you don't have an account, Sign Up</h2>
        <form>
            <label>
                Account Name:
                <input type="text" name="nameOne" /><br />
            </label>
            <label>
            <br /> Password:
                <input type="text" name="newPassword" /><br />
            </label>
            <br /> <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
 

export default Signin;
