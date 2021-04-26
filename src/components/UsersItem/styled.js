import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  max-width: 700px;
  padding: 10px;
  border-bottom: 1px solid #c4c4c4;
`;

const Img = styled.img`
  max-width: 100px;
  max-height: 100px;
  margin-right: 20px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Login = styled.a`
  margin-right: 20px;
`;

const Icon = styled.i`
  padding-top: 4px;
  margin-right: 5px;
`;

const Location = styled.div`
  margin-right: 20px;
`;

const Bio = styled.div`
  padding: 10px 0;
`;

export { Container, Bio, Icon, Img, Info, Location, Login, Wrapper };
