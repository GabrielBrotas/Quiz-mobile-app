import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  margin: 20px 0px;
  width: 100%;
  height: 55px;
  background: #04D361;
  border-radius: 10px;
  margin-top: 8px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  line-height: 22px;
  text-align: center;

  color: #fff;
`;
