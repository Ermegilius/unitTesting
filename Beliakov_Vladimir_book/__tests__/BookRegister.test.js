"use strict";

const BookRegister = require("../BookRegister");
const defaultData = require("../datastorage.json");

describe("Testing constructor", () => {
	test("Test: missing parameter throws an exception", () => {
		expect(() => new BookRegister()).toThrow("data storage missing");
	});
});

describe("Testing get_publisher_of_book_by_name", () => {
	const register = new BookRegister(defaultData);
	test("Test 1: found from the default data", () => {
		expect(register.get_publisher_of_book_by_name("SQL-mysteries")).toEqual("Lion books");
	});
	test("Test 2: book not found", () => {
		expect(register.get_publisher_of_book_by_name("x")).toEqual(null);
	});
	test("Test 3: missing parameter", () => {
		expect(() => register.get_publisher_of_book_by_name()).toThrow("missing parameter");
	});
});

describe("Testing has_extras", () => {
	const register = new BookRegister(defaultData);
	test("Test 1: book with extras", () => {
		expect(register.has_extras(1)).toEqual(true);
	});
	test("Test 2: book without extras", () => {
		expect(register.has_extras(5)).toEqual(false);
	});
	test("Test 3: missing parameter", () => {
		expect(register.has_extras()).toEqual(false);
	});
});

describe("Testing get_extras", () => {
	const register = new BookRegister(defaultData);
	test("Test 1: book with extras", () => {
		expect(register.get_extras(1)).toEqual({
			comments: "no comments",
			type: "e-book",
			edition: "first edition",
		});
	});
	test("Test 2: book without extras", () => {
		expect(register.get_extras(5)).toEqual("there are no extras for this book");
	});
	test("Test 3: no book found", () => {
		expect(register.get_extras(100)).toEqual(null);
	});
	test("Test 4: missing parameter", () => {
		expect(register.get_extras()).toEqual(null);
	});
});

describe("Testing get_All_books_By_author", () => {
	const register = new BookRegister(defaultData);
	test("Test 1: author with books", () => {
		expect(register.get_All_books_By_author("Antony Lee")).toEqual([
			{
				id: 1,
				name: "NoSql - New Hope",
				author: "Antony Lee",
				price: 200,
				publisher: "ICT books",
				keywords: ["Computers", "Gaming", "Future SQL"],
				extras: {
					comments: "no comments",
					type: "e-book",
					edition: "first edition",
				},
			},
			{
				id: 3,
				name: "SQL-mysteries",
				author: "Antony Lee",
				price: 36,
				publisher: "Lion books",
				keywords: ["Future SQL", "Gaming", "mystery"],
				extras: {
					comments: "no comments",
					type: "pocketbook",
					edition: "third edition",
				},
			},
			{
				id: 4,
				name: "Maria and My",
				author: "Antony Lee",
				price: 200,
				publisher: "Antony Lee publishing",
				keywords: ["mystery", "Computers", "Future SQL"],
				extras: {
					comments: "no comments",
					type: "softcover",
					edition: "seventh edition",
				},
			},
		]);
	});
	test("Test 2: author without books", () => {
		expect(register.get_All_books_By_author("x")).toEqual([]);
	});
	test("Test 3: missing parameter", () => {
		expect(() => register.get_All_books_By_author()).toThrow("missing parameter");
	});
});

describe("Testing get_a_book_matching_id", () => {
	const register = new BookRegister(defaultData);
	test("Test 1: existing book", () => {
		expect(register.get_a_book_matching_id(1)).toEqual({
			id: 1,
			name: "NoSql - New Hope",
			author: "Antony Lee",
			price: 200,
			publisher: "ICT books",
			keywords: ["Computers", "Gaming", "Future SQL"],
			extras: {
				comments: "no comments",
				type: "e-book",
				edition: "first edition",
			},
		});
	});
	test("Test 2: non-existing book", () => {
		expect(register.get_a_book_matching_id(100)).toEqual(null);
	});
	test("Test 3: missing parameter", () => {
		expect(() => register.get_a_book_matching_id()).toThrow("missing parameter");
	});
});
