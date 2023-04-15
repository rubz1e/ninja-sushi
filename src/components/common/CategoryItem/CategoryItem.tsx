import React from 'react';
import { categoryitems } from './CategoryItems.styled';

import { ReactComponent as AddToBasket } from '../../../assets/AddToBasket.svg';
import { ReactComponent as Favorite } from '../../../assets/Favorite.svg';
import { ISushi } from '../../../type/ISushi';

interface CategoryItemProps {
  category: ISushi;
}

export default function CategoryItem({ category }: CategoryItemProps) {
  return (
    <categoryitems.containers>
      <categoryitems.containerImg>
        <categoryitems.img>
          <img src={category.image_url} alt={category.name} width="100%" />
        </categoryitems.img>
      </categoryitems.containerImg>
      <categoryitems.title>{category.name}</categoryitems.title>
      <categoryitems.weight>Вес: {category.weight}</categoryitems.weight>
      <categoryitems.description>{category.description}</categoryitems.description>
      <categoryitems.bottomInterface>
        <categoryitems.bottomLeft>
          <categoryitems.price>{category.price}</categoryitems.price>
          <categoryitems.currency>BYN</categoryitems.currency>
        </categoryitems.bottomLeft>
        <categoryitems.bottomRight>
          <categoryitems.favorite>
            <Favorite />
          </categoryitems.favorite>
          <categoryitems.addToBasket>
            <AddToBasket />
          </categoryitems.addToBasket>
        </categoryitems.bottomRight>
      </categoryitems.bottomInterface>
    </categoryitems.containers>
  );
}
