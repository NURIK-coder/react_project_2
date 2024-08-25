import logo from './logo.svg';
import './App.css';
import Items from './components/items/Items'
import Header from './components/headers/header'
import Footer from './components/footer/footer.jsx'
function App() {
  const logo = 'Logo';
  const profileName = 'John Doe';
  const profileAvatar = 'https://avatars.mds.yandex.net/i?id=e276dc7a81d365995d5e17bd1c81fdc9fcbe516d-12420874-images-thumbs&n=13';

  return (
    <div className="app">
      <Header logo={logo} profileName={profileName} profileAvatar={profileAvatar} />
      <Items />
      <Footer />
    </div>
  );
}

export default App;
