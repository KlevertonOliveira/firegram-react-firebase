import styled from 'styled-components';

import Modal from 'react-modal';

export const Container = styled.div`
  background-color: #3d3f43;
  border-radius: 10px;
  padding: 10px;

  img{
    max-width: 100%;
    max-height: 300px;
    display: block;
    margin-bottom: 10px;
    border-radius: 10px;
  }

  section{
    display: flex;
    gap: 0.25rem;
    justify-content: flex-end;
    align-items: center;
  }
`;

export const Button = styled.button<{remove?:boolean, primary?:boolean}>`
    background-color: transparent;
    border: none;
    outline: none;
    color: ${({primary})=> primary? '#EF3725' : '#FFF'};
    font-size: ${({primary})=> primary? '2.5rem' : '1.5rem'};
    cursor: pointer;
    transition: 350ms transform ease-in-out, 350ms color ease-in-out;

    &:hover{
      transform: scale(1.1);
      color: ${({remove})=> remove? '#EF3725' : ''};
    }
`;

export const MainModal = styled(Modal)`
  position: relative;
  top: 50%;
  transform: translateY(-50%);

  height: fit-content;
  width: 50%;

  background-color: #333;
  color: #fff;

  padding: 2rem 0;
  margin: 0 auto;

  border: none;
  outline: none;
  border-radius: 5px;

  display: grid;
  place-items: center;
  gap: 3rem;

  .closeIcon{
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }
`;

export const ZoomPhotoModal = styled(MainModal)`

  section{
    width: 90%;
    margin: 0 auto;
    margin-top: 2rem;

    img{
      max-width: 100%;
      display: block;
      border-radius: 10px;  
    }
  }

`;

export const DeletePhotoModal = styled(MainModal)`
  h2, p{
    margin: 0;
    padding: 0;
    letter-spacing: 1px;
  }

  h2{
    margin-top: 2rem;
    font-size: 2.5rem;
    font-weight: 700;
  }

  p{
    font-size: 1.25rem;
  }

  section{
    width: 80%;
    display: flex;
    justify-content: space-evenly;

    button{
      min-width: 5rem;
      padding: 0.75rem 1.5rem;
      color: #FFF;
      font-size: 1.25rem;
      border: none;
      outline: none;
      border-radius: 10px;
      cursor: pointer;
      transition: 350ms opacity ease-in-out;

      &:hover{
        opacity: 0.8;
      }
    }
  }

  .yes{
    background-color: green;
  }

  .no{
    background-color: #EF3725;
  }
`