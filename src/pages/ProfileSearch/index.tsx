import ResultCard from 'components/ResultCard';
import { useState } from 'react';
import './styles.css';
import axios from 'axios';

type FormData = {
  profile: string
}

type UserProfile = {
  avatar_url: string;
  url: string;
  followers: string;
  location: string;
  name: string;
}

const BASE_URL = "https://api.github.com/users/";

const ProfileSearch = () => {

  const [formData, setFormData] = useState<FormData>({profile: ''})
  const [userProfile, setUserProfile] = useState<UserProfile>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({...formData, [name]: value});
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .get(`${BASE_URL}${formData.profile}`)
      .then(response => setUserProfile(response.data))
      .catch(error => setUserProfile(undefined));

  }


  return (
    <div className="profile-search-container">
      <div className="container">
        <div className="search-container">
          <h1>Encontre um perfil Github</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-container">
              <input 
                type="text" 
                className="search-input" 
                name="profile"
                value={formData.profile}
                placeholder="Perfil"
                onChange={handleChange}
                />
              <button type="submit" className="btn btn-primary search-button">Encontrar</button>
            </div>
          </form>
        </div>
        { userProfile &&
              <ResultCard 
                avatar_url={userProfile.avatar_url}
                url={userProfile.url}
                followers={userProfile.followers}
                location={userProfile.location}
                name={userProfile.name}
            /> 
          }
       
      </div>
    </div>
  )
}

export default ProfileSearch;