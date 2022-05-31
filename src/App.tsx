import React, { useState } from 'react';
import { GlobalStyle, Wrapper } from './App.style';
import CreateSection, { CreateInput } from './components/CreateSection';
import TodoCard, { Todo } from './components/TodoCard';
import { isEmptyString } from './utils';

const App: React.FC = () => {

  const [todos, setTodos] = useState<Todo[]>([]);

  const [createTitle, setCreateTitle] = useState("");
  const [createDescription, setCreateDescription] = useState("");

  const addTodo = () => {
    if (validateTodo(createTitle, createDescription)) {
      setTodos([...todos, { title: createTitle, description: createDescription }])
      clearCreateInputs();
    };
  }

  const removeTodo = (todoIndex:number) => {
    setTodos(todos.filter((todo, index) => index != todoIndex));
  }

  const validateTodo = (title: string, description: string): boolean => {
    return !isEmptyString(title) && !isEmptyString(description);
  }

  const onChange = (input: CreateInput, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let value = e.target.value;

    switch (input) {
      case CreateInput.TITLE: setCreateTitle(value); break;
      case CreateInput.DESCRIPTION:  setCreateDescription(value);  break;
    }
  }

  const clearCreateInputs = () => {
    setCreateTitle("");
    setCreateDescription("");
  }

  return (
    <>
      <GlobalStyle />
      <Wrapper>

        <h1 className='title'>TODO APP</h1>
        <h2>Count: {todos.length}</h2>

        <CreateSection addCallback={addTodo} inputChange={onChange} titleValue={createTitle} descriptionValue={createDescription}/>
          
        <TodoCard todos={todos} removeCallback={removeTodo} />

      </Wrapper>
    </>
  );
}

export default App;
