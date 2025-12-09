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

export default function Gamboa() {
  return (
    <Page>
      <BackButton href="/passeios">← Voltar aos Passeios</BackButton>

      <Title>Gamboa</Title>

      <Desc>
        Uma ilha encantadora, com belezas naturais e muito atrativo para passar o dia:
        piscinas naturais,almoço na praia de Garapuá e muito mais.

       <ul>
        <li> O passeio maravilhoso pra quem quer passar o dia mais tranquilo. </li>
        <li>Saída a partir das 9h da manhã</li>
        <li>Navega por cerca de 25 a 30 minutos até a primeira parada.</li>
        <li>Primeira parada:Piscinas Naturais de  Garapuá(1h30h minutos)</li>
          <li>Segunda parada:Praia de Garapuá(Aqui ficamos bem mais tempo)</li>
            <li>Você pode fazer um passeio pela praia</li>
              <li>Passeio de Kaiaque pelo manguezal de águas cristalinas(não incluso no pacote)</li>
                <li>Almoço e depois retornamos a Morro de São Paulo</li>
       </ul>
      </Desc>

      <GalleryGrid>
        <GalleryImg src="/piscinas-garapua.png" alt="Piscinas naturais de Garapuá" />
        <GalleryImg src="/toptur-logo.png" alt="Logo TopTur" />
        <GalleryImg src="/praia-de-garapua.png" alt="Praia de Garapuá" />
      </GalleryGrid>

      <VideoPlayer src="/videos/volta-ilha1.mp4" />
    </Page>
  );
}
