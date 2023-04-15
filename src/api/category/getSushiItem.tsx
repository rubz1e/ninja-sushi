import axios from 'axios';

const getSushiItem = async (id: number) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return axios<[]>({
    method: 'GET',
    url: `http://localhost:3001/sushi/${id}`,
  });
};

export default getSushiItem;
