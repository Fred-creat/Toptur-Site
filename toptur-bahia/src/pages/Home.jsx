import styled from "styled-components";
import Hero from "../components/Hero";
import Weather from "../components/Weather";




const Page = styled.div`
  max-width: 1100px;
  margin: auto;
  padding: 40px 20px;
`;

const Container = styled.div`
  padding: 40px 20px;
  max-width: 1200px;
  margin: auto;
`;

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 15px;
  color: #333;
`;

const Text = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  color: #555;
  line-height: 25px;

`;

const Icon = styled.div`
  
  display: flex;
  flex-direction: column;
 padding: 10px;
  justify-content: center;
  z-index: 2;



a {
  display: flex;
  align-items: center;
  margin-top: 10px;
  width: 40px;
  text-decoration:none;
 .fi {
 
  font-size: 40px;
  color: red;
 }

}
`

export default function Home() {
  return (
    <Page>

      
      <Hero />
       <Weather />
      <Container>
        <Title>Sobre a TopTur Bahia</Title>
         
        <Text>
          A <b>TOPTUR BAHIA </b>surgiu em 2022 com objetivo de oferecer aos seus clientes, de forma honesta e verdadeira o melhor passeio de Morro de São Paulo. <br />
          Preferimos prezar pela qualidade, oferecendo sempre transparência, muito conforto e comodidade aos nossos clientes. <br />
          Não temos agência física!!
        </Text>

        <Icon>
          <b>Siga-nos no Instagram</b>
          
            <a href="https://www.instagram.com/toptur.bahia/" title="instagram ícones"><i class="fi fi-brands-instagram"></i></a>
          
        </Icon>
      </Container>
    </Page>
  );
}
