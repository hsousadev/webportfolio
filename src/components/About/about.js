import './about.css';

function About() {

        const vHTML = 75;
        const vCSS = 75;
        const vJS = 60; 
        const vReact = 60; 
        const vFigma = 90; 
        const vCorel = 90;
    
    return(

    <section id="About">
    
        <div className="About">
            
            <div className="Foto" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" >
                <img src="/images/henrique_about.png" alt="Henrique" height="300"/>
            </div>

            <div>
                <div className="HenriqueSousa">
                    <img src="/icons/about.svg" alt="Sobre" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000"/>
                    <h1 data-aos="fade-right" data-aos-delay="50" data-aos-duration="1500">Henrique <strong data-aos="fade-right" data-aos-delay="50" data-aos-duration="2000">Sousa</strong></h1>
                </div>
                <div className="Description">
                    <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                     Washington Henrique Fernandes de Sousa. Sim, nome grande, partiu dai o pseudônimo de 'Justhenrique'. Me defino como um cara curioso, sempre disposto a aprender coisas novas,  apaixonado por <strong>Design</strong> e <strong>Códigos</strong>. Atualmente estudo e atuo em projetos como Front-end Developer e UI Designer.  
                    </p>
                </div>
            </div>

        </div>

        <div>
            
            <div className="Hardskills">
                <img src="/icons/hardskills.svg" alt="HardSkills" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000"/>
                <h1 data-aos="fade-right" data-aos-delay="50" data-aos-duration="1500"><strong data-aos="fade-right" data-aos-delay="50" data-aos-duration="2000">Main</strong> Skills</h1>
            </div>
            
            <div className="Skills">
                
                <div className="Col">
                    
                    <div data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000">
                        <div className="Tec">
                            <img src="/icons/html.svg" alt="Html"/>
                            <p>HTML</p>
                            <p><strong>{vHTML}%</strong></p>
                        </div>
                        
                        <div className="ExperienceBar">
                            <div>
                                <div style={{width:`${vHTML}%`}}/>
                            </div>
      
                        </div>

                    </div>

                    <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="1600">
                        <div className="Tec">
                            <img src="/icons/css.svg" alt="Css"/>
                            <p>CSS</p>
                            <p><strong>75%</strong></p>
                        </div>
                        
                        <div className="ExperienceBar">
                            <div>
                                <div style={{width:`${vCSS}%`}}/>
                            </div>
      
                        </div>

                    </div>

                </div>
            

                <div className="Col">
                    
                    <div data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000">

                        <div className="Tec">
                            <img src="/icons/javascript.svg" alt="Javascript"/>
                            <p>JavaScript</p>
                            <p><strong>60%</strong></p>
                        </div>
                        
                        <div className="ExperienceBar">
                            <div>
                                <div style={{width:`${vJS}%`}}/>
                            </div>
      
                        </div>

                    </div>

                    <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="1600">

                        <div className="Tec">
                            <img src="/icons/react.svg" alt="React JS"/>
                            <p>React JS</p>
                            <p><strong>60%</strong></p>
                        </div>
                        
                        <div className="ExperienceBar">
                            <div>
                                <div style={{width:`${vReact}%`}}/>
                            </div>
      
                        </div>

                    </div>

                </div>

                <div className="Col">
                    
                    <div data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000">
                        <div className="Tec">
                            <img src="/icons/figma.svg" alt="Figma"/>
                            <p>Figma</p>
                            <p><strong>90%</strong></p>
                        </div>
                        
                        <div className="ExperienceBar">
                            <div>
                                <div style={{width:`${vFigma}%`}}/>
                            </div>
      
                        </div>

                    </div>
                    
                    <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="1600">

                        <div className="Tec">
                            <img src="/icons/corel.svg" alt="CorelDraw"/>
                            <p>CorelDraw</p>
                            <p><strong>90%</strong></p>
                        </div>
                        
                        <div className="ExperienceBar">
                            <div>
                                <div style={{width:`${vCorel}%`}}/>
                            </div>
      
                        </div>

                    </div>

                </div>
                
            </div>

        </div>

    </section>

    )
}

export default About;