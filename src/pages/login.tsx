import { Component } from 'react';
import { Button, InputItem, WingBlank } from 'antd-mobile';
export default class extends Component {
  state = {
    index: 0,
    menuIndex: 0,
    menu: [],
    info: {},
    type: 'number',
    title: '用户名：'
  };
  componentDidMount() {
    console.log(123);
  }
  onchange = (val) => {
    console.log('val: ', val);
  }
  getVal = (val) =>  {
    console.log(val)
  }
  render() {
    return (
      <div>
        <InputItem
          placeholder="左边光标"
          clear
          moneyKeyboardAlign="left"
          onChange={this.onChange}
        >{this.state.title}</InputItem>
        <Button type="primary" onClick={this.getVal}>确定</Button>
      </div>
    );
  }
  
}
