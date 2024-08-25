import logo from './logo.svg';
import './App.css';
import Items from './components/items/Items'
import Header from './components/headers/header'
import Footer from './components/footer/footer.jsx'
function App() {
  const logo = 'Logo';
  const profileName = 'John Doe';
  const profileAvatar = 'https://via.placeholder.com/50';

  return (
    <div className="app">
      <Header logo={logo} profileName={profileName} profileAvatar={profileAvatar} />
      <Items />
      <Footer />
    </div>
  );
}

export default App;
