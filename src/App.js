import React from 'react'

class App extends React.Component{
  constructor(){
    super()
    this.state = {counter:true}
  }

  render(){
    return(
      <>
      <h1>this is my counter {this.state.counter}</h1>
      <button onClick={()=> this.setState({counter:this.state.counter + 1})}>add one</button>
      <button onClick={()=> this.setState({counter:this.state.counter - 1})}>Remove One</button>
      </>
    )
  }
}
export default App