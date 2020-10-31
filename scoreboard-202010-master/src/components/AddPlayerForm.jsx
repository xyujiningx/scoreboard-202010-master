import React from 'react';

class AddPlayerForm extends React.Component{
  state = {
    value:''
  }

  constructor(props) {
    super(props);
    //  createRef 클래스 컴포넌트에서만 사용할 수 있음
    // document.getElementBy가 아니라 DOM으로 접근하기 위해 사용
    this.formRef= React.createRef();
    this.textRef=React.createRef();
  }

  handleValueChange= (e)=> {
    this.setState({value:e.target.value})
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    //e.stopPropagation();
    console.log('handleSubmit');
    //text 노드에 접근하는 방법
    const form = this.formRef.current;
    const player = this.textRef.current; // = document.getElementById(id)
    console.log(form.checkValidity());
    console.log(player.validity.valid);
    /*
    if(!form.checkValidity()){
      // invalid 폼을 찾아서 에러 문구 표시
      return;
    }

     */
    this.props.addPlayer(this.state.value);
    // input값 빈칸 입력.
    this.setState({value:''})
  }
  // noValidate={}
  render() {
    return (
      <form ref={this.formRef} className="form" onSubmit={this.handleSubmit} noValidate>
        <input ref={this.textRef} type="text" className="input" required
          placeholder="enter a player's name"
          value={this.state.value}
          onChange={this.handleValueChange}
        />
        <input type="submit" className="input" value="Add Player"/>
      </form>
    )
  }
}

export default AddPlayerForm;