import React from 'react'
import "./Footer.css"
//Footer, busca la fecha con un date y presenta el año actual.
function Footer() {
    const d = new Date();
    let year = d.getFullYear();
    let textoDelFooter = "Sistema de turnos - Municipalidad de Villa Carlos Paz "+ year;
  return (
    <div id="FooterContainer">
        <h1 id="FooterText">{textoDelFooter}</h1>
    </div>
  )
}

export default Footer