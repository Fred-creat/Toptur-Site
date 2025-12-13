import styled from "styled-components";
import VideoPlayer from "../../components/VideoPlayer";

const Page = styled.div`
  max-width: 1100px;
  margin: auto;
  padding: 40px 20px;

   
  .raizes {
    width: 100%;
    height: 500px;

  }
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
       O Passeio de Gamboa é uma experiência encantadora que combina beleza natural, águas calmas e um clima relaxante típico da região. A bordo de uma embarcação confortável, o trajeto oferece vistas privilegiadas da costa de Morro de São Paulo até uma das praias mais especiais da ilha.

Em Gamboa, você encontra o famoso banco de argila natural, conhecido por suas propriedades revitalizantes para a pele, além de um mar tranquilo, ideal para banho, fotos e momentos de descanso. O cenário é perfeito para quem busca paz, beleza e um toque de renovação.
<br />
<br />

<b>Destaques do passeio:</b>
       <ul>
        <li> Travessia encantadora em escuna com vista panorâmica da ilha </li>
        <li>Banho de argila natural — um dos pontos mais famosos da região</li>
        <li>Praia de águas calmas e cristalinas</li>
        <li>Paradas para banho nas piscinas naturais, fotos e experiências relaxantes</li>
          <li>Ambiente tranquilo, perfeito para famílias e casais</li>
            <li>Parada sensacional no banco de areia no meio do mar</li>
                <li>Almoço na praia linda e depois retornamos a Morro de São Paulo</li>
       </ul>
      </Desc>

      <GalleryGrid>
        <GalleryImg src="/piscinas-gamboa.png" alt="Piscinas naturais de Garapuá" />
        <GalleryImg src="/toptur-logo.png" alt="Logo TopTur" />
        <GalleryImg src="/banco-de-areia_gamboa.png" alt="Praia de Garapuá" />
      </GalleryGrid>

      <GalleryImg className="raizes" src="/banco-de-areia_gamboa.png" alt="Praia de Garapuá" />
    </Page>
  );
}
