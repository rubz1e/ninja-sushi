import styled from 'styled-components';

import { baseTheme } from './../../theme/baseTheme';
import { NavLink } from 'react-router-dom';

export const header = {
  container: styled.header`
    display: flex;
    height: ${baseTheme.sizes.header.height}px;
    justify-content: space-between;
    padding: 0 15px;
    max-width: ${baseTheme.sizes.container.width}px;
    border-radius: 0 0 12px 12px;
    background-color: ${baseTheme.colors.white};
    margin: 0 auto;
    font-weight: 500;
    font-size: 16px;
    align-items: center;
    z-index: ${baseTheme.order.header};
  `,
  logoLink: styled(NavLink)`
    text-decoration: none;
    cursor: pointer;
    display: flex;
    align-items: center;
  `,
  linkList: styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
  `,
  link: styled(NavLink)`
    text-decoration: none;
    cursor: pointer;
    color: ${baseTheme.colors.black};
    display: flex;
    align-items: center;
    padding: 20px 24px;
    transition: 0.1s ease-in-out;
    border-radius: 12px;
    &:hover {
      color: ${baseTheme.colors.primaryOrange};
      background: ${baseTheme.colors.bgOrange};
    }
  `,
  tel: styled.p`
    padding-left: 12px;
    margin: 0px;
  `,
  basket: styled.p`
    padding-right: 12px;
    margin: 0px;
  `,
  icon: styled(NavLink)`
    text-decoration: none;
    cursor: pointer;
    color: ${baseTheme.colors.black};
    display: flex;
    align-items: center;
    padding: 16px;
    transition: 0.1s ease-in-out;
    border-radius: 12px;
    margin-left: 12px;
    border: 1px solid #d2d2d7;
    &:hover {
      color: ${baseTheme.colors.white};
      border: 1px solid;
      border-color: ${baseTheme.colors.hoverOrange};
      background: ${baseTheme.colors.hoverOrange};
    }
  `,
};
