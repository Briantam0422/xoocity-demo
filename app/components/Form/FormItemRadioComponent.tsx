import FormItemComponent from "./FormItemComponent";
import { Radio } from "antd";
import { Rule } from "antd/es/form";
import { ReactNode } from "react";

type tProps = {
  children?: ReactNode;
  label: string;
  name: string;
  rules?: Rule[];
  colon?: boolean;
};

export default function FormItemRadioComponent({
  children,
  label,
  name,
  rules,
  colon,
}: tProps) {
  return (
    <>
      <FormItemComponent label={label} name={name} rules={rules} colon={colon}>
        <Radio.Group style={{ marginLeft: "10px" }}>{children}</Radio.Group>
      </FormItemComponent>
    </>
  );
}
