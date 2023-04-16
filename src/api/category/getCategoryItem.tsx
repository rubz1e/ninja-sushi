import axios from 'axios';
import { ElementType } from '../../type/IFilter';

const getCategoryItem = async (element: ElementType, name: number) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return axios<[]>({
    method: 'GET',
    url: `http://localhost:3001/category/${element}/${name}`,
  });
};

export default getCategoryItem;
