export function InputBox(props) {
  const { setNewText } = props;
  return (
    <input
      type="text"
      id="BoxText"
      className="new-todo"
      placeholder="What needs to be done?"

      onKeyDown={e => {
        if (e.keyCode == 13) {
          setNewText(document.getElementById('BoxText').value);//按下enter将框内的值传给state
          const TmpButton = document.getElementById('toggle-all');
          TmpButton.checked = false;//enter后取消check,比较人性化
        }
      }}></input>
  );
}
