import React from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { deleteBlog } from '../../../graphql/mutations';

const deletePostHandler = async (blogID) => {
  console.log('delete post here')
  const input = {
    id: blogID
  }
  await API.graphql(graphqlOperation(deleteBlog, {input}))
};

const DeletePost = ({ data }) => {
  return (
    <button
      className="btn btn-outline-primary mr-2"
      onClick={() => deletePostHandler(data)}
    >
      Delete Post
    </button>
  );
};

export default DeletePost;
