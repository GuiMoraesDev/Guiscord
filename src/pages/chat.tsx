import React from 'react';

import { uniqueId } from 'lodash';

import Button from 'components/Button';
import Text from 'components/Text';
import { TextArea } from 'components/TextField';
import { IErrorsProps } from 'components/TextField/dtos';
import Title from 'components/Title';

import { useAuth } from 'context/auth';

import * as Styles from 'styles/pages/chat';

interface IMessageProps {
  id: string;
  from: string;
  text: string;
}

const Chat = () => {
  const { user, signOut } = useAuth();

  const inputRef = React.useRef<HTMLTextAreaElement>(null);

  const [listMessages, setListMessages] = React.useState<IMessageProps[]>([]);
  const [errors, setError] = React.useState<IErrorsProps>({
    userMessage: {
      message: 'Message is a required field',
      isValid: true,
    },
  });

  const generateMessageMetadata = React.useCallback(
    (from: string, message: string): IMessageProps => {
      return {
        id: uniqueId(),
        from,
        text: message,
      };
    },
    []
  );
  const handleLogout = React.useCallback(() => {
    signOut();
  }, [signOut]);
  const handleClearError = React.useCallback(() => {
    setError((errorsState) => ({
      ...errorsState,
      userMessage: { ...errorsState.userMessage, isValid: true },
    }));
  }, []);
  const handleSubmit = React.useCallback(() => {
    if (inputRef.current?.value) {
      const message = inputRef.current?.value;

      const messageData = generateMessageMetadata(
        user?.name || 'Not Identified',
        message
      );

      setListMessages((state) => [...state, messageData]);

      inputRef.current.value = '';
    }

    return setError((errorsState) => ({
      ...errorsState,
      userMessage: { ...errorsState.userMessage, isValid: false },
    }));
  }, [generateMessageMetadata, user?.name]);

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
                <img src={user?.avatar_url} alt={user?.name} />
                <strong>{message.from}</strong>
              </header>
              <p>{message.text}</p>
            </Styles.ChatMessage>
          ))}
        </Styles.ChatWrapper>

        <Styles.UserInputWrapper>
          <TextArea
            fullWidth
            error={errors.userMessage}
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
