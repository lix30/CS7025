//Array of image URLs
const movieImages = [
    https://i.pinimg.com/474x/84/cd/ca/84cdcafc3a542be78bb0ffe23be66e3a.jpg,
    https://i.pinimg.com/474x/84/cd/ca/84cdcafc3a542be78bb0ffe23be66e3a.jpg,
    https://uk.pinterest.com/pin/415668240622176874/
];

//Function to get a random movie image
function getRandomIndex(numberOFElements){
    const randomIndex= Math.floor(Math.random()*numberOFElements);
    return randomIndex;
}
// Event listener for the button click
document.getElementById('showMovieBtn').addEventListener('click', function() {
    const imgElement = document.getElementById('randomMovieImage');
    imgElement.src = getRandomMovieImage(); // Set the random image URL
    imgElement.style.display = 'block'; // Show the image
});
