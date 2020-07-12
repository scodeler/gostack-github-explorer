import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  margin-top: 80px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  &::placeholder {
    color: #a8a8b3;
  }

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: solid 2px #fff;
    border-right: 0;

    ${props =>
    props.hasError &&
    css`
        border-color: #c53030;
      `}
  }

  button {
    height: 70px;
    width: 210px;
    background: #04d361;
    color: #fff;
    border: 0;
    font-weight: bold;
    border-radius: 0 5px 5px 0;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const Repositories = styled.ul`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    padding: 24px;
    width: 100%;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.5s;

    & + a {
      margin-bottom: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;
      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }

    &:hover {
      transform: translateX(10px);
    }
  }
`;
