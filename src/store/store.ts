import { makeAutoObservable } from "mobx";

interface IStore {
    store: string[];
    add: () => void;
}

class Store implements IStore  {
    store = []

    constructor() {
        makeAutoObservable(this)
    }

    add = () => {

    }
}

export default new Store()