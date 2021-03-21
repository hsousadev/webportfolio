import './editions.css';
import React, { useState } from "react";

function Editions() {

    const [video, setVideo] = useState("uda");

    return(
        <section id="Videos">

            <div className="VideoTitle">
                <div>
                    <img src="/icons/video.svg" alt="Vídeos Disponíveis" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000"/>
                    <h1 data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">Edições de<strong> Vídeos</strong></h1>
                </div>
                <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">Com um pouco de conhecimento em <strong>edição</strong>, ao longo de determinados trabalhos e projetos pude produzir alguns vídeos e até me arrisquei como narrador.</p>
            </div>

            <div className="VideoBox">
                <div className="VideoPlay" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                    {video === "uda" ? (
                            <iframe title="Highlight Video" allowFullScreen id="VideoFrame" width="1200rem" height="675rem" src="https://www.youtube.com/embed/vIIeVExmZiM?autoplay=1"></iframe>
                        ) : video === "visgeo" ? (
                            <iframe title="Highlight Video" allowFullScreen id="VideoFrame" width="1200" height="675" src="https://www.youtube.com/embed/hQMvhnpsWpU?autoplay=1"></iframe>
                        ) : video === "eletrotec" ? (
                            <iframe title="Highlight Video" allowFullScreen id="VideoFrame" width="1200" height="675" src="https://www.youtube.com/embed/4S9e9BZP-4E?autoplay=1"></iframe>    
                        ) : video === "alorean" ? (
                            <iframe title="Highlight Video" allowFullScreen id="VideoFrame" width="1200" height="675" src="https://www.youtube.com/embed/aWzt0PkNAYg?autoplay=1"></iframe> 
                        ) : (
                            <iframe title="Highlight Video" allowFullScreen id="VideoFrame" width="1200" height="675" src="https://www.youtube.com/embed/p3M4iqZOSrs?autoplay=1"></iframe> 
                        )
                                        
                    }
                    
                </div>          
            </div>

            <div className="VideoRelated">
                
                <a href="#Videos">
                    <button onClick={() => setVideo("visgeo")} className="btnVideo">
                        <div className="Video" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                            <img src="/images/visgeo_thumb.png" alt="VisGeo"/>
                            <div>
                                <h1>Apresentação</h1>
                                <p>VisGeo | Ferramenta ETL</p>
                                <strong>Web App</strong>
                            </div>
                        </div>
                    </button>
                </a>
                
                <a href="#Videos">
                    <button onClick={() => setVideo("uda")} className="btnVideo">
                        <div className="Video" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                            <img src="/images/uda_thumb.png" alt="Uda Brasil"/>
                            <div>
                                <h1>Apresentação</h1>
                                <p>UDA Brasil | Sua Análise mais Fácil</p>
                                <strong>Web App</strong>
                            </div>
                        </div>
                    </button>
                </a>
                
                <a href="#Videos">
                    <button onClick={() => setVideo("eletrotec")} className="btnVideo">
                        <div className="Video" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                            <img src="/images/eletrotec_thumb.png" alt="Eletrotec"/>
                            <div>
                                <h1>Apresentação</h1>
                                <p>Eletrotec | Monitoramento elétrico</p>
                                <strong>Projeto Técnico de TCC</strong>
                            </div>
                        </div>
                    </button>
                </a>
                
                <a href="#Videos">
                    <button onClick={() => setVideo("alorean")} className="btnVideo">
                        <div className="Video" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                            <img src="/images/alorean_com_thumb.png" alt="Alorean Comercial"/>
                            <div>
                                <h1>Vídeo Comercial</h1>
                                <p>Apresentação da marca Alorean</p>
                                <strong>Marca: Alorean</strong>
                            </div>
                        </div>
                    </button>
                </a>
                
                <a href="#Videos">
                    <button onClick={() => setVideo("alorean_maes")} className="btnVideo">
                        <div className="Video" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
                            <img src="/images/alorean_mae_thumb.png" alt="Alorean Comercial"/>
                            <div>
                                <h1>Vídeo Comercial</h1>
                                <p>Video especial 'Dia das Mães'</p>
                                <strong>Marca: Alorean</strong>
                            </div>
                        </div>
                    </button>
                </a>
            </div>

        </section>
        
    )
}


export default Editions;