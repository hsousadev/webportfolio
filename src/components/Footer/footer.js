import './footer.css';

function Footer(){
    return(
        <section className="Footer">
            <div className="FinalMessage">
                <p>Tenho alguma oportunidade na sua empresa?</p>
                <h1><strong>Vamos conversar!</strong></h1>
            </div>

            <div className="Options">
                <div className="Button"><a href="https://www.linkedin.com/in/justhenrique">LinkedIn</a></div>
                <div className="Top"><a href="#header">Voltar ao topo</a></div>
            </div>

            <div className="Creator">
                <p>Created by <strong>@justhenrique</strong></p>
            </div>

        </section>
    )
}

export default Footer;