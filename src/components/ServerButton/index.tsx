import React from 'react';

import Logo from '../../assets/Logo.svg'

import { Button } from './styles';

// desacoplamento
export interface Props {
  // : obrigatório, ?: opcional
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number
}

const ServerButton: React.FC<Props> = ({
  // recebendo props
  selected,
  isHome,
  hasNotifications,
  mentions
}) => {
  return (
    <Button
      isHome={ isHome }
      hasNotifications={ hasNotifications }
      mentions={ mentions }
      className={ selected ? 'active' : '' }
    >
      {/* se for true, renderizar logo */}
      { isHome && <img src={ Logo } alt="Logo" /> }
    </Button>
  )
};

export default ServerButton;