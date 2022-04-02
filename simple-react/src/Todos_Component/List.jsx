import { useEffect } from 'react';
import { Thing } from './Thing';

export function List(props) {
  const {
    newText,
    things,
    setThings,
    IsComplete,
    setIsComplete,
    set_noselect_ItemsCount,
    visMode,
  } = props;

  useEffect(() => {
    if (newText !== '') {
      setThings([...things, newText]);//添加新元素 
      setIsComplete([...IsComplete, 0]);//新进来的为0
      //set_noselect_ItemsCount(prev => prev + 1);
      set_noselect_ItemsCount(prev => prev + 1);//未被选的加1
      //console.log("渲染几次");
    }
    // setNewText(prev => '');
  }, [newText]);//newText更新了，就执行  setNewText(document.getElementById('BoxText').value);//按下enter将框内的值传给state；子元素
//传递给父节点box，box传递给list,监测newText的改变
  useEffect(() => {//按下enter执行一次
    document.getElementById('BoxText').value = '';
  }, [things]);//更新了，就清空输入框

console.log("visMode",visMode);
  return (
    <div>
      <ul className="todo-list"> 

      {/* 我发现这个return会执行两次，但我按下enter给一个newtext的时候，应该是幂等性的缘故 */}
      
        {things.map((item, index) => {
           //console.log("mapz中lisitem length:",things.length);
          if (
            (IsComplete[index] ==1&& visMode=="Completed" ||
            IsComplete[index] ==0&& visMode=="Active"||
            visMode=="All")//元素是完成并且现在的模式是完成或者未完成模式是active或者模式是all
          ) {
            //console.log("map:",index);
            return (
              <Thing
                key={index}
                index={index}
                things={things}
                IsComplete={IsComplete}
                set_noselect_ItemsCount={set_noselect_ItemsCount}
              />
            );
          } else {
            return null;
          }
        })}
      </ul>
    </div>
  );
}
