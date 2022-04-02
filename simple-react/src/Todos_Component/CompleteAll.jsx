export function CompleteAll(props) {
  const { IsComplete,  set_noselect_ItemsCount } =
    props;
  return (
    <span>
      <input
        className="toggle-all"
        id="toggle-all"
        type="checkbox"
        onClick={() => {
          let count = 0;
          for (let index = 0; index < IsComplete.length; index++) {
            count += !IsComplete[index];//没有完成的数量
            // console.log("cnt",IsComplete.length);
          }
          if (count > 0) {//存在没选的
            for (let index = 0; index < IsComplete.length; index++) {
              IsComplete[index] = 1;//更新IsComplete;，以便下次选择，都是选过的
              const button = document.getElementById(`button${index}`);
              if (button != null) {
                button.checked = true;//全选
              }
            }
            set_noselect_ItemsCount(0);//没有选择的为0
          } 
          else {//全选了
            for (let index = 0; index < IsComplete.length; index++) {
              IsComplete[index] = 0;//更新IsComplete;，以便下次选择，都是没选的
              const button = document.getElementById(`button${index}`);
              if (button != null) {
                button.checked = false;//全不选
                //console.log(“)
              }
            }
            set_noselect_ItemsCount(IsComplete.length);//没有选择的为全部
          }
          //setIsComplete(IsComplete);//用tmp更新IsComplete
        }}
      />
      <label htmlFor="toggle-all">::before</label>
    </span>
  );
}
