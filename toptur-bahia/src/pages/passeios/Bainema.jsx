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

export default function Bainema() {
  return (
    <Page>
      <BackButton href="/passeios">← Voltar aos Passeios</BackButton>

      <Title>Passeio Bainema</Title>

      <Desc>
        A Praia de Bainema, localizada na encantadora Ilha de Boipeba, é um dos refúgios naturais mais preservados da Bahia. Com quilômetros de areia dourada, mar calmo em tons de azul cristalino e uma extensa área de coqueiros que compõe um cenário paradisíaco, Bainema é o destino perfeito para quem busca tranquilidade, beleza e conexão com a natureza.

        Durante o passeio, os visitantes têm a oportunidade de explorar piscinas naturais de águas mornas, formadas durante a maré baixa, ideais para banho, fotos e descanso total. O ambiente é silencioso, rústico e intocado, proporcionando uma experiência autêntica e exclusiva, distante das áreas mais movimentadas da região.

        Ao longo do percurso, é possível apreciar vistas cinematográficas, observar fauna marinha e capturar imagens impressionantes da paisagem. Bainema é, sem dúvida, um dos lugares mais especiais para quem deseja vivenciar a essência do litoral baiano: paz, beleza e natureza em seu estado mais puro.

       
        <ul>
          <li>  Ideal para: famílias, casais, amantes da natureza, quem busca tranquilidade e experiências fotográficas memoráveis.
 </li>
          <li>Saída a partir das 8:30h da manhã</li>
          <li>Navega por cerca de 30 a 40 minutos até a primeira parada.</li>
          <li>Primeira parada:<b>Piscinas Naturais de Bainema</b>(50 minutos)</li>
          <li>Segunda parada: <b>Praia de Bainema</b>(30 minutos)</li>
          <li>Terceira parada:<b>Almoço em praia de Moreré</b>(2hrs)</li>
          <li>Retorno: Por volta 15:30h da Tarde</li>
          <li>Chegada por volta das 16:30h</li>
        </ul>
      </Desc>

      <GalleryGrid>
        <GalleryImg src="/bainema-piscinas.png" alt="Piscinas naturais" />
        <GalleryImg src="/toptur-logo.png" alt="Logo TopTur" />
        <GalleryImg src="/bainema.png" alt="Piscinas" />
      </GalleryGrid>

      <GalleryImg src="/bainema-piscinas.png" alt="Piscinas naturais" />
    </Page>
  );
}
