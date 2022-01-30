import { useRouter } from 'next/router';

import React from 'react';

import axios, { CancelTokenSource } from 'axios';

import newConversationAnimationData from 'assets/animations/new-conversation.json';
import selectMessageAnimationData from 'assets/animations/select-message.json';

import Button from 'components/Button';
import { Loading } from 'components/Loading';
import LootieImg from 'components/Lottie';
import Text from 'components/Text';
import { TextArea } from 'components/TextField';
import Title from 'components/Title';

import { useAuth } from 'context/auth';

import useErrors from 'hooks/useErrors';
import useLoading from 'hooks/useLoading';

import { getUserFollowing, FollowingDTO } from 'services/github/api.users';
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

  const [loadingMessagesState, loadingMessagesDispatch] = useLoading();
  const [loadingFollowingState, loadingFollowingDispatch] = useLoading();
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
  const [listFollowing, setListFollowing] = React.useState<FollowingDTO[]>([]);

  React.useEffect(() => {
    if (!user?.login) {
      clearUser();

      router.push('/');
    }
  }, [clearUser, router, user?.login]);
  React.useEffect(() => {
    const loadMessages = async () => {
      loadingMessagesDispatch({
        state: 'loading',
      });

      const response = await getMessages(
        user?.login || '',
        selectedContact || ''
      );

      setListMessages(response);

      loadingMessagesDispatch({
        state: 'initial',
      });
    };

    loadMessages();
  }, [loadingMessagesDispatch, selectedContact, user?.login]);
  React.useEffect(() => {
    const getUserFollowingCancelToken = axios.CancelToken.source();

    const loadFollowing = async (
      getUserFollowingCancelToken: CancelTokenSource
    ) => {
      if (!user?.login) return;

      loadingFollowingDispatch({
        state: 'loading',
      });

      const response = await getUserFollowing(
        {
          username: user?.login,
        },
        getUserFollowingCancelToken.token
      );

      setListFollowing(response.data);

      loadingFollowingDispatch({
        state: 'initial',
      });
    };

    loadFollowing(getUserFollowingCancelToken);

    return () => {
      getUserFollowingCancelToken.cancel();
    };
  }, [loadingFollowingDispatch, user?.login]);

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
          {loadingFollowingState.loading ? (
            <Loading status={loadingFollowingState} />
          ) : listFollowing.length ? (
            listFollowing.map((following) => (
              <Styles.FollowingCard
                key={following.login}
                selected={selectedContact === following.login}
                onClick={() => setSelectedContact(following.login)}
              >
                <img
                  src={`https://github.com/${following.login}.png`}
                  alt={following.login}
                />
                <strong>@{following.login}</strong>
              </Styles.FollowingCard>
            ))
          ) : (
            <Styles.EmptyFollowing>
              <strong>You don&apos;t follow nobody yet</strong>
              <p>Follow some users in GitHub to see them here</p>
            </Styles.EmptyFollowing>
          )}
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
          {loadingMessagesState.loading ? (
            <Loading status={loadingMessagesState} />
          ) : selectedContact ? (
            listMessages.length ? (
              listMessages.map((message) => (
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
              ))
            ) : (
              <Styles.EmptyMessages>
                <LootieImg animationData={newConversationAnimationData} />
                <strong>Send message to @{selectedContact}</strong>
              </Styles.EmptyMessages>
            )
          ) : (
            <Styles.EmptyMessages>
              <LootieImg animationData={selectMessageAnimationData} />
              <strong>Select a contact to start a new conversation</strong>
            </Styles.EmptyMessages>
          )}
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
