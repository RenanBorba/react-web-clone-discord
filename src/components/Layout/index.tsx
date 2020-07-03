import React from 'react';

import { Grid } from './styles';

import ServerList from '../ServerList';
import Servername from '../ServerName';
import ChannelInfo from '../ChannelInfo';
import ChannelList from '../ChannelList';
import UserInfo from '../UserInfo';
import UserList from '../UserList';
import ChannelData from '../ChannelData';



// export default function Layout() { // JS
//   return (
//     <div>Olá mundo!</div>
//   )
// }

const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />
      <Servername />
      <ChannelInfo />
      <ChannelList />
      <UserInfo />

      <ChannelData />

      <UserList />
    </Grid>
  )
};

export default Layout;