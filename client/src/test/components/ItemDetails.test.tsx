import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom";
import ItemDetail from "../../components/ItemDetail";

let initialState: any = {
  product: {
    item: {
      id: "MLA681197045",
      title: "Bolsas Papel Lisas Para Souvenir - Lollipop - X 10 U",
      picture: "http://http2.mlstatic.com/D_759630-MLA41304724048_042020-I.jpg",
      condition: "new",
      free_shipping: false,
      sold_quantity: 3035,
      price: {
        currency: "ARS",
        amount: 260,
        decimals: 0,
      },
      description:
        "SOMOS LOLLIPOP\n\nPack de 10 Bolsitas Lisas Sin Manija - Lollipop - Ideal Souvenir - Excelente calidad!\n\nMedidas Bolsa: 12 x 24 x 7 cm\n\nPor favor antes de ofertar consultanos si tenemos el color que estás buscando.",
    },
  },
};
const mockStore = configureStore();
let store: any;

describe("<ItemDetail /> component", () => {
  let component: any;

  beforeEach(() => {
    store = mockStore(initialState);
    component = render(
      <Provider store={store}>
        <ItemDetail />
      </Provider>,
      { wrapper: BrowserRouter }
    );
  });

  it("should render a details from item", () => {
    const { container } = component;
    const { item } = store.getState().product;
    expect(container.firstChild).toBeDefined();
    expect(container.querySelector("img").src).toBe(item.picture);
    expect(container).toContainHTML(item.description);
    expect(container).toContainHTML(item.title);
  });

  it("Should not render item if store is empty", () => {
    component.rerender();
    const { container } = component;
    expect(container.firstChild).toBe(null);
  });
});
