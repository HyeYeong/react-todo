import React, { useReducer, createContext, useContext, useRef } from "react";

const initialTodos = [
  { id: 0, text: "리덕스 공부하기", done: false },
  { id: 1, text: "여행 계획 짜기", done: true },
  { id: 2, text: "영어공부하기", done: false },
  { id: 3, text: "투두 리스트 만들기", done: false },
];

const todoReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_TODO":
      return state.concat(action.todo);
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled actiontype: ${action.type}`);
  }
};

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

export const useTodoState = () => {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
};
export const useTodoDispatch = () => {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
};
export const useTodoNextId = () => {
  const context = useContext(TodoNextIdContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
};
