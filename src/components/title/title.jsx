import  { Component } from 'react';
class Title extends Component {
  constructor(){
    super()
    this.state = {
      title: 'Hi Coder!'
    }
  }
  
  render() { 
    return <div>
      <h1>{this.state.title}</h1>
    </div>;
  }
}
 
export default Title;