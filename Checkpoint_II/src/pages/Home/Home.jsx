import { useEffect, useState } from "react";
import { api } from "../../services/api";
import Card from "../../Components/Card/Card";

const Home = () => {

  const [dentista, setDentista] = useState([])

  const getDentistas = async() => {

    const resposta = await api.get('/dentista');
    setDentista(resposta.data) 
  }

  useEffect(() => {
    
    getDentistas();

  }, []);

  return (
    <>
      <h1>Home</h1>
      <div className="card-grid container">
        {dentista?.map( (dentista, index) => ( <Card key={index} dentista={dentista}/> ))}
      </div>
    </>
  );
};

export default Home;
