import './home.css'


function Home() {
    return(
        <section className="welcome">
            <div id="message" className="message">
                <h1>Olá, Mundo! <br/>
                <strong>Henrique</strong><br/>aqui.</h1>
                <p>Designer e Front-end developer Jr.</p>
                <div className="download" data-aos="fade-in" data-aos-delay="100" data-aos-duration="1000">
                    <a href="/docs/" download="Curriculo_HenriqueSousa_2021.pdf" >Baixar Currículo</a>
                </div>
            </div>
            <div id="avatar">
                <img src="/icons/avatar_ui.svg" alt="Avatar"/>
            </div>
        </section>
    );
}
export default Home;