import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "../styles/components/NotFoundPage.scss";

const NotFoundPage = () => {
  return (
    <section className="notFound">
      <div className="notFound-icon">
        <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
      </div>
      <div className="notFound-text">
        <h3>No hay publicaciones que coincidan con tu búsqueda.</h3>
        <ul>
          <li>Revisa la ortografía de la palabra.</li>
          <li>Utiliza palabras más genéricas o menos palabras</li>
        </ul>
      </div>
    </section>
  );
};

export default NotFoundPage;
