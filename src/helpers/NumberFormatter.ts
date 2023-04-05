export const numberFormat = (number: number): string => {
    const newNumber = Intl.NumberFormat("us-US").format(number);
    return newNumber;
  };
  
  export const formatCurrency = (number: number): string => {
    const newNumber = Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(number);
    return newNumber;
  };
  