import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Leo Alías FrontEnd Developer.
        </h1>
        <h2>
          Linked-In: https://www.linkedin.com/in/leo-alías/
        </h2>
        <p>
          Technologies I use: JS - ReactJs -Html - CSS - Jquery - Sass/Scss - NodeJs - Git/GHub among others....
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/leo-alías"
          target="_blank"
          rel="noopener noreferrer"
        >
          See My Profile
        </a>
      </header>
    </div>
  );
}

export default App;
