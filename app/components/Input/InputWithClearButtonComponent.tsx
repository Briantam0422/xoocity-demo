"use client";
import { ReactNode } from "react";
import InputComponent from "./InputComponent";
import { CloseCircleOutlined } from "@ant-design/icons";

type tProps = {
  id: string;
  placeholder?: string;
};

export default function InputWithClearButtonComponent({
  id,
  placeholder,
}: tProps) {
  return (
    <>
      <InputComponent
        id={id}
        placeholder={placeholder}
        suffix={
          <CloseCircleOutlined
            onClick={() => console.log("a")}
            style={{ color: "gray" }}
          />
        }></InputComponent>
    </>
  );
}
