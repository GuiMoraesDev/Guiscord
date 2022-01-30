import { useRouter } from 'next/router';

import React from 'react';

import axios, { CancelTokenSource } from 'axios';

import Button from 'components/Button';
import Text from 'components/Text';
import { TextArea } from 'components/TextField';
import Title from 'components/Title';

import { useAuth } from 'context/auth';

import useErrors from 'hooks/useErrors';

import { FollowersDTO, getUserFollowers } from 'services/github/api.users';
import {
  deleteMessage,
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

  const [selectedContact, setSelectedContact] = React.useState<string | null>(
    null
  );
  const [listMessages, setListMessages] = React.useState<IMessageProps[]>([]);
  const [listFollowers, setListFollowers] = React.useState<FollowersDTO[]>([]);

  React.useEffect(() => {
    if (!user?.login) {
      clearUser();

      router.push('/');
    }
  }, [clearUser, router, user?.login]);
  React.useEffect(() => {
    const loadMessages = async () => {
      const response = await getMessages(
        user?.login || '',
        selectedContact || ''
      );

      setListMessages(response);
    };

    loadMessages();
  }, [selectedContact, user?.login]);
  React.useEffect(() => {
    const getUserFollowersCancelToken = axios.CancelToken.source();

    const loadFollowers = async (
      getUserFollowersCancelToken: CancelTokenSource
    ) => {
      if (!user?.login) return;

      const response = await getUserFollowers(
        {
          username: user?.login,
        },
        getUserFollowersCancelToken.token
      );

      setListFollowers(response.data);
    };

    loadFollowers(getUserFollowersCancelToken);

    return () => {
      getUserFollowersCancelToken.cancel();
    };
  }, [user?.login]);

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
  const handleDeleteMessage = React.useCallback(async (id: string) => {
    await deleteMessage(id);

    setListMessages((state) => state.filter((msg) => msg.id !== id));
  }, []);
  const handleSubmit = React.useCallback(async () => {
    if (inputRef.current?.value && selectedContact) {
      const message = inputRef.current?.value;

      const response = await postMessage({
        de: user?.login || 'Not Identified',
        para: selectedContact,
        texto: message,
      });

      setListMessages((state) => [...state, ...response]);

      inputRef.current.value = '';

      return errorsDispatch({
        state: 'valid',
        payload: 'userMessage',
      });
    }

    return errorsDispatch({
      state: 'invalid',
      payload: 'userMessage',
    });
  }, [errorsDispatch, selectedContact, user?.login]);

  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.Sidebar>
          {listFollowers.map((follower) => (
            <Styles.FollowerCard
              key={follower.login}
              selected={selectedContact === follower.login}
              onClick={() => setSelectedContact(follower.login)}
            >
              <img
                src={`https://github.com/${follower.login}.png`}
                alt={follower.login}
              />
              <strong>{follower.login}</strong>
            </Styles.FollowerCard>
          ))}
        </Styles.Sidebar>
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

                <Button
                  className="removeMessage"
                  icon="FaTimes"
                  variant="neutral"
                  dimension="square"
                  onClick={() => handleDeleteMessage(message.id)}
                />
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
