import { useRouter } from 'next/router';

import React from 'react';

import Button from 'components/Button';
import Text from 'components/Text';
import { TextArea } from 'components/TextField';
import Title from 'components/Title';

import { useAuth } from 'context/auth';

import useErrors from 'hooks/useErrors';

import {
  getMessages,
  IMessageProps,
  postMessage,
} from 'services/supabase/api.messages';

import * as Styles from 'styles/pages/chat';

const Chat = () => {
  const { user, clearUser } = useAuth();
  const router = useRouter();

  const [errorsState, errorsDispatch] = useErrors({
    userMessage: {
      message: 'Message is a required field',
    },
  });

  const inputRef = React.useRef<HTMLTextAreaElement>(null);

  const [listMessages, setListMessages] = React.useState<IMessageProps[]>([]);

  React.useEffect(() => {
    if (!user?.login) {
      clearUser();

      router.push('/');
    }
  }, [clearUser, router, user?.login]);
  React.useEffect(() => {
    const loadMessages = async () => {
      const response = await getMessages();

      setListMessages(response);
    };

    loadMessages();
  }, []);

  const handleLogout = React.useCallback(() => {
    clearUser();

    router.push('/');
  }, [clearUser, router]);
  const handleClearError = React.useCallback(() => {
    errorsDispatch({
      state: 'valid',
      payload: 'userMessage',
    });
  }, [errorsDispatch]);
  const handleSubmit = React.useCallback(async () => {
    if (inputRef.current?.value) {
      const message = inputRef.current?.value;

      const response = await postMessage({
        de: user?.login || 'Not Identified',
        texto: message,
      });

      setListMessages((state) => [...state, ...response]);

      inputRef.current.value = '';
    }

    return errorsDispatch({
      state: 'invalid',
      payload: 'userMessage',
    });
  }, [errorsDispatch, user?.login]);

  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.Header>
          <div>
            <Title as="h1">Chat</Title>
            <Text>Welcome, {user?.name}</Text>
          </div>

          <Button
            as="button"
            label="Logout"
            dimension="md"
            rounded="sm"
            variant="outline"
            onClick={handleLogout}
          />
        </Styles.Header>

        <Styles.ChatWrapper>
          {listMessages.map((message) => (
            <Styles.ChatMessage key={message.id}>
              <header>
                <img
                  src={`https://github.com/${message.from}.png`}
                  alt={message.from}
                />
                <strong>{message.from}</strong>
              </header>
              <p>{message.text}</p>
            </Styles.ChatMessage>
          ))}
        </Styles.ChatWrapper>

        <Styles.UserInputWrapper>
          <TextArea
            fullWidth
            error={errorsState.userMessage}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                event.preventDefault();

                handleSubmit();
              }
            }}
            handleOnChange={handleClearError}
            placeholder="Type our message here..."
            dimension="xs"
            ref={inputRef}
          />
          <Button label="Send" dimension="xl" onClick={handleSubmit} />
        </Styles.UserInputWrapper>
      </Styles.Content>
    </Styles.Container>
  );
};

export default Chat;
