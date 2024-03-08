import { CloseCircleOutlined } from "@ant-design/icons";
import FormItemComponent from "./FormItemComponent";
import { Input, ColProps } from "antd";
import { Rule } from "antd/es/form";
import TextArea from "antd/es/input/TextArea";

type tProps = {
  label: string;
  name: string;
  rules?: Rule[];
  placeholder?: string;
  colon?: boolean;
  type?: string;
  rows?: number;
  maxLength?: number;
  wrapperCol?: ColProps;
};

export default function FormItemTextAreaComponent({
  label,
  name,
  rules,
  colon,
  placeholder,
  rows,
  maxLength,
  wrapperCol,
}: tProps) {
  return (
    <>
      <FormItemComponent
        label={label}
        name={name}
        rules={rules}
        colon={colon}
        wrapperCol={wrapperCol}>
        <TextArea
          rows={rows}
          placeholder={placeholder}
          maxLength={maxLength}
          style={{ marginLeft: "10px" }}
        />
      </FormItemComponent>
    </>
  );
}
