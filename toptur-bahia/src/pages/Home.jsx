import { useEffect, useState } from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import Weather from "../components/Weather";

/* ================== LAYOUT ================== */

const Page = styled.div`
  max-width: 1100px;
  margin: auto;
  padding: 40px 20px;
`;

const Container = styled.div`
  padding: 40px 20px;
  max-width: 1200px;
  margin: auto;
`;

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 15px;
  color: #333;
`;

const Text = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  color: #555;
  line-height: 25px;
`;

const Icon = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: center;

  a {
    display: flex;
    align-items: center;
    margin-top: 10px;
    width: 40px;
    text-decoration: none;

    .fi {
      font-size: 40px;
      color: red;
    }
  }
`;

/* ================== BANNER PROMO ================== */

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

const Banner = styled.div`
  background: #fff;
  max-width: 300px;
  width: 100%;
  height: 600px;
  margin-top: 20px;
  border-radius: 18px;
  padding: 12px;
  margin-left: 65%;
  text-align: center;
  position: relative;
  animation: zoom 0.5s ease;

  @keyframes zoom {
    from {
      transform: scale(0.9);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const BannerImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  position: relative;
  border-radius: 14px;
  margin-bottom: 12px;

`;

const BannerTitle = styled.h2`
  color: #5446a2;
  font-size: 22px;
  margin-bottom: 8px;
  margin-top: -10px;
  font-weight: bold;
  text-align: center;
`;

const BannerText = styled.p`
  font-size: 14px;
  margin-bottom: 14px;
  color: #333;
`;

const BannerButton = styled.a`
  display: block;
  margin-top: -10px;
  background: #3325d3;
  color: #fff;
  padding: 12px;
  border-radius: 12px;
  font-weight: bold;
  text-decoration: none;
  font-size: 16px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 10px;
  border: none;
  background: transparent;
  font-size: 20px;
  cursor: pointer;
  z-index: 10000;
`;

/* ================== COMPONENT ================== */

export default function Home() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBanner(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Page>
        <Hero />
        <Weather />

        <Container>
          <Title>Sobre a TopTur Bahia</Title>

          <Text>
            A <b>TOPTUR BAHIA</b> surgiu em 2022 com objetivo de oferecer aos seus
            clientes, de forma honesta e verdadeira o melhor passeio de Morro de
            São Paulo.
            <br />
            Prezamos pela qualidade, transparência, conforto e comodidade.
            <br />
            Não temos agência física!!
          </Text>

          <Icon>
            <b>Siga-nos no Instagram</b>
            <a
              href="https://www.instagram.com/toptur.bahia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fi fi-brands-instagram"></i>
            </a>
          </Icon>
        </Container>
      </Page>

      {/* ===== BANNER PROMOCIONAL ===== */}
      {showBanner && (
        <Overlay>
          <Banner>
            <CloseButton onClick={() => setShowBanner(false)}>
              ✕
            </CloseButton>

            <BannerImage src="/banner-toptur.png" alt="Passeios TopTur" />

            <BannerTitle>Passeios a partir de R$130,00</BannerTitle>
            <BannerText>Compre agora e fale direto no WhatsApp</BannerText>

            <BannerButton
              href="https://wa.me/557599843484"
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar no WhatsApp
            </BannerButton>
          </Banner>
        </Overlay>
      )}
    </>
  );
}
