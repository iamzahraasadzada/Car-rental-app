import styled from "styled-components";

const TeamContainerBox = styled.div`
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
  transition: all 0.5s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
    cursor: pointer;
  }
`;
const ImageBox = styled.div`
  height: auto;
`;
const Img = styled.img`
  width: 100%;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  padding: 3rem;
`;
const H3 = styled.h3`
  font-size: 2.2rem;
  color: var(--color-text-black);
`;
const P = styled.p`
  color: #777;
  font-size: 1.6rem;
  font-weight: 600;
`;

function Worker({ user }) {
  return (
    <TeamContainerBox>
      <ImageBox>
        <Img src={user.image} alt={user.fullName} />
      </ImageBox>
      <TextBox>
        <H3>{user.fullName}</H3>
        <P>{user.profession}</P>
      </TextBox>
    </TeamContainerBox>
  );
}

export default Worker;
