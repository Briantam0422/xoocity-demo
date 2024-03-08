import { ReactNode } from "react";
import { ColProps, Form } from "antd";
import { Rule } from "antd/es/form";

type IProps = {
  children?: ReactNode;
  label: string;
  name: string;
  rules: Rule[];
  wrapperCol?: ColProps;
};

export default function FormItemComponent({
  children,
  label,
  name,
  rules,
  wrapperCol,
}: IProps) {
  return (
    <>
      <Form.Item
        label={<label style={{ color: "gray" }}>{label}</label>}
        colon={false}
        name={name}
        rules={rules}
        wrapperCol={wrapperCol}>
        {children}
      </Form.Item>
    </>
  );
}
