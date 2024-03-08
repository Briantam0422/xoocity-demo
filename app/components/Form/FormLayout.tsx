"use client";
import { ReactNode, ReactPropTypes } from "react";
import { Form, FormProps, Button } from "antd";
import { UserType } from "@/app/types/UserType";
type LayoutProps = {
  children?: ReactNode;
};

type FieldType = UserType;

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default function FormLayout({ children }: LayoutProps) {
  return (
    <>
      <Form
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
