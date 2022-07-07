import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Header from "../../components/Header";
import "@testing-library/jest-dom";

const initialState = {};
const mockStore = configureStore();
let store;

describe("<Header /> component", () => {
  let component: any;

  beforeEach(() => {
    store = mockStore(initialState);
    component = render(
      <Provider store={store}>
        <Header />
      </Provider>,
      { wrapper: BrowserRouter }
    );
  });

  it("should render logo", () => {
    const { container } = component;
    const displayedImage = container.querySelector("img") as HTMLImageElement;
    expect(displayedImage.src).toContain("logo__large_plus.png");
    expect(displayedImage.alt).toBe("logo");
  });

  it("should render a form with input and button", () => {
    const { container } = component;
    const searchField = container.querySelector("#search") as HTMLInputElement;
    const button = container.querySelector("button") as HTMLElement;

    expect(searchField).toBeDefined();
    expect(button).toBeDefined();
  });
});
