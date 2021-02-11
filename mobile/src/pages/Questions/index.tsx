import React from 'react';

import {
  Container,
  Image,
  Text,
  ButtonsContainer,
} from './styles';

import Button from '../../components/Button';

import ElonMusk from '../../assets/elonmusk.jpg';

const Questions: React.FC = () => {
  return (
    <Container style={{flex: 1, justifyContent: 'center'}}>
      <Image source={ElonMusk} />

      <Text>
        loremr eormseir mseoirm soeifms imsaoi dmasoid masodiamsdoimas doiamsd o?
      </Text>

      <Button primary={false}>
        Resposta numero 1
      </Button>

      <Button primary={false}>
        Resposta numero 1
      </Button>

      <Button primary={false}>
        Resposta numero 1
      </Button>

      <Button primary={false}>
        Resposta numero 1
      </Button>

      <Button primary={false}>
        Resposta numero 1
      </Button>

    </Container>
  )
};

export default Questions;
