import styled from "styled-components";
import App from "../App";

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 40px 20px;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 30px;
  text-align: center;
  color: #0077b6;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
`;

const Card = styled.a`
  display: block;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  box-shadow: 0px 4px 18px rgba(0,0,0,0.08);
  transition: 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0px 10px 28px rgba(0,0,0,0.18);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 15px;
`;

const CardTitle = styled.h2`
  font-size: 22px;
  margin-bottom: 8px;
  color: #222;
`;

const CardDesc = styled.p`
  font-size: 16px;
  color: #555;
`;

export default function Passeios() {
  const listaPasseios = [
    {
      nome: "Volta à Ilha",
      slug: "volta-ilha",
      img: "volta-ilha.png",
      desc: "Passeio completo ao redor da Ilha de Tinharé."
    },
    {
      nome: "Garapuá",
      slug: "garapua",
      img: "peixes.png",
      desc: "Praia paradisíaca com piscinas naturais cristalinas."
    },
    {
      nome: "Bainema",
      slug: "bainema",
      img: "piscinas-bainema.png",
      desc: "Uma das praias mais tranquilas e isoladas da região."
    },
    {
      nome: "Gamboa (Escuna)",
      slug: "gamboa",
      img: "argila-gamboa.png",
      desc: "Passeio de escuna até a famosa praia da Gamboa."
    },
    {
      nome: "Buggy",
      slug: "buggy",
      img: "https://source.unsplash.com/600x400/?buggy,sand,dune",
      desc: "Aventura pelas trilhas e praias com emoção total."
    },
    {
      nome: "4x4",
      slug: "4x4",
      img: "quadri.png",
      desc: "Passeio radical pelas rotas da ilha."
    }
    
  ];

  return (
    
    <Container>

      
      <Title>Passeios Disponíveis</Title>

      <Grid>
        {listaPasseios.map((p, index) => (
          <Card key={index} href={`/passeios/${p.slug}`}>
            <CardImage src={p.img} alt={p.nome} />

            <CardBody>
              <CardTitle>{p.nome}</CardTitle>
              <CardDesc>{p.desc}</CardDesc>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </Container>
  );
}
