import styled from 'styled-components';
import { baseTheme } from '../../../theme/baseTheme';

export const categoryitems = {
  containers: styled.div`
    padding: 24px;
    border-radius: 12px;
    width: 320px;
    height: 520px;
    background-color: ${baseTheme.colors.white};
    transition: 0.1s ease-in-out;
    &:hover {
      box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
    }
  `,
  containerImg: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  img: styled.div`
    max-width: 331px;
    max-height: 290px;
  `,
  title: styled.h3`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    line-height: 32px;
    color: ${baseTheme.colors.black};
    margin: 12px 0 0 0;
  `,
  weight: styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    color: ${baseTheme.colors.primaryOrange};
    margin: 12px 0 0 0;
  `,
  description: styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${baseTheme.colors.textFirst};
    margin: 8px 0 0 0;
  `,
  bottomInterface: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;
  `,
  bottomLeft: styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  `,
  bottomRight: styled.div`
    display: flex;
  `,
  price: styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 32px;
    margin: 0;
  `,
  currency: styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 31px;
    color: ${baseTheme.colors.textFirst};
    margin: 0 0 0 5px;
  `,
  favorite: styled.button`
    padding: 15px 12px;
    border-radius: 12px;
    background-color: ${baseTheme.colors.bgGray};
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s ease-in-out;
    svg {
      fill: #ff6633;
    }
    &:hover {
      background-color: ${baseTheme.colors.bgTransparentSecond};
    }
    &:focus {
      svg {
        fill: white;
      }
      background-color: ${baseTheme.colors.primaryOrange};
    }
  `,
  addToBasket: styled.button`
    margin-left: 12px;
    padding: 10px 24px;
    display: flex;
    fill: white;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    background-color: ${baseTheme.colors.bgGreen};
    transition: 0.2s ease-in-out;
    svg {
      fill: #00cc2d;
    }
    &:hover {
      background-color: ${baseTheme.colors.primaryGreen};
      transition: 0.2s ease-in-out;
      svg {
        fill: white;
      }
    }
  `,
  downItem: styled.div``,
  down: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 240px;
  `,
};
