import { Key } from "../key/key";
import { usePhone } from "../../hooks/use.phone";

export function Keyboard() {
  const numbers = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0", "Delete"];
  const { phoneNumber, addNumber, deleteNumber } = usePhone();

  const handleKeyPress = (number: string) => {
    if (number === "Delete") {
      deleteNumber();
    } else {
      addNumber(number);
    }
  };

  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        {numbers.map((item) => (
          <Key
            number={item}
            key={item}
            handleKeyPress={handleKeyPress}
            disabled={phoneNumber.length >= 9 && item !== "Delete"}
          />
        ))}
        <span className="number">{phoneNumber}</span>
      </ol>
    </div>
  );
}
