import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Shelf from './Shelf'

class Search extends Component {

  state = {
    searchedBooks: [],
    query: ''
  }


    updateQuery = (query) => {
      this.setState({
        //need to search for multiple words so no trim as in course
        query: query
      })
      this.searchedBooks(query);
    }


  searchedBooks = (query) => {
    // debugger;
//need to check if query exists, otherwise - empty search result page
   console.log(query)

    if (query) {
      BooksAPI.search(query).then((searchedBooks) => {
        if(!searchedBooks.error){
          console.log(searchedBooks)
//have to compare all books in search results with books on the main page.
// if they match we assign them shelf from the main page
// if they don't match they get the shelf "none", equals to 'Move to' in dropdown meny
          searchedBooks =  searchedBooks.map((searchedBook)=>{
            // console.log(searchedBook.shelf)
            searchedBook.shelf = 'none';
            this.props.books.forEach((mainBook)=>{
              if(searchedBook.id === mainBook.id){
                searchedBook.shelf = mainBook.shelf
              }
            })
            return searchedBook
          })
            this.setState({searchedBooks})
        } else {
          this.setState({searchedBooks: []})
        }})
    } else {
      this.setState({searchedBooks: []})
    }
  }

  render() {
    //debugger;
    // console.log('state ', this.state)
    // console.log('props', this.props)
    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">Close</Link>
            <div className="search-books-input-wrapper">
              <input type="text"
                placeholder="Search by title or author"
                value={this.state.query}
                onChange={(event) => this.updateQuery(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {this.state.query !== '' &&
              this.state.searchedBooks.length > 0 && (
                <Shelf
                  title = "Result"
                  books={this.state.searchedBooks}
                  onUpdateShelf={(id, shelf) => {
                    this.props.onUpdateShelf(id, shelf)
                  }}
                />
                )}
              {this.state.query !== '' &&
              this.state.searchedBooks.length === 0 && (
                <Shelf
                  title = "Books not Found"
                  books={[]}
                />
                )}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;