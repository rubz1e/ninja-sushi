import axios from 'axios';

const getSushiList = async (filter: any) => {
  await new Promise((resolve) => setTimeout(resolve, 0));
  return axios<[]>({
    method: 'GET',
    url: 'http://localhost:3001/sushi',
    params: {
      _sort: filter.sortField, // sort
      _order: filter.sortDir, // sort
      q: filter.query, // search
      _page: filter.page, // pagin
      _limit: filter.limit, // pagin
    },
  });
};

export default getSushiList;
