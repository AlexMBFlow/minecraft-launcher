import { makeAutoObservable } from "mobx";

class Store {
    store = []

    constructor() {
        makeAutoObservable(this)
    }

    add = () => {

    }
}

export default new Store()