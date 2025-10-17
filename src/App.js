import { Console } from "@woowacourse/mission-utils";

// 최대한 객체 지향적으로 작성
// todo
// 입력 -> 판별 -> 덧셈 -> 결과 순으로 리턴

class App {
  async run() {
    const input = await this.getInput();
    this.parser(input);
  }

  async getInput() {
    const input_Value = await Console.readLineAsync("숫자를 입력하세요 : ");
    const trim_Input = input_Value.replaceAll(" ", "");

    return trim_Input;
  }

  parser(trimedInput) {
    let numArr = [];
    let temp = "";

    for (let i = 0; i < trimedInput.length; ++i) {
      const to_Char = trimedInput[i];
      Console.print(to_Char);

      if (to_Char == "," || to_Char == ":") {
        temp = "";
      } else {
        numArr.push(Number(to_Char));
      }
    }
    return Console.print(numArr);
  }
}

export default App;
