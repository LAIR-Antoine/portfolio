import React, { Component } from 'react';
import './Projects.css';
import Navigation from '../Navigation/Navigation'

class Projects extends Component {

  render () {
    return (
      <div className="Projects">

        <Navigation />

        <h1>MES <span>PROJETS</span></h1>

        <div className="LineOne">
          {null}
        </div>
        <div className="ProjectsContent">
            <p className="justify">Mon dernier projet est un site qui référence les <span className="linkcolor">événements sportifs</span> de France. Il a été réalisé dans le cadre d'un <span className="linkcolor">projet étudiant</span> au semestre d'<span className="linkcolor">Automne 2020</span> à l'UTT. Le site est accessible sur :
<br /><a href="https://eve.lairantoine.fr" target="_blank" rel="noreferrer" className="linkcolor">eve.lairantoine.fr</a></p>
            <p className="justify">Depuis <span className="linkcolor">Septembre 2020</span>, je refais le site de mon <span className="linkcolor">club de triathlon</span>. Une première version est terminée et en ligne sur :
            <br /><a href="https://sens-triathlon.com"  target="_blank" rel="noreferrer" className="linkcolor">sens-triathlon.com</a></p>
            <p className="See-more">Cliquez ici pour <span className="bold">
              <a href="/projects/see-more" className="see-more-link">en savoir plus</a>
              </span> ou passer à la suite !</p>
        </div>


        <a href="/experience">
          <svg className="suite-button-bottom" viewBox="0 0 180 180">
            <g id="Rectangle_1" transform="translate(86.005) rotate(45)">
              <rect x="5.93" y="-0.12" transform="matrix(2.535182e-06 1 -1 2.535182e-06 127.4374 -6.0445)" className="st3" width="121.63" height="121.63"/>
              <rect x="8.43" y="2.38" transform="matrix(2.535182e-06 1 -1 2.535182e-06 127.4374 -6.0445)" className="st4" width="116.63" height="116.63"/>
            </g>
            <line id="Ligne_5" className="st5" x1="45.58" y1="90.26" x2="136.73" y2="90.26" transform="translate(180) rotate(90)"/>
            <line id="Ligne_6" className="st5" x1="99.95" y1="129.31" x2="137.55" y2="91.72" transform="translate(180) rotate(90)"/>
            <line id="Ligne_7" className="st5" x1="99.95" y1="53.23" x2="137.55" y2="90.83" transform="translate(180) rotate(90)"/>
          </svg>
        </a>
        
      </div>

    );
  }
}

export default Projects;