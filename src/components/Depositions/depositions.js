import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import './depositions.css';

function Depositions() {
    
    return(
        <section id="Deposition" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            <div className="DepositionTitle">
                <img src="/icons/depositions.svg" alt="Deposition" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000"/>
                <h1 data-aos="fade-right" data-aos-delay="150" data-aos-duration="1000">Em <strong>Depoimento</strong></h1>
            </div>
            <div className="DepositionDescription">
                <p>
                    <strong>"Se que ir rápido, vá sozinho. Se quer ir longe, vá junto".</strong> Depoimentos de alguns profissionais que trabalharam comigo ao longo da minha jornada:
                </p>
            </div>
            ,
            
            <Carousel autoplay>
                <div className="DepositionsBox">

                    <div className="Deposition">
                        <div className="Person">
                            <div>
                                <img src="/images/guido.png" alt="Marcelo Guido"/>
                            </div>
                            <div>
                                <h1>Me. Marcelo Guido</h1>
                                <h4>Profissional da área de Educação, Redes e Segurança da Informação</h4>
                            </div>
                        </div>

                        <div className="Message">
                            <img src="/icons/message.svg" alt="Message"/>
                            <p>“Criativo! Este é o Henrique que trabalhou na SuperGeeks! Estimado pelos alunos e autor de artes como o informativo semanal para os pais, Henrique desenvolveu suas atividades em aulas e oficinas de maneira satisfatória. A habilidade e desenvoltura para conduzir a apresentação dos trabalhos finais dos alunos é algo que merece destaque. Henrique foi um bom colaborador e, no momento, está em busca de sonhos maiores.”</p>
                            <strong>
                                Consultor da SuperGeeks (Jacareí e SJC)
                            </strong>
                        </div>
                    </div>

                    <div className="Deposition">
                        <div className="Person">
                            <div>
                                <img src="/images/romario.png" alt="Romário Lima"/>
                            </div>
                            <div>
                                <h1>Romário Lima</h1>
                                <h4>Engenheiro da Computação</h4>
                            </div>
                        </div>

                        <div className="Message">
                            <img src="/icons/message.svg" alt="Message"/>
                            <p>“O Washington está sempre estudando e aprendendo, buscando aprimorar aquilo que faz. Esse é sua melhor qualidade. Está sempre em busca de seus objetivos, com foco e organização. Além disso, tecnicamente, no que se propõe a fazer, faz bem feito. Sempre!”</p>
                            <strong>
                                Trabalho com o Washington em diversos projetos, de Design Gráfico, Web Dev, Marketing Digital e outros, desde 2016.
                            </strong>
                        </div>
                    </div>

                </div>

                <div className="DepositionsBox">

                    <div className="Deposition">
                        <div className="Person">
                            <div>
                                <img src="/images/matheus.png" alt="Matheus Campos"/>
                            </div>
                            <div>
                                <h1>Matheus Campos</h1>
                                <h4>Front-end Developer</h4>
                            </div>
                        </div>

                        <div className="Message">
                            <img src="/icons/message.svg" alt="Message"/>
                            <p>“O Henrique é um cara esforçado, dedicado e objetivo. Ele tem ciência das suas forças e fraquezas, e por causa disso está sempre em buscas de melhorias. Tenho ele como inspiração para se tornar um ótimo profissional.”</p>
                            <strong>
                                Realizamos projetos para Visiona e SPC Brasil pela Fatec. 
                            </strong>
                        </div>
                    </div>

                    <div className="Deposition">
                        <div className="Person">
                            <div>
                                <img src="/images/anderson.png" alt="Anderson Brandão"/>
                            </div>
                            <div>
                                <h1>Anderson Brandão</h1>
                                <h4>Desenvolvedor Ruby on Rails</h4>
                            </div>
                        </div>

                        <div className="Message">
                            <img src="/icons/message.svg" alt="Message"/>
                            <p>“Trabalhei com o Henrique logo no começo de sua carreira e sua evolução é bastante grande e contínua. Fruto da sua determinação e curiosidade de agregar diversas ferramentas aos seus projetos e aprendizado. Tanto que depois fui seu cliente, confiei a ele o nascimento de uma marca pois não havia dúvidas quanto a qualidade do seu trabalho.”</p>
                            <strong>
                                Coordenador e orientador na Iraci Veiga em 2016. Cliente em 2020 com a marca Rubiti.
                            </strong>
                        </div>
                    </div>

                </div>

                
                <div className="DepositionsBox">

                    <div className="Deposition">
                        <div className="Person">
                            <div>
                                <img src="/images/victor.png" alt="Matheus Campos"/>
                            </div>
                            <div>
                                <h1>Victor Ramos</h1>
                                <h4>Cientista da Computação, Professor na SuperGeeks</h4>
                            </div>
                        </div>

                        <div className="Message">
                            <img src="/icons/message.svg" alt="Message"/>
                            <p>“O Henrique é uma pessoa que se pode contar onde for, gostei bastante de trabalhar com ele, pois sempre que precisei de ajuda ele estava disposto a auxiliar seja o que fosse. Ele é uma pessoa pequena porém possui um coração gigante.”</p>
                            <strong>
                                Colegas de trabalho na SuperGeeks 
                            </strong>
                        </div>
                    </div>

                </div>
            </Carousel>
        </section>
    )
}

export default Depositions; 

