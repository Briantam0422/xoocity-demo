"use client";
import { ReactNode, ReactPropTypes } from "react";
import { Form, FormProps, Button } from "antd";
import { UserType } from "@/app/types/UserType";
import { ValidateErrorEntity } from "rc-field-form/lib/interface";

type FieldType = UserType;

type LayoutProps = {
  children?: ReactNode;
  onFinish: (value: FieldType) => void;
  onFinishFailed: (errorInfo: ValidateErrorEntity<UserType>) => void;
};

export default function FormLayout({ children, onFinish, onFinishFailed }: LayoutProps) {
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
