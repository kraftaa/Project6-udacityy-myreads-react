import React, { Component } from 'react';

class Book extends Component {

//in order to handle a change of shelf via dropdown form
// need to use onChange with value equal choosen menu value

// onChange={(evt) => this.method(evt)}
// handleChange(event) {
//   this.setState({value: event.target.value});
// }
//https://reactjs.org/docs/forms.html
  updateShelf = (event) => {
    this.props.onUpdateShelf(event.target.value)
  }

//taking props from Shelf
  render(){
    let image = this.props.image;
    let title = this.props.title;
    let author = this.props.author

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{
                width: 128,
                height: 193,
                backgroundImage: `url("${image}")`
              }}></div>
            <div className="book-shelf-changer">
              <select onChange={this.updateShelf} value={this.props.shelf}>
                <option value="moveTo" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{`${title}`}</div>
          <div className="book-authors">{`${author}`}</div>
        </div>
      </li>
    )
  }
}

export default Book;