import styled, { keyframes } from "styled-components";
import emailjs from "@emailjs/browser";
import { useState } from "react";

/* ANIMAÇÃO DO MODAL */
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  display: ${({ show }) => (show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const Modal = styled.div`
  background: white;
  padding: 30px 25px;
  border-radius: 14px;
  text-align: center;
  max-width: 350px;
  width: 90%;
  animation: ${fadeIn} 0.3s ease-out;

  h3 {
    font-size: 22px;
    margin-bottom: 10px;
    color: #0077b6;
  }

  p {
    color: #444;
    margin-bottom: 15px;
  }

  button {
    background: #0077b6;
    color: white;
    padding: 10px 18px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 15px;

    &:hover {
      background: #005f92;
    }
  }
`;

const CheckIcon = styled.div`
  font-size: 50px;
  color: #2ecc71;
  margin-bottom: 10px;
`;

const Page = styled.div`
  max-width: 1100px;
  margin: auto;
  padding: 40px 20px;
`;

const Title = styled.h1`
  font-size: 36px;
  color: #0077b6;
  margin-bottom: 20px;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 18px;
  text-align: center;
  max-width: 700px;
  margin: 0 auto 40px auto;
  color: #555;
`;

const Flex = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: center;
`;

const ContactCard = styled.div`
  flex: 1;
  min-width: 300px;
  background: #f8f8f8;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0px 4px 18px rgba(0,0,0,0.08);

  img {
    width: 100px;
    margin-bottom: 15px;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 15px;
  }

  p {
    margin: 8px 0;
    font-size: 16px;
    color: #444;
  }

  a {
    color: #0077b6;
    font-weight: 600;
    text-decoration: none;
  }
`;

const Form = styled.form`
  flex: 1;
  min-width: 300px;
  background: #ffffff;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0px 4px 18px rgba(0,0,0,0.08);
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  height: 120px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
  margin-bottom: 15px;
`;

const Button = styled.button`
  width: 100%;
  padding: 14px;
  background: #0077b6;
  color: white;
  font-size: 18px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: 0.25s;

  &:hover {
    background: #005f92;
    transform: scale(1.03);
  }
`;

const MapBox = styled.div`
  margin-top: 40px;
  border-radius: 12px;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 350px;
    border: none;
  }
`;

export default function Contato() {

  console.log("SERVICE:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
console.log("TEMPLATE:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
console.log("KEY:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
console.log("KEY:", import.meta.env.VITE_EMAILJS_PRIVATE_KEY);

  const [modalOpen, setModalOpen] = useState(false);
function sendEmail(e) {
  e.preventDefault();

  const form = e.target;

  const nome = form.nome.value;
  const email = form.email.value;
  const whatsapp = form.whatsapp.value;
  const mensagem = form.mensagem.value;

  const textoWhatsApp =
    `Olá! Novo contato recebido:\n\n` +
    `👤 Nome: ${nome}\n` +
    `📧 Email: ${email}\n` +
    `📱 WhatsApp: ${whatsapp}\n` +
    `💬 Mensagem:\n${mensagem}\n\n` +
    `Enviado via site TopTur Bahia.`;

  const numeroDestino = "5575998892484";

  const urlWhats = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(textoWhatsApp)}`;

  emailjs.sendForm(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    form,
    {
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      privateKey: import.meta.env.VITE_EMAILJS_PRIVATE_KEY
    }
  )
  .then(() => {
      setModalOpen(true);
      form.reset();
      window.open(urlWhats, "_blank");
  })
  .catch((error) => {
      console.error("Erro EmailJS:", error);
      alert("Erro ao enviar a mensagem. Tente novamente.");
  });
}

  return (
    <>
      {/* MODAL DE SUCESSO */}
      <Overlay show={modalOpen} onClick={() => setModalOpen(false)}>
        <Modal onClick={(e) => e.stopPropagation()}>
          <CheckIcon>✔</CheckIcon>
          <h3>Mensagem enviada!</h3>
          <p>Obrigado por entrar em contato. Retornaremos em breve.</p>
          <button onClick={() => setModalOpen(false)}>Fechar</button>
        </Modal>
      </Overlay>

      {/* CONTEÚDO PRINCIPAL */}
      <Page>
        <Title>Contato</Title>

        <Subtitle>
          Estamos prontos para ajudar você a planejar os melhores passeios em Morro de São Paulo.
          Fale conosco pelo WhatsApp ou envie uma mensagem pelo formulário.
        </Subtitle>

        <Flex>
          <ContactCard>
            <img src="/toptur-logo.png" alt="logo-toptur" />
            <h2>Informações de Contato</h2>

            <p>📍 Morro de São Paulo – Bahia</p>
            <p>
              📞 WhatsApp:
              <a href="https://wa.me/5575998892484" target="_blank">
                (75) 99889-2484
              </a>
            </p>
            <p>📧 Email: contato.topturbahia@gmail.com</p>

            <p>
              <a href="https://www.instagram.com/toptur.bahia/" target="_blank">
                <i className="fi fi-brands-instagram"></i> Instagram
              </a>
            </p>
          </ContactCard>

          <Form onSubmit={sendEmail}>
            <Input type="text" name="nome" placeholder="Seu nome" required />
            <Input type="email" name="email" placeholder="Seu email" required />
            <Input type="text" name="whatsapp" placeholder="WhatsApp" />
            <TextArea name="mensagem" placeholder="Mensagem" required />

            <Button type="submit">Enviar Mensagem</Button>
          </Form>
        </Flex>

        <MapBox>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.743094318635!2d-39.014107!3d-13.377139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x73888f699b2f75b%3A0xb9bba7d6853b9c57!2sMorro%20de%20São%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </MapBox>
      </Page>
    </>
  );
}
