import React, { useRef, useEffect, useState } from "react";
import { Form, Input, Button, Checkbox, Card, Typography } from "antd";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import { login } from "../../redux/actions/auth";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 12,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 8,
  },
};

const LoginPage = ({ isLoggedIn, login }) => {
  const history = useHistory();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const usernameInput = useRef(null);
  const submitBtn = useRef(null);

  if (isLoggedIn) {
    history.push("/");
  }

  useEffect(() => {
    usernameInput.current.focus();
    // submitBtn.current.click();
  }, []);

  const onFinish = (values) => {
    console.log("Success:", values);
    // action login
    setLoading(true);
    login(values)
      .then(() => {
        setMessage("");
        setLoading(false);
        history.push("/home");
      })
      .catch((err) => {
        let message = "Something went wrong!";
        let rsp = err.response;
        if (rsp && rsp.data && rsp.data.message) {
          // console.log("rsp", rsp);
          message = rsp.data.message;
          // handle later
        }
        setMessage(message);
        setLoading(false);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Card style={{ width: "500px", margin: "20px auto" }} title="Login">
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
            {
              validator: (_, value) => {
                return value && value.length > 3
                  ? Promise.resolve()
                  : Promise.reject("Username must longer than 3 characters!");
              },
            },
          ]}
        >
          <Input ref={usernameInput} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Typography.Text
          style={{
            textAlign: "center",
            display: "block",
            marginBottom: "10px",
          }}
          type="danger"
        >
          {message}
        </Typography.Text>
        <Form.Item {...tailLayout}>
          <Button
            loading={loading}
            ref={submitBtn}
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

function mapStateToProps(state) {
  return {
    isLoggedIn: state.auth && state.auth.token,
  };
}

export default connect(mapStateToProps, { login })(LoginPage);
