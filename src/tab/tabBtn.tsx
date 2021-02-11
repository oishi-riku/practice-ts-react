import React from 'react';
import {tabItemType} from './tabItemType';

type propsType = {
    btn: tabItemType,
    handleClick: (num: number) => void,
    isSelect: boolean
}

export const TabBtn = (props: propsType) => {
    const {id, btn} = props.btn;
    return (
        <button className={`tab-btn${props.isSelect ? ' is-select' : ''}`} type="button" onClick={() => props.handleClick(id)}>{btn}</button>
    )
}
