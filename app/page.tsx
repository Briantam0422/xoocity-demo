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
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import { UserType, Gender } from "./types/UserType";
import FormLayout from "./components/Form/FormLayout";
import InputWithClearButtonComponent from "./components/Input/InputWithClearButtonComponent";
import FormItemComponent from "./components/Form/FormItemComponent";
import RadioGroupComponent from "./components/Radio/RadioGroupComponent";

export default function Home() {
  const arrGenders: Gender = {
    m: "男",
    f: "女",
  };
  return (
    <main>
      <Row justify="center" align="middle">
        <Col sm={24} md={22} lg={18}>
          <Card title="基本資料">
            <FormLayout>
              <Row justify="space-between" gutter={25}>
                <Col span={8} order={2}>
                  <p>頭像</p>
                  <Avatar size={100} icon={<UserOutlined />} />
                </Col>
                <Col span={16} order={1}>
                  <Row justify="start" gutter={24}>
                    <Col
                      xs={{ span: 12 }}
                      sm={{ span: 12 }}
                      md={{ span: 10 }}
                      lg={{ span: 8 }}>
                      <FormItemComponent
                        label="名"
                        name="first_name"
                        rules={[{ required: true, message: "請輸入你的名字" }]}>
                        <InputWithClearButtonComponent></InputWithClearButtonComponent>
                      </FormItemComponent>
                    </Col>
                    <Col
                      xs={{ span: 12 }}
                      sm={{ span: 12 }}
                      md={{ span: 10 }}
                      lg={{ span: 8 }}>
                      <FormItemComponent
                        label="姓"
                        name="last_name"
                        rules={[{ required: true, message: "請輸入你的姓名" }]}>
                        <InputWithClearButtonComponent></InputWithClearButtonComponent>
                      </FormItemComponent>
                    </Col>
                  </Row>

                  <Row justify="start" gutter={24}>
                    <Col
                      xs={{ span: 24 }}
                      sm={{ span: 16 }}
                      md={{ span: 12 }}
                      lg={{ span: 8 }}>
                      <FormItemComponent
                        label="性別"
                        name="gender"
                        rules={[{ required: true, message: "請輸入你的性別" }]}>
                        <RadioGroupComponent>
                          {Object.keys(arrGenders).map((key: string) => (
                            <>
                              <Radio value={key}>{arrGenders[key]}</Radio>
                            </>
                          ))}
                        </RadioGroupComponent>
                      </FormItemComponent>
                    </Col>
                  </Row>

                  <Row justify="start" gutter={24}>
                    <Col
                      xs={{ span: 24 }}
                      sm={{ span: 16 }}
                      md={{ span: 12 }}
                      lg={{ span: 8 }}>
                      <FormItemComponent
                        label="生日"
                        name="birthday"
                        rules={[
                          { required: true, message: "請輸入你的性別" },
                        ]}></FormItemComponent>
                    </Col>
                  </Row>

                  <Row justify="start" gutter={24}>
                    <Col
                      xs={{ span: 24 }}
                      sm={{ span: 16 }}
                      md={{ span: 12 }}
                      lg={{ span: 8 }}>
                      <FormItemComponent
                        label="國家/地區"
                        name="country"
                        rules={[
                          { required: true, message: "請輸入你的性別" },
                        ]}></FormItemComponent>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row justify="start" gutter={24}>
                <Col
                  xs={{ span: 24 }}
                  sm={{ span: 16 }}
                  md={{ span: 12 }}
                  lg={{ span: 8 }}>
                  <FormItemComponent
                    label="省市區縣"
                    name="country"
                    rules={[
                      { required: true, message: "請輸入你的性別" },
                    ]}></FormItemComponent>
                </Col>
              </Row>

              <Row justify="start" gutter={24}>
                <Col
                  xs={{ span: 24 }}
                  sm={{ span: 16 }}
                  md={{ span: 12 }}
                  lg={{ span: 8 }}>
                  <FormItemComponent
                    label="詳細地址"
                    name="address"
                    rules={[
                      { required: true, message: "請輸入你的性別" },
                    ]}></FormItemComponent>
                </Col>
              </Row>

              <Row justify="start" gutter={24}>
                <Col
                  xs={{ span: 24 }}
                  sm={{ span: 16 }}
                  md={{ span: 12 }}
                  lg={{ span: 8 }}>
                  <FormItemComponent
                    label="個人簡介"
                    name="profile_intro"
                    rules={[
                      { required: true, message: "請輸入你的性別" },
                    ]}></FormItemComponent>
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
