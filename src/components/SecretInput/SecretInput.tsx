import { KeyboardEvent, useEffect, useState } from "react";

export default function SecretInput({
  secretLevel,
  setSecretLevel,
}: {
  secretLevel: boolean;
  setSecretLevel: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [keys, setKeys] = useState([
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ]);

  const handleKeyboardEvent = (): any => {
    let countKeys = 0;

    return (event: KeyboardEvent<HTMLImageElement>) => {
      let keyValue = event.key;

      if (!secretLevel) {
        if (keyValue === keys[countKeys] && countKeys < keys.length - 1) {
          countKeys = countKeys + 1;
        } else if (
          keyValue === keys[countKeys] &&
          countKeys === keys.length - 1
        ) {
          countKeys = 0;
          setSecretLevel(true);
        } else {
          countKeys = 0;
        }

        console.log(countKeys);
      }
    };
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.addEventListener("keydown", handleKeyboardEvent(), false);
    }
  }, []);

  return <div></div>;
}
