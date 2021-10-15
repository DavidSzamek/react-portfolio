
import Header from "./components/header/header"
import Landing from "./components/landing/landing"
import Portfolio from "./components/portfolio/portfolio"
import Footer from "./components/footer/footer"
import "./app.scss"
import { useState } from "react"
import Menu from "./components/menu/Menu"

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
     <Header menuOpen = {menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen = {menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="section">
       <Landing/>
       <Portfolio/>
       <Footer/>
     </div>
    </div>
  );
}

export default App;
