import { create } from "zustand";

export const useTodoStore = create((set) => ({
  todos: [],
  setTodos: (todos) => set({ todos }),
  addTodo: (todo) =>
    set((state) => ({
      todos: [todo, ...state.todos],
    })),
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  clearTodos: () => set({ todos: [] }),
  updateTodo: (id, todo) =>
    set((state) => ({
      todos: state.todos.map((t) => (t.id === id ? todo : t)),
    })),
}));
