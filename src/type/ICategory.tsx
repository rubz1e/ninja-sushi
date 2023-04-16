export interface INinjaSushi {
  id: number;
  name: string;
  description: string;
  image_url: string;
  ingredients: string[];
  weight: string;
  price: number;
  gluten_free: boolean;
  spiciness_level?: number;
  allergens: string[];
}
