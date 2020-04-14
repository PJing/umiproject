import React, { useState, createContext } from 'react';
import ChildPage from '@/components/childPage'

export const CountContext = createContext()
const count = 1
function ExampleUseContext() {
    return (
        <div>
            <h4>父子组件传值</h4>
            <h5>我是父组件的count： {count}</h5>
            <CountContext.Provider value={count}>
                <ChildPage></ChildPage>
            </CountContext.Provider >
        </div>
    )
}
export default ExampleUseContext