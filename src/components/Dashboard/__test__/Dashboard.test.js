import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Dashboard from "../Dashboard";

describe("Dashboard", () => {
  it("Should add a new todo", async () => {});
});

// describe("submit todo", ()=>{
//     it("submit the form", async () =>{
//         const
//     })
// })

// describe("Should check the add New Todo logic", () => {
//   it("Should add a new todo", async () => {
//     // const onSubmit = jest.fn();
//     // const { getByPlaceholderText, getByText } = render(
//     //   <TodoList
//     //     listTodos={[]}
//     //     onListHandler={currentListHandler}
//     //     onSubmit={onSubmit}
//     //   />
//     // );
//     const mockAddTodoHandler = jest.fn();
//     render(
//       <TodoList
//         listTodos={[]}
//         onListHandler={currentListHandler}
//         addTodoHandler={mockAddTodoHandler}
//       />
//     );

//     const addBtnElement = screen.queryByRole("button", { name: "New Task" });
//     if (addBtnElement) {
//       fireEvent.click(addBtnElement);
//     }

//     const inputTitleElement = screen.getByPlaceholderText("Task title:");
//     const inputTextElement = screen.getByPlaceholderText(/task description/i);
//     const buttonElement = screen.getByTestId("add__todo_btn");

//     await act(async () => {
//       fireEvent.change(inputTitleElement, {
//         target: { value: "Go Grocery Shopping" },
//       });
//       fireEvent.change(inputTextElement, {
//         target: { value: "Apples, bananas, cooffe" },
//       });
//     });
//     await act(async () => {
//       fireEvent.click(buttonElement);
//     });
//     const todoDiv = screen.getByTestId("todos__div");
//     expect(todoDiv.innerHTML).toContainHTML("Go Grocery Shopping");
//   });
// });
