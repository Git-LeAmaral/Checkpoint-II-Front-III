import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { useContext } from "react";
import { OdontoContext } from "../../contexts/OdontoContext";

const Card = ({dentista}) => {

  const { darkMode } = useContext(OdontoContext);

  return (
    <>
      
      <div className={`card ${styles.card} ${darkMode ? `light-card bg-light` : `dark-card bg-dark`}`}>

        <img
          className="card-img-top"
          src="/images/doctor.jpg"
          alt="doctor placeholder"
        />
        <div className={`card-body ${styles.CardBody}`}>
          
          <Link to={`/dentist/${dentista.matricula}`}>
            <h5 className={`card-title ${styles.title}`}>{dentista.nome} {dentista.sobrenome}</h5>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
