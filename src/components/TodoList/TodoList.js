import React from 'react'
import TodoItem from '../TodoItem';

class TodoList extends React.Component{

    render(){
      let {onToggle,list,onRemove}=this.props;
      
      let tag=list.map((li)=>{return(<TodoItem key={li.id} done={li.done} onRemove={()=>onRemove(li.id)} onToggle={()=>onToggle(li.id)}>{li.goal}</TodoItem>)});
        return(
            <div>
            {tag}
            </div>

        );
    }

}
export default TodoList;

