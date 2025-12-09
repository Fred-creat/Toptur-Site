import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  background: #f8f8f8;
  padding: 25px 0;
  text-align: center;
  color: #333;
  font-size: 16px;
  margin-top: 40px;
  border-top: 2px solid #e0e0e0;

  p {
    margin: 5px 0;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 20px 0;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <p>© {new Date().getFullYear()} TopTur Bahia – Todos os direitos reservados.</p>
      <p>📞 WhatsApp: (75) 99889-2484</p>
    </FooterContainer>
  );
}
