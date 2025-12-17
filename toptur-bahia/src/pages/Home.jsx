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
  background: rgba(0, 0, 0, 0.7);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
`;

const Banner = styled.div`
  background: #fff;
  width: 100%;
  max-width: 420px;
  border-radius: 16px;
  padding: 14px;
  text-align: center;
  position: relative;

  /* MOBILE FIRST */
  @media (max-width: 480px) {
    max-width: 95%;
    padding: 12px;
  }
`;

const BannerImage = styled.img`
  width: 42%;
  height: auto;
  max-height: 240px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 10px;

  /* Ajuste fino para celular */
  @media (max-width: 480px) {
    max-height: 200px;
  }
`;

const BannerTitle = styled.h2`
  color: #e63946;
  font-size: 20px;
  margin-bottom: 6px;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const BannerText = styled.p`
  font-size: 15px;
  margin-bottom: 12px;
  color: #333;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const BannerButton = styled.a`
  display: block;
  background: #25d366;
  color: #fff;
  padding: 14px;
  border-radius: 12px;
  font-weight: bold;
  text-decoration: none;
  font-size: 16px;

  @media (max-width: 480px) {
    font-size: 15px;
    padding: 12px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 6px;
  right: 10px;
  border: none;
  background: transparent;
  font-size: 22px;
  cursor: pointer;
`;


/* ================== COMPONENT ================== */
export default function Home() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const isGoogleAds =
      params.get("utm_source") === "google" ||
      params.get("utm_medium") === "cpc";

    const alreadySeen = localStorage.getItem("toptur_banner_seen");

    if (isGoogleAds && !alreadySeen) {
      const timer = setTimeout(() => {
        setShowBanner(true);
        localStorage.setItem("toptur_banner_seen", "true");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {/* CONTEÚDO NORMAL */}
      <Hero />
      <Weather />

      {/* BANNER PROMOCIONAL */}
      {showBanner && (
        <Overlay>
          <Banner>
            <CloseButton onClick={() => setShowBanner(false)}>
              ✕
            </CloseButton>

            <BannerImage src="/banner-toptur.png" alt="Passeios TopTur" />

            <BannerUrgency>
              🔥 Últimas vagas disponíveis hoje
            </BannerUrgency>

            <BannerTitle>Passeios a partir de R$130,00</BannerTitle>

            <BannerButton
              href="https://wa.me/5575998892484?text=Olá!%20Vi%20o%20anúncio%20do%20passeio%20de%20lancha%20privativo%20e%20gostaria%20de%20ver%20valores."
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
