import React from 'react';
import { connect } from 'react-redux'
import { fetchPosts } from '../actions';

let Posts = ({getPosts, posts}) => (
    <div>
        <button onClick={getPosts}>Get Posts(SAGA)</button>
        {
            posts && posts.map(post => (
               <div key={post.id}>
                   <h2>{post.title}</h2>
               </div>

            ))
        }
    </div>
)


const mapStateToProps = (state, ownProps) => ({
    posts: state.postsData.posts
})

const mapDispatchToProps = { 
    getPosts: fetchPosts 
}

Posts = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default Posts;