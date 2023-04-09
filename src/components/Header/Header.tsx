import React from 'react';
import { header } from './Header.styled';

import Logo from '../../assets/logo.svg';
import Tel from '../../assets/tel.svg';
import Fav from '../../assets/fav.svg';
import Prof from '../../assets/profile.svg';
import Basket from '../../assets/basket.svg';

export default function Header() {
  return (
    <header.container>
      <header.logoLink to="/">
        <img src={Logo} alt="Logo" color="black" />
      </header.logoLink>
      <header.linkList>
        <header.link to="*">Главная</header.link>
        <header.link to="*">Доставка</header.link>
        <header.link to="*">О нас</header.link>
        <header.link to="*">Новости</header.link>
        <header.link to="tel:+380976993438">
          <img src={Tel} alt="" />
          <header.tel>+38 097 699 34 38</header.tel>
        </header.link>
      </header.linkList>
      <header.linkList>
        <header.icon to="*">
          <img src={Fav} alt="Favorite" />
        </header.icon>
        <header.icon to="*">
          <img src={Prof} alt="Profile" />
        </header.icon>
        <header.icon to="*">
          <header.basket>Корзина</header.basket>
          <img src={Basket} alt="Basket" />
        </header.icon>
      </header.linkList>
    </header.container>
  );
}
