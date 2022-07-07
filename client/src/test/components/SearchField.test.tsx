import { fireEvent, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import SearchField from "../../components/SearchField";
import "@testing-library/jest-dom";

const initialState = {};
const mockStore = configureStore();
let store;

describe("<SearchField /> component", () => {
  let component: any;

  beforeEach(() => {
    store = mockStore(initialState);
    component = render(
      <Provider store={store}>
        <SearchField />
      </Provider>,
      { wrapper: BrowserRouter }
    );
  });

  it("Should exect a function when form is submited", () => {
    const { container } = component;
    const form = container.querySelector("form");
    const handleSubmit = jest.fn();

    form.onsubmit = handleSubmit;

    fireEvent.submit(form);

    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
