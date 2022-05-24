export interface IDataReviews {
  name: string;
  text: string;
  id: number;
}

export interface IDataOrdering {
  phone: string,
  name: string,
  cash?: boolean,
  card?: boolean,
  sum?: number,
  sticks: number,
  souse: number,
  promo?: string,
  courier?: boolean,
  pickup?: boolean,
  street?: string,
  house?: number,
  apartment?: number,
  floor?: number,
  code?: number,
  email?: string,
}