import styled from "styled-components";
import VideoPlayer from "../../components/VideoPlayer";

const Page = styled.div`
  max-width: 1100px;
  margin: auto;
  padding: 40px 20px;
`;

const BackButton = styled.a`
  display: inline-block;
  margin-bottom: 20px;
  padding: 10px 18px;
  background: #0077b6;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: 0.25s;

  &:hover {
    background: #005f92;
    transform: scale(1.03);
  }
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 15px;
  color: #222;
`;

const Desc = styled.p`
  font-size: 18px;
  color: #555;
  margin-bottom: 25px;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
`;

const GalleryImg = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0px 4px 14px rgba(0,0,0,0.12);
  transition: 0.25s;

  &:hover {
    transform: scale(1.03);
  }
`;

export default function Buggy() {
  return (
    <Page>
      <BackButton href="/passeios">← Voltar aos Passeios</BackButton>

      <Title> Passeio de Buggy</Title>

      <Desc>
        Um passeio incrível pelos principais pontos da Ilha de Tinharé:
        piscinas naturais, Moreré, Garapuá e muito mais.

       <ul>
        <li> O passeio é excelente pra quem quer conhcer quase tudo em um só dia: </li>
        <li>Saída a partir das 9h da manhã</li>
        <li>Navega por cerca de 25 a 30 minutos até a primeira parada.</li>
        <li>Primeira parada:Piscinas Naturais de  Garapuá(30 minutos)</li>
          <li>Segunda parada:Piscinas Naturais de  Moreré(30 minutos)</li>
            <li>Terceira parada:Almoço em Boipeba(2hrs)</li>
              <li>Quarta parada: Canavieiras de Tinharé(30 minutos)</li>
                <li>Quinta e última parada:Cidade histórica de Cairu(30 minutos)</li>
       </ul>
      </Desc>

      <GalleryGrid>
        <GalleryImg src="/buggy.png" alt="Piscinas naturais" />
        <GalleryImg src="/toptur-logo.png" alt="Logo TopTur" />
        <GalleryImg src="/piscinas-garapua.png" alt="Piscinas" />
      </GalleryGrid>

      <VideoPlayer src="/videos/volta-ilha1.mp4" />
    </Page>
  );
}
