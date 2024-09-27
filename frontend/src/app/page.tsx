'use client'
import { useEffect, useState } from "react";

export default function Home() {
  const [produto, setProduto] = useState<any>([]);

  useEffect(() => {
    obterProdutos();
  }, []);

  async function obterProdutos() {
    const resp = await fetch("http://localhost:3001/produtos");
    const produtos = await resp.json();
    setProduto(produtos);
  }

  return (
    <div>
      {produto.map((produto: any) => (
        <div key={produto.id}>
          <p>{produto.nome}</p>
          <p>{produto.descricao}</p>
          <p>{produto.preco}</p>
        </div>
      ))}
    </div>
  );
}
