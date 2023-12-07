import { useEffect } from "react";

const TaukoAlert = () => {
  const MINUTE_MS = 10000;

  useEffect(() => {
    const interval = setInterval(() => {
      alert("Tauko ohi");
    }, MINUTE_MS);

    return () => clearInterval(interval);
  }, []);
};

export default TaukoAlert;

// setTimeout()  <<< tutustuppa tohon jos koskaan jatkat projektia.
