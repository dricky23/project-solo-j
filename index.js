import {miniArticleArray,featuredArticle} from "/data.js";


const miniArticleContainer = document.getElementById('section-one');
const previewArticleContainer = document.getElementById('section-one-preview')
const feature = document.getElementById('mini-main-article')
const featurev2 = document.getElementById('main-article')
let preview = "0"


if(feature){
    feature.addEventListener('click', function(){{
        window.location.href = "/page/journal.html";
    }     
})}

document.getElementById('view-more-btn').addEventListener("click",function(){
    window.alert("coming soon")
})

function createMiniArrayHtml(item){
    return `
    <div class="mini-page-container" id="article-${item.id}">
                    <img class="thumbnail-img" src="${item.img}">
                    <section class="article-info">
                        <h3>${item.date}</h3>
                        <h1>${item.name}</h1>
                        <p>${item.content}</p>
                    </section>
                </div>
    `;
 }

let miniArticleHtml = '';
let featureHtml = "";


if (feature){
for (const item of featuredArticle){
         featureHtml = `
            <h3 id="mini-main-h3">${item.date}</h3>
            <h1 id="mini-main-h1">${item.name}</h1>
            <p id="mini-main-p">${item.content}</p>
            `
    feature.innerHTML = featureHtml}
} else if (featurev2) {
    for (const item of featuredArticle){
        featureHtml = `
            <h3 id="mini-main-h3">${item.date}</h3>
            <h1 id="mini-main-h1">${item.name}</h1>
            <p id="mini-main-p">${item.content}</p>
            <img id='featured-img' src="${item.img}">
            ${item.body}
    `
    
    featurev2.innerHTML = featureHtml
    }
}


function renderPreview(){
    for (const item of miniArticleArray){
        miniArticleHtml += createMiniArrayHtml(item);
        preview ++
        if (preview > 2){
            break;
        }
    }
    previewArticleContainer.innerHTML = miniArticleHtml;
}


function render(){
    for (const item of miniArticleArray){
        miniArticleHtml += createMiniArrayHtml(item);
    }
    miniArticleContainer.innerHTML = miniArticleHtml;

}

if (miniArticleContainer){
    render()

} else if (previewArticleContainer) {
    renderPreview()
}
