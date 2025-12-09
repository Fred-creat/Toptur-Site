import styled from "styled-components";

const HeroSection = styled.section`
  width: 100%;
  height: 75vh;
  background: url("/banner.jpg") center center / cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  text-align: center;
  color: white;
  max-width: 700px;
`;

const Logo = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid white;
  margin-bottom: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
`;

const Title = styled.h1`
  font-size: 38px;
  font-weight: 800;
  margin-bottom: 5px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  margin-top: 5px;
  margin-bottom: 30px;

  opacity: 0.9;
`;

const Button = styled.a`
  background: #25d366;
  padding: 14px 30px;
  border-radius: 50px;
  color: white;
  font-size: 18px;
  text-decoration: none;
  transition: 0.2s ease;

  &:hover {
    background: #1bb253;
    transform: scale(1.07);
  }
`;

export default function Hero() {
  return (
    <HeroSection>
      <Overlay>
        <Content>
          <Logo src="/toptur-logo.png" alt="TopTur Bahia" />
          <Title>Explore a Bahia com Conforto e Segurança</Title>
          <Subtitle>
            Os melhores passeios de Morro de São Paulo, Garapuá, Bainema, Gamboa e mais!
          </Subtitle>
          <Button href="/passeios">Ver Passeios</Button>
        </Content>
      </Overlay>
    </HeroSection>
  );
}
