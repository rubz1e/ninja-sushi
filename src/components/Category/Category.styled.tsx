import styled from 'styled-components';
import { baseTheme } from '../../theme/baseTheme';
import { NavLink } from 'react-router-dom';

export const categories = {
  container: styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    max-width: 586px;
    border-radius: 12px;
    margin: 0 auto;
    margin-top: 16px;
    height: 83px;
    padding: 6px 16px;
    background-color: ${baseTheme.colors.white};
    align-items: center;
    display: flex;
    justify-content: space-evenly;
  `,
  ul: styled.ul`
    list-style-type: none;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    gap: 12px;
  `,
  li: styled.li`
    display: flex;
  `,
  link: styled(NavLink)`
    cursor: pointer;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6px 20px;
    transition: 0.1s ease-in-out;
    border-radius: 12px;
    color: ${baseTheme.colors.black};
    &:hover {
      background-color: ${baseTheme.colors.menuHover};
      color: ${baseTheme.colors.primaryOrange};
    }
  `,
  p: styled.p`
    margin: 0;
    padding: 0;
  `,
};
