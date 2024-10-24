interface Address {
  firstName?: string;
  lastName?: string;
  street: string;
  num: number | "s/n";
  neighborhood?: string;
  city: string;
  province: string;
  postCode: number;
}

export const adressess: Address[] = [
  {
    street: "Altamirano",
    num: 94,
    province: "La Pampa",
    city: "San Juan José",
    postCode: 30840,
  },
  {
    street: "Arce",
    num: 996,
    province: "Tucumán",
    city: "Villa Juan Martín",
    postCode: 7918,
  },
  {
    street: "Emilia",
    num: 35,
    province: "Santa Cruz",
    city: "Puerto Jazmín del Oeste",
    postCode: 66570,
  },
  {
    street: "Aragón",
    num: 341,
    province: "Mendoza",
    city: "Vicente del Este",
    postCode: 38157,
  },
];
