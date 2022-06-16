import React, { useEffect, useState } from "react";
import { Form, Input, Button, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import login from "../../assates/images/login.svg";
import password from "../../assates/images/password.svg";
import vector from "../../assates/images/Vector.png";
import "./login.scss";

function LoginPage() {
  const loading = useSelector((state) => state.allData?.loading);
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    forceUpdate({});
  }, []);
  const onFinish = (values) => {};

  return (
    <div className="header-logout main">
      <div className="logout box-shodow">
        <h2>
          <img src={vector} alt="logo" />
          АДМИН ПАНЕЛ
        </h2>
        <Form
          className="form-item"
          form={form}
          name="horizontal_login"
          layout="inline"
          onFinish={onFinish}
          autoComplete="off"
          style={{
            flexDirection: "column",
            gap: 10,
            marginTop: "30px",
          }}
        >
          <Form.Item
            name="login"
            rules={[
              {
                required: true,
                message: "Логини киритинг",
              },
            ]}
          >
            <Input prefix={<img src={login} />} placeholder="Логин" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Парол киритинг",
              },
            ]}
          >
            <Input
              prefix={<img src={password} />}
              type="password"
              placeholder="Пароль"
            />
          </Form.Item>
          <Form.Item shouldUpdate wrapperCol={{ offset: 8, span: 16 }}>
            {() => (
              <Button
                loading={loading}
                type="primary"
                htmlType="submit"
                disabled={
                  !form.isFieldsTouched(true) ||
                  !!form.getFieldsError().filter(({ errors }) => errors.length)
                    .length
                }
              >
                Кириш
              </Button>
            )}
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default LoginPage;
