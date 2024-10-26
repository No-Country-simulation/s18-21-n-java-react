export interface Address {
  firstName?: string;
  lastName?: string;
  street: string;
  num: number | "s/n";
  neighborhood?: string;
  city: string;
  province: string;
  postCode: number;
}