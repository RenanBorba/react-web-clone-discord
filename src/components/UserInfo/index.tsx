import React from 'react';

import {
  Container,
  Profile,
  Avatar,
  UserData,
  UserIcons,
  MicIcon,
  HeadphoneIcon,
  SettingsIcon
} from './styles';

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar />

        <UserData>
          <strong>Renan Borba</strong>
          <span>#1313</span>
        </UserData>
      </Profile>

      <UserIcons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </UserIcons>
    </Container>
  )
};

export default UserInfo;