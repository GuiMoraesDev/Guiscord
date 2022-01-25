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

          <Button
            as="a"
            variant="outline"
            size="md"
            fullWidth
            rounded="sm"
            label="Go to project"
            href="https://github.com/GuiMoraesDev/imersao-react-aluracord"
          />
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
      </Styles.Content>
    </Styles.Container>
  );
};

export default Login;
