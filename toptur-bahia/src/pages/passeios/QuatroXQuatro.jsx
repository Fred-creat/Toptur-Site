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

export default function QuatroXQuatro() {
  return (
    <Page>
      <BackButton href="/passeios">← Voltar aos Passeios</BackButton>

      <Title>Passeio Quadriciclo</Title>

      <Desc>
        O passeio de Quadriciclo é uma experiência intensa e divertida, ideal para quem deseja viver a ilha de um jeito único, no seu ritmo.
        Você assume o controle da máquina e percorre trilhas de terra, ladeiras, caminhos pela mata e trechos costeiros, sempre com acompanhamento de guia experiente.

        Perfeito para amantes de aventura, o quadriciclo entrega uma imersão total na paisagem, despertando sensação de liberdade e conexão com a natureza.
         <br />
         <br />
       <b> Destaques do passeio:</b>
        <ul>
          <li> Conduza seu próprio quadriciclo </li>
          <li>Trilhas naturais, subidas, descidas e desafios leves</li>
          <li>Cenários incríveis para fotos e paradas estratégicas</li>
          <li>Sensação de aventura e superação de limites</li>

        </ul>
      </Desc>

      <GalleryGrid>
        <GalleryImg src="/quadri.png" alt="Piscinas naturais" />
        <GalleryImg src="/toptur-logo.png" alt="Logo TopTur" />
        <GalleryImg src="/ciclo.png" alt="Piscinas" />
      </GalleryGrid>

      <VideoPlayer src="/videos/volta-ilha1.mp4" />
    </Page>
  );
}
