import Card from "../components/Card";
import type { Produto } from "../types/Produto";

const produtos: Produto[] = [
  {
    id: 1,
    nome: "Notebook Dell",
    imagem: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600",
    descricao: "Notebook moderno para trabalho e estudos.",
    preco: 3500,
    categoria: "Informática",
  },
  {
    id: 2,
    nome: "Smartphone",
    imagem: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
    descricao: "Smartphone com excelente desempenho.",
    preco: 2200,
    categoria: "Celulares",
  },
  {
    id: 3,
    nome: "Headphone",
    imagem: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    descricao: "Áudio de alta qualidade e conforto.",
    preco: 450,
    categoria: "Áudio",
  },
  {
    id: 4,
    nome: "Smartwatch",
    imagem: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    descricao: "Relógio inteligente para seu cotidiano.",
    preco: 650,
    categoria: "Acessórios",
  },
  {
    id: 5,
    nome: "Câmera Digital",
    imagem: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600",
    descricao: "Capture seus melhores momentos.",
    preco: 2800,
    categoria: "Fotografia",
  },
  {
    id: 6,
    nome: "Teclado Mecânico",
    imagem: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600",
    descricao: "Precisão e conforto para digitação.",
    preco: 380,
    categoria: "Periféricos",
  },
];

function Produtos() {
  return (
    <main className="container page">
      <div className="page-title">
        <h1>Nossos produtos</h1>
        <p>Confira nossa seleção de produtos tecnológicos.</p>
      </div>

      <div className="products-grid">
        {produtos.map((produto) => (
          <Card key={produto.id} produto={produto} />
        ))}
      </div>
    </main>
  );
}

export default Produtos;