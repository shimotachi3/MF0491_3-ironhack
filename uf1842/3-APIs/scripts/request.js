async function getPuzzle(wordCount) {

    const hiddenSentence = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    const jsonResponse = await hiddenSentence.json();
    //console.log(jsonResponse.puzzle);
    return jsonResponse.puzzle;
}
