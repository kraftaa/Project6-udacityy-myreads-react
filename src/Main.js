import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf'


class Main extends Component {

  render(){
    let shelfs = this.props.shelfs
    let books = this.props.books
    {/* console.log("shelfs", this.props) */}
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            { shelfs.map((shelf)=> (
              <Shelf
                title={shelf.heading}
                key={shelf.heading}
                books={books.filter((book) =>
                    book.shelf === shelf.name)}
// {the same update method as for Shelf and App }
                onUpdateShelf={(id,shelf)=>{
                  this.props.onUpdateShelf(id,shelf)
                }}
              />
            )) }
          </div>
        </div>
 {/*Link to the search page*/}
        <div className="open-search">
          <Link
            to="/search"
          >Add a book</Link>
        </div>
      </div>
    )
  }
}


export default Main;