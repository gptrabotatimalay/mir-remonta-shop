export type Unit = "м" | "м²" | "шт" | "лист" | "мешок" | "рулон";

export type Product = {
  slug: string;
  title: string;
  brand?: string;
  category: string;
  subcategory?: string;
  image: string;
  price: number;
  unit: Unit;
  oldPrice?: number;
  badge?: "Хит" | "Новинка" | "Акция";
  inStock: number;
  description: string;
  specs?: Record<string, string>;
};

export type Category = {
  id: string;
  title: string;
  image: string;
  subtitle: string;
};

export type CartItem = {
  slug: string;
  qty: number;
};
