export interface ISushi {
  id: number;
  name: string;
  description: string;
  image_url: string;
  weight: string;
  price: number;
}

export interface ISushiCard {
  id: number;
  name: string;
  description: string;
  image_url: string;
  ingridients: [string];
  weight: string;
  price: number;
  gluten_free: boolean;
  allergens: [string];
}
