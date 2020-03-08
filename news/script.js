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

            let date = document.createElement('p');
            //convert Unix time to date format
            let d = new Date(item.time * 1000);
            date.innerHTML = d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear();

            let story = document.createElement('div');
            story.className = 'story';
            story.append(Title);
            story.append(date);
            document.getElementById('headlines').append(story);
        })

    }
}