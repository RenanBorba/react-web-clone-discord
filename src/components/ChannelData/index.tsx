import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention }
  from '../ChannelMessage';

import {
  Container,
  Messages,
  InputWrapper,
  Input,
  InputIcon } from './styles';

const ChannelData: React.FC = () => {
  // referência de mensagem
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  // assim que carregar a página:
  useEffect(() => {
    // acessar div principal do chat
    const div = messagesRef.current;

    // se a div não for nula e undef.
    if (div) {
      // Descer scroll autom.
      div.scrollTop = div.scrollHeight
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages>
        { Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Fulano"
            date="03/07/2020"
            content="* Isso é uma mensagem *"
          />
        ))}

        <ChannelMessage
          author="Renan Borba"
          date="03/07/2020"
          content="Galera, estou on para jogar"
        />

        <ChannelMessage
          author="Guilherme Festozo"
          date="03/07/2020"
          content={
            <>
              <Mention>@Renan Borba</Mention>, vamo entra no cs ou fifinha?
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input
        type="text"
        placeholder="Conversar em #chat-livre"
      />
        <InputIcon />
      </InputWrapper>
    </Container>
  )
};

export default ChannelData;