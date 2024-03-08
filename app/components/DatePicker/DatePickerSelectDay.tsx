import type { DatePickerProps } from "antd";
import { DatePicker, Space } from "antd";

type tProp = {
    placeholder : string
}

const onChange: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};

export default function DatePickerSelectDay({ placeholder }:tProp) {
  return (
    <>
      <DatePicker placeholder={placeholder} onChange={onChange} />
    </>
  );
}
