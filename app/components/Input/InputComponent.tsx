import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";
import { Input, Tooltip } from "antd";
import { ReactNode } from "react";

type tProps = {
  placeholder?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
};

export default function InputComponent({
  placeholder,
  prefix,
  suffix,
}: tProps) {
  return (
    <>
      <Input
        placeholder={placeholder}
        prefix={prefix}
        suffix={suffix}
      />
    </>
  );
}
