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

  parse(trimedInput) {
    if (!trimedInput || trimedInput === "") {
      return [0];
    }
    // 입력값: //;\n1,2;3
    let delimiters = [",", ":"];
    let numParts = trimedInput;
    const PARTS = trimedInput.replace("\n", "\\n").split("\\n");

    if (PARTS[0].slice(0, 2) === "//") {
      const CUSTOM_DELIMITER = PARTS[0][2];
      delimiters.push(CUSTOM_DELIMITER);
      numParts = PARTS[1];
    }

    let temp = "";
    const NUM_ARR = [];

    for (let i = 0; i < numParts.length; ++i) {
      const TO_CHAR = numParts[i];

      if (delimiters.includes(TO_CHAR)) {
        if (temp === "") {
          throw new Error("[ERROR] 아무 값도 입력하지 않았습니다.");
        }
        const parsed = Number(temp);
        if (isNaN(parsed)) {
          throw new Error("[ERROR] 숫자가 아닌 값이 있습니다.");
        }
        if (parsed < 0) {
          throw new Error("[ERROR] 음수는 입력할 수 없습니다.");
        }

        NUM_ARR.push(parsed);
        temp = "";
      } else {
        temp += TO_CHAR;
      }
    }

    const checker = Number(temp);
    if (temp === "") {
      throw new Error("[ERROR] 아무 값도 입력하지 않았습니다.");
    }
    if (isNaN(checker)) {
      throw new Error("[ERROR] 숫자가 아닌 값이 있습니다.");
    }

    if (checker < 0) {
      throw new Error("[ERROR] 음수는 입력할 수 없습니다.");
    }
    NUM_ARR.push(checker);

    return NUM_ARR;
  }
}

export default App;
