import { useState } from "react";

export function usePhone() {
  const [isCalling, setIsCalling] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  // const [isActive, setIsActive] = useState(false);

  function handleChange() {
    if (isCalling === true) {
      return "message";
    }
    return "off";
  }

  function handleCall() {
    setIsCalling(true);
    handleChange();
  }

  function handleHang() {
    setIsCalling(true);
    setPhoneNumber("");
    handleChange();
  }

  function handleClick() {
    setPhoneNumber(phoneNumber);
    handleAddNumber();
  }

  function handleAddNumber() {
    // [...phoneNumber, item.key];
  }

  return {
    isCalling,
    phoneNumber,
    handleCall,
    handleHang,
    handleChange,
    handleClick,
    handleAddNumber,
  };
}
