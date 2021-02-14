import logo from './logo.svg';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
// import Logo from './components/Logo/Logo';
// import FaceRecognition from './components/FaceRecognition/FaceRecognition';
// import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
// import Rank from './components/Rank/Rank';
// import SignIn  from './components/SignIn/SignIn';
// import Register  from './components/Register/Register';
import './App.css';

function App() {
  return (
    <div className="App">
      <Particles />
      <Navigation />
      <div>
        {/* <Logo />
        <SignIn />
        <FaceRecognition />
        <ImageLinkForm />
        <Rank />
        <Register /> */}
      </div>
    </div>
  );
}

export default App;
