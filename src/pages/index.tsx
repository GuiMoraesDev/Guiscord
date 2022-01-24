import Title from "../components/Title";
import GlobalStyles from "../styles/global";

const Index = () => {
  return (
    <div>
      <GlobalStyles />
      <Title as="h1">Boas vindas de volta!</Title>
      <Title as="h2">Aluracord - Alura Matrix</Title>
    </div>
  );
};

export default Index;
