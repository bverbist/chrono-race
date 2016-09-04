const ALWAYS = true;

function* idGenerator() {
    let counter = 0;
    while (ALWAYS) {
        yield counter++;
    }
}

const idGen = idGenerator();

function generateId() {
    return idGen.next().value;
}

export default generateId;
