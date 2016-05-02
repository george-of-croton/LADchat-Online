import React, {Component} from 'react'

class Login extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        <form action='/users' method='POST'>
          <h1>login</h1>
            <h3>username</h3>
              <input type="text" name="username"/>
            <h3>password</h3>
              <input type='text' name="password" />
                <input type="submit" />
        </form>
      </div>
    )
  }
}

export default Login
