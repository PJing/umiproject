import React, { useState } from 'react';
import { Button, WhiteSpace, InputItem, Toast } from 'antd-mobile';
import http from '@/httpConfig';
import { history } from 'umi';
import Cookie from 'js-cookie';
function Sign() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitGit = () => {
    http({
      url: '/pm/admin/sysUser/gitlabLogin',
      method: 'get',
    }).then(res => {
      window.location.href = res.dataInfo;
    });
  };
  const submit = () => {
    http({
      url: '/pm/admin/sysUser/login',
      method: 'post',
      data: {
        username,
        password,
      },
    }).then(res => {
      console.log(res);
      Cookie.set('token', res.dataInfo.token);
      Toast.success('登录成功', 1, () => {
        history.push('home');
      });
    });
  };

  return (
    <>
      <div style={{ padding: '10px' }}>
        <h1>登录</h1>
        <InputItem
          clear
          placeholder="请输入用户名"
          value={username}
          onChange={e => {
            setUsername(e);
          }}
        ></InputItem>
        <WhiteSpace />
        <InputItem
          clear
          type="password"
          placeholder="请输入密码"
          value={password}
          onChange={e => {
            setPassword(e);
          }}
        ></InputItem>
        <WhiteSpace />
        <Button
          type="primary"
          disabled={!(username && password)}
          onClick={submit}
        >
          登录
        </Button>
        <WhiteSpace />
        <Button type="primary" onClick={submitGit}>
          使用git登录
        </Button>
      </div>
    </>
  );
}
export default Sign;
