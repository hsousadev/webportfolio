import './portfolio.css'
import React, { useState } from "react";

function Portfolio() {

    const [techs, changeTec] = useState("fig");

    return(

        <section className="Tecs">

            <div id="Portfolio">
                <img src="/icons/tecs.svg" alt="Tecs" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000"/>           
                <h1 data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000"><strong data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">Techs</strong> que já utilizei</h1>
            </div>
            
            <div className="Tecsbox">
                
                <div className="Tec" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                    <img src="/icons/python.svg" alt="Python"/>
                    <p>Python</p>
                </div>

                <div className="Tec" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                    <img src="/icons/nodejs.svg" alt="NodeJS"/>
                    <p>NodeJS</p>
                </div>

                <div className="Tec" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
                    <img src="/icons/docker.svg" alt="Docker"/>
                    <p>Docker</p>
                </div>


                <div className="Tec" data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000">
                    <img src="/icons/cplus.svg" alt="C++"/>
                    <p>C++</p>
                </div>

                <div className="Tec" data-aos="fade-up" data-aos-delay="900" data-aos-duration="1000">
                    <img src="/icons/typescript.svg" alt="TypeScript"/>
                    <p>TypeScript</p>
                </div>
                
            </div>

            <div className="MyWorks">
                <div className="Title">
                    <img src="/icons/portfolio.svg" alt="Meus Trabalhos" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000"/>
                    <h1 
                    data-aos="fade-right" 
                    data-aos-delay="200" 
                    data-aos-duration="1000">
                        <strong 
                        data-aos="fade-right" 
                        data-aos-delay="200" 
                        data-aos-duration="1000">
                            Trabalhos
                        </strong> Recentes
                    </h1>
                </div>
                
                <div className="Tecsmenu">
                    <button onClick={() => changeTec("ui")} id="uidesign"  data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">UI Design</button>
                    <button onClick={() => changeTec("web")} data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000">Web App</button>
                    <button onClick={() => changeTec("design")} data-aos="fade-up" data-aos-delay="250" data-aos-duration="1000">Design</button>
                    <button onClick={() => changeTec("data")} data-aos="fade-up" data-aos-delay="350" data-aos-duration="1000">Data Analysis</button>
                    <button onClick={() => changeTec("other")} data-aos="fade-up" data-aos-delay="450" data-aos-duration="1000">Técnico</button>

                </div>

                {techs === "data" ? (
                    <div className="Works">
                        <a href="https://github.com/justhenrique/saneamento-basico-nas-escolas-entre-2014-e-2018">
                            <div className="WorksBox">
                                <img src="/images/saneamento.png" alt="Saneamento Básico"/>
                                <h1>Raspagem de Dados</h1>
                                <p>Saneamento Básicos<br/>em Escolas</p>
                            </div>
                        </a>

                        <a href="https://github.com/justhenrique/despesas-eleicoes-vs-partidos-eleitos">
                            <div className="WorksBox">
                                <img src="/images/eleicoes.png" alt="Eleições Vs. Partidos Eleitos"/>
                                <h1>Raspagem de Dados</h1>
                                <p>Eleições vs.<br/>Partidos Eleitos</p>
                            </div>
                        </a>

                        <a href="https://github.com/justhenrique/SPC-projeto-integrador">
                            <div className="WorksBox">
                                <img src="/images/udabrasil.png" alt="Uda Brasil"/>
                                <h1>Web App</h1>
                                <p>Uda Brasil<br/>Análise de Dados</p>
                            </div>
                        </a>

                    </div>

                ) : techs === "web" ? (
                    <div className="Works">

                        <a href="https://github.com/justhenrique/moveit">
                            <div className="WorksBox">
                                <img src="/images/moveit.png" alt="Moveit"/>
                                <h1>Web App</h1>
                                <p>Rocketseat<br/>Next Level Week #04</p>
                            </div>
                        </a>

                        <a href="https://github.com/justhenrique/SPC-projeto-integrador">
                            <div className="WorksBox">
                                <img src="/images/udabrasil.png" alt="Uda Brasil"/>
                                <h1>Web App</h1>
                                <p>Uda Brasil<br/>Análise de Dados</p>
                            </div>
                        </a>

                        <a href="https://github.com/justhenrique/proffy">
                            <div className="WorksBox">
                                <img src="/images/proffy.png" alt="Proffy"/>
                                <h1>Web App</h1>
                                <p>Rocketseat<br/>Next Level Week #02</p>
                            </div>
                        </a>

                        <a href="https://github.com/justhenrique/VisGeo-ETL">
                            <div className="WorksBox">
                                <img src="/images/visgeo.png" alt="Visgeo"/>
                                <h1>Web App</h1>
                                <p>VisGeo<br/>Sistema ETL</p>
                            </div>
                        </a>

                        <a href="https://github.com/justhenrique/Ecoleta">
                            <div className="WorksBox">
                                <img src="/images/ecoleta.png" alt="Ecoleta"/>
                                <h1>Web App</h1>
                                <p>Rocketseat<br/>Next Level Week #01</p>
                            </div>
                        </a>

                        <a href="https://justhenrique.vercel.app/">
                            <div className="WorksBox">
                                <img src="/images/justhenrique.png" alt="justhenrique"/>
                                <h1>Web Portfolio</h1>
                                <p>Justhenrique UI Designer<br/>e Front-end developer</p>
                            </div>
                        </a>

                    </div>
                
                ) : techs === "design" ? (
                    <div className="Works">

                        <a href="https://www.behance.net/gallery/115177581/Biplan">
                            <div className="WorksBox">
                                <img src="/images/biplan.png" alt="Biplan"/>
                                <h1>Identidade Visual</h1>
                                <p>Biplan<br/>MRP para empresas</p>
                            </div>
                        </a>

                        <a href="https://www.behance.net/gallery/115184781/VisGeo">
                            <div className="WorksBox">
                                <img src="/images/visgeo.png" alt="Visgeo"/>
                                <h1>Logo</h1>
                                <p>VisGeo<br/>Sistema ETL</p>
                            </div>
                        </a>

                        <a href="https://www.behance.net/gallery/115178621/Justhenrique">
                            <div className="WorksBox">
                                <img src="/images/justhenrique_logo.png" alt="Justhenrique"/>
                                <h1>Identidade Visual</h1>
                                <p>Justhenrique UI Designer<br/>e Front-end developer</p>
                            </div>
                        </a>

                        <a href="https://www.behance.net/gallery/115181081/rubiti">
                            <div className="WorksBox">
                                <img src="/images/rubiti.png" alt="Rubiti"/>
                                <h1>Logo</h1>
                                <p>Rubiti Websistes<br/>e Sistemas Web</p>
                            </div>
                        </a>

                        <a href="https://www.behance.net/gallery/115181789/Networking-Day">
                            <div className="WorksBox">
                                <img src="/images/networkingday.png" alt="Networking Day"/>
                                <h1>Logo</h1>
                                <p>Networking Day<br/>Evento ETEC 2018</p>
                            </div>
                        </a>

                        <a href="https://www.behance.net/gallery/115183845/Rominfo">
                            <div className="WorksBox">
                                <img src="/images/rominfo.png" alt="Rominfo"/>
                                <h1>Identidade Visual</h1>
                                <p>Rominfo<br/>Soluções em TI</p>
                            </div>
                        </a>

                         <a href="https://www.behance.net/gallery/115180417/MG-Info">
                            <div className="WorksBox">
                                <img src="/images/mginfo.png" alt="MGinfo"/>
                                <h1>Logo</h1>
                                <p>MGinfo<br/>Informática</p>
                            </div>
                        </a>

                    </div>
                ) : techs === "other" ? (
                    <div className="Works">

                        <a href="https://github.com/justhenrique/eletrotec-dispositivo-de-monitoramento-de-energia">
                            <div className="WorksBox">
                                <img src="/images/eletrotec.png" alt="Eletrotec"/>
                                <h1>Projeto de TCC</h1>
                                <p>Eletrotec<br/>Monitoramento de Consumo</p>
                            </div>
                        </a>

                    </div>
                ) : (
                    <div className="Works" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
                        
                        <a href="https://www.figma.com/file/FxhwFUtxDwiQTWYqdupctk/justhenrique?node-id=0%3A1">
                            <div className="WorksBox">
                                <img src="/images/justhenrique.png" alt="justhenrique"/>
                                <h1>Web Portfolio</h1>
                                <p>Justhenrique UI Designer<br/>e Front-end developer</p>
                            </div>
                        </a>
                        
                        <a href="https://www.figma.com/file/SNeczgHzqpAnrZxXGVDY8K/Matheus-Campos">
                            <div className="WorksBox">
                                <img src="/images/matheusdev.png" alt="Matheus Campos"/>
                                <h1>Web Portfolio</h1>
                                <p>Matheus Campos<br/>Front-end developer</p>
                            </div>
                        </a>

                        <a href="https://www.figma.com/file/RFwBm576HBwMoPv7vTjRkj/Instagram-review">
                            <div className="WorksBox">
                                <img src="/images/instagramdark.png" alt="Instagram Dark"/>
                                <h1>Re-Design</h1>
                                <p>Instagram Web<br/>Dark Mode</p>
                            </div>
                        </a>

                        <a href="https://www.figma.com/file/pZ40saBOjKAdqq4we9BzuN/Projeto-Visiona?node-id=49%3A3">
                            <div className="WorksBox">
                                <img src="/images/visgeofig.png" alt="VisGeo"/>
                                <h1>Web App</h1>
                                <p>VisGeo<br/>Sistema ETL</p>
                            </div>
                        </a>

                    </div>  
                )} 

            </div>


        </section>
    )
}

export default Portfolio;

