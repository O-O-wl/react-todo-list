import React from 'react';
import TodoInput from './TodoInput';
import PageTemplate from './PageTemplate';
import TodoList from './TodoList';


/*
일정관리 웹어플리케이션이다.
프론트엔드에서만 동작한다
다른 상위 또는 수평의 컴포넌트와 데이터를 주고 받기 위해서는 
상위 컴포넌트에 함수와 데이터를 정의해 두는게 더 유리하다.
*/




class App extends React.Component{
    
    state={input:'',
           todos:[
               {id:0,goal:'리액트공부하기',done:true},
               {id:1,goal:'컴포넌트스타일링 공부하기',done:false}
           ]};

    handleChange=(e)=>{
        let value=e.target.value;   //구조화 할당
        this.setState({input:value})
        }


    id=1;
    getID=()=>{return(++this.id)}
        // 아이디접근이 안되게 되어 있으므로 , 이런 식으로 선언


    handleInsert=()=>{
        if(this.state.input===''){
            alert("입력된 내용이 없습니다.");
            return;}
        let newList = this.state.todos.slice(0);
        
        
        let newTodo={id:this.getID() , goal:this.state.input , done:false};
        newList.push(newTodo);
        this.setState({todos:newList,input:''});
    }


    handleToggle=(id)=>{
        const{todos}=this.state;
        const index =todos.findIndex(li=>li.id===id) ; 
        // 이벤트가 일어난 아이디와 일치하는 아이디를 배열에서 찾아서 배여르이 인덱스를 반환
        
        const toggled = {...todos[index],done:!todos[index].done};

        // 인덱스에 해당하는 객체의 done값을 반전
    
        this.setState({
            todos: [...todos.slice(0, index), toggled, ...todos.slice(index + 1, todos.length) ]
        })
        // 전개연산자로 취합하여 배열을 만든다.

    }


    handleRemove =(id)=>{
        const {todos}=this.state;
        const index = todos.findIndex(li=>li.id===id);
        let newList=[...todos.slice(0,index),...todos.slice(index+1,todos.length)]
        this.setState({todos:newList});
    }


    render(){

        const {input}=this.state;  // 비구조화 할당
        const {handleChange,handleRemove}=this;
        const {handleInsert,handleToggle}=this;
    
        return(
        
            <PageTemplate >
            <TodoInput value={input}  onChange={handleChange} onInsert={handleInsert}/>
            <TodoList list={this.state.todos} onToggle={handleToggle} onRemove={handleRemove}/>
            </PageTemplate>
        );
        }
    }
export default App;
