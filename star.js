let baseUrl = "https://swapi.dev/api/people/?search";
//to call api of star war character.
const getCharacter = async (input) => {
    let getCharacterData = await fetch(`${baseUrl}=${input}`);
    let characterData = await getCharacterData.json();
    let { results } = characterData;
    return [results];
}

//input search function
const searchCharacter = async () => {
    let inputBoxValue = document.getElementById("input__search").value;
    if (inputBoxValue.length === 0) {
        showParentDiv.innerHTML = null
        return false
    }
    let [results] = await getCharacter(inputBoxValue);
    showCharacter(results);
}


let time;

//to delay the api function to call.
const debounce = (delay, inputFunc) => {
    let inputBoxValue = document.getElementById("input__search").value;

    if (inputBoxValue.length <= 2) {
        return false;
    }

    if (time) {
        clearTimeout(time);
    }

    time = setTimeout(() => {
        inputFunc();
    }, delay);


}


let showParentDiv = document.getElementById("character__container");

const showCharacter = (data) => {

    for (const { name, gender, birth_year, eye_color, skin_color } of data) {

        const insertHtml = `
        <div id="character__child">
            <div>Name - ${name}</div>
            <div>Gender - ${gender}</div>
            <div>DOB - ${birth_year}</div>
            <div>Eye color - ${eye_color}</div>
            <div>Skin color - ${skin_color}</div>
        </div>
        
        `
        showParentDiv.insertAdjacentHTML("beforeend", insertHtml);
    }

}


