import {useState, useEffect} from 'react';

import {dataType, dataArrType} from './todoType';
import {TodoData} from './todoData';
import {TodoAddModal} from './todoAddModal';

const dummyData: dataArrType = [
    {
        id: 1,
        title: 'dummy',
        date: '2021/2/11',
        name: 'myName',
        memo: 'dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy'
    },
    {
        id: 2,
        title: 'dummy',
        date: '2021/2/11',
        name: 'myName',
        memo: 'dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy'
    },
    {
        id: 3,
        title: 'dummy',
        date: '2021/2/11',
        name: 'myName',
        memo: 'dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy'
    }
];

export const Todo = () => {
    const [data, setData] = useState(dummyData);
    const [dataLength, setDataLength] = useState(data.length);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAnimationModalClose, setIsAnimationModalClose] = useState(false);

    useEffect(() => {
        if (!isAnimationModalClose) {
            displayModal(false);
        }
    }, [isAnimationModalClose])

    const addData = (_data: dataType) => {
        const newData = [...data, _data];
        setData(newData);
        setDataLength(newData.length);
    }

    const deleteData = (_id: number) => {
        const newData = data.filter(data => data.id !== _id);
        setData(newData);
        setDataLength(newData.length);
    }

    const displayModal = (isOpen: boolean) => {
        setIsModalOpen(isOpen);
    }

    return (
        <div className="todo">
            <div className="todo-add"><button className="todo-add__btn" onClick={displayModal.bind(this, true)}>ADD</button></div>
            {isModalOpen ? <TodoAddModal addData={addData} dataLength={dataLength} isAnimationModalClose={isAnimationModalClose} setIsAnimationModalClose={setIsAnimationModalClose} /> : ''}
            <ul className="todo-data">
                {data.map(data => {
                    return <TodoData key={data.id} data={data} deleteData={deleteData} />
                })}
            </ul>
        </div>
    )
};
