const body = document.querySelector('body')
let searchBox = document.getElementById('searchBar')

let articles = [
    {
        "title" : "What is US Liberal Arts College?",
        "id" : "001",
        "description" : "Explaination on US Liberal Arts Collage",
        "articleLink" : "https://www.facebook.com/permalink.php?story_fbid=pfbid0F4eo8WvGbkEUjrRgRXveYGF85rVQhyMhKow4n9PpTwM3z8GjQXgByWtnaHuRvykel&id=100088420233552",
        "localPath" : "./Articles/Article001.html",
    },
    {
        "title" : "Guide to US educational institution",
        "id" : "002",
        "description" : "Advices and Guides to US educational institution",
        "articleLink" : "https://www.facebook.com/permalink.php?story_fbid=pfbid0aBEbqroPrBJi7CvbiqiPpHi3DBAxfwm9UsdMMJNJRiQFb185Ev2kR4mYrwJBYfm8l&id=100088420233552",
        "localPath" : "./Articles/Article002.html",


    },
    {
        "title" : "Scholarship vs Financial aid",
        "id" : "003",
        "description" : "Let's find out more about Scholarship and Financial aid in this article",
        "articleLink" : "https://www.facebook.com/permalink.php?story_fbid=pfbid02V1ztvZZrXHaa3iG6n2PBqgAdHD2vJdBcLYwkvSob1BvcsdhHAK7XGk9L5mFgx4Kml&id=100088420233552",
        "localPath" : "./Articles/Article003.html",

    },
    {
        "title" : "Us Community Collage",
        "id" : "004",
        "description" : "A mix of information about Community Collages in US",
        "articleLink" : "https://www.facebook.com/permalink.php?story_fbid=pfbid02AVGDcaVx7tDv53oe3RFDQRDWkJWERRiDt7apzhTwu9pNW7Rb1ZzM38EzGVRYjwrel&id=100088420233552",
        "localPath" : "./Articles/Article004.html",

    },
    {
        "title" : "Need blind and Need aware colleges",
        "id" : "005",
        "description" : "What are Need blind and Need aware colleges?",
        "articleLink" : "https://www.facebook.com/permalink.php?story_fbid=pfbid0bgPsmERxqeNtvYjkEdbqVMSFAi2LkQL8QXW7o3akKhuwSHRLiP2ZLFgqVUrcDeSdl&id=100088420233552",
        "localPath" : "./Articles/Article005.html",

    },
    {
        "title" : "Collage Tution Fees",
        "id" : "006",
        "description" : "Find out more by clicking on one of these links",
        "articleLink" : "https://www.facebook.com/permalink.php?story_fbid=pfbid028kuhFyFV6ZmQNTHMSjLJPVnbeQTMFro7sRAUuHKtyphbtKCVP8x1TZhErUohXrvUl&id=100088420233552",
        "localPath" : "./Articles/Article006.html",

    },
    {
        "title" : "Studying Abroad Early In Your Academic Careers",
        "id" : "007",
        "description" : "What are the Pros and Cons?",
        "articleLink" : "https://www.facebook.com/permalink.php?story_fbid=pfbid02bQ86ZWzgbiDmSMVSk5F1qYUuKbQBCmmG8ef7RDRrnzQqmfA5wm9Nuw5PQjP3feoPl&id=100088420233552",
        "localPath" : "./Articles/Article007.html",

    },
    {
        "title" : "Early Action (EA) and Early decision (ED)",
        "id" : "008",
        "description" : "Find out more by clicking on one of these links",
        "articleLink" : "https://www.facebook.com/permalink.php?story_fbid=pfbid02zeepuwaapihgWhAsUXfF5noppEJLZFzrEBemF9x8TiAxidEjKHbT9gpfaiVr1c8tl&id=100088420233552",
        "localPath" : "./Articles/Article008.html",

    },
    {
        "title" : "Work College",
        "id" : "009",
        "description" : "Find Out More!",
        "articleLink" : "https://www.facebook.com/permalink.php?story_fbid=pfbid02bx1spaVgQ46DbBEPjYSb8rW8GTKYRxs4VKSDdG7vaVArDSpBrMr5ciHwrnWaKP1Dl&id=100088420233552",
        "localPath" : "./Articles/Article009.html",

    },
    {
        "title" : "Work-study program",
        "id" : "010",
        "description" : "Pros and Cons of Work-Study Program",
        "articleLink" : "https://www.facebook.com/permalink.php?story_fbid=pfbid02LPQCU4Cu1xatNqUyk8MGNystE63x4ggj5x2c2XuGR36kgCKKpSibv5nmvpSGgWRtl&id=100088420233552",
        "localPath" : "./Articles/Article010.html",

    },
    {
        "title" : "US Undergraduate System",
        "id" : "011",
        "description" : "College Degree Types",
        "articleLink" : "https://www.facebook.com/permalink.php?story_fbid=pfbid0WNSGBEYjhmQKuDsdjksnQtDWAg58SSFJnzLkH1zvrNQ3xVsHpro23iXtPdfji5ual&id=100088420233552",
        "localPath" : "./Articles/Article011.html",

    },
    {
        "title" : "College Degree Types",
        "id" : "012",
        "description" : "Find Out More About College Degree Types",
        "articleLink" : "https://www.facebook.com/permalink.php?story_fbid=pfbid0WNSGBEYjhmQKuDsdjksnQtDWAg58SSFJnzLkH1zvrNQ3xVsHpro23iXtPdfji5ual&id=100088420233552",
        "localPath" : "./Articles/Article012.html",

    },
    {
        "title" : "Why Do Most Students Choose US To Study Abroad?",
        "id" : "013",
        "description" : "Find Out More By Reading The Article!",
        "articleLink" : "https://www.facebook.com/permalink.php?story_fbid=pfbid02wL1wXKDfAfc3WeaeVKYLHoMZNs6BkkjdHQn6Vd4L2WQjn4Mh1EdL46ZJfRDDF73Ll&id=100088420233552",
        "localPath" : "./Articles/Article013.html",

    },
    {
        "title" : "Tuition free college",
        "id" : "014",
        "description" : "Click to read more",
        "articleLink" : "https://www.facebook.com/permalink.php?story_fbid=pfbid0pKVxUbvTgwWL4fT9nb7GNjXodsZPJqp8ZzMsbTWiZ9yfzho5GESkgTqer3amsrDKl&id=100088420233552",
        "localPath" : "./Articles/Article014.html",

    },
]


