import './companies.css';

function Companies(){
    return(
        <section id="Companies">
            <div className="BackgroundTitle">
                <div>
                    <img src="/icons/companies.svg" alt="Companies" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000"/>
                    <h1 data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">Background de <strong>Empresas</strong></h1>
                </div>
                <div className="BackgroundDescription" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
                    <p>
                        Desde de 2016, seja como designer ou na área de TI. Muitas vezes, ao mesmo tempo, trabalhando com melhor dos dois mundos. Este é um <strong>Histórico</strong> de empresas e marcas que já trabalhei ou realizei projetos em conjunto:
                    </p>
                </div>
            </div>
            <div className="CompaniesGrid" data-aos="fade-in" data-aos-delay="600" data-aos-duration="1000">
                <img src="/icons/biplan_logo.svg" alt="Biplan"/>
                <img src="/icons/rominfo_logo.svg" alt="Rominfo"/>
                <img src="/icons/mginfo_logo.svg" alt="MGinfo"/>
                <img src="/icons/tecnovale_logo.svg" alt="Tecnovale"/>
                <img src="/icons/supergeeks_logo.svg" alt="SuperGeeks"/>
                <img src="/icons/lourenco_logo.svg" alt="Lourenço Canaver"/>
                <img src="/icons/evolucao_logo.svg" alt="Evolução Treinamentos"/>
                <img src="/icons/iraci_logo.svg" alt="Iraci Veiga"/>
                <img src="/icons/networking_logo.svg" alt="Networking Day"/>
                <img src="/icons/rtb_logo.svg" alt="RTB"/>
                <img src="/icons/airfi_logo.svg" alt="Airfi"/>
                <img src="/icons/rubiti_logo.svg" alt="Rubiti"/>
                <img src="/icons/nicakes_logo.svg" alt="Nicakes"/>
            </div>
        </section>
    )
}
export default Companies; 