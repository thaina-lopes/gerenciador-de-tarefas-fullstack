import { useState } from "react";

function FormularioTarefa({ aoAdicionar }) {
  const [titulo, setTitulo] = useState("");

  const aoSubmeter = (e) => {
    e.preventDefault();
    if (!titulo.trim()) return;
    aoAdicionar(titulo);
    setTitulo("");
  };

  return (
    <form onSubmit={aoSubmeter}>
      <input
        type="text"
        placeholder="Digite a tarefa"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default FormularioTarefa;
