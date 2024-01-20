//ADD RECIPE BUTTON

$(document).ready(function(){
    $('#addrecipe').click(function(){
        $('#recipetable').append('<tr id="reciperow"><th></th><td id="editname">RECIPE NAME</td><td><button id="removerecipe" type="button" class="button" onclick="removerecipe()"><i class="fa-solid fa-trash-can"></i></button></td></tr>')
    });
});