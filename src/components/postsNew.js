import React ,{Component, PropTypes} from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props){
        this.props.createPost(props)
            .then(()=>{
                this.context.router.push('/');
            });
    };

    render(){
        const { fields:{title,categories,content},handleSubmit } = this.props;
        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <br/>
                <h3>Hubungi Kami</h3>
                <hr/>
                <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                    <label>Email</label>
                    <input type='text' className='form-control' {...title}/>
                    <div className='text-help'>{title.touched ? title.error : ''}</div>
                </div>
                <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
                    <label>Judul</label>
                    <input type='text' className='form-control' {...categories}/>
                    <div className='text-help'>{categories.touched ? categories.error : ''}</div>
                </div>
                <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
                    <label>Pesan</label>
                    <textarea className='form-control' {...content}/>
                    <div className='text-help'>{content.touched ? content.error : ''}</div>
                </div>

                <button type='submit' className='btn btn-primary'>Kirim</button>
                <Link to='/' className='btn btn-danger'>Batal</Link>
            </form>
        )
    }
}

function validate(values){
    const errors = {};
    if(!values.title){
        errors.title ='Harap Masukan Email';
    }
    if(!values.categories){
        errors.categories ='Harap Masukan Judul';
    }
    if(!values.content){
        errors.content ='Harap Masukan Pesan';
    }
    return errors;
}


export default reduxForm({
    form:'postsNew',
    fields:['title','categories','content'],
    validate
    },null,{createPost})(PostsNew)