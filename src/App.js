import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    this.inputCalculator = new IputCalculator();

    const INPUT = await this.inputCalculator.getInput();
    const NUMBERS = this.inputCalculator.parse(INPUT);
    const result = this.inputCalculator.add(NUMBERS);

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

  delimited(trimInput) {
    const DELIMITE_ARR = [",", ":"];
    const REGEX = /^\/\/(.)\n(.*)$/;

    DELIMITE_ARR.push(";");
    return DELIMITE_ARR;
  }

  parse(trimedInput) {
    let temp = "";
    const NUM_ARR = [];

    for (let i = 0; i < trimedInput.length; ++i) {
      const TO_CHAR = trimedInput[i];

      if (TO_CHAR == "," || TO_CHAR == ":") {
        NUM_ARR.push(Number(temp));
        temp = "";
      } else {
        temp += TO_CHAR;
      }
    }
    NUM_ARR.push(Number(temp));

    return NUM_ARR;
  }
}

export default App;
