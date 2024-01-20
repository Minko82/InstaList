var nextFetch = ""

//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function getRecipeData(){
    var input = document.getElementById('userInput').value
    let APP_ID = "762a00f1"
    let API_KEY = "144a6a63f2bacca6dcb04bd88c8b1fb2"
    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${input}&app_id=${APP_ID}&app_key=${API_KEY}&imageSize=LARGE&field=image&field=label`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("searchResults").innerHTML = ""
            console.log(data)
            showData(data)
        });
}

function showData(data) {
    nextFetch = data._links.next.href
    var temp = 0;
    data.hits.forEach(hit => {
        document.getElementById("searchResults").innerHTML += 
        `<div class='col-4 searchCol'>
            <div class='card searchCard'> 
                <img class='card-img-top searchIMG' src='${hit.recipe.image}' alt='recipe image'>
                <div class='card-body searchTXT'>
                    <h5 class='card-title'>${hit.recipe.label}</h5>
                    <form action="/recipeinfo" method="post">
                        <input name="href" type="hidden" value="${hit._links.self.href}"/>
                        <button class="toRecipeBtn" id='${temp}'>See Full Recipe</button>
                    </form>
                </div>
            </div>
        </div>`  
        temp++;
    });
}

function loadMore() {
    fetch(nextFetch)
    .then(response => response.json())
    .then(newData => showData(newData))
}