import Header from "./Header";
import Items from "./Items";
import ItemDetail from "./ItemDetail";
import "../styles/components/Home.scss";

const Home = () => {
  const showItem = false;
  return (
    <div className="home">
      <Header />
      <div className="container">
        <nav className="home-breadcrumbs">
          <p>
            Section {">"} Section 1 {">"} Section 2 {">"} Section 3
          </p>
        </nav>
        <section className="home-items">
          {showItem ? <Items /> : <ItemDetail />}
        </section>
      </div>
    </div>
  );
};

export default Home;
