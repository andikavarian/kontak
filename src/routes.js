import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/postsIndex';
import PostsNew from './components/postsNew';
import PostsShow from './components/postsShow';

export default(
    <Route path='/' component={App}>
        <IndexRoute component={PostsIndex}/>
        <Route path='posts/new' component={PostsNew}/>
        <Route path='posts/:id' component={PostsShow}/>
    </Route> 
);    