import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//show the value passed in from the board renderSquare component 
//make the Square component fill in an "X" when you click it
//change button tag returneed in render function of Square
//Passing a function as the onClick prop
//Doing onClick={alert('click')} would alert immediately instead of when the button is clicked.

//React components can have state by setting this.state in the constructor, 
//which should be considered private to the component. 
//Let's store the current value of the square in state, 
//and change it when the square is clicked.

//In JavaScript classes, you need to explicitly call super(); 
//when defining the constructor of a subclass.

//Now change the Square render method to 
//display the value from the current state, and to toggle it on click:

 // <button className="square" onClick = {() => alert('click')}>
      //   {this.props.value}
      // </button>

//Replace this.props.value with this.state.value 

class Square extends React.Component {

  constructor() {
    super();
    this.state = {
      value: null, 

    };
    
  }

  render() {

    //when square is clicked, it calls the onClick function that was passed by Board
    
    return (
     
      <button className="square" onClick = {() => this.props.onClick()}>
        {this.props.value}
      </button>


    );
  }
}



class Board extends React.Component {
  //setting initial state with the constructor to contain an array with 9 nulls 
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  handleClick(i){
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares})
  }



  renderSquare(i) {
    //passing data/function from the Board component to the Square component when square is clicked
    //passing down value and onClick props to the Square
    //board component interacting/communicating with square component 
    return(
      <Square 
        value = {this.state.squares[i]}
        onClick={()=> this.handleClick(i)} 

      />
    )
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
