document.querySelector('#generateBtnWcloud').addEventListener('click', function () {
    const inputs = document.querySelectorAll('.input');
    const words = Array.from(inputs).map(input => input.value.trim());

    if (words.some(word => word === '')) {
        alert('Please fill in all the fields!');
        return;
    }

    const story = `
        Last night, I dreamed I was a ${words[0]} who lived in a ${words[1]} ${words[2]}. 
        I was on a mission to find the legendary ${words[3]} hidden inside a ${words[4]} ${words[5]}. 
        Along the way, I had to defeat a ${words[6]} ${words[7]} by using my magical ${words[8]}. 
        When I finally found the treasure, it turned out to be a ${words[9]} ${words[10]}. 
        I woke up yelling, "What a dream!"
    `;

    document.querySelector('#storyText').textContent = story;
    document.querySelector('#story-part').classList.remove('hidden');
    document.querySelector('#word-gather-part').classList.add('hidden');
    document.querySelector('#generateBtnWcloud').classList.add('hidden');
});


document.querySelector('#generateAnother').addEventListener('click', function () {

    const inputs = document.querySelectorAll('.input');
    inputs.forEach(input => input.value = '');

    document.querySelector('#story-part').classList.add('hidden');
    document.querySelector('#word-gather-part').classList.remove('hidden');
});