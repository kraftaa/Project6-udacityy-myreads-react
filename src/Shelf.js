import React, { Component } from 'react';
import Book from './Book'

class Shelf extends Component {
  render(){
    let books = this.props.books;
    let shelfTitle = this.props.title;

    return(
// props for use in Book js
 // the same update method as for Main and App
// for image we check if it exists if not then = ''

      <div className="bookshelf">
        <h2 className="bookshelf-title">{`${shelfTitle}`}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book)=>(
              <Book
                author={book.authors}
                date={book.publishedDate}
                id={book.id}
                image={book.imageLinks ? book.imageLinks.thumbnail : ''}
                key={book.id}
                shelf={book.shelf}
                title={book.title}
                onUpdateShelf={(shelf)=>{this.props.onUpdateShelf(book.id,shelf)
                }}
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}



export default Shelf;