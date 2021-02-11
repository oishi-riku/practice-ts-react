import React from 'react';
import {toggleItemType} from './toggleItemType';

type itemType = {
    item: toggleItemType,
    handleClick: (num: number) => void
}

export const ToggleItem = (props: itemType) => {
    const {id, btn, content, isOpen} = props.item;
    const getBtn = () => {
        return (
            <div className="toggle-btn"><button type="button" onClick={() => props.handleClick(id)}>{`${btn}${isOpen ? ' 開いたよ' : ''}`}</button></div>
        )
    }
    const getContent = () => {
        return (
            <div className={`toggle-content${isOpen ? ' is-open' : ''}`}>{content}</div>
        )
    }
    return (
        <div className="toggle-item">
            {getBtn()}
            {getContent()}
        </div>
    )
}
