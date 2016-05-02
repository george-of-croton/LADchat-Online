import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Signup from './Signup'
import Login from './Login'


class FrontMenu extends Component {
  constructor(props){
    super(props)
  }
  mountLogin(){
    ReactDOM.render(React.createElement(Login), document.getElementById('b'))
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }
  mountSignup(){
    ReactDOM.render(React.createElement(Signup), document.getElementById('a'))
    ReactDOM.unmountComponentAtNode(document.getElementById('b'))
  }



  render(){
    return (
          <div id='FrontMenu'>
            <div id='signupBtn' onClick={this.mountSignup.bind(this)}>sign-up</div>
            <div id='loginBtn' onClick={this.mountLogin.bind(this)}>login</div>
            <div id ='a'></div>
            <div id ="b"></div>
          </div>
      )
  }
}

export default FrontMenu
