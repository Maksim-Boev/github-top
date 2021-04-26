import React from 'react';
import {
  Container,
  Bio,
  Icon,
  Img,
  Info,
  Location,
  Login,
  Wrapper
} from './styled';

const UsersItem = ({ data }) => {
  const { url, login, name, bio, location, email, avatarUrl } = data;
  return (
    <Container>
      <Img src={avatarUrl} alt="avatar" />
      <Info>
        <Wrapper>
          <Login href={url}>{login}</Login>
          <div>{name}</div>
        </Wrapper>

        <Bio>{bio}</Bio>

        <Wrapper>
          <Icon className="fas fa-map-marker-alt" />
          <Location>{location}</Location>
          <div>{email}</div>
        </Wrapper>
      </Info>
    </Container>
  );
};

export default UsersItem;
