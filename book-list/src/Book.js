export const Book = (props) => {
    // console.log(props);
    // This can be done so we don't have to reference props.x every time.
    // Can also be done using const Function = ({prop1, prop2}) instead of = (props).
    const { img, title, author, getBook, id, index } = props;

    const getSingleBook = () => {
        getBook(id);
    }

    return (
        <article className='book'>
            <img src={img} alt="Book Title" />
            <h1>{title}</h1>
            <h2>{author}</h2>
            <span className="rank">#{index + 1}</span>
            {/* The getSingleBook method is used instead of getBook, as getBook() would be invoked immediately,
                and so would not return anything upon clicking.
                We can also do onClick={() = getBook(id)}. */}
            {/* <button onClick={getSingleBook}>Click Me</button> */}
        </article>
    );
}
