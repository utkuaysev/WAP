let libraryBooks = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1235 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268 },
    { title: "The Road Ahead", author: "Elon Musk", libraryID: 4268 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3257 }
   ];

function addBook(title, author, libraryID){
    book = {title, author, libraryID};
    libraryBooks.push(book);
    return book;
}
function getTitles(){
    return libraryBooks.map(b => b.title)
        .sort();
}
function findBooks(keyword){
    const titleBooks = libraryBooks.filter(a => a.title.includes(keyword))
    titleBooks.sort((a,b) => {
     if(a > b)
         return -1;
     if(a < b)
         return 1;
     return 0;
    });
    return titleBooks;
 }
 console.log(getTitles())
 console.log(findBooks("Road"))

 if ( typeof module === 'object' && module.exports) {
    module.exports = myModule;
}