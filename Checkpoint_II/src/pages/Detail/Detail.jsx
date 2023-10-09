import { useEffect, useState } from 'react'
import DetailCard from '../../Components/DetailCard/DetailCard'
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';
import Swal from 'sweetalert2';

const Detail = () => {

  const [dentista, setDentista] = useState([]);
  const dentistaSelecionado = useParams();

  const isLogged = !!localStorage.getItem("token");

  const getDentistas = async () => {
    const response = await api.get(`/dentista?matricula=${dentistaSelecionado.id}`);
    setDentista(response.data);
  }

  useEffect(() => {
    getDentistas()
  }, [])

  return (
    <>
      { isLogged ? ( <DetailCard dentista={dentista}/> ) : (Swal.fire({
        icon: 'error',
        title: 'Atention',
        text: 'Realize seu login para ter acesso a página',
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = '/';
        } else {
          window.location.href ='/';
        }
      }))}
    </>
  )
}

export default Detail
