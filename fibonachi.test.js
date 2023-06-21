const fibonachi = require("./fibonachi");

describe("Fibonachi", () => {
  test("A função deve retornar a lista de fibochi até o numero informado", () => {
    const numero = fibonachi(8);
    expect(numero).toBe("0, 1, 1, 2, 3, 5, 8");
  });
  test("A função deve receber apenas numeros inteiros.", () => {
    const expression = () => fibonachi(-1);
    expect(expression).toThrow("Número não pode ser menor que zero");
  });
});
