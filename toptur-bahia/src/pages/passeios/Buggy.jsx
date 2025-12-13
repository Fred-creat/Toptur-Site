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
 

export default function Buggy() {
  return (
    <Page>
      <BackButton href="/passeios">← Voltar aos Passeios</BackButton>

      <Title> Passeio de Buggy</Title>

      <Desc>
       Explore Morro de São Paulo e seus arredores em um passeio de Buggy que combina adrenalina, liberdade e paisagens deslumbrantes.<br />
O trajeto percorre trilhas naturais, praias paradisíacas, dunas suaves e mirantes com vista cinematográfica — tudo com a brisa do mar batendo no rosto e a energia vibrante da ilha.<br />

Este passeio é perfeito para quem busca emoção sem abrir mão do visual encantador da costa baiana. O buggy permite acesso a pontos exclusivos, ideais para fotos, banho e contemplação da natureza.<br />


<br />
<br />
<b>Destaques do passeio:</b><br />

       <ul>
        <li> Trilhas emocionantes entre mata, areia e orla </li>
        <li>Paradas em praias paradisíacas e mirantes incríveis</li>
        <li> Emoção sob medida, com segurança e guia local</li>
        <li> Experiência perfeita para famílias, casais e grupos </li>
        <li><b>Buggy TopTur Bahia: aventura com liberdade e paisagens inesquecíveis.</b></li>
           
       </ul>
      </Desc>

      <GalleryGrid>
        <GalleryImg src="/buggy.png" alt="Piscinas naturais" />
        <GalleryImg src="/toptur-logo.png" alt="Logo TopTur" />
        <GalleryImg src="/piscinas-garapua.png" alt="Piscinas" />
      </GalleryGrid>

       <GalleryImg className="raizes" src="/raizes.png" alt="Raizes em garapuá" />
    </Page>
  );
}
