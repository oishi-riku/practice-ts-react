import React from 'react';

type propsType = {
    content: string | undefined,
}

export const TabContent = (props: propsType) => {
    const {content} = props;
    if (!content) {
        return <div>なし</div>
    };

    return (
        <div className="tab-content-item">
            <p>{content}</p>
        </div>
    )
}
