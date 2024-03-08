import { ReactNode } from "react";
import { ColProps, Form, type FormProps } from "antd";
import { Rule } from "antd/es/form";

type tProps = {
  children?: ReactNode;
  label?: string;
  name?: string;
  rules?: Rule[];
  wrapperCol?: ColProps;
  colon?: boolean;
  dependencies?: Array<string>;
  noStyle?: boolean;
};

export default function FormItemComponent({
  children,
  label,
  name,
  rules,
  wrapperCol,
  colon,
  dependencies,
  noStyle,
}: tProps) {
  return (
    <>
      <Form.Item
        label={<label style={{ color: "gray" }}>{label}</label>}
        colon={colon}
        name={name}
        rules={rules}
        dependencies={dependencies}
        wrapperCol={wrapperCol}
        noStyle={noStyle}>
        {children}
      </Form.Item>
    </>
  );
}
