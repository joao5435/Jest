
import {sum,subtract,isEven,divide} from "./calculator.js";

describe("Estou testando apenas as funções do calculator.js", () => {



test("sum: deve somar corretamente", () => {
expect(sum(2,3)).toBe(5);
});

test("Subtract: deve subtrair corretamente", () => {
    expect(subtract(5, 2)).toBe(3)
})

test("isEven: deve retornar True para números pares,", () => {
    expect(isEven(6)).toBe(true)
})

test("isEven: deve retornar false para número ímpar", () => {
expect(isEven(5)).toBe(false);
});

test("divide: deve lançar erro ao dividir por zero", () => {
expect(() => divide(4,0)).toThrow("Não pode ser zero");
});

})