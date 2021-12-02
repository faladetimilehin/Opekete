import React, { useEffect, useState } from 'react';
import './style.css'
import { listBlogs } from '../../../graphql/queries'
import { API, graphqlOperation } from 'aws-amplify'
import { onCreateBlog, onDeleteBlog } from '../../../graphql/subscriptions';
import DeletePost from './DeletePost';

const AdminView = () => {
    const [isLoading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        getBlogFunc();
    }, []);

    useEffect(() => {
        const createPostListener = API.graphql(
            graphqlOperation(onCreateBlog)
        ).subscribe({
            next: (postData) => {
                const newPost = postData.value.data.onCreateBlog;
                const previousPost = blogs.filter((blog) => blog.id !== newPost.id);

                const updatedBlogs = [newPost, ...previousPost];
                setBlogs(updatedBlogs);
            },
        });

        const createDeleteListener = API.graphql(
            graphqlOperation(onDeleteBlog)
        ).subscribe({
            next: (deleteData) => {
                const newPost = deleteData.value.data.onDeleteBlog;
                const previousPost = blogs.filter((blog) => blog.id !== newPost.id);

                const updatedBlogs = [...previousPost];
                setBlogs(updatedBlogs);
            },
        });
        return () => {
            createPostListener.unsubscribe();
            createDeleteListener.unsubscribe();
        };
    });

    const getBlogFunc = async () => {
        const result = await API.graphql(graphqlOperation(listBlogs));
        setBlogs(result.data.listBlogs.items);
        setLoading(false);
    };

    return (
        <section className="wpo-blog-pg-section section-padding">
            <div className="my-4 text-left row">
                {!isLoading && blogs !== null ? (
                    blogs.map((blog) => (
                        <div key={blog.id} className="col-12 col-md-4 col-lg-4 mb-4">
                            <div className="card mb-2 h-100">
                                <div className="card-body">
                                    <h3 className="fw-bold text-capitalize"> {blog.postTitle} </h3>
                                    <h3 className="fw-bold text-capitalize"> {blog.id} </h3>
                                    <h3 className="fw-bold text-capitalize"> {blog.name} </h3>
                                    <p className="text-muted">
                                        Wrote By :{' '}
                                        <span className="text-dark"> {blog.postOwnerUsername} </span>{' '}
                                        -<time> {new Date(blog.createdAt).toDateString()}</time>{' '}
                                    </p>
                                    <br />
                                    <p> {blog.postBody} </p>
                                    <span className="">
                                        <DeletePost data={blog.id} />
                  {/* <EditPost onClick={() => alert('Edit Post')} /> */}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center"> Loading...</p>
                )}
            </div>

        </section>
    )

}

export default AdminView;
