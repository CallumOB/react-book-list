import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// curly brackets are used to import specific elements from other files.
import { Book } from './Book';
import { books } from './books';

// Objects containing properties for second books
const firstBook = {
    author: "Prince Harry",
    title: "Spare",
    img: "https://m.media-amazon.com/images/I/81pHW0GJIlL._SL1500_.jpg",
};

const secondBook = {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://m.media-amazon.com/images/I/81JH6w9Um3L._SL1500_.jpg",
};

const BookList = () => {
    return <section className="bookList">
        <Book author={firstBook.author} title={firstBook.title} img={firstBook.img}>
            {/* Below is an example of 'children', which can be accessed. */}
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus minima fugiat quasi ex autem commodi fugit placeat, sapiente culpa suscipit quos explicabo repudiandae. Repellat quidem numquam reiciendis ut voluptates error.</p>
            <button>Button</button>
        </Book>
        {/* The content within the curly brackets are props, used to pass data to the object. */}
        <Book author={firstBook.author} title={firstBook.title} img={firstBook.img} />
        <Book author={secondBook.author} title={secondBook.title} img={secondBook.img} />
        <Book author={secondBook.author} title={secondBook.title} img={secondBook.img} />
        <Book author={firstBook.author} title={firstBook.title} img={firstBook.img} />
        <Book author={firstBook.author} title={firstBook.title} img={firstBook.img} />
    </section>;
}

// We can return the book object itself, and pass the values from the 'books' array as props.
// This means all of the logic to do with rendering can be contained within the Book object itself.
const BookListArray = () => {
    const getBook = (id) => {
        const book = books.find((book) => book.id === id);
        console.log(book);
    }
    return (
        <>
            <h1 className='site-title'>Amazon Best Sellers</h1>
            <section className='bookList'>
                {books.map((book, index) => {
                    // const {author, title, img, id} = book;
                    // return <Book author={book.author} title={book.title} img={book.img} key={book.id}/>;

                    // Can also be done as below.
                    return <Book {...book} key={book.id} getBook={getBook} index={index}/>;
                })}
            </section>
        </>);
}

// Event Handling Examples
const EventExample = () => {
    const handleFormInput = (e) => {
        console.log(e);
        console.log(e.target.name);
        console.log(e.target.value);
        console.log("Form Changed");
    }

    const handleButtonInput = () => {
        alert('Button Clicked')
    }

    const handleFormSubmission = (e) => {
        e.preventDefault();
        console.log('form submitted');
    }

    return (<section>
        <form onSubmit={handleFormSubmission}>
            <h2>Form Title</h2>
            <input type="text" style={{margin: '1rem 0'}} name='example' onChange={handleFormInput}/>
            {/* Can also just use a traditional HTML style submit button. */}
            <button type='submit'>Submit</button>
        </form>
        <div>
            <button onClick={handleButtonInput}>Click Here</button>
        </div>
    </section>);
}

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<BookList />);
root.render(<BookListArray />);