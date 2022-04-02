import { useState } from 'react';
import { CompleteAll } from './CompleteAll';
import { InputBox } from './InputBox';
import { List } from './List';
import { ListMode } from './ListMode';

export function ToDo() {
  const [newText, setNewText] = useState('');//8->9 newText写到things
  
  const [things, setThings] = useState([]);//内容

  const [IsComplete, setIsComplete] = useState([]);//已经complete的为1

  const [Items_noselect_Count, set_noselect_ItemsCount] = useState(0);//没有选择的数量
  
  const [visMode, setVisMode] = useState('All');

  return (
    <div>
    <div className="todoapp">
      <h1>TODOS</h1>
      <InputBox setNewText={setNewText} />
      <CompleteAll
        IsComplete={IsComplete}
        setIsComplete={setIsComplete}
        set_noselect_ItemsCount={set_noselect_ItemsCount}
      />
      <List
        things={things}
        newText={newText}
        visMode={visMode}
        setThings={setThings}
        IsComplete={IsComplete}
        setIsComplete={setIsComplete}
        set_noselect_ItemsCount={set_noselect_ItemsCount}
      />
      <ListMode
        things={things}
        IsComplete={IsComplete}
        setVisMode={setVisMode}
        Items_noselect_Count={Items_noselect_Count}
      />
      
    </div>
        <footer class="info">
              <p><a href="https://github.com/wufei-png/To_do_list"> Based on this example and fixed it's bug</a></p>
              <p><a href="https://github.com/wufei-png/">Visit My Github</a></p>
        </footer>
    </div>
  );
}
