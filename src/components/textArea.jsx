import React, {useContext} from  'react'

import {ColorContext} from './color'
function TextArea() {
    const color = useContext(ColorContext).color
    return (
        <div style={{ color: color }}>
            文字颜色是{color}
        </div>
    )
}
export default TextArea