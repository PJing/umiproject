import React, { useState, useEffect } from 'react'
import style from './index.less'
import { Button, NavBar, InputItem } from 'antd-mobile'
import http from '@/httpConfig'
import { v4 as uuidv4 } from 'uuid';
function Login() {
  const [phone, setPhone] = useState('')
  const [password, setPassowrd] = useState('')
  const [uuid, setUuid] = useState('')
  const [captcha, setCaptcha] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  useEffect(() => {
    getCaptchaUrl()
    console.log({ uuid })
    console.log({ phone })
    return (() => {
    })
  }, [])
  const getCaptchaUrl = () => {
    let id = uuidv4()
    setUuid(id)
    setImgUrl(`${process.env.BASEURL}/captcha?uuid=${id}`)
  }
  const submit = () => {
    http({
      url: '/login',
      method: 'post',
      data: {
        username: phone,
        password: password,
        uuid: uuid,
        captcha: captcha
      }
    }).then((res) => {
      console.log(res)
    })
  }
  return (
    <div>
      <NavBar
        mode="light"
      >登录</NavBar>
      <div className={style.content}>
        <div className={style.pdb}>
          <input type="text" className={style.ipt} placeholder="请输入手机号" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className={style.pdb}>
          <input type="password" className={style.ipt} placeholder="请输入密码" value={password} onChange={e => setPassowrd(e.target.value)} />
        </div>
        <div className={style.pdb}>
          <input type="text" className={style.ipt} placeholder="请输入验证码" value={captcha} onChange={e => setCaptcha(e.target.value)} />
        </div>
        <div className={style.pdb}>
          <img src={imgUrl} style={{ width: '100px', height: '40px' }} alt="" />
        </div>
        <Button type="primary" onClick={submit}>登录</Button>
        <span>{uuid}</span>
      </div>
    </div>
  )
}
export default Login