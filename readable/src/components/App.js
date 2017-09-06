import React from 'react';
import { Route, Link } from 'react-router-dom'
import CategoryList from './CategoryList'
import PostList from './PostList'
import CreateEditPost from './CreateEditPost'
import uuid from 'uuid'


export default function App () {
  return (
    <div className="App">
      <h1 className="ui vertical center aligned header">Bright Ideas</h1>
      <Route exact path='/' render={() => (
        <div>
          <CategoryList />
          <div className='row'>
            <div className='center aligned column'>
              <Link to='createEdit'><i className='add circle icon'></i></Link>
            </div>
          </div>
          <PostList />
        </div>
      )}/>
      <Route path='/createEdit' render={() => (
        <CreateEditPost />
      )}/>
    </div>
  )
}