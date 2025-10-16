import { Console } from "@woowacourse/mission-utils";

// 최대한 객체 지향적으로 작성
// todo
// 입력 -> 판별 -> 덧셈 -> 결과 순으로 리턴

class App {
  async run() {
    this.getInput();
  }

  async getInput() {
    const input_Value = await Console.readLineAsync("숫자를 입력하세요 : ");

    const trim_Input = input_Value.replaceAll(" ", "");

    return Console.print(trim_Input);
  }
}

export default App;
