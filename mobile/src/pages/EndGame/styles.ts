import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 30px ${Platform.OS === 'android' ? 120 : 40}px;
  margin: 20px;

  justify-content: space-evenly;
`;

export const InfoContainer = styled.View`
  align-items: center;
  padding: 0 30px ${Platform.OS === 'android' ? 120 : 40}px;
  margin: 20px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 30px;
  line-height: 37px;
  text-align: center;
  margin: 25px 0px;

  color: #fff;
`;

export const Text = styled.Text`
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  text-align: center;

  width: 100%;
  color: #fff;
  margin-bottom: 25px;
`;

export const TextNumber = styled.Text`
  font-weight: 600;
  font-size: 60px;
  text-align: center;

  width: 100%;
  color: #04D361;
  margin-bottom: 25px;
`;
