import React ,{Component}from 'react';
import './App.css';

class DiceRoll extends Component {

constructor(props)
{
  super(props)
  this.state={
    dice1:'one',
    dice2:'one',
    status:false,
    }
    this.roll=this.roll.bind(this);
}

roll(){
  let dicearr=['one','two','three','four','five','six'];
 this.setState({
            dice1:dicearr[Math.floor(Math.random()*6)],
            dice2:dicearr[Math.floor(Math.random()*6)],
            status:true
        })


        setTimeout(()=>{
          this.setState({status:false});
        },1000);
     }

 

  render() { 

    return ( 
      <div className='App'>
          <h1>{this.state.dice1}-DiceRoll-{this.state.dice2}</h1>
            <i className={`fas fa-dice-${this.state.dice1}`}></i>
            <i className={`fas fa-dice-${this.state.dice2}`}></i>
        
           <button onClick={this.roll} className="DiceRoll-btn" disabled={this.state.status}>
            {this.state.status?"Rolling....":"Roll Dice!!!"}</button>
      </div>
      );
  }
}
 
export default DiceRoll;
