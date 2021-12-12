import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import TodoList from "../TodoList";

afterEach(() => {
  cleanup();
});

const currentListHandler = jest.fn();
const mockList = [
  {
    check: false,
    priority: false,
    archive: false,
    waiting: false,
    title: "grocery list",
    text: "apple, banana, coffee",
    key: new Date().getMilliseconds(),
  },
];

describe("Should load main todo div", () => {
  it("renders learn react link", async () => {
    render(<TodoList listTodos={[]} onListHandler={currentListHandler} />);
    const mainGridElement = screen.getByTestId("todo__grid");
    expect(mainGridElement).toBeVisible();
  });

  it("should check if list is rendering", async () => {
    render(
      <TodoList listTodos={mockList} onListHandler={currentListHandler} />
    );
    const todoItemElement = screen.getByText("grocery list");
    expect(todoItemElement).toBeInTheDocument();
  });

  it("Should check if the add btn is working", async () => {
    render(<TodoList listTodos={[]} onListHandler={currentListHandler} />);
    const addBtnElement = screen.getByRole("button", { name: "New Task" });
    fireEvent.click(addBtnElement);
    const buttonElement = screen.getByRole("button", { name: /Add new task/i });
    const inputTitleElement = screen.getByPlaceholderText("Task title:");
    const inputTextElement = screen.getByPlaceholderText(/task description/i);

    expect(buttonElement).toBeVisible();
    expect(inputTitleElement).toBeVisible();
    expect(inputTextElement).toBeVisible();
  });

  it("should check if todo render proprely", async () => {
    render(
      <TodoList listTodos={mockList} onListHandler={currentListHandler} />
    );
    const todoItem = screen.getByText("grocery list");
    const dltBtnElement = screen.getByTestId("delete__todo__btn");
    const priorityBtnElement = screen.getByTestId("priority__todo__btn");
    const archiveBtnElement = screen.getByTestId("archive__todo__btn");
    const waitingBtnElement = screen.getByTestId("waiting__todo__btn");

    expect(todoItem).toBeInTheDocument();
    expect(dltBtnElement).toBeInTheDocument();
    expect(priorityBtnElement).toBeInTheDocument();
    expect(archiveBtnElement).toBeInTheDocument();
    expect(waitingBtnElement).toBeInTheDocument();
  });
});
