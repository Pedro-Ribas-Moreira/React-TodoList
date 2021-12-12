// import { Drawer } from "@mui/material";
import { render, screen, fireEvent } from "@testing-library/react";
import Headers from "../Headers";

describe("Should load headers component", () => {
  it("renders learn react link", async () => {
    render(<Headers list={[]} />);
    const linkElement = screen.getByRole("heading", { name: "Task Manager" });
    // const linkElement = screen.getByText(/task manager/);
    expect(linkElement).toBeInTheDocument();
  });

  it("should check if drawer is close", async () => {
    render(<Headers />);
    const menuBtnElement = screen.queryByTestId("drawer-closed");
    const leftBtnElement = screen.queryByTestId("drawer-open");

    expect(leftBtnElement).toBeVisible();
    expect(menuBtnElement).not.toBeVisible();
  });

  it("should check if drawer is opening", async () => {
    render(<Headers />);
    const leftBtnElement = screen.getByTestId("drawer-open");
    const menuBtnElement = screen.getByTestId("drawer-closed");

    fireEvent.click(leftBtnElement);
    expect(menuBtnElement).toBeVisible();
    expect(leftBtnElement).not.toBeVisible();
  });
});