function addArticles(array){
    let rowTemp = document.querySelector('.row');
    for(let i = 0; i < array.length; i++){  
        if(array[i].id % 2 == 0){

        rowTemp = `
            <div class="card">
              <div class="card-body">
                <h5 class="card-title" id="${array[i].id}">${array[i].title}</h5>
                <p class="card-text">${array[i].description}</p>
                <a href="${array[i].articleLink}" class="btn btn-primary" target="_blank">Article link</a>
                <a href="${array[i].localPath}" class="btn btn-primary" >Read on Website</a>
              </div>
              </div>
        
`

console.log('even')
let continueRow = body.lastChild;
let row = document.createElement('div');
row.classList.add('col-sm-6')
row.innerHTML = rowTemp;
continueRow.append(row)
} else {
    rowTemp = `
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title" id="${array[i].id}">${array[i].title}</h5>
                <p class="card-text">${array[i].description}</p>
                <a href="${array[i].articleLink}" class="btn btn-primary" target="_blank">Article link</a>
                <a href="${array[i].localPath}" class="btn btn-primary" >Read on Website</a>
              </div>
              </div>
              </div>
     `
console.log('odd')
let startRow = document.createElement('div');
startRow.classList.add('row');
startRow.style.marginTop = '3%';
startRow.innerHTML = rowTemp
body.append(startRow)
}

}
}

window.onload = addArticles(articles)

searchBox.addEventListener('input', e => {
    let value = e.target.value;
    articles.forEach(article => {
    let isVisible = article.title.includes(value)
        let articleId = document.getElementById(`${article.id}`);
        let card = articleId.parentElement
        let row = card.parentElement
        row.classList.toggle('hide', !isVisible);
    
        
    })
})

