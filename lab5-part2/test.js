
// Describe and test the functions
describe('Library functions', () => {
  it('should add new book', () => {
    const prevSize = libraryBooks.length;
    const result = addBook("A", "author", 1);
    assert.equal(result.title, "A");
    assert.equal(result.author, "author")
    assert.equal(result.libraryID, 1)
    assert.equal(libraryBooks.length, prevSize + 1)
  });
  it('should get titles in order', () => {
    expected = ['A','Mockingjay: The Final Book of The Hunger Games', 'The Road Ahead', 'The Road Ahead', 'Walter Isaacson']
    result = getTitles();
    assert.equal(result.length, expected.length)
    assert.equal((result == undefined || result == null), false);
    for (let index = 0; index < result.length; index++) {
        const element = result[index];
        const expectedElement = expected[index];
        assert.equal(element, expectedElement);
    }
});
it('should get titles in order', () => {
    expected = ['A','Mockingjay: The Final Book of The Hunger Games', 'The Road Ahead', 'The Road Ahead', 'Walter Isaacson']
    result = getTitles();
    assert.equal(result.length, expected.length)
    assert.equal((result == undefined || result == null), false);
    for (let index = 0; index < result.length; index++) {
        const element = result[index];
        const expectedElement = expected[index];
        assert.equal(element, expectedElement);
    }
});
it('should find books that contain a given word in the title and arrange them in order by the authors name', () => {
    expected = [{title: "The Road Ahead", author: "Bill Gates", libraryID: 1235}
    ,{title: "The Road Ahead", author: "Elon Musk", libraryID: 4268}]
    result = findBooks("Road");
    assert.equal(result.length, expected.length)
    assert.equal((result == undefined || result == null), false);
    for (let index = 0; index < result.length; index++) {
        const element = result[index];
        const expectedElement = expected[index];
        assert.equal(element.title, expectedElement.title);
        assert.equal(element.author, expectedElement.author);
        assert.equal(element.libraryID, expectedElement.libraryID);
    }
});

});

