"use client";
import {
  Col,
  Row,
  Card,
  type FormProps,
  Form,
  Input,
  Button,
  Avatar,
  Radio,
  Space,
  Select,
} from "antd";
import {
  UserOutlined,
  DownloadOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import FormLayout from "./components/Form/FormLayout";
import InputWithClearButtonComponent from "./components/Input/InputWithClearButtonComponent";
import FormItemComponent from "./components/Form/FormItemComponent";
import RadioGroupComponent from "./components/Radio/RadioGroupComponent";
import DatePickerSelectDay from "./components/DatePicker/DatePickerSelectDay";
import SelectComponent from "./components/Select/SelectComponent";
import { CountriesType } from "./types/CountryType";
import { GendersType } from "./types/GenderType";
import InputComponent from "./components/Input/InputComponent";
import FormItemInputComponent from "./components/Form/FormItemInputComponent";
import FormItemRadioComponent from "./components/Form/FormItemRadioComponent";
import FormItemDatePickerComponent from "./components/Form/FormItemDatePickerComponent";
import FormItemSelectComponent from "./components/Form/FormItemSelectComponent";
import { useState } from "react";
import FormItemTextAreaComponent from "./components/Form/FormItemTextAreaComponent";

export default function Home() {
  const [cityDisable, setCityDisable] = useState(true);
  const arrGenders: GendersType = {
    m: "男",
    f: "女",
  };
  const arrCountries: Array<CountriesType> = [
    { value: "china", label: "中國" },
    { value: "canada", label: "加拿大" },
  ];
  return (
    <main>
      <Row justify="center" align="middle">
        <Col sm={24} md={22} lg={18}>
          <Card title="基本資料">
            <FormLayout>
              <Row justify="center" gutter={25}>
                <Col span={8} order={2}>
                  <Row justify="center">
                    <p style={{ color: "gray" }}>頭像</p>
                  </Row>
                  <Row justify="center" style={{ marginBottom: "10px" }}>
                    <Avatar size={100} icon={<UserOutlined />} />
                  </Row>
                  <Row justify="center">
                    <Button type="primary" icon={<DownloadOutlined />}>
                      更新頭像
                    </Button>
                  </Row>
                </Col>
                <Col span={16} order={1}>
                  <Row justify="start" gutter={24}>
                    <Col
                      xs={{ span: 12 }}
                      sm={{ span: 12 }}
                      md={{ span: 10 }}
                      lg={{ span: 8 }}>
                      <FormItemInputComponent
                        label="名"
                        name="first_name"
                        placeholder=""
                      />
                    </Col>
                    <Col
                      xs={{ span: 12 }}
                      sm={{ span: 12 }}
                      md={{ span: 10 }}
                      lg={{ span: 8 }}>
                      <FormItemInputComponent
                        label="姓"
                        name="last_name"
                        placeholder=""
                      />
                    </Col>
                  </Row>

                  <Row justify="start" gutter={24}>
                    <Col
                      xs={{ span: 24 }}
                      sm={{ span: 24 }}
                      md={{ span: 24 }}
                      lg={{ span: 24 }}>
                      <FormItemRadioComponent label="性別" name="gender">
                        {Object.keys(arrGenders).map((key: string) => (
                          <>
                            <Radio
                              key={key}
                              value={key}
                              style={{ color: "gray" }}>
                              {arrGenders[key]}
                            </Radio>
                          </>
                        ))}
                      </FormItemRadioComponent>
                    </Col>
                  </Row>

                  <Row justify="start" gutter={24}>
                    <Col
                      xs={{ span: 24 }}
                      sm={{ span: 16 }}
                      md={{ span: 12 }}
                      lg={{ span: 8 }}>
                      <FormItemDatePickerComponent
                        label="生日"
                        name="birthday"
                        placeholder="請選擇日期"
                      />
                    </Col>
                  </Row>

                  <Row justify="start" gutter={24}>
                    <Col
                      xs={{ span: 24 }}
                      sm={{ span: 16 }}
                      md={{ span: 12 }}
                      lg={{ span: 8 }}>
                      <FormItemSelectComponent
                        label="國家/地區"
                        name="country"
                        placeholder="中國"
                        options={arrCountries}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row justify="start">
                <Col
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 24 }}
                  lg={{ span: 20 }}>
                  <FormItemComponent label="省市區縣">
                    <Row gutter={10}>
                      <Col xs={12} sm={12} md={8} lg={6}>
                        <FormItemSelectComponent
                          name="province"
                          placeholder="請選擇"
                          options={arrCountries}
                          colon={false}
                          rules={[
                            ({ getFieldValue }) => ({
                              validator(_, value) {
                                if (getFieldValue("province") != null) {
                                  setCityDisable(false);
                                }
                                return Promise.resolve();
                              },
                            }),
                          ]}
                        />
                      </Col>
                      <Col xs={12} sm={12} md={8} lg={6}>
                        <FormItemSelectComponent
                          name="city"
                          placeholder="請選擇"
                          options={arrCountries}
                          colon={false}
                          disable={cityDisable}
                        />
                      </Col>
                      <Col xs={12} sm={12} md={8} lg={6}>
                        <FormItemSelectComponent
                          name="district"
                          placeholder="請選擇"
                          options={arrCountries}
                          colon={false}
                        />
                      </Col>
                      <Col xs={12} sm={12} md={8} lg={6}>
                        <FormItemSelectComponent
                          name="county"
                          placeholder="請選擇"
                          options={arrCountries}
                          colon={false}
                        />
                      </Col>
                    </Row>
                  </FormItemComponent>
                </Col>
              </Row>

              <Row justify="start" gutter={24}>
                <Col
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 24 }}
                  lg={{ span: 20 }}>
                  <FormItemInputComponent
                    label="詳細地址"
                    name="address"
                    placeholder=""
                  />
                </Col>
              </Row>

              <Row justify="start" gutter={24}>
                <Col
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 24 }}
                  lg={{ span: 20 }}>
                  <FormItemTextAreaComponent
                    label="個人簡介"
                    name="profile_intro"
                    rows={4}
                    maxLength={250}
                    placeholder="個人簡介"
                  />
                </Col>
              </Row>

              <Row justify="center">
                <Form.Item wrapperCol={{ span: 16 }}>
                  <Button type="primary" htmlType="submit">
                    更新基本信息
                  </Button>
                </Form.Item>
              </Row>
            </FormLayout>
          </Card>
        </Col>
      </Row>
    </main>
  );
}
