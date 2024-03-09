"use client";
import { ReactNode } from "react";
import { Form, FormInstance } from "antd";
import { ValidateErrorEntity } from "rc-field-form/lib/interface";

type LayoutProps = {
  children?: ReactNode;
  form: FormInstance
  onFinish: (value: any) => void;
  onFinishFailed: (errorInfo: ValidateErrorEntity<any>) => void;
};

export default function FormLayout({ children, form, onFinish, onFinishFailed }: LayoutProps) {
  return (
    <>
      <Form
        form={form}
        name="basic"
        wrapperCol={{ span: 20 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off">
        {children}
      </Form>
    </>
  );
}
