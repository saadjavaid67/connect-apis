const body = document.querySelector('body');
const button = document.querySelector('button')
const word = document.createElement('h1');
const translation = document.createElement('p');

const randomWord = () => {
    fetch('https://random-word-api.herokuapp.com/word?number=1').then(response => {
        return response.json();
    }).then(
        response => {
            word.textContent = response;
            body.appendChild(word);
            randomDefinition(response);
        }

    ).catch(err => {
        console.log(err);
    })
}

const randomDefinition = (w) => {
    fetch("https://simple-elegant-translation-service.p.rapidapi.com/translate", {
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "x-rapidapi-key": "ed982214b6msh9be77576224f846p179174jsn8c191f12cd24",
                "x-rapidapi-host": "simple-elegant-translation-service.p.rapidapi.com"
            },
            "body": {
                "text": w
            }
        })
        .then(response => {
            translation.textContent = response.translated['3.translated text'];
            body.appendChild(translation);
            console.log(response.translated['3.translated text']);
        })
        .catch(err => {
            console.error(err);
        });
}



button.addEventListener('click', randomWord)