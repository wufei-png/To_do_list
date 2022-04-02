
function ModeButton(props) {
  const { setVisMode, Content } =
    props;
  return (
    <button
      type="button"
      onClick={() => {
        setVisMode(Content);
      }}>
      {Content}
    </button>
  );
}
  
function ClearCompleted(props) {
  const { 
    things,
    IsComplete,
  } = props;
  return (
    <button
      className="clear-completed"
      type="button"
      onClick={() => {
        //console.log("IsComplete.length执行完前:",IsComplete);
        for (let index = 0; index < things.length; index++) {
          const Thing = document.getElementById(`Thing${index}`);
          if (Thing == null) {
            continue;
          }
          if (IsComplete[index] == 1) {
            //Thing.parentNode.removeChild(Thing);
            Thing.style.display = 'none';
          }
        }
        for (let index = 0; index < IsComplete.length; index++) {
            while (IsComplete[index] == 1) {
            //console.log("这个依然可以进去");
            IsComplete.splice(index, 1);
            things.splice(index, 1);
          }
        }
      }}>
      Clear Completed
    </button>
  );
}

export function ListMode(props) {
  const {
    Items_noselect_Count,
    things,
    IsComplete,
    setVisMode
  } = props;


  return (
    <footer className="footer">
      <span className="todo-count"> {Items_noselect_Count} items left</span>{/* 这里好像不能用things.length代替，得用Count(state)左侧的值*/}
      
      <ul className="filters">
        <li>
          <ModeButton
            setVisMode={setVisMode}
            Content="All"
          />
        </li>
        <li>
          <ModeButton
            setVisMode={setVisMode}
            Content="Active"
          />
        </li>
        <li>
          <ModeButton
            setVisMode={setVisMode}
            Content="Completed"
          />
        </li>
      </ul>
      <ClearCompleted
        things={things}
        IsComplete={IsComplete}
      />
    </footer>
  );
}
