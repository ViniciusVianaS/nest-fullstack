"use client";
import { useEffect, useState } from "react";

const Produtos = () => {
  const [produto, setProduto] = useState<any>([]);

  useEffect(() => {
    obterProdutos();
  }, []);

  async function obterProdutos() {
    const resp = await fetch("http://localhost:3001/produtos");
    const produtos = await resp.json();
    setProduto(produtos);
  }

  async function excluirProdutos(id: number) {
    await fetch(`http://localhost:3001/produtos/${id}`, {
      method: "DELETE",
    });
    await obterProdutos()
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto text-white">
        <thead>
          <tr className="bg-zinc-500">
            <th className="px-4 py-2 text-left">Nome</th>
            <th className="px-4 py-2 text-left">Descrição</th>
            <th className="px-4 py-2 text-left">Preço</th>
            <th className="px-4 py-2 text-left">Ações</th>
          </tr>
        </thead>
        <tbody>
          {produto.map((produto: any) => (
            <tr key={produto.id} className="bg-zinc-400">
              <td className="border px-4 py-2">{produto.nome}</td>
              <td className="border px-4 py-2">{produto.descricao}</td>
              <td className="border px-4 py-2">{produto.preco}</td>
              <td className="border px-4 py-2">
                <button className="bg-blue-500 p-2 rounded duration-300 hover:bg-blue-600">
                  Editar
                </button>
                <button onClick={() => excluirProdutos(produto.id)} className="bg-red-500 ml-2 p-2 rounded duration-300 hover:bg-red-600">
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Produtos;
