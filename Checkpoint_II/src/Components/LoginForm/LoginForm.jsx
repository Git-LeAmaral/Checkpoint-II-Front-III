
import styles from "./Form.module.css";
import { useContext, useState } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { OdontoContext } from '../../contexts/OdontoContext';


export const LoginForm = () => {

  const [errorForm, setErrorForm] = useState(false);
  const { darkMode, login } = useContext(OdontoContext);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    //Nesse handlesubmit você deverá usar o preventDefault,
    //enviar os dados do formulário e enviá-los no corpo da requisição 
    //para a rota da api que faz o login /auth
    //lembre-se que essa rota vai retornar um Bearer Token e o mesmo deve ser salvo
    //no localstorage para ser usado em chamadas futuras
    //Com tudo ocorrendo corretamente, o usuário deve ser redirecionado a página principal,com react-router
    //Lembre-se de usar um alerta para dizer se foi bem sucedido ou ocorreu um erro
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const response = await api.post('/auth', 
      {
        username: data.login,
        password: data.password,
      }, {
        headers: {
          'Content-Type' : 'application/json',
        },
      });

      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        login();
        navigate('/');
      }
    } catch (error) {
      setErrorForm(true)
      console.log(errorForm);
      alert("Não foi possivel realizar seu login! \n Verifique seu usuário e senha e tente novamente.")}
 
  };

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div
        className={`text-center card container ${styles.card} ${darkMode ? `light-card bg-light` : `dark-card bg-dark`}`}
      >
        <div className={`card-body ${styles.CardBody} ${darkMode ? `light-card bg-light` : `dark-card bg-dark`} `}>
          <form onSubmit={handleSubmit}>
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Login"
              name="login"
              required
            />
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Password"
              name="password"
              type="password"
              required
            />
            {errorForm ? (<small className={styles.error}>Opps! Alguma coisa errada.</small>) : (<></>)}
            <button className="btn btn-primary" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
