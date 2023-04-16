import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { containers } from '../../../styles/globalStyle';
import { baseTheme } from '../../../theme/baseTheme';

export const mains = {
  container: styled.section`
    ${containers}
    margin-top: 48px;
  `,
  Itop: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  p: styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 64px;
    margin: 0;
    padding: 0;
    color: ${baseTheme.colors.black};
  `,
  link: styled(NavLink)`
    border-radius: 12px;
    display: flex;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    cursor: pointer;
    padding: 12px 24px;
    text-decoration: none;
    color: ${baseTheme.colors.green};
    background-color: ${baseTheme.colors.white};
    justify-content: space-between;
    align-items: center;
    transition: 0.2s ease-in-out;
    &:hover {
      background-color: ${baseTheme.colors.hoverGreen};
      color: ${baseTheme.colors.white};
    }
  `,
  IBottom: styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 32px 0 0 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    gap: 20px;
  `,
  ICategory: styled.div`
    margin: 124px 0 0 0;
    padding: 0;
  `,
};
