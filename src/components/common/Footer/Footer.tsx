import React from 'react';

import { footers } from './Footer.styled';

import { ReactComponent as WeLikeWhatWeDo } from '../../../assets/WeLikeWhatWeDo.svg';
import { ReactComponent as AppStore } from '../../../assets/AppStore.svg';
import { ReactComponent as GooglePlay } from '../../../assets/GooglePlay.svg';

export default function Footer() {
  return (
    <footers.containers>
      <footers.container>
        <footers.terms>
          <WeLikeWhatWeDo width="246" height="59" />
          <footers.store>
            <footers.linkStore to="/*">
              <AppStore width="110" height="37" />
            </footers.linkStore>
            <footers.linkStore to="/*">
              <GooglePlay width="123" height="37" />
            </footers.linkStore>
          </footers.store>
          <footers.privacyPolicy to="/">Политика конфиденциальности</footers.privacyPolicy>
        </footers.terms>
        <footers.links>
          <footers.navigations>Навигация:</footers.navigations>
          <footers.ul>
            <footers.li>
              <footers.link to="/">Главная</footers.link>
            </footers.li>
            <footers.li>
              <footers.link to="/">Меню</footers.link>
            </footers.li>
            <footers.li>
              <footers.link to="/">Доставка</footers.link>
            </footers.li>
            <footers.li>
              <footers.link to="/">Вакансии</footers.link>
            </footers.li>
            <footers.li>
              <footers.link to="/">Новости</footers.link>
            </footers.li>
          </footers.ul>
        </footers.links>
        <footers.links>
          <footers.navigations>Оформить заказ:</footers.navigations>
          <footers.ul>
            <footers.li>
              <footers.link to="tel:+380674366127">+38 (067) 436 61 27</footers.link>
            </footers.li>
            <footers.li>
              <footers.link to="tel:+380660317630">+38 (066) 031 76 30</footers.link>
            </footers.li>
            <footers.li>
              <footers.link to="tel:+380939249828">+38 (093) 924 98 28</footers.link>
            </footers.li>
          </footers.ul>
        </footers.links>
        <footers.links>
          <footers.navigations>Время работы:</footers.navigations>
          <footers.ul>
            <footers.li>
              <footers.timeText>с 11:00 до 22:45</footers.timeText>
            </footers.li>
            <footers.li>
              <footers.timeText>с 22.45 до 06.00</footers.timeText>
            </footers.li>
            <footers.li>
              <footers.nightDelivery>Ночная доставка</footers.nightDelivery>
            </footers.li>
          </footers.ul>
        </footers.links>
      </footers.container>
    </footers.containers>
  );
}
