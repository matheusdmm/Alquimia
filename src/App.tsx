import logo from './assets/logo.jpeg';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Navbar />
      <img src={logo} className="max-h-screen" />
    </div>
  );
}

export default App;
