import { useRouter } from 'next/router';

import React from 'react';

import AvatarPlaceholder from 'assets/images/avatar-placeholder.svg';

import appConfig from 'configs/app-config';

import Button from 'components/Button';
import Text from 'components/Text';
import { Input } from 'components/TextField';
import Title from 'components/Title';

import { useAuth } from 'context/auth';

import * as Styles from 'styles/pages/index';

const Login = () => {
  const { user, signIn } = useAuth();
  const router = useRouter();

  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleGoToChat = React.useCallback(() => {
    router.push('chat');
  }, [router]);

  const handleUsername = React.useCallback(
    (value) => {
      signIn({ username: value });
    },
    [signIn]
  );

  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.Form>
          <Title as="h2">Boas vindas de volta!</Title>
          <Text as="p">{appConfig.name}</Text>

          <Input
            placeholder="example@example.com"
            fullWidth
            handleDebounceOnChange={handleUsername}
            ref={inputRef}
          />

          <Button
            as="button"
            label="Login"
            size="md"
            fullWidth
            rounded="sm"
            onClick={handleGoToChat}
          />

          <Styles.SocialMediaWrapper>
            <Button
              as="a"
              variant="outline"
              size="square"
              rounded="full"
              icon="FaGithub"
              href="https://github.com/GuiMoraesDev/guiscord"
            />
            <Button
              as="a"
              variant="outline"
              size="square"
              rounded="full"
              icon="FaTwitter"
              href="https://twitter.com/GuiMoraesDev"
            />
            <Button
              as="a"
              variant="outline"
              size="square"
              rounded="full"
              icon="FaLinkedin"
              href="https://www.linkedin.com/in/guimoraesdev/"
            />
          </Styles.SocialMediaWrapper>
        </Styles.Form>

        <Styles.UserCard>
          <Styles.ImageWrapper>
            {user?.avatar_url ? (
              <img src={user?.avatar_url} alt={`avatar from ${user?.name}`} />
            ) : (
              <img src={AvatarPlaceholder} alt="avatar placeholder" />
            )}
          </Styles.ImageWrapper>
          {user?.name && <Text variant="highlighted">{user.name}</Text>}
        </Styles.UserCard>
      </Styles.Content>
    </Styles.Container>
  );
};

export default Login;
