import { CloseCircleOutlined } from "@ant-design/icons";
import FormItemComponent from "./FormItemComponent";
import { Input } from "antd";
import { Rule } from "antd/es/form";

type tProps = {
  label: string;
  name: string;
  rules?: Rule[];
  placeholder?: string;
  colon?: boolean;
  type?: string;
};

export default function FormItemInputComponent({
  label,
  name,
  rules,
  placeholder,
  colon,
  type,
}: tProps) {
  return (
    <>
      <FormItemComponent label={label} name={name} rules={rules} colon={colon}>
        <Input
          placeholder={placeholder}
          type={type}
          suffix={
            <CloseCircleOutlined
              onClick={() => console.log("a")}
              style={{ color: "gray" }}
            />
          }
          style={{ marginLeft: "10px" }}></Input>
      </FormItemComponent>
    </>
  );
}
