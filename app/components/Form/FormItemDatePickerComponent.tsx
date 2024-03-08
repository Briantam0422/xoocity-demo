import FormItemComponent from "./FormItemComponent";
import { DatePicker, Input } from "antd";
import { Rule } from "antd/es/form";

type tProps = {
  label: string;
  name: string;
  rules?: Rule[];
  placeholder?: string;
  colon?: boolean;
};

export default function FormItemDatePickerComponent({
  label,
  name,
  rules,
  placeholder,
  colon,
}: tProps) {
  return (
    <>
      <FormItemComponent label={label} name={name} rules={rules} colon={colon}>
        <DatePicker
          placeholder={placeholder}
          style={{ marginLeft: "10px" }}></DatePicker>
      </FormItemComponent>
    </>
  );
}
