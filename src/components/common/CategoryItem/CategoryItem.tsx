import React, { useState } from 'react';
import { categoryitems } from './CategoryItems.styled';

import { ReactComponent as AddToBasket } from '../../../assets/AddToBasket.svg';
import { ReactComponent as Favorite } from '../../../assets/Favorite.svg';
import { IRoll, ISushi, ISet, IBowl, IDrink, ISausec } from '../../../type/ICategory';

interface CategoryItemProps {
  category: ISushi | IRoll | ISet | IBowl | IDrink | ISausec;
}

export default function CategoryItem({ category }: CategoryItemProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <categoryitems.containers>
      <categoryitems.containerImg>
        <categoryitems.img>
          <img src={category.image_url} alt={category.name} width="100%" />
        </categoryitems.img>
      </categoryitems.containerImg>
      <categoryitems.down>
        <categoryitems.downItem>
          <categoryitems.title>{category.name}</categoryitems.title>
          <categoryitems.weight>Вес: {category.weight}</categoryitems.weight>
          <categoryitems.description>{category.description}</categoryitems.description>
        </categoryitems.downItem>
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
      </categoryitems.down>
    </categoryitems.containers>
  );
}
