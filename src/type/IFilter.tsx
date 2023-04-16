export type ElementType = 'rolls' | 'sushi' | 'sets' | 'bowls' | 'drinks' | 'sausec';

export interface IFilterType {
  sortField?: string;
  sortDir?: 'asc' | 'desc';
  query?: string;
  page?: number;
  limit?: number;
}
