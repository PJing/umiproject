import React, { useState, useEffect } from 'react';
import { Button } from 'antd-mobile'
import { Link, history } from 'umi'
function Example() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('德华')
    useEffect(() => {
        console.log({count})
        return () => {
            console.log('组件销毁')
        }
    },[])
    const toRegister = () => {
        history.push('/register');
    }
    return (
        <div>
            <p>我点击了{count} 次</p>
            <Button type="primary" onClick={() => { setCount(count + 1) }}>点击</Button>
            <p>{name}</p>
            <Link to="/login">去登录页面</Link>
            <Button type="primary" onClick={toRegister}>去注册</Button>
        </div>
    )
}
export default Example