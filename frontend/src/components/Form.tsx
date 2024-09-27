"use client";
import { useState } from "react";

export const Form = () => {
  const [produto, setProduto] = useState<any>({});

  async function criarProduto() {
    const resp = await fetch("http://localhost:3001/produtos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(produto),
    });
    const produtos = await resp.json();
    setProduto(produtos);
    setProduto({});
  }

  return (
    <div className="flex gap-5 items-end">
      <div className="flex flex-col">
        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          className="bg-slate-300 p-1 rounded outline-none border-none"
          type="text"
          value={produto.nome ?? ""}
          onChange={(e) => setProduto({ ...produto, nome: e.target.value })}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="descricao">Descrição</label>
        <input
          id="descricao"
          className="bg-slate-300 p-1 rounded outline-none border-none"
          type="text"
          value={produto.descricao ?? ""}
          onChange={(e) =>
            setProduto({ ...produto, descricao: e.target.value })
          }
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="preco">Preço</label>
        <input
          id="preco"
          className="bg-slate-300 p-1 rounded outline-none border-none"
          type="number"
          value={produto.preco ?? ""}
          onChange={(e) => setProduto({ ...produto, preco: +e.target.value })}
        />
      </div>
      <div>
        <button
          onClick={criarProduto}
          className="bg-blue-500 p-1 rounded text-white"
        >
          Criar produto
        </button>
      </div>
    </div>
  );
};
