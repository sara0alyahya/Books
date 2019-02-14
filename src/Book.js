import React from 'react'
class Book extends React.Component {
    state = { hide: 'false' }
    hideBook = () => {
        console.log('hello');
        if (this.state.hide === 'false') {
            this.setState({ hide: 'hidden' })
        } else {
            this.setState({ hide: 'false' })
        }
    }
    render() {

        return (
            <div>
                <h2 onClick={this.hideBook} className={this.state.hide}> ISBN : {this.props.book.isbn}</h2>
                <h2 onClick={this.hideBook} > TITLE : {this.props.book.title}</h2>
                <h2 onClick={this.hideBook} > SUBTITLE : {this.props.book.subtitle}</h2>
                <h2 onClick={this.hideBook} > AUTHOR : {this.props.book.author}</h2>
                <h2 onClick={this.hideBook} > PUBLISHED : {this.props.book.published}</h2>
                <h2 onClick={this.hideBook} > PAGES : {this.props.book.pages}</h2>
                <h2 onClick={this.hideBook} > DESCRIPTION : {this.props.book.description}</h2>
                <a onClick={this.hideBook} href={this.props.book.website} > {this.props.book.author} </a>
            </div>
        )
    }
}

export default Book;