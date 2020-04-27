export function getLibrary(){
    return fetch('http://localhost:8080/api/library')
    .then(response => response.json())
    .then(json => json.libraries);
}