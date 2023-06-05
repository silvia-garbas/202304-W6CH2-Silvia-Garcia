import { Info } from "../info/Info";
import { Keyboard } from "../keyboard/Keyboard";
import { Actions } from "../actions/Actions";

export function App() {
  return (
    <>
      <Info></Info>
      <main className="phone">
        <Keyboard></Keyboard>
        <Actions></Actions>
      </main>
    </>
  );
}
