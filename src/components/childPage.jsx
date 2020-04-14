import React, { useContext } from 'react';
import {CountContext} from '@/pages/exampleUseContext'

function ChildPage() {
    return (
        <div>
            我是子组件的count：{useContext(CountContext)}
        </div>
    )

}
export default ChildPage