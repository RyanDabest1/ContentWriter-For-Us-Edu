const fs = require('fs');
const folderPath = './public/pages/Articles'
let highestCount = 0;
let files = fs.readdirSync(folderPath)

function endsWith(input){
    let fileType = input.substring(11,15)    
    if(fileType == 'html'){
        highestCount++;
        return true;
    }
    return false;
}

function getLatestArticle(){ 
    for(let i = 0; i < files.length; i++ ){
    endsWith(files[i])
}
console.log("Latest article id : " + highestCount)
}

getLatestArticle()


let title = ''
let content1 = ``
let content2 = ``
let img1 = ''
let img2 = ''


let template = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style> @import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap'); </style>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/articles.css">
    <link rel="shortcut icon" href="./img/favicon.png" type="image/x-icon">
    <title>${title}</title>
</head>
<body>
    <nav class="navigation-bar">
        <a href="../index.html"><img class="logo" src="./img/logo.png"></a>
        <div class="navigation-links">
            <ul>
        <li class="navItem"><a href="../index.html">Home</a></li>
                <li class="navItem"><a href="../about.html">About</a></li>
                <li class="navItem"><a href="../blogs.html">Articles</a></li>
                <li class="navItem"><a href="../contact.html">Contact Us</a></li>
            </ul>
        </div>
    </nav>
    <div class='main'>
    <h1 class="title">${title}</h1>
    <p class='mainText'>
    ${content1}
    </p>
    <img src="${img1}" style="width: 50%; margin-left: 10%; border-radius: 4%;" alt="..." > 
    <p class='mainText'>
    ${content2}
    </p>
    <img src="${img2}" style="width: 50%; margin-left: 10%; border-radius: 4%;" alt="..." > 

    </div>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script></body>
</html>`


fs.writeFile(`./public/pages/Articles/Article0${highestCount + 1}.html`, template, {flag: 'a+'}, err => {})
   