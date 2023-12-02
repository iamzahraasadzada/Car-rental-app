import styled from "styled-components";
import { FaCarSide } from "react-icons/fa";

const StyledFormRow = styled.div``;

function FormRow({ label, children, IconName }) {
  return (
    <StyledFormRow>
      {label && (
        <label>
          {IconName === "FaCarSide " && <FaCarSide />}
          {label}
        </label>
      )}
      {children}
    </StyledFormRow>
  );
}

export default FormRow;
