import styled from 'styled-components';


export const Container = styled.section`
  background-color: #27282F;
  color: #FFF;
  min-height: 100vh;
`;

export const Area = styled.div`
  margin: auto;
  max-width: 980px;
  padding: 2rem 0;
`;

export const Header = styled.h1`
  margin: 0;
  padding: 0;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 3rem;
`;

export const ScreenWarning = styled.div`
  text-align: center;

  .emoji{
      font-size: 3rem;
      margin: 2rem 0;
  }
`;

export const PhotoList = styled.div`
  margin-top: 10vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;

export const UploadForm = styled.form`
  background-color: #3D3F43;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 2rem;

  input[type=submit]{
    background-color: #756DF4;
    border: 0;
    color: #fff;
    padding: 8px 16px;
    font-size: 15px;
    border-radius: 10px;
    margin: 0 20px;
    cursor: pointer;

    &:hover{
      opacity: 0.7;
    }
  }
`;