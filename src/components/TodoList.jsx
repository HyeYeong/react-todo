import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList({ children }) {
  return (
    <TodoListBlock>
      <TodoItem done={true} text={"aaaaaaaaaa"} />
      <TodoItem done={false} text={"bbbbb"} />
      <TodoItem done={false} text={"ccccc"} />
      <TodoItem done={true} text={"dddddd"} />
      <TodoItem done={true} text={"eee"} />
    </TodoListBlock>
  );
}

export default TodoList;
