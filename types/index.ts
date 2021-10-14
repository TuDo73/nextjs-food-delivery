export type ProdType = {
  category_code: string;
  code: string;
  create_date: null;
  create_user: null;
  descrition: null;
  img_url: null;
  name: string;
  name_en: string;
  price: number;
  price_code: null;
  restaurant_code: string;
  type: string;
  update_date: null;
  update_user: string;
};

export type CatType = {
  code: string;
  create_date: string;
  create_user: string;
  description: string;
  img_url: string;
  name: string;
  products: ProdType[];
  restaurant_code: string;
  update_date: string;
  update_user: string;
  isSelected?: boolean;
};
