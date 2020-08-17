export function saveToLocalStorage(state) {
    console.log('in save to local', state);
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (e) {
        console.log(e);
    }
}

function loadFromLocalStorage(state) {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) return undefined;
        console.log('in load', JSON.parse(serializedState));
        return JSON.parse(serializedState);
    } catch (e) {
        console.log(e);
        return undefined;
    }
}

export const persistedState = loadFromLocalStorage();
