// 4. Filtering and Capitalizing: Books Published After 2010 with Author Names.
// Write a program that takes a list of books, including their authors and publication years as input. The program
// should then filter out all books that were published before 2010 and create a new array with the remaining
// books, but with their author names capitalized.

const books = [
    {
        title: "	A Better India: A Better World",
        author: "	Narayana Murthy",
        year: 2009
    },
    {
        title: "Life After Life",
        author: " Kate Atkinson",
        year: 2013
    },
    {
        title: "	A Revenue Stamp",
        author: "Amrita Pritam",
        year: 2006
    },
    {
        title: "	A Suitable Boy",
        author: "Vikram Seth",
        year: 1993
    },
    {
        title: "A Tale of Two Cities",
        author: "Charles Darwin",
        year: 1859
    },
   {
        title: "A Woman's Life",
        author: "Guy de Maupassant",
        year: 1945
    }
];

const filteredBooks = books.filter(book => book.year >= 2010);

const formattedBooks = filteredBooks.map(book => {
    const capitalizedAuthor = book.author.toUpperCase();
    return {
        title: book.title,
        author: capitalizedAuthor,
        year: book.year
    };
});

console.log(formattedBooks);