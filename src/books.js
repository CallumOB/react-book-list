// We can use arrays and iteration to display content in react. 
import spare from "./images/spare.jpg";
import atomic from "./images/atomic-habits.jpg";
import unstoppable from "./images/unstoppable.jpg";

export const books = [
    {
        author: "Prince Harry",
        title: "Spare",
        img: spare,
        id: 1, // Each member of an array should have a unique 'key'. Usually this is pulled from a DB. 
    },
    {
        author: "James Clear",
        title: "Atomic Habits",
        img: atomic,
        id: 2,
    },
    {
        author: "Mark Hughes",
        title: "Unstoppable",
        img: unstoppable,
        id: 3,
    },
];
