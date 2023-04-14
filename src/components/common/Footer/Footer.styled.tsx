import styled from 'styled-components';
import { baseTheme } from '../../../theme/baseTheme';
import { NavLink } from 'react-router-dom';
import { containers } from '../../../styles/globalStyle';

export const footers = {
  containers: styled.footer`
    background-color: ${baseTheme.colors.white};
    border-radius: 24px 24px 0px 0px;
    margin-top: 34px;
  `,
  container: styled.div`
    ${containers}
    padding-top: 64px;
    padding-bottom: 64px;
    position: relative;
    display: flex;
    justify-content: space-between;
  `,
  terms: styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
  `,
  store: styled.div`
    display: flex;
    gap: 13px;
    margin-top: 24px;
  `,
  linkStore: styled(NavLink)`
    cursor: pointer;
    text-decoration: none;
  `,
  links: styled.div`
    display: flex;
    flex-direction: column;
  `,
  privacyPolicy: styled(NavLink)`
    cursor: pointer;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-top: 72px;
    text-decoration: none;
    align-items: center;
    display: flex;
    transition: 0.1s ease-in-out;
    color: ${baseTheme.colors.black};
    &:hover {
      color: ${baseTheme.colors.primaryOrange};
    }
  `,
  navigations: styled.span`
    color: ${baseTheme.colors.textFirst};
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  `,
  timeText: styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  `,
  nightDelivery: styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${baseTheme.colors.textFirst};
  `,
  ul: styled.ul`
    list-style-type: none;
    flex-direction: column;
    display: flex;
    align-items: start;
    gap: 4px;
    padding: 0;
    margin: 0;
    margin-top: 12px;
  `,
  li: styled.li`
    margin: 0;
  `,
  logo: styled(NavLink)`
    cursor: pointer;
  `,
  link: styled(NavLink)`
    cursor: pointer;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-decoration: none;
    align-items: center;
    display: flex;
    transition: 0.1s ease-in-out;
    color: ${baseTheme.colors.black};
    &:hover {
      color: ${baseTheme.colors.primaryOrange};
    }
  `,
};
