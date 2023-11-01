books = [
    {
        Title: "The Catcher in the Rye",
        Author: "J.D. Salinger",
        Genre: "Fiction",
        Price: "$9.99"
    },

    {
        Title: "Animal Farm",
        Author: "George Orwell",
        Genre: "Dystopian",
        Price: "$12.99"
    },

    {
        Title: "1984",
        Author: "George Orwell",
        Genre: "Dystopian",
        Price: "$7.99"
    },
]

var html = `<tr> <th>Title</th> <th>Author</th> <th>Genre</th> <th>Price</th> </tr>`;

for(let i=0; i<books.length;i++){
    html += `<tr> <td>${books[i].Title}</td> <td>${books[i].Author}</td> <td>${books[i].Genre}</td> <td>${books[i].Price}</td> </tr>`;
}
document.getElementById("top-selling-table").innerHTML= html;