export interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  priceinternet: number;
  pricediscount: number;
  startdate: string;
  duration: string;
  modality: string;
  credits: string;
  hours: string;
  image: string;
  rating?:Object;  //opcional
}
