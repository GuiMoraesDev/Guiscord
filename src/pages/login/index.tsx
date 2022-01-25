import appConfig from 'configs/app-config';

import Button from 'components/Button';
import Text from 'components/Text';
import TextField from 'components/TextField';
import Title from 'components/Title';

import * as Styles from './styles';

const Login = () => {
  const username = 'peas';

  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.Form>
          <Title as="h2">Boas vindas de volta!</Title>
          <Text as="p">{appConfig.name}</Text>

          <TextField type="text" placeholder="example@example.com" fullWidth />

          <Button as="button" label="Login" size="md" fullWidth rounded="sm" />
        </Styles.Form>

        <Styles.UserCard>
          <Styles.ImageWrapper>
            <img
              src={`https://github.com/${username}.png`}
              alt={`avatar from ${username}`}
            />
          </Styles.ImageWrapper>
          <Text variant="highlighted">{username}</Text>
        </Styles.UserCard>

        {/* Photo Area */}
        {/* <Box
          styleSheet={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: '200px',
            padding: '16px',
            backgroundColor: appConfig.theme.colors.neutrals[800],
            border: '1px solid',
            borderColor: appConfig.theme.colors.neutrals[999],
            borderRadius: '10px',
            flex: 1,
            minHeight: '240px',
          }}
        >
          <Image
            styleSheet={{
              borderRadius: '50%',
              marginBottom: '16px',
            }}
            src={`https://github.com/${username}.png`}
          />
          <Text
            variant="body4"
            styleSheet={{
              color: appConfig.theme.colors.neutrals[200],
              backgroundColor: appConfig.theme.colors.neutrals[900],
              padding: '3px 10px',
              borderRadius: '1000px',
            }}
          >
            {username}
          </Text>
        </Box> */}
        {/* Photo Area */}
      </Styles.Content>
    </Styles.Container>
  );
};

export default Login;
