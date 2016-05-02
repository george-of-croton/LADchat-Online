import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import FrontMenu from './FrontMenu'



class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render(){
    return (
      <div>
        <h1> LadChat-Online </h1>
        <FrontMenu />
      </div>
      )
  }
}

ReactDOM.render(
  <App />
  , document.getElementById('app')
  )
