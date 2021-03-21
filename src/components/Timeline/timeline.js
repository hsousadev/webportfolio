import './timeline.css';

function Timeline() {
    return(
        <section id="Timeline" className="Timeline" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <div className="Title">
                <img src="/icons/timeline.svg" alt="Timeline Icon" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000"/>
                <h1 data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">Main <strong data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000">Timeline</strong> </h1>
            </div>

            <div className="TimelineDescription" data-aos="fade-in" data-aos-delay="600" data-aos-duration="500">
                <p>
                    Em paralelo, ocorreram inúmeras experiências. Esta é uma linha do tempo em resumo, com os <strong>principais</strong> momentos dos últimos anos: 
                </p>
            </div>
            
            <div className="TimelineBoxes" >
                <div className="tBox">
                    <div className="tBoxImg">
                        <img src="/icons/avatar_timeline.svg" alt="Avatar"/>
                    </div>
                    <div className="tBoxDescription">
                        <h1>Disponível para estágio como Developer</h1>
                        <p>Universitário pelo 4º semestre do curso de Análises e Desenvolvimento de Sistemas na Faculdade de Tecnologia de São José dos Campos (FATEC Prof. Jessen) procurando por estágio na área de programação. </p>
                        <strong>Atualmente</strong>
                    </div>
                </div>
            </div>

            <div className="TimelineBoxes">
                <div className="tBox">
                    <div className="tBoxImg">
                        <img src="/icons/viralizzi.svg" alt="Viralizzi"/>
                    </div>
                    <div className="tBoxDescription">
                        <h1>Designer na Viralizzi</h1>
                        <p>Atualmente disponibilizo serviços para mídias digitais na Viralizzi como Designer.</p>
                        <strong>Atualmente</strong>
                    </div>
                </div>
            </div>

            <div className="TimelineBoxesLarger">
                <div className="Cover">
                    <img src="/images/supergeeks_cover.png" alt="SuperGeeks Cover"/>
                </div>

                <div className="tBoxLarger">
                    <div className="tBoxImgLarger">
                        <img src="/images/supergeeks.png" alt="SuperGeeks"/>
                    </div>
                    <div className="tBoxDescriptionLarger">
                        <h1>Instrutor de Prog. na SuperGeeks</h1>
                        <p>Por quase 2 anos atuei como professor de programação e desenvolvimento de jogos com crianças e adolescentes. Além de suporte para criação de conteúdos e mídias digitais. </p>
                        <strong>1 ano e 11 meses</strong>
                        <h2>Fevereiro de 2019 | Janeiro de 2021</h2>
                    </div>

                </div>
                
            </div>

            <div className="TimelineBoxesLarger">
                <div className="Cover">
                    <img src="/images/alorean_cover.png" alt="Alorean Cover"/>
                </div>

                <div className="tBoxLarger">
                    <div className="tBoxImgLarger">
                        <img src="/icons/alorean.svg" alt="Alorean"/>
                    </div>
                    <div className="tBoxDescriptionLarger">
                        <h1>Designer, Editor e Suporte em Hardwares</h1>
                        <p>Três Jovens, uma marca. Por um ano estive com Luís Guilherme e Daniel Arantes disponibilizando serviços de design, manutenção de hardwares, edições de mídias digitais e gráficas para empresas e pessoas da região de São José dos Campos e Jacareí pela marca Alorean</p>
                        <strong>1 ano</strong>
                        <h2>Janeiro de 2020 | Janeiro de 2021</h2>
                    </div>

                </div>
                
            </div>

            <div className="TimelineBoxesLarger">
                <div className="Cover">
                    <img src="/images/fatec_cover.png" alt="Fatec Cover"/>
                </div>

                <div className="tBoxLarger">
                    <div className="tBoxImgLarger">
                        <img src="/icons/fatec.svg" alt="Fatec"/>
                    </div>
                    <div className="tBoxDescriptionLarger">
                        <h1>Análise e Desenvol. de Sistemas</h1>
                        <p>No segundo semestre de 2019 iniciei estudos na Fatec no curso de ADS, com previsão de término em 2022.</p>
                        <strong>Desde 2019</strong>
                        <h2>Julho de 2019 | Previsão: Junho de 2022</h2>
                    </div>

                </div>
                
            </div>

            <div className="TimelineBoxesLarger">
                <div className="Cover">
                    <img src="/images/etec_cover.png" alt="Etec Cover"/>
                </div>

                <div className="tBoxLarger">
                    <div className="tBoxImgLarger">
                        <img src="/icons/etec.svg" alt="Fatec"/>
                    </div>
                    <div className="tBoxDescriptionLarger">
                        <h1>Formado | Redes de Computadores</h1>
                        <p>No final do primeiro semestre de 2019 (Junho), apresentação de TCC e formatura no curso técnico de Redes de Computadores pela ETEC Cônego José Bento em Jacareí. </p>
                        <strong>1 ano e 6 meses</strong>
                        <h2>Janeiro de 2018 | Junho de 2019</h2>
                    </div>

                </div>
                
            </div>

            <div className="TimelineBoxes">
                <div className="tBox">
                    <div className="tBoxImg">
                        <img src="/icons/ifsp.svg" alt="IFSP"/>
                    </div>
                    <div className="tBoxDescription">
                        <h1>Inglês | Conversação Avançada</h1>
                        <p>No segundo semestre de 2018 pude aprimorar meu nível de inglês (Hoje: Avançado) com 6 meses de conversação avançada pelo Instituto Federal de Jacareí (IFSP)</p>
                        <strong>6 meses</strong>
                        <h2>Julho de 2018 | Dezembro de 2018</h2>
                    </div>
                </div>
            </div>

            <div className="TimelineBoxes">
                <div className="tBox">
                    <div className="tBoxImg">
                        <img src="/icons/amancia.svg" alt="Amancia"/>
                    </div>
                    <div className="tBoxDescription">
                        <h1>Formado | Ensino Médio</h1>
                        <p>Ao final de 2017 me formei no ensino médio na escola Amância Dias Sampaio em Jacareí.</p>
                        <strong>2017</strong>
                        <h2>Dezembro de 2017</h2>
                    </div>
                </div>
            </div>

            <div className="TimelineBoxes">
                <div className="tBox">
                    <div className="tBoxImg">
                        <img src="/icons/iraci.svg" alt="Viralizzi"/>
                    </div>
                    <div className="tBoxDescription">
                        <h1>Menor Aprediz | On the job Trainning</h1>
                        <p>No fim de 2016 iniciei em fase de experiência, no inicio de 2017 já como Menor Aprendiz atuando no setor de criação, desenvolvimento e design. Suporte ao marketing digital da empresa e TI.</p>
                        <strong>1 ano e 3 meses</strong>
                        <h2>Outubro de 2016 | Dezembro de 2017</h2>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Timeline;