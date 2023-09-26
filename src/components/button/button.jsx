import React from 'react'

import './_button.scss'


export default function Btn(props) {
    return (
        <button type={props.type} className={props.class} >{props.text}</button>
    )
}
