import {makeAutoObservable} from "mobx";

class Store {
    store = [{
        name: "cookiezi"
    }]

    constructor() {
        makeAutoObservable(this)
    }

    add = () => {

    }

}

export default new Store()