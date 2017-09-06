import React from 'react';
import { Route } from 'react-router-dom'
import CategoryList from './CategoryList'
import PostList from './PostList'
import CreateEditPost from './CreateEditPost'

export default function App () {
  return (
    <div className="App">
      <h1 className="ui vertical center aligned header">Bright Ideas</h1>
      <Route exact path='/' render={() => (
        <div>
          <CategoryList />
          <PostList />
        </div>
      )}/>
      <Route path='/createEdit' render={() => (
        <CreateEditPost />
      )}/>
    </div>
  )
}