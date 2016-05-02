import React, {Component} from 'react'

class Signup extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        <form id="signupForm" action='/' method='POST'>
          <h1> signup </h1>
            <h2>username</h2>
              <input type='text' name="username" />
          <h3> signup </h3>
            <h2>password</h2>
              <input type='password' name='password' />
                <input type="submit"/>
        </form>
      </div>
    )
  }
}


export default Signup
