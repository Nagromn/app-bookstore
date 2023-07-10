// Libs
import Realm from 'realm';

// Class
class BookSchema extends Realm.Object {}

BookSchema.schema = {
  name: 'Book',
  properties: {
    _id: 'int',
    _title: 'string',
    _author: 'string',
    _category: 'string',
  },
  primaryKey: '_id',
};

let realm = new Realm({schema: [BookSchema], schemaVersion: 1});

let getAllBooks = () => {
  return realm.objects('Book');
};

let books;

// Create
let Create = (_id, _title, _author, _category) => {
  realm.write(() => {
    books = realm.create('Book', {
      _id: 1,
      title: '',
      author: '',
      category: '',
    });
  });
};

// Read
let Read = () => {
  books = realm.object('Book');
  console.log(`The lists of books are: ${books.map(book => book.title)}`);
};

// Sort
let Sort = () => {
  const booksByTitle = books.sorted('title');
  `The lists of books in alphabetical order are: ${booksByTitle.map(
    booksByTitle => booksByTitle.title,
  )}`;
};

// Update
let Update = () => {
  realm.write(() => {
    books = realm.object('Book'[0]);
    books.title = '';
    books.author = '';
    books.category = '';
  });
};

// Delete
let Delete = () => {
  realm.write(() => {
    realm.delete(books);
    books = null;
  });
};

// Closing realm
realm.close();

// Export
export default {getAllBooks, Create, Read, Sort, Update, Delete};
