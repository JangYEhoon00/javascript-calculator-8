import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    this.inputCalculator = new IputCalculator();

    const input = await this.inputCalculator.getInput();
    const numbers = this.inputCalculator.parse(input);
    const result = this.inputCalculator.add(numbers);

    Console.print(`결과 : ${result}`);
  }
}

class IputCalculator {
  async getInput() {
    const input_Value = await Console.readLineAsync("숫자를 입력하세요 : ");
    const trim_Input = input_Value.replaceAll(" ", "");

    return trim_Input;
  }

  add(numbers) {
    let sum = 0;
    for (let arr of numbers) {
      sum += arr;
    }
    return sum;
  }

  parse(trimedInput) {
    let temp = "";
    let numArr = [];

    for (let i = 0; i < trimedInput.length; ++i) {
      const to_Char = trimedInput[i];

      if (to_Char == "," || to_Char == ":") {
        temp = "";
      } else {
        numArr.push(Number(to_Char));
      }
    }
    return numArr;
  }
}

export default App;
