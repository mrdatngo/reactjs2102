import React, { useState, useEffect } from "react";
import { Table, Tag, Space, notification } from "antd";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { getPosts } from "../../../redux/actions/posts";

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Author",
    dataIndex: "author",
    key: "author",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <Link to={`/posts/edit/${record.id}`}>Edit</Link>
        <a>Delete</a>
      </Space>
    ),
  },
];

const Posts = ({ getPosts, posts }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getPosts() // action => fetch posts => save in store
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        let message = "Something went wrong!";
        notification.open({
          message: "Error",
          description: <p style={{ color: "red" }}>{message}</p>,
        });
      });
  }, []); // componentDidMount

  return (
    <div>
      <Table loading={loading} columns={columns} dataSource={posts} />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    posts: state.posts && state.posts.list,
  };
}

export default connect(mapStateToProps, { getPosts })(Posts);
