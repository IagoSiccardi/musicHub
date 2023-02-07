import styled from 'styled-components';

function Login() {


  const login = async () => {
    const clientId = "f6962069a2dd4bc39326bf72962d7065"
    const redirectUrl = process.env.REACT_APP_SITE_URL
    const apiUrl = "https://accounts.spotify.com/authorize"
    const scope = [
      "user-read-email",
      "user-read-private",
      "user-read-playback-state",
      "user-modify-playback-state",
      "user-read-currently-playing",
      "user-read-playback-position",
      "user-top-read",
      "user-read-recently-played",
    ];

    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(" ")}&response_type=token&show_daialog=true`

  }

  

  return (
    <Container className="App">
      <h1>Music Hub</h1>
      <button onClick={login}>Login</button>
    </Container>
  );
}

const Container = styled.div`
display: grid;
background-color: black;
height: 100vh;
width: 100vw;
place-items: center;
place-content: center;
h1 {
    color: #4400ff;
    font-size: 3rem;
    text-transform: capitalize
}

@media (min-width: 500px){
  h1 {
    font-size: 5rem;
  }

}

button {
    padding: 10px;
    background-color: #4400ff;
    border-radius: 2rem;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    width: 50%;
    transition: .5s ease;

    &:hover{
        background-color: white;
        transform: scale(1.05);
        color: #4400ff;
    
    }
}


`

 
export default Login;
