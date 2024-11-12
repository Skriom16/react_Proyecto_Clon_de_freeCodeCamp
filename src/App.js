import React from 'react';
import './App.css';
import  Testimonio  from './componentes/Testimonio';

class App extends React.Component{
  render() {
    return (
      <div className="App">
        <div className='contenedor-principal'>
          <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
          <Testimonio
            nombre='Luka Valdez'
            pais='Brasil'
            imagen='blancoo'
            cargo='Licenciado en Software'
            empresa='Amazon'
            testimonio='Gane la confianza de que podia programar trabajando a traves de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabjo de siete cifras como licenciado en software freeCodeCamp cambio mi vida' />
            <Testimonio
              nombre='Mary Rodriguez'
              pais='Mexico'
              imagen='blancooo'
              cargo='Licenciada en Software'
              empresa='ChatDesk'
              testimonio='freeCodeCamp fue la puerta de entrada a mi carrera como desarrolladora en software. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrolladora en una empresa increible' />
            <Testimonio 
              nombre='Vladimir Mathus'
              pais='Rusia'
              imagen='blancoo'
              cargo='Licenciado en Software'
              empresa='Spotify'
              testimonio='He tenido problemas para prender JavaScript. FreeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir este trabajo que queria como licenciado en desarrollo en Spotify' />
          </div>
        </div>
    );
  }
}

export default App;
