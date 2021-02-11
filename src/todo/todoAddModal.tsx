import {dataType} from './todoType';

type propsType = Readonly<{
    dataLength: number,
    isAnimationModalClose: boolean,
    addData: (data: dataType) => void,
    setIsAnimationModalClose: (isAnimation: boolean) => void,
}>

export const TodoAddModal = (props: propsType) => {
    const {addData, dataLength, isAnimationModalClose, setIsAnimationModalClose} = props;

    const handleTransitionEnd = (): void => {
        if (isAnimationModalClose) {
            setIsAnimationModalClose(false);
        }
    };

    const handleClickClose = (): void => {
        setIsAnimationModalClose(true);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const title = e.currentTarget.elements.namedItem('title');
        const date = e.currentTarget.elements.namedItem('date');
        const name = e.currentTarget.elements.namedItem('name');
        const memo = e.currentTarget.elements.namedItem('memo');

        if (
            (title instanceof HTMLInputElement && title.value) &&
            (date instanceof HTMLInputElement && date.value) &&
            (name instanceof HTMLInputElement && name.value) &&
            (memo instanceof HTMLInputElement && memo.value)
        ) {
            const data: dataType = {
                id: dataLength + 1,
                title: title.value,
                date: date.value,
                name: name.value,
                memo: memo.value,
            };
            addData(data);
            setIsAnimationModalClose(true);
        } else {
            alert('入力が足りていません');
        }
    };

    return (
        <div className={`todo-modal${isAnimationModalClose ? ' is-animation-close' : ''}`} onTransitionEnd={handleTransitionEnd}>
            <div className="todo-modal-inner">
                <div className="todo-modal__btn"><button onClick={handleClickClose}>Close</button></div>
                <form className="todo-modal-form" onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>タイトル</legend>
                        <input type="text" name="title" />
                    </fieldset>
                    <fieldset>
                        <legend>日付</legend>
                        <input type="text" name="date" />
                    </fieldset>
                    <fieldset>
                        <legend>名前</legend>
                        <input type="text" name="name" />
                    </fieldset>
                    <fieldset>
                        <legend>メモ</legend>
                        <input type="text" name="memo" />
                    </fieldset>
                    <button type="submit">ADD</button>
                </form>
            </div>
        </div>
    );
};
