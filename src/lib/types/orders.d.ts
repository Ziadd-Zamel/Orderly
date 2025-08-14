declare type Order = {
  id: number;
  status: "completed" | "pending" | "canceled";
  date: string;
  totalPrice: number;
  currency: string;
  paymentMethod: string;
  itemsCount: number;
  productImages: string[];
};
