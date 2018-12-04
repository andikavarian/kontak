import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';


class PostsIndex extends Component {

    componentWillMount(){
        this.props.fetchPosts();
    }

    renderPosts(){
        return this.props.posts.map((post)=>{
            return(
                <li className='list-group-item' key={post.id}>
                    <span className='pull-xs-right'>{post.categories}</span>
                    <Link to={`/posts/${post.id}`}><strong>{post.title}</strong></Link>
                </li>
            );
        })
    }

    render() {
        return(
            <div>
                <title>BTPN | List Pesan</title>
                <br/>
                <div className='text-xs-right'>
                    <Link to='posts/new' className='btn btn-primary'>
                        Form Hubungi Kami
                    </Link>
                </div>
                <h3>List Pesan</h3>
                <hr/>
                <ul className='list-group'>
                    {this.renderPosts()}
                </ul> 
            </div>
        )
    }
}

function mapStateToProps(state){
    return {posts: state.posts.all}
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchPosts }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);