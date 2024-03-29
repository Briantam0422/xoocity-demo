import { Radio, RadioChangeEvent } from "antd";
import { ReactNode, useState } from "react";

type tProp = {
  children?: ReactNode;
};

export default function RadioGroupComponent({ children }: tProp) {
  const [value, setValue] = useState("M");
  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };
  return (
    <>
      <Radio.Group onChange={onChange} value={value}>
        {children}
      </Radio.Group>
    </>
  );
}
