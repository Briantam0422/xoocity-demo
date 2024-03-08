"use client";
import { ReactNode } from "react";
import InputComponent from "./InputComponent";
import { CloseCircleOutlined } from "@ant-design/icons";

type tProps = {
  placeholder?: string;
};

export default function InputWithClearButtonComponent({ placeholder }: tProps) {
  return (
    <>
      <InputComponent
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
