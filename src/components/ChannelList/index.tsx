import React from 'react';

import ChannelButton from '../ChannelButton';

import {
  Container,
  Category,
  AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
  return <Container>
    <Category>
      <span>Canais de texto</span>

      <AddCategoryIcon />
    </Category>

    <ChannelButton channelName="chat-livre" />
    <ChannelButton channelName="trabalho" />
    <ChannelButton channelName="forza4" />
    <ChannelButton channelName="fifa20" />
    <ChannelButton channelName="csgo" />
  </Container>
};

export default ChannelList;