import { Link } from "react-router-dom";

import "./styles.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content-container">
        <div className="text-container">
            <h1>Desafio Github API</h1>
            <h3>DevSuperior - Escola de programação</h3>
        </div>
        <div className="button-container">
          <Link to="/profilesearch">
            <button className="btn btn-primary btn-lg start-button">
              Começar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
