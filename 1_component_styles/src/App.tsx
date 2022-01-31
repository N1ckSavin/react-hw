import React from 'react';
import logo from './logo.svg';
import './App.css';
import { url } from 'inspector';


interface IHeaderProps {
  
}

const HeaderStyles = {
  color:'green',
  width: '1170px',
  height: '150px',
  backgroundImage: 'url(https://images.wallpaperscraft.ru/image/single/poverhnost_fon_temnyy_pyatna_35126_1920x1080.jpg)'
}
const FooterStyles = {
  color:'white',
  width: '1170px',
  height: '70px',
  backgroundImage: 'url(https://images.wallpaperscraft.ru/image/single/poverhnost_fon_temnyy_pyatna_35126_1920x1080.jpg)',
  fontSize: '24px'
}

const headerTitleStyles = {
  color: 'black',
}

let greeting:string = 'Это моя первая страница написанная на React :)'

const Header = ({}: IHeaderProps) => {
  return (
  <header style={HeaderStyles}><HeaderTitle /></header>
  ) 
}

const HeaderTitle = ({}:object) => {
  return (
  <h3 style={headerTitleStyles} >
    <div className='logo'>
      <img src="https://static.tildacdn.com/tild6431-3066-4264-b661-306535386264/logo.svg" alt="" />
    </div>
    <div className='headerTitle'>
      <p>Мой первый Header </p>
    </div>
    </h3>
  ) 
}

const Main = ({}:object) => {
  return (
    <main style={{
      paddingTop: '10px',
      color: 'white',
      fontSize: '24px',
      width: '1170px',
      height: '250px',
      backgroundImage: 'url(https://images.wallpaperscraft.ru/image/single/tekstura_uzory_ten_fon_50471_1920x1080.jpg)'
      
    }} >{greeting}</main>
  )
}


const Footer = () => (<footer style={FooterStyles}>Мой первый Footer :)</footer>)
  


function App() {
  return (
    <div className="App">
      <div className="App App-header">
        <Header />
      </div>
      <div>
        <Main/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
