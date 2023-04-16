import React, { useState, useEffect } from 'react';
import { mains } from './Main.styled';
import getSushiList from '../../../api/category/getSushiList';
import CategoryItem from '../../common/CategoryItem/CategoryItem';
import { ISushi } from '../../../type/ICategory';

const SushiList = () => {
  const [sushiList, setSushiList] = useState<ISushi[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const filter = {
        sortField: 'id',
        sortDir: 'asc',
        query: '',
        page: 1,
        limit: 12,
      };
      const response = await getSushiList(filter);
      setSushiList(response.data);
    };
    fetchData();
  }, []);

  return (
    <mains.IBottom>
      {sushiList.map((sushi) => (
        <CategoryItem category={sushi} key={sushi.id} />
      ))}
    </mains.IBottom>
  );
};

export default function Main() {
  return (
    <mains.container>
      <div>
        <mains.Itop>
          <mains.p>Суши</mains.p>
          <mains.link to="/">Смотреть все</mains.link>
        </mains.Itop>
        <SushiList />
      </div>
    </mains.container>
  );
}
