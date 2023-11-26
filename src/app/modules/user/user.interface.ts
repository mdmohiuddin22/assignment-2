export type Orders = {
  productName: string;
  price: number;
  quantity: number;
};
export type UserData = {
  userId: number;
  userName: string;
  password: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  isActive: "active" | "inActive";
  hobbies: [string, string];
  address: {
    street: string;
    city: string;
    country: string;
  };
  orders: Orders[];
};
