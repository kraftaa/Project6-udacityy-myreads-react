import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import Main from './Main'

class App extends Component {

  state = {
    books: [],
    //shelfs' name and headings
    shelfs :
    [
    {
      name: 'currentlyReading',
      heading: 'Currently Reading'
    },
    {
      name: 'wantToRead',
      heading: 'Want to Read'
    },
    {
      name: 'read',
      heading: 'Read'
    },
  ]
  }

//need to get all books, using provided method getAll ()in BooksAPI
//we use getAllBooks function as shown in course in contacts App

  getAllBooks = () => {
    BooksAPI.getAll().then((books) => this.setState({ books }))
  }

//need to load data from a remote endpoint
  componentDidMount(){
    this.getAllBooks()
  }

// to change shelf we use provided update(book, shelf) method from BooksAPI
//book: <Object> containing at minimum an id attribute

//have to return a Promise as if not -we have manually refresh the page to update the shelf
  // for method I've checked BooksAPI file with syntax for update
  //   fetch(`${api}/books/${book.id}`
  //so using destructuring to unpach id property of the book into variable with {id}

  updateShelf = (id,shelf) => {
    BooksAPI.update({id}, shelf).then(()=> {
    this.getAllBooks()
    });
    }

//using course contacts App as example for managing search history
//creating path for main page and search, and updating the shelf
  render() {
    // let shelfs = this.state.shelfs
  console.log('app', this.state)
  // console.log('shelf-app', shelfs)
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <Main
              books={this.state.books}
              shelfs={this.state.shelfs}
              onUpdateShelf={this.updateShelf}
            />
          )} />
        <Route path="/search" render ={({ history }) => (
            <Search
              books={this.state.books}
              shelfs={this.state.shelfs}
              onUpdateShelf={(book,shelf)=>{
                  this.updateShelf(book,shelf)
                  history.push('/')
            }} />
          )} />
      </div>
    )
  }
}

export default App;