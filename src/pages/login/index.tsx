import Title from "components/Title";
import Text from "components/Text";

import * as Styles from "./styles";
import appConfig from "configs/app-config";
import TextField from "components/TextField";
import Button from "components/Button";

const Login = () => {
  const username = "peas";

  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.Form>
          <Title as="h2">Boas vindas de volta!</Title>
          <Text as='p'>{appConfig.name}</Text>

          <TextField type="text" fullWidth />

          <Button as="button" label="Entrar" size='md' fullWidth rounded='sm' />
        </Styles.Form>
      </Styles.Content>
    </Styles.Container>
  );
};

export default Login;
