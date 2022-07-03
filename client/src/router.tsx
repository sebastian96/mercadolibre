import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ItemDetail from "./components/ItemDetail";
import Header from "./components/Header";
import Breadcrumb from "./components/Breadcrumb";

const Router = () => (
  <BrowserRouter>
    <main className="home">
      <Header />
      <div className="container">
        <Breadcrumb />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<ItemDetail />} />
        </Routes>
      </div>
    </main>
  </BrowserRouter>
);

export default Router;
