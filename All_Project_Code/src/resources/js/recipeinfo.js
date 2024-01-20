var rLink;
//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function getRecipeData(recipeLink){
    let APP_ID = "762a00f1"
    let API_KEY = "144a6a63f2bacca6dcb04bd88c8b1fb2"
    console.log(recipeLink)
    rLink = recipeLink
    fetch(recipeLink)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            showData(data)
        });
}

function showData(data) {
    document.getElementById("infoContainer").innerHTML +=
    `<div id="card-title">${data.recipe.label}</div>
    <div class="imgDiv justify-content-center"><img id="recipe-image" src="${data.recipe.images.REGULAR.url}"></div>
    <div id="details">Dish Type:<br> <span class="detail-value" id = "dish-type">${data.recipe.dishType[0]}</span><br><br>Cuisine Type:<br> <span class="detail-value" id = "cuisine-type">${data.recipe.cuisineType[0]}</span><br><br> Calories:<br> <span class="detail-value" id = "calories">${Math.round(data.recipe.calories)}</span></div>
    <div id="card-items">
      <span class="card-item-title">Ingredients</span>
      <ul class="checkmark" id = "ingredients">
      </ul>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-4 justify-content-center">
            <form action="/recipe_list" method="post">
                <center>
                    <input name="href" type="hidden" value="${rLink}">
                    <input name="name" type="hidden" value="${data.recipe.label}">
                    <button class="button" onClick="addSuccess()">Add To Recipe List</button>
                </center>
            </form>
          </div>
          <br>
          <br>
        </div>
      </div>
    </div>`

    data.recipe.ingredients.forEach(hit => {
        document.getElementById("ingredients").innerHTML += 
        `<li>${hit.text}</li>`
    });
}

function addSuccess() {
    window.alert('Recipe Successfully Added')
}