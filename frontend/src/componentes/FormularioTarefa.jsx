import { useState, useEffect } from "react";

function FormularioTarefa({
  aoAdicionar,
  tarefaParaEditar,
  aoEditar,
  limparEdicao,
}) {
  const [titulo, setTitulo] = useState("");
  const [modoEdicao, setModoEdicao] = useState(false);

  useEffect(() => {
    if (tarefaParaEditar) {
      setTitulo(tarefaParaEditar.titulo);
      setModoEdicao(true);
    } else {
      setTitulo("");
      setModoEdicao(false);
    }
  }, [tarefaParaEditar]);

  const aoSubmeter = (e) => {
    e.preventDefault();
    if (!titulo.trim()) return;

    if (modoEdicao) {
      aoEditar(tarefaParaEditar.id, titulo);
    } else {
      aoAdicionar(titulo);
    }
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
      <button type="submit">{modoEdicao ? "Atualizar" : "Adicionar"}</button>
      {modoEdicao && (
        <button type="button" onClick={limparEdicao}>
          Cancelar
        </button>
      )}
    </form>
  );
}

export default FormularioTarefa;
