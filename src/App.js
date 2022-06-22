
import './App.css';
import Header from './components/Header';
import NavBar from './components/Navbar';
import ProfilePage from './components/Profile';


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavBar />
      <ProfilePage />
    </div>
  );
}

export default App;
