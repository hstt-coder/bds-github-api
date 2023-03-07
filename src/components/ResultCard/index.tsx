import "./styles.css";

type Props = {
    avatar_url: string;
    url: string;
    followers: string;
    location: string;
    name: string;
}

const ResultCard = ({ avatar_url, url, followers, location, name}: Props) => {
  return (
    <div className="result-container">
      <div className="image-container">
        <img
          src={avatar_url}
          alt=""
        />
      </div>
      <div className="info-container">
        <h3>Informações</h3>
        <div className="info-item">
          <p>
            <strong>Perfil: </strong>
            <a href={url}
               className="profile-link">
              {url}
            </a>
          </p>
        </div>
        <div className="info-item">
          <p>
            <strong>Seguidores:</strong> {followers}
          </p>
        </div>
        <div className="info-item">
          <p>
            <strong>Localidade:</strong> {location}
          </p>
        </div>
        <div className="info-item">
          <p>
            <strong>Nome:</strong> {name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
