import { useState } from 'react';

  function classNames(props) {
    const { editing, completed } = props;
    if (editing) {
      return 'editing';//优先为edit
    } else if (completed) {
      return 'completed';
    } else {
      return 'view';
    }
  }
//每个独立的thing可以做的操作是编辑以及修改状态
  function EditThing(props) {
    const { index, things, setEditing } = props;
    return (
      <input
        className="edit"
        id={`edit${index}`}
        onKeyDown={e => {
          if (e.keyCode == 13) {
            things[index] = String(document.getElementById(`edit${index}`).value);
            setEditing(false);
          }
        }}></input>
    );
  }

function ChangeThingState(props) {
    const { index, IsComplete, set_noselect_ItemsCount } = props;
    return (
      <input
        type="checkbox"
        id={`button${index}`}
        className="toggle"
        checked={IsComplete[index]}
        onChange={() => {
          IsComplete[index] = IsComplete[index] == 0 ? 1 : 0;
          //console.log('Tmp[index]',Tmp[index]);
          //console.log('IsComplete[index] == 1',IsComplete[index] == 1);
          const button = document.getElementById(`button${index}`);
          if (IsComplete[index] == 1) {
            button.checked = true;
            //console.log("不应该执行这个啊");
            set_noselect_ItemsCount(prev => prev - 1);
          } else {
            button.checked = false;
            set_noselect_ItemsCount(prev => prev + 1);
          }
        }}
  ></input>
    );
  }

export function Thing(props) {
  const {
    keys,
    index,
    things,
    IsComplete,
    set_noselect_ItemsCount,
  } = props;


  const [IsEditing, setEditing] = useState(false);
  return (
    <li
      key={index}
      // index.js:1 Warning: Each child in a list should have a unique "key" prop.
      className={classNames({
        editing: IsEditing,
        completed: IsComplete[index],
      })}
      id={`Thing${index}`}>
      <div className="view">
        
        <ChangeThingState
          index={index}
          IsComplete={IsComplete}
          set_noselect_ItemsCount={set_noselect_ItemsCount}
        />
        <label
          onDoubleClick={() => {
            setEditing(true);
          }}>
          {things[index]}
        </label>
       </div>
      <EditThing
        index={index}
        things={things}
        setEditing={setEditing}    
      />

    </li>
  );
}
