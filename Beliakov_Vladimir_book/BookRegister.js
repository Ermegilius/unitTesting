"use strict";

module.exports = class BookRegister {
	#register;

	constructor(data) {
		if (!data) {
			throw new Error("data storage missing");
		}
		this.#register = data;
	}

	//Methods:

	//returns the publisher of the book matching the name
	get_publisher_of_book_by_name(searchKey) {
		if (arguments.length < 1) {
			throw new Error("missing parameter");
		}
		for (const book of this.#register) {
			if (book.name === searchKey) {
				return book.publisher;
			}
		}
		return null;
	} //end of get_publisher_of_book_by_name

	//method checks based on id if the book has `extras` or not
	has_extras(searchKey) {
		for (const book of this.#register) {
			if (book.id === searchKey) {
				if (book.extras && Object.keys(book.extras).length > 0) {
					return true;
				}
			}
		}
		return false;
	} //end of has_extras

	//searches the book matching the searchKey and if match is found returns the extras object otherwise null is returned
	get_extras(searchKey) {
		for (const book of this.#register) {
			if (book.id === searchKey) {
				if (book.extras) {
					return book.extras;
				} else {
					return "there are no extras for this book";
				}
			}
		}
		return null;
	} //end of get_extras

	//searches books with given author
	get_All_books_By_author(searchValue) {
		if (arguments.length < 1) {
			throw new Error("missing parameter");
		}
		const booksFound = [];
		for (const book of this.#register) {
			if (book.author === searchValue) {
				booksFound.push(book);
			}
		}
		return booksFound;
	} //end of get_All_books_By_author

	//Method searches the datastorage for an object with given searchKey. Key is unique
	get_a_book_matching_id(searchKey) {
		if (arguments.length < 1) {
			throw new Error("missing parameter");
		}
		for (const book of this.#register) {
			if (book.id === searchKey) {
				return book;
			}
		}
		return null;
	} //end of get_a_book_matching_id
}; //end of Class
