import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Breadcrumb from "../../components/Breadcrumb";
import "@testing-library/jest-dom";

let initialState: any = {
  products: {
    categories: ["Autos y Camionetas", "Carros Zorra"],
    items: [
      {
        id: "MLA1129805664",
        title: " iPhone 7 128 Gbnegro Brillante",
        picture:
          "http://http2.mlstatic.com/D_836986-MLA43701600173_102020-I.jpg",
        condition: "new",
        free_shipping: true,
        city: "Bogotá",
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

describe("<Breadcrumb /> component", () => {
  let component: any;

  beforeEach(() => {
    store = mockStore(initialState);
    component = render(
      <Provider store={store}>
        <Breadcrumb />
      </Provider>,
      { wrapper: BrowserRouter }
    );
  });

  it("should render a links with categories", () => {
    const { getByText } = component;
    const { categories } = store.getState().products;

    categories.forEach((category: string) => {
      expect(getByText(category)).toBeInTheDocument();
    });
  });

  it("should not displayed a breadcrumb", () => {
    component.rerender();
    const { container } = component;
    expect(container.firstChild).toBe(null);
  });
});
