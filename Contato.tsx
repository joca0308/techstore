import { useState, type FormEvent } from "react";

function Contato() {
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setEnviado(true);
    event.currentTarget.reset();
  }

  return (
    <main className="container page">
      <div className="page-title">
        <h1>Entre em contato</h1>
        <p>Envie sua mensagem para nossa equipe.</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input id="nome" name="nome" type="text" placeholder="Digite seu nome" required />

        <label htmlFor="email">E-mail</label>
        <input id="email" name="email" type="email" placeholder="Digite seu e-mail" required />

        <label htmlFor="mensagem">Mensagem</label>
        <textarea id="mensagem" name="mensagem" placeholder="Digite sua mensagem" rows={5} required />

        <button type="submit" className="button">Enviar mensagem</button>

        {enviado && (
          <p className="success-message" role="status">
            Mensagem enviada com sucesso! (Demonstração visual.)
          </p>
        )}
      </form>
    </main>
  );
}

export default Contato;