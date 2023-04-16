import { useEffect, useState } from 'react';
import { INinjaSushi } from '../../../../type/ICategory';
import CategoryItem from '../../../common/CategoryItem/CategoryItem';
import { mains } from '../Main.styled';
import getCategoryList from '../../../../api/category/getCategoryList';

import { ElementType } from '../../../../type/IFilter';

interface IMainCategoryProps {
  categoryName: string;
  getElement: ElementType;
}

export const MainCategoryList: React.FC<IMainCategoryProps> = ({ categoryName, getElement }) => {
  const [categoryList, setCategoryList] = useState<INinjaSushi[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const filter = {
        sortField: 'id',
      };
      const response = await getCategoryList(getElement, filter);
      setCategoryList(response.data);
    };
    fetchData();
  }, [getElement]);

  return (
    <mains.IBottom>
      {categoryList.slice(0, 8).map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </mains.IBottom>
  );
};
