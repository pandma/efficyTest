const oppoStatus = [
    {
        "K_OPPO_STATUS": 1,
        "STATUS": "1. Initial Contact",
        "SUCCESS": 0
    },
    {
        "K_OPPO_STATUS": 2,
        "STATUS": "2. Demonstration",
        "SUCCESS": 25
    },
    {
        "K_OPPO_STATUS": 3,
        "STATUS": "3. Proposal",
        "SUCCESS": 50
    },
    {
        "K_OPPO_STATUS": 4,
        "STATUS": "4. Negotiation",
        "SUCCESS": 75
    },
    {
        "K_OPPO_STATUS": 5,
        "STATUS": "5. Order",
        "SUCCESS": 100
    }
];

const Module = class {
    constructor() {

    }
    start() {
        this.getVal()
        this.handleForm()

    }
    getVal = () => {
        const val = document.querySelector('input')
        const select = document.querySelector('select')

        if (select.value == 1) {
            val.value = 0

        } else if (select.value == 2) {
            val.value = 25

        } else if (select.value == 3) {
            val.value = 50

        } else if (select.value == 4) {
            val.value = 75

        } else if (select.value == 5) {
            val.value = 100

        }
    }
    handleForm = (e) => {
        e.preventDefault()

        const output = document.querySelector('#result')
        const select = document.querySelector('select')

        if (select.value == 1) {
            let message = ' "STATUS": "1. Initial Contact"'
            output.innerHTML = message

        } else if (select.value == 2) {
            let message = '"STATUS": "2. Demonstration" '
            output.innerHTML = message

        } else if (select.value == 3) {
            let message = ' "STATUS": "3. Proposal" '
            output.innerHTML = message

        } else if (select.value == 4) {
            let message = '"STATUS": "4. Negotiation" '
            output.innerHTML = message

        } else if (select.value == 5) {
            let message = ' "STATUS": "5. Order"'
            output.innerHTML = message

        }
    }
}

const main = new Module();



