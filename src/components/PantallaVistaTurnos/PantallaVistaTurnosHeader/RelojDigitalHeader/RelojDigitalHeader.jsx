import React, { useState, useEffect } from 'react';

function RelojDigital() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    // Actualiza la hora cada segundo
    const intervalId = setInterval(() => {
      setHora(new Date());
    }, 1000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []);

  // Obtiene las horas, minutos y segundos
  const horas = hora.getHours();
  const minutos = hora.getMinutes();
  const segundos = hora.getSeconds();

  // Determina si es AM o PM
  const ampm = horas >= 12 ? 'PM' : 'AM';

  // Convierte las horas al formato de 12 horas
  const horas12 = horas % 12 || 12;

  // Agrega un cero delante si los minutos o segundos son menores a 10
  const minutosFormateados = minutos < 10 ? '0' + minutos : minutos;
  const segundosFormateados = segundos < 10 ? '0' + segundos : segundos;

  return (
    <div>
      <h1>{horas12}:{minutosFormateados}:{segundosFormateados} {ampm}</h1>
    </div>
  );
}

export default RelojDigital;





