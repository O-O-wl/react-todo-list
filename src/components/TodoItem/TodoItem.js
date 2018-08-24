import React from 'react'
import styles from './TodoItem.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);


class TodoItem extends React.Component{
  render(){
      const{done,children,onToggle,onRemove}=this.props;
      // 비구조화 할당
      return(
          <div className={cx('todo-item')} onClick={onToggle} >
          <input className={cx('tick')} type="checkbox" checked={done} readOnly/>
          
           
          <div className={cx('text',{done})}>{children}</div>
          <div className={cx('delete')} onClick={(e)=>{onRemove(); e.stopPropagation(); }} >[지우기]</div>
          </div>
      )
            // e.stopPropagation 은 이벤트가 일어났을시  , 자식컴포넌트의 이벤트처리 이후 
            // 부모 컴포넌트의 이벤트가 이루어지면서 , onRemove 메소드가 실행된 직후 onToggle 메소드가 실행되어 상쇠된다.
            // 이 같은 흐름을 progagaion 이라고 한다,   이를 막기 위한 코드이다.

  }


}export default TodoItem;
