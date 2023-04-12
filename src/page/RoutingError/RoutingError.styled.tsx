import styled from 'styled-components';
import { baseTheme } from '../../theme/baseTheme';
import { NavLink } from 'react-router-dom';

const Text = styled.h2`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
`;

export const notFounds = {
  errorContainer: styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 16px;
  `,
  error: styled.div`
    display: flex;
    max-width: 400px;
    flex-direction: column;
  `,
  h2: styled(Text)`
    color: ${baseTheme.colors.black};
    margin: 0;
    font-size: 32px;
  `,
  h3: styled(Text)`
    color: ${baseTheme.colors.black};
    margin: 0;
    font-size: 28px;
  `,
  p: styled.p`
    color: ${baseTheme.colors.textFirst};
    margin: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-top: 16px;
  `,
  link: styled(NavLink)`
    cursor: pointer;
    text-decoration: none;
    align-items: center;
    margin-top: 32px;
    display: flex;
    transition: 0.1s ease-in-out;
    padding: 16px 110px;
    border-radius: 12px;
    color: ${baseTheme.colors.white};
    background-color: ${baseTheme.colors.primaryGreen};
    &:hover {
      background-color: ${baseTheme.colors.hoverGreen};
      color: ${baseTheme.colors.white};
    }
  `,
};
