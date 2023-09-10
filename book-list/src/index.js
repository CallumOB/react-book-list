import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const BookList = () => {
    return <section className="bookList">
        <Book/>
        <Book/>
        <Book/>
        <Book/>
    </section>;
}

// const Book = () => {
//     return (
//         <article className='book'>
//             <Image/>
//             <Title/>
//             <Author/>
//         </article>
//     );
// }
// Don't need to create a new component to nest either, can just implicitly write the JSX

const Book = () => {
    const title = "Spare";
    const author = "Prince Harry";
    return (
        <article className='book'>
            <img
                src='./images/spare.jpg'
                alt='Spare'
            />
            {/* Curly brackets mean using normal JS. Comes in handy for dynamic pages. */}
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    );
}

const Image = () => <img src="./images/spare.jpg" alt="Spare Cover" />
const Title = () => <h1>Spare</h1>
const Author = () => {
    const AuthorStyle = {
        color: '#617d98',
        fontSize: '0.75rem',
        marginTop: '0.5rem',
    };
    return <h4 style={AuthorStyle}>Prince Harry</h4>;
    // Inline styles also work, but passing an object is easier.
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>);