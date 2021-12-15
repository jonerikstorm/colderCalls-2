function selectStudent(pick:Array<number>, dontPick:Array<number>): number {
    let pickable = [...new Set([...pick, ...dontPick])];
    // pickable at this point is a set. We need to put back in a few numbers if we are going to bias it
    return pickable[Math.floor(Math.random() * pickable.length)];
}
function clickPick(): Boolean {
    var pick:Array<number>, dontPick:Array<number>;
    var prefs = new Prefs(input);
    for (let i=0;prefs.QueueMax;i++) {
        dontPickNew[i] = dontPick.pop()
    }
    let current = selectStudent(pick, dontPick);
    dontPick.push(current);
    displayStudentName(current);
    return true;
}
class Prefs
{
    QueueMax: number;
    constructor(JSONinput:string) {
        JSON.parse(input);
    }
}