import React, { useState, useEffect } from 'react';
import { Button, NavBar, Icon } from 'antd-mobile';
import {history} from 'umi'
function Example() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(10);
  const [work, setWork] = useState('前端工程师');
  useEffect(() => {
    console.log('useEffect', count);
  })
 
  return (
    <div>
      <NavBar
      mode="light"
      icon={<Icon type="left" />}
      onLeftClick={history.goBack}
      rightContent={[
        <Icon key="1" type="ellipsis" />,
      ]}
    >NavBar</NavBar>
      点击次数{count}
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click
      </Button>
      <p>年龄：{age}</p>
      <p>工作: {work}</p>
      <Button type="primary">
        去登陆
      </Button>
    </div>
  );
}
export default Example;
