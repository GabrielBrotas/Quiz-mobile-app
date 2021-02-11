import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface IStyleProps {
  primary: boolean;
}

export const Container = styled(RectButton)<IStyleProps>`
  width: 100%;
  height: 53px;
  border-radius: 10px;
  margin: 10px 0;

  justify-content: center;
  align-items: center;

  ${props => props.primary ? css`
    background: #04D361;
  ` : css`
    background: #F4F4F4;
    border: 1px solid #B6B6B6;
    border-radius: 8px;
  `
  }
`;

export const ButtonText = styled.Text<IStyleProps>`
  font-size: 15px;
  line-height: 22px;
  text-align: center;

  ${props => props.primary ? css`
    color: #fff;
  ` : css`
    color: #575757;
  `
  }
`;
