import styled from 'styled-components';
import { baseTheme } from '../../../theme/baseTheme';
import { NavLink } from 'react-router-dom';

export const notfound = {
  container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
  `,
  text: styled.h3`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    color: ${baseTheme.colors.black};
    max-width: 400px;
    margin: 0;
  `,
  description: styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: ${baseTheme.colors.textFirst};
    max-width: 400px;
    margin-top: 16px;
  `,
  button: styled(NavLink)`
    background: #00cc2d;
    border-radius: 12px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 100px;
    text-decoration: none;
    color: ${baseTheme.colors.white};
    transition: 0.4s ease-in-out;
    margin-top: 32px;
    &:hover {
      color: ${baseTheme.colors.white};
      background: ${baseTheme.colors.hoverGreen};
    }
  `,
};
