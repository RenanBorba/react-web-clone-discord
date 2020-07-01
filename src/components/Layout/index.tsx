import React from 'react';

import { Grid } from './styles';

import ServerList from '../ServerList';
import Servername from '../ServerName';
import ChannelInfo from '../ChannelInfo';
import ChannelList from '../ChannelList';
import UserInfo from '../UserInfo';


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
    </Grid>
  )
};

export default Layout;