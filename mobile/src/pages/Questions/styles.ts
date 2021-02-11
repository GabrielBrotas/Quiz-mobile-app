import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 30px ${Platform.OS === 'android' ? 120 : 40}px;
  background-color: #fff;
  margin: 20px 20px 0px 20px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

export const Image = styled.Image`
  margin-top: 30px;
  width: 100%;
  height: 150px;

  border-radius: 10px;
`;

export const Text = styled.Text`
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  text-align: center;

  width: 100%;
  color: #32264D;
  margin: 15px 0;
`;

export const ButtonsContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
