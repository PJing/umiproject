import React, { useReducer } from 'react';

const name = '张三'

function reducer(state, action) {
    return name + '变成了' + action
}

function ExampleUseReducer() {
    const [state, dispatch] = useReducer(reducer, name)
    const consoleLog = () => {
        console.log(state)
    }
    return (
        <div>
            我的名字是{state}
            <button onClick={() =>  dispatch('李四')}>变成李四</button>
            <button onClick={() =>  dispatch('王五')}>变成王五</button>
            <button onClick={consoleLog}>点击会打印名字</button>
        </div>
    )
}
export default ExampleUseReducer