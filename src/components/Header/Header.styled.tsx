import styled from 'styled-components';
import { baseTheme } from '../../theme/baseTheme';
import { NavLink } from 'react-router-dom';

export const headers = {
  container: styled.header`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    max-width: ${baseTheme.sizes.container.width}px;
    padding: 0 15px;
    border-radius: 12px;
    margin: 0 auto;
    height: ${baseTheme.sizes.header.height}px;
    z-index: ${baseTheme.order.header};
    background-color: ${baseTheme.colors.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  ul: styled.ul`
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 12px;
  `,
  li: styled.li``,
  logo: styled(NavLink)`
    cursor: pointer;
  `,
  link: styled(NavLink)`
    cursor: pointer;
    text-decoration: none;
    align-items: center;
    display: flex;
    padding: 22px 18px;
    transition: 0.1s ease-in-out;
    border-radius: 12px;
    color: ${baseTheme.colors.black};
    &:hover {
      background-color: ${baseTheme.colors.menuHover};
      color: ${baseTheme.colors.primaryOrange};
    }
  `,
  telephone: styled.p`
    margin: 0;
    margin-left: 8px;
  `,
  basket: styled.p`
    margin: 0;
    margin-right: 8px;
  `,
  icon: styled(NavLink)`
    border: 1px solid #d2d2d7;
    border-radius: 12px;
    display: flex;
    cursor: pointer;
    padding: 16px;
    transition: 0.1s ease-in-out;
    text-decoration: none;
    color: ${baseTheme.colors.black};
    justify-content: space-between;
    align-items: center;
    &:hover {
      background-color: ${baseTheme.colors.primaryOrange};
      border: 1px solid ${baseTheme.colors.primaryOrange};
      color: ${baseTheme.colors.white};
    }
  `,
};
