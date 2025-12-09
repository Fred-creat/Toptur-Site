import styled from "styled-components";
import emailjs from "emailjs-com";
import { useState } from "react";

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

  img {

    width: 100px;
  }

      .fi {
      margin-left: 3px;
      color: red;

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

const StatusMessage = styled.p`
  margin-top: 12px;
  text-align: center;
  color: #0077b6;
  font-size: 16px;
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
  

  const [status, setStatus] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mmxgtfc",  // seu SERVICE ID
        "template_6gqi8fm", // seu TEMPLATE ID
        e.target,
        "sn7lbqOy87Y3tZlZl" // sua PUBLIC KEY
      )
      .then(() => {
        setStatus("Mensagem enviada com sucesso!");
        e.target.reset();
      })
      .catch(() => {
        setStatus("Erro ao enviar. Tente novamente.");
      });
  }

  return (
    <Page>
      <Title>Contato</Title>

      <Subtitle>
        Estamos prontos para ajudar você a planejar os melhores passeios em Morro de São Paulo.
        Fale conosco pelo WhatsApp ou envie uma mensagem pelo formulário.
      </Subtitle>

      <Flex>

        {/* Cartão com informações */}
        <ContactCard>
          <img src="toptur-logo.png" alt="logo-toptur" />
          <h2>Informações de Contato</h2>

          <p>📍 Morro de São Paulo – Bahia</p>
          <p>📞 WhatsApp: <a href="https://wa.me/5575998892484" target="_blank">(75) 99889-2484</a></p>
          <p>📧 Email: contato.topturbahia@gmail.com</p>
          <a href="https://www.instagram.com/toptur.bahia/" title="instagram ícones"><i class="fi fi-brands-instagram"></i> Instagram</a>        

          
        </ContactCard>

        {/* Formulário */}
        <Form onSubmit={sendEmail}>
          <Input type="text" name="nome" placeholder="Seu nome" required />
          <Input type="email" name="email" placeholder="Seu email" required />
          <Input type="text" name="whatsapp" placeholder="WhatsApp" />
          <TextArea name="mensagem" placeholder="Mensagem" required></TextArea>

          <Button type="submit">Enviar Mensagem</Button>

          {status && <StatusMessage>{status}</StatusMessage>}
        </Form>

      </Flex>

      <MapBox>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.743094318635!2d-39.014107!3d-13.377139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x73888f699b2f75b%3A0xb9bba7d6853b9c57!2sMorro%20de%20S%C3%A3o%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </MapBox>

    </Page>
  );
}
