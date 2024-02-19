const storage: Storage = localStorage;

const setItem = (name: string, value: string) => {
    if (typeof storage.setItem !== "function") {
        console.error("Storage should implement setItem method");
    }
    storage.setItem(name, value);
};

const getItem = (name: string) => {
    if (typeof storage.getItem !== "function") {
        console.error("Storage should implement getItem method");
    }
    return storage.getItem(name);
};

const removeItem = (name: string) => {
    if (typeof storage.removeItem !== "function") {
        console.error("Storage should implement removeItem method");
    }
    storage.removeItem(name);
};

export { setItem, getItem, removeItem };
