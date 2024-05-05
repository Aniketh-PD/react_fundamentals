import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../store/store";
import { BrowserRouter } from "react-router-dom";

describe("Test cases for Header component", () => {
  test("test whether Header component is loaded", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
    const Home = screen.getByText("Home");
    expect(Home).toBeInTheDocument();
  });
});
