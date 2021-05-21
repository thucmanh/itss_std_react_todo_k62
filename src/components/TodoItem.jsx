/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem( {item, checkDone} ) {
  const handleChange = () => {
    checkDone(item);
  }
  return (
    <label className="panel-block">
      <input type="checkbox" onClick={handleChange} checked={item.done}/>
      <span className={item.done ? 'has-text-grey-light' : ''}>
        {item.text}
      </span>
    </label>
  );
}

export default TodoItem;