import React, { useState } from "react";

export const useInput = (initialState, validator) => {
  const [value, setValue] = useState(initialState);
  const onChange = (e) => {
    const {
      target: { value },
    } = e;

    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

export default useInput;
