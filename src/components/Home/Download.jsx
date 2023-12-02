import styled from "styled-components";

const StyledDownload = styled.div`
  background: url(./download-bg.png);
  background-repeat: no-repeat;
  padding: 10rem 0;
  background-color: #f8f8f8;
  margin-top: 5rem;

  @media (max-width: 1340px) {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f8f8f8;
  }
`;

const Layout = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  height: 100%;
`;
const Container = styled.div`
  max-width: 59rem;
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

const H2 = styled.h2`
  color: #010103;
  font-size: 4.6rem;

  @media (max-width: 600px) {
    font-size: 3rem;
  }
  @media (max-width: 330px) {
    font-size: 2.6rem;
  }
`;
const P = styled.p`
  color: #706f7b;
  font-family: Rubik, sans-serif;
  font-size: 1.6rem;
  line-height: 1.5;
  @media (max-width: 330px) {
    font-size: 1.4rem;
  }
`;
const DownloadButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const Img = styled.img`
  @media (max-width: 600px) {
    width: 150px;
  }
  @media (max-width: 330px) {
    width: 100px;
  }
`;

function Download() {
  return (
    <StyledDownload>
      <Layout>
        <Container>
          <H2>Download our app to get most out of it</H2>
          <P>
            Thrown shy denote ten ladies though ask saw. Or by to he going think
            order event music. Incommode so intention defective at convinced.
            Led income months itself and houses you.
          </P>
          <DownloadButtons>
            <Img src="./download/googleapp.svg" alt="Play-market"></Img>
            <Img src="./download/appstore.svg" alt="App-store"></Img>
          </DownloadButtons>
        </Container>
      </Layout>
    </StyledDownload>
  );
}

export default Download;
