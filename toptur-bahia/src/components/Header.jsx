import styled from "styled-components";

const HeaderWrapper = styled.header`
  width: 100%;
  background: #ffffff;
  padding: 15px 0;
  border-bottom: 2px solid #f0f0f0;
  position: sticky;
  top: 0;
  z-index: 1000;

  h1 :hover{

    color: #1f5d93;
  }
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 26px;
  font-weight: 800;
  color: #0077b6; /* azul bonito profissional */
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  gap: 25px;

  a {
    color: #333;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    transition: 0.25s ease;

    &:hover {
      color: #0077b6;
      transform: translateY(-2px);
    }
  }

  @media (max-width: 768px) {
    gap: 15px;

    a {
      font-size: 16px;
    }
  }
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <Logo>TopTur Bahia</Logo>

        <Nav>
          <a href="/">Home</a>
          <a href="/passeios">Passeios</a>
          <a href="/contato">Contato</a>
        </Nav>
      </HeaderContent>
    </HeaderWrapper>
  );
}
