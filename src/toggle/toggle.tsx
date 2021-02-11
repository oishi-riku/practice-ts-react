import React, {useState} from 'react';

import {ToggleItem} from './toggleItem';
import {toggleItemType} from './toggleItemType';

const toggleItems: toggleItemType[] = [
    {
        id: 1,
        btn: 'トグル1',
        content: 'トグルコンテンツ1トグルコンテンツ1トグルコンテンツ1',
        isOpen: false
    },
    {
        id: 2,
        btn: 'トグル2',
        content: 'トグルコンテンツ2',
        isOpen: false
    },
    {
        id: 3,
        btn: 'トグル3',
        content: 'トグルコンテンツ3トグルコンテンツ3トグルコンテンツ3トグルコンテンツ3トグルコンテンツ3トグルコンテンツ3',
        isOpen: false
    }
]

export const Toggle = () => {
    const [toggle, setToggle] = useState(toggleItems);
    const handleClick = (id: number) => {
        const [...newToggle] = toggle;
        const item = newToggle.find(item => item.id === id);
        if (!item) {
            throw new Error('予期しないエラー');
        }
        item.isOpen = item.isOpen ? false : true;

        setToggle(newToggle);
    }
    return (
        <div className="toggle">
            {toggle.map((item: toggleItemType) => {
                return <ToggleItem key={item.id} item={item} handleClick={handleClick} />
            })}
        </div>
    )
}
