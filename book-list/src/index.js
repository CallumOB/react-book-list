import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const title = "Spare";
const author = "Prince Harry";
const image = "./images/spare.jpg";

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

const Book = (props) => {
    console.log(props);
    // This can be done so we don't have to reference props.x every time.
    // Can also be done using const Function = ({prop1, prop2}) instead of = (props).
    const { img, title, author, children} = props;

    return (
        <article className='book'>
            <img src={img} />
            {/* This MUST be a return value. */}
            {/* Curly brackets mean using normal JS. Comes in handy for dynamic pages. */}
            <h2>{props.title}</h2>
            <h4>{props.author}</h4>

            {/* Props will ONLY be displayed if they are provided. */}
            <p>{props.job}</p>
            <p>{props.title}</p>
            <p>{props.number}</p>
            {/* {children} */}
        </article>
    );
}

// We can use arrays and iteration to display content in react. 
const books = [
    {
        author: "Prince Harry",
        title: "Spare",
        img: "https://m.media-amazon.com/images/I/81pHW0GJIlL._SL1500_.jpg",
        id: 1, // Each member of an array should have a unique 'key'. Usually this is pulled from a DB. 
    },
    {
        author: "James Clear",
        title: "Atomic Habits",
        img: "https://m.media-amazon.com/images/I/81JH6w9Um3L._SL1500_.jpg",
        id: 2,
    },
];

// We can return the book object itself, and pass the values from the 'books' array as props.
// This means all of the logic to do with rendering can be contained within the Book object itself.
const BookListArray = () => {
    return <section className='bookList'>
        <EventExample />
        {books.map((book) => {
            // const {author, title, img, id} = book;
            // return <Book author={book.author} title={book.title} img={book.img} key={book.id}/>;

            // Can also be done as below.
            return <Book {...book} key={book.id} />;
        })}
    </section>;
}

// Event Handling
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