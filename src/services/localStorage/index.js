export const loadState = (index) => {
    try {
        const serializedState = localStorage.getItem(index);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (index, value) => {
    try {
        const serializedState = JSON.stringify(value);
        localStorage.setItem(index, serializedState);
    } catch (err) {
        return "error to save";
    }
};

export const removeState = (index) => {
    try {
        localStorage.removeItem(index);
    } catch (err) {
        return "error to save";
    }
};
