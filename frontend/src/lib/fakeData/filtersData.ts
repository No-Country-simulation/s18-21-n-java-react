export interface Category {
  value: string,
  label: string,
}

export const categories: Category[] = [
  { value: "computers", label: "computadoras" },
  { value: "laptop", label: "laptops" },
  { value: "smartphone", label: "Smartphones" },
  { value: "keyboard", label: "Teclados" },
  { value: "mouse", label: "Mouse" },
  { value: "printer", label: "Impresoras" },
  { value: "processor", label: "Procesadores" },
  { value: "storage", label: "Almacenamiento" },
];

export const brands: string[] = [
  "Acer",
  "Apple",
  "Asus",
  "Dell",
  "HP",
  "Lenovo",
  "MSI",
  "Huawei",
  "Xiaomi",
];
