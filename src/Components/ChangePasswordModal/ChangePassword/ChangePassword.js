import React, { useEffect, useState } from "react";
import { Form, Input, Button, message } from "antd";

function ChangePassword() {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});

  useEffect(() => {
    forceUpdate({});
  }, []);

  const handleChange = (value) => {};

  const onFinish = (values) => {};

  return (
    <div>
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
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
            // value={changePassword?.old_password}
            name="old_password"
            onChange={(e) =>
              handleChange({
                [e.target.name]: e.target.value,
              })
            }
            // prefix={<img src={icon1} />}
            placeholder="Эски пароль"
          />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: "Парол",
            },
          ]}
        >
          <Input
            // value={changePassword?.new_password}
            name="new_password"
            onChange={(e) =>
              handleChange({
                [e.target.name]: e.target.value,
              })
            }
            // prefix={<img src={icon2} />}
            type="password"
            placeholder="Янги пароль"
          />
        </Form.Item>
        <Form.Item shouldUpdate wrapperCol={{ offset: 8, span: 16 }}>
          {() => (
            <Button
              type="primary"
              htmlType="submit"
              disabled={
                !form.isFieldsTouched(true) ||
                !!form.getFieldsError().filter(({ errors }) => errors.length)
                  .length
              }
            >
              Саклаш
            </Button>
          )}
        </Form.Item>
      </Form>
    </div>
  );
}

export default ChangePassword;
