import React, { useEffect } from "react";
import { Form, Input, Button, Checkbox, notification } from "antd";
import { connect } from "react-redux";

import { addPost } from "../../../redux/actions/posts";

const AddPost = ({ success, loading, message, addPost }) => {
  const onFinish = (values) => {
    console.log("Success:", values);
    addPost(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (message !== "") {
      if (success) {
        notification.open({
          message: "Success",
          description: <p style={{ color: "green" }}>{message}</p>,
        });
      } else {
        notification.open({
          message: "Error",
          description: <p style={{ color: "red" }}>{message}</p>,
        });
      }
    }
  }, [loading]);

  return (
    <Form
      name="basic"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: "Please input your title!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Author"
        name="author"
        rules={[{ required: true, message: "Please input your author!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: "Please input your description!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button loading={loading} type="primary" htmlType="submit">
          Add Post
        </Button>
      </Form.Item>
    </Form>
  );
};

function mapStateToProps(state) {
  const { success, message, loading } = state.posts.addPost;
  return {
    success,
    message,
    loading,
  };
}

export default connect(mapStateToProps, { addPost })(AddPost);
