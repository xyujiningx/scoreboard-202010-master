import React from 'react';
import Player from "./Player";

// ctrl+shift+/ ==> 주석처리
class Counter extends React.Component {

  constructor(props) {
    super(props);
    // 1) this.incrementScore = this.incrementScore.bind(this);
  }
/*
  이제 부모가 처리해야하므로 app.js에서 처리하는걸로 이동

  changeScore = (delta) => {
    // 2) arrow 펑션안의 this는 lexical this
    console.log(this);
    // 1. state를 변경하는 방법
    // this.state.score += 1;
    // this.setState({score: this.state.score + 1});
    // 2. merge 된다. : 기존 속성으 그대로 유지
    // 3. 비동기로 처리
    this.setState(prevState => ({
      score: prevState.score + delta
    }));
  }*/

  render() {
    return (
      <div className='counter'>
        <button className='counter-action decrement'
                onClick={() => this.props.changeScore(-1,this.props.id)}> -
        </button>
        <span className='counter-score'>{this.props.score}</span>
        <button className='counter-action increment'
                onClick={() => this.props.changeScore(1,this.props.id)}> +
        </button>
      </div>
    );
  }
}

export default Counter;