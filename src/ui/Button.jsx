import styled, { css } from "styled-components";

const sizes = {
  smal: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.8rem;
    padding: 1.4rem 2.4rem;
    font-weight: 500;
    @media (max-width: 360px) {
      font-size: 1.4rem;
    }
  `,
};

const variations = {
  primary: css`
    color: #ffffff;
    background-color: var(--color-orange);
    transition: all 0.3s;

    &:hover {
      box-shadow: rgba(255, 77, 48, 0.25) 0px 14px 28px,
        rgba(255, 77, 48, 0.22) 0px 10px 10px;
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background-color: transparent;
    border: none;
    font-weight: 600;
    transition: all 0.3s;

    &:hover {
      color: var(--color-orange);
    }
  `,
  black: css`
    color: #ffffff;
    background-color: var(--color-text-black);
    border: 2px solid var(--color-text-black);
    font-weight: 600;
    transition: all 0.3s;

    &:hover {
      background: #ffffff;
      color: var(--color-text-black);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};
const Button = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  display: flex;
  gap: 1.1rem;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-sm);
  ${(probs) => sizes[probs.size]}
  &:focus {
    outline-color: var(--color-orange);
  }
  ${(probs) => variations[probs.variation]}
`;

export default Button;
