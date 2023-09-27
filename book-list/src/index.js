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
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus minima fugiat quasi ex autem commodi fugit placeat, sapiente culpa suscipit quos explicabo repudiandae. Repellat quidem numquam reiciendis ut voluptates error.</p>
            <button>Button</button>
        </Book>
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
            {children}
        </article>
    );
}

const books = [
    {
        author: "Prince Harry",
        title: "Spare",
        img: "https://m.media-amazon.com/images/I/81pHW0GJIlL._SL1500_.jpg",
    },
    {
        author: "James Clear",
        title: "Atomic Habits",
        img: "https://m.media-amazon.com/images/I/81JH6w9Um3L._SL1500_.jpg",
    },
];

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);