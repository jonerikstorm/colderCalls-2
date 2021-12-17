function selectStudent(pick, dontPick) {
    let pickable = [...new Set([...pick, ...dontPick])];
    // pickable at this point is a set. We need to put back in a few numbers if we are going to bias it
    return pickable[Math.floor(Math.random() * pickable.length)];
}
/*
function clickPick(): Boolean {
    var pick:Array<number>, dontPick:Array<number>;
    var prefs = new Prefs();
        for (let i=0;Prefs.QueueMax;i++) {
        //dontPickNew[i] = dontPick.pop()
    }
    let current = selectStudent(pick, dontPick);
    dontPick.push(current);
    displayStudentName(current);
    return true;
}
 */
class Prefs {
    constructor(JSONinput) {
        // JSON.parse(input);
    }
}
