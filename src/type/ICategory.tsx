export interface Root {
  rolls: IRoll[];
  sushi: ISushi[];
  sets: ISet[];
  bowls: IBowl[];
  drinks: IDrink[];
  sausec: ISausec[];
}

interface INinjaSushi {
  id: number;
  name: string;
  description: string;
  image_url: string;
  ingredients: string[];
  weight: string;
  price: number;
  gluten_free: boolean;
  allergens: string[];
}
export interface IRoll extends INinjaSushi {}
export interface ISushi extends INinjaSushi {}
export interface ISet extends INinjaSushi {}
export interface IBowl extends INinjaSushi {}

export interface IIngredient {
  name: string;
  quantity: number;
}

export interface IDrink extends INinjaSushi {
  volume: number;
}

export interface ISausec extends INinjaSushi {
  spiciness_level?: number;
}
