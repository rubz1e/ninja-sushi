import React from 'react';

import { headers } from './Header.styled';

import Logo from '../../../assets/logo.svg';
import Telephone from '../../../assets/tel.svg';

import { ReactComponent as Favorite } from '../../../assets/fav.svg';
import { ReactComponent as Profile } from '../../../assets/profile.svg';
import { ReactComponent as Basket } from '../../../assets/basket.svg';

export default function Header() {
  return (
    <headers.container>
      <headers.logo to="/">
        <img src={Logo} alt="" />
      </headers.logo>
      <headers.ul>
        <headers.li>
          <headers.link to="/">Главная</headers.link>
        </headers.li>
        <headers.li>
          <headers.link to="/delivery">Доставка</headers.link>
        </headers.li>
        <headers.li>
          <headers.link to="/clients">Клиентам</headers.link>
        </headers.li>
        <headers.li>
          <headers.link to="/news">Новости</headers.link>
        </headers.li>
        <headers.li>
          <headers.link to="tel:+380976993438">
            <img src={Telephone} alt="Telephone" />
            <headers.telephone>+ 38 097 699 34 38</headers.telephone>
          </headers.link>
        </headers.li>
      </headers.ul>
      <headers.ul>
        <headers.li>
          <headers.icon to="/">
            <Favorite width="24px" height="24px" />
          </headers.icon>
        </headers.li>
        <headers.li>
          <headers.icon to="/">
            <Profile width="24px" height="24px" />
          </headers.icon>
        </headers.li>
        <headers.li>
          <headers.icon to="/">
            <headers.basket>Корзина</headers.basket>
            <Basket width="24px" height="24px" />
          </headers.icon>
        </headers.li>
      </headers.ul>
    </headers.container>
  );
}
