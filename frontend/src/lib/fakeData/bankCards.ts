interface BankCard {
  cardHolder: string,
  cardNumber: number,
  cardExpDate: string,
}

export const bankCards: BankCard[] = [
  {
    cardHolder: "Juan Pérez",
    cardNumber: 1234567890987654,
    cardExpDate: "12/27",
  },
  {
    cardHolder: "John Doe",
    cardNumber: 9876543212345678,
    cardExpDate: "09/29",
  },
  {
    cardHolder: "Maria Renard",
    cardNumber: 5678909876543217,
    cardExpDate: "04/32",
  },
  {
    cardHolder: "Sarah Kerrigan",
    cardNumber: 1029384756473829,
    cardExpDate: "01/28",
  },
];
