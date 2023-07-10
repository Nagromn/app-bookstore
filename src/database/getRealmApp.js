// import Realm from 'realm';
// import {BookSchema} from './schemas/BookSchema';

// async function bookList() {
//   const realm = await Realm.open({
//     path: 'bookdb',
//     schema: [BookSchema],
//   });

//   let books;

//   // Create
//   let Create = () => {
//     realm.write(() => {
//       books = realm.create('Book', {
//         _id: 1,
//         title: '',
//         author: '',
//         category: '',
//       });
//       console.log(`Added new book: ${newBook.title}`);
//     });
//   };

//   // Read
//  let Read = () => {
//     books = realm.object('Book');
//     console.log(`The lists of books are: ${books.map(book => book.title)}`);
//   };

//   // Sort
//   let Sort = () => {
//     const booksByTitle = books.sorted('title');
//     `The lists of books in alphabetical order are: ${booksByTitle.map(
//       booksByTitle => booksByTitle.title,
//     )}`;
//   };

//   // Update
//   let Update = () => {
//     realm.write(() => {
//       books = realm.object('Book'[0]);
//       books.title = '';
//       books.author = '';
//       books.category = '';
//     });
//   };

//   // Delete
//   let Delete = () => {
//     realm.write(() => {
//       realm.delete(books);
//       books = null;
//     });
//   };

//   // Closing realm
//   realm.close();
// }

// // Catching error
// bookList().catch(error => {
//   console.log(`An error occurred: ${error}`);
// });

// export default bookList;
