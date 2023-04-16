import axios from 'axios';
import { ElementType, IFilterType } from '../../type/IFilter';

const getCategoryList = async (element: ElementType, filter: IFilterType) => {
  await new Promise((resolve) => setTimeout(resolve, 0));

  const defaultParams = {
    _sort: filter.sortField, // sort
    _order: filter.sortDir, // sort
    q: filter.query, // search
    _page: filter.page, // pagin
    _limit: filter.limit, // pagin
  };
  const url = `http://localhost:3001/${element}`;
  const params = { ...defaultParams };

  return axios<[]>({
    method: 'GET',
    url,
    params,
  });
};

export default getCategoryList;
