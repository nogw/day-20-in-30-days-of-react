import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  padding: 20px;
  width: 250px;
  height: 310px;
  padding-bottom: 70px;

  h1, h2, h3, button {
    margin: 5px;
  }

  h3 {
    margin-top: 10px;
    font-size: 13px;
    text-transform: uppercase;
  }

  h1 {
    font-size: 20px;
  }

  h2 {
    font-size: 13px;

    span {
      position: relative;

      &:before {
        content: "____";
        position: absolute;
        left: -0.1em;
        bottom: 0.42em;
      }
    }
  }

  button {
    background-color: #eff2fb;
    border: none;
    color: #212121;
    padding: 5px 15px 6px;
    border-radius: 20px;
    cursor: pointer;
  }
`;

export const Image = styled.img`
  box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.2);
  border-radius: 10px;
  position: relative;
  min-height: 200px;
  width: 200px;
  transition: all 300ms ease;

  &:hover {
    border: 20px solid black;
  }
`;
