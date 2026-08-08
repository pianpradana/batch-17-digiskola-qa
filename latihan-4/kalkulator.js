//Homework ke-4 Alfian Rifqi Pradana
//Logic untuk di export main.js yang berisi arrow function operator tambah, kurang, kali dan bagi

export const kalkulator = (x, y, operator) => {

  switch (operator) {

    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    case "/":

      if (y === 0) {
        return "Tidak bisa dibagi dengan angka nol";
      }

      return x / y;
      
      default:
        return "Operator yang tersedia: +, -, *, /";
  }

};


