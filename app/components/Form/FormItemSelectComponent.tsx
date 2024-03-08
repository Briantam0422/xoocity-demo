import FormItemComponent from "./FormItemComponent";
import { Select } from "antd";
import { Rule } from "antd/es/form";

type tProps = {
  label?: string;
  name: string;
  rules?: Rule[];
  placeholder?: string;
  options: Array<Object>;
  disable?: boolean;
  colon?: boolean;
  dependencies?: Array<string>;
  noStyle?: boolean;
};

export default function FormItemSelectComponent({
  label,
  name,
  rules,
  placeholder,
  options,
  disable,
  colon,
  dependencies,
  noStyle,
}: tProps) {
  return (
    <>
      <FormItemComponent
        label={label}
        name={name}
        rules={rules}
        colon={colon}
        dependencies={dependencies}
        noStyle={noStyle}>
        <Select
          placeholder={placeholder}
          options={options}
          disabled={disable}
          style={{ marginLeft: "10px" }}></Select>
      </FormItemComponent>
    </>
  );
}
