var news;
var index = 0;

fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
.then( (response) => {
    return response.json();
})
.then( (array) => {
    news = array;
})
.then( () => more());


function more() { // add 10 stories
    for (let i=0; i<10; i++) {
        let id = news[index++];
        fetch('https://hacker-news.firebaseio.com/v0/item/' + id + '.json')
        .then( (response) => {
            return response.json();
        })
        .then( (item) => {
            let Title = document.createElement('a');
            Title.href = item.url;
            Title.innerHTML = item.title;
            let author = document.createElement('p');
            author.innerHTML = item.by;
            document.getElementById('headlines').append(Title);
            document.getElementById('headlines').append(author);
        })

    }
}