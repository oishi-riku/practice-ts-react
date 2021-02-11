import {dataType} from './todoType';

type propsType = {
    data: dataType,
    deleteData: (id: number) => void
}

export const TodoData = (props: propsType) => {
    const {data, deleteData} = props;
    const {id} = data;

    return (
        <li>
            <dl>
                <dt>タイトル</dt>
                <dd>{data.title}</dd>
                <dt>日にち</dt>
                <dd>{data.date}</dd>
                <dt>名前</dt>
                <dd>{data.name}</dd>
                <dt>メモ</dt>
                <dd>{data.memo}</dd>
            </dl>
            <div className="todo-data__delete"><button onClick={deleteData.bind(this, id)}>Delete</button></div>
        </li>
    )
}
