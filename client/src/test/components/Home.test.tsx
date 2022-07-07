import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Home from "../../components/Home";
import "@testing-library/jest-dom";
import { Interface } from "readline";

let initialState: any = {
  products: {
    items: [
      {
        id: "MLA1129805664",
        title: " iPhone 7 128 Gbnegro Brillante",
        picture:
          "http://http2.mlstatic.com/D_836986-MLA43701600173_102020-I.jpg",
        condition: "new",
        free_shipping: true,
        price: {
          currency: "ARS",
          amount: 152200,
          decimals: 0,
        },
      },
    ],
  },
};
const mockStore = configureStore();
let store: any;

describe("<Home /> component", () => {
  let component: any;

  beforeEach(() => {
    store = mockStore(initialState);
    component = render(
      <Provider store={store}>
        <Home />
      </Provider>,
      { wrapper: BrowserRouter }
    );
  });

  it("should render a items", () => {
    const { container, debug } = component;
    const { items } = store.getState().products;

    expect(container.firstChild).toBeDefined();

    items.forEach((item: any) => {
      expect(container.querySelector("img").src).toBe(item.picture);
      expect(container.querySelector("a").href).toContain(item.id);
      expect(
        container.querySelector(".item-info__description").textContent
      ).toBe(item.title);
    });
  });

  // it("Should not render items if store is empty", () => {
  //   const { container } = component;
  //   expect(container.firstChild).toBe(null);
  // });
});
