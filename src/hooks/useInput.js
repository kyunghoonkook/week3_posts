import React, { useState } from "react";

export const useInput = (initialState, validator) => {
  const [values, setValues] = useState(initialState);
  const onChange = (e) => {
    const {
      target: { value, name },
    } = e;

    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValues({ ...values, [name]: value });
    }
  };
  return [values, onChange];
};

export default useInput;
