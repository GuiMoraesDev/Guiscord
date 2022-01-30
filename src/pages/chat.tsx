import React from 'react';

import Button from 'components/Button';
import Title from 'components/Title';

import { useAuth } from 'context/auth';

import * as Styles from 'styles/pages/chat';

const Chat = () => {
  const { signOut } = useAuth();

  const handleLogout = React.useCallback(() => {
    signOut();
  }, [signOut]);

  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.Header>
          <Title as="h2">Chat</Title>

          <Button
            as="button"
            label="Logout"
            size="md"
            rounded="sm"
            variant="neutral"
            onClick={handleLogout}
          />
        </Styles.Header>
      </Styles.Content>
    </Styles.Container>
  );
};

export default Chat;
