import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [cities, setCities] = useState([]); //ROMA
//       estado, metodo que me permite modificarlo setX
  function handleInputChange (e) {
    setCities(e.target.value)
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault(); //previene el comportamiento habitual de un formulario (que al dar al submit se recargue la pag)
      onSearch(cities);
      setCities('')
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        value={cities} //ROMA (vinculamos el input con el estado linea 4)
        onChange={handleInputChange}
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
