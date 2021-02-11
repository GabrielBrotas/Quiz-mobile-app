import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProps {
  primary?: boolean;
  children: string;
}

const Button: React.FC<ButtonProps> = ({ primary = true, children, ...rest }) => (
  <Container {...rest} primary={primary}>
    <ButtonText primary={primary}>
      {children}
    </ButtonText>
  </Container>
)

export default Button
