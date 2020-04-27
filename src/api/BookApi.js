export function getBookByLibraryId(libraryId){
    return fetch('http://localhost:8080/api/book/library/' + libraryId)
    .then(response => response.json())
    .then(json => json.books);
}