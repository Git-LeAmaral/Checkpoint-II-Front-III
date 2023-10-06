import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { useContext } from "react";
import { OdontoContext } from "../../contexts/OdontoContext";

const Card = ({dentista}) => {

  const { darkMode } = useContext(OdontoContext);

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div className={`card ${darkMode ? `light-card bg-light` : `dark-card bg-dark`}`}>

        <img
          className="card-img-top"
          src="/images/doctor.jpg"
          alt="doctor placeholder"
        />
        <div className={`card-body ${styles.CardBody}`}>
          {/* Na linha seguinte o link deverá utilizar a matricula, nome e sobrenome do dentista
          que vem da API */}
          <Link to={`/dentist/${dentista.matricula}`}>
            <h5 className={`card-title ${styles.title}`}>{dentista.nome} {dentista.sobrenome}</h5>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
