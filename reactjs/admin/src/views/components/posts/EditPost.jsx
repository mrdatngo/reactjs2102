import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Form, Input, Button, Checkbox, notification } from "antd";

import { getPostAction, updatePostAction } from "../../../redux/actions/posts";

const EditPost = ({ getPost, updatePost, getPostAction, updatePostAction }) => {
  const [post, setPost] = useState({});
  const params = useParams();
  const [form] = Form.useForm();

  useEffect(() => {
    console.log("Params: ", params);
    const { id } = params;
    getPostAction(id);
  }, []);

  useEffect(() => {
    setPost(getPost.data);
    let { title, author, description } = getPost.data;
    form.setFieldsValue({
      title,
      author,
      description,
    });
  }, [getPost]);

  const onFinish = (values) => {
    console.log("Success:", values);
    updatePostAction(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return getPost.message && !getPost.success ? (
    <p>{getPost.message}</p>
  ) : getPost.loading ? (
    "Loading... (replace by skeleton)"
  ) : (
    <Form
      form={form}
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
        <Input value={post.title} />
      </Form.Item>

      <Form.Item
        label="Author"
        name="author"
        rules={[{ required: true, message: "Please input your author!" }]}
      >
        <Input value={post.author} />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: "Please input your description!" }]}
      >
        <Input value={post.description} />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Update Post
        </Button>
      </Form.Item>
    </Form>
  );
};

function mapStateToProps(state) {
  const { getPost, updatePost } = state.posts;
  return {
    getPost,
    updatePost,
  };
}

export default connect(mapStateToProps, { getPostAction, updatePostAction })(
  EditPost
);
