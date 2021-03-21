import './header.css';

function Header () {
    return(
    
    <header id="header" className="headerbox">

        <div id="logo">
            <a href="https://justhen.vercel.app"><img src="/icons/logo.svg" alt="justhenrique" height="58"/></a>
        </div>         
         
         <div id="menu">      
            <a href="#About">Sobre</a>
            <a href="#Portfolio">Trabalhos</a>
            <a href="#Videos">Edições</a>
            <a href="#Timeline">Timeline</a>
            <a href="#Companies">Empresas</a>
            <a href="#Deposition">Depoimentos</a>
         </div>

        <div id="social">
            <a href="https://www.github.com/justhenrique"><img src="/icons/github.svg" alt="Github"/></a>
            <a href="https://www.behance.net/justhenriquedesign"><img src="/icons/behance.svg" alt="Behance"/></a>
            <a href="https://www.linkedin.com/in/justhenrique"><img src="/icons/linkedin.svg" alt="Linkedin"/></a>
        </div>

     </header>
    
)};


export default Header;