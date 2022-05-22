function onSearch() {
    let gitUser = document.getElementById("userSearch").value;
    
    fetch("https://api.giphy.com/v1/gifs/search?api_key=EA4BidrxzpUjoHfI7hlB8SpHbh3KwS75&q=" + gitUser + "&limit=5&offset=0&rating=g&lang=en")
    .then(response => response.json())
    .then(function(gift) {
        let authors = gift.data;
        console.log(authors);
        let container = "";
        return authors.map(function(author) {
        container += `<div class='userName'><h3>Название: ${author.title}</h3>
        <div class='userName'><h5>Автор: ${author.username}</h5>
        <div><img class='picture' src=${author.images.preview_gif.url} alt="" /></div>`;
        document.getElementById("container").innerHTML = container;    
        console.log(author.url);
        
    
})
 
    })
    .catch(error => console.log(error));
}