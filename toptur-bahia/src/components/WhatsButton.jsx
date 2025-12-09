import "../styles/whats.css";

export default function WhatsButton() {
  return (
    <a
      href="https://wa.me/5575998892484?text=Olá! Quero informações sobre os passeios."
      target="_blank"
      rel="noopener noreferrer"
      className="whats-btn"
    >
      <img 
        src="/toptur-logo.png"  /* ← AQUI VAI A FOTO DA TOPTUR */
        alt="Fale com a TopTur Bahia"
        className="whats-img"
      />
    </a>
  );
}
