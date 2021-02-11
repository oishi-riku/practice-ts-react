import React, {useState} from 'react';

import {TabBtn} from './tabBtn';
import {TabContent} from './tabContent';
import {tabItemType} from './tabItemType';

const tabItems: tabItemType[] = [
    {
        id: 1,
        btn: 'タブ1',
        content: 'タブコンテンツ1タブコンテンツ1タブコンテンツ1'
    },
    {
        id: 2,
        btn: 'タブ2',
        content: 'タブコンテンツ2'
    },
    {
        id: 3,
        btn: 'タブ3',
        content: 'タブコンテンツ3タブコンテンツ3タブコンテンツ3タブコンテンツ3タブコンテンツ3タブコンテンツ3'
    }
]

export const Tab = () => {
    const [selectTabId, setSelectTabId] = useState(0);
    const handleClick = (id: number) => {
        setSelectTabId(id);
    };
    const getContent = (): string => {
        const content = tabItems.find(item => item.id === selectTabId);
        if (content) {
            return content.content;
        }
        return 'なし';
    }
    return (
        <>
            <div className="tab">
                <ul>
                    {tabItems.map((item) => {
                        return <li key={item.id}><TabBtn btn={item} handleClick={handleClick} isSelect={item.id === selectTabId} /></li>
                    })}
                </ul>
            </div>
            <div className="tab-content"><TabContent content={getContent()} /></div>
        </>
    )
}
