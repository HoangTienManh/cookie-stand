
//  ==== functional function ====

function getValueArrayObject(arr) {
    let values = []
    arr.forEach( item => {
        values.push(item.sale)
    })
    return values
}

function getMin(arr) {
    let min
    min = Math.min(...arr)
    return min
}

function getMax(arr) {
    let max
    max = Math.max(...arr)
    return max
}

function getSumArray(arr) {
    let sum = 0
    arr.forEach( item => {
        sum += item
    })
    return sum
}

function getAverage(arr) {
    let avg = 0
    let saleTimes = arr.length
    let values = getValueArrayObject(arr)
    let sum = getSumArray(values)
    avg = Math.round(sum / saleTimes)

    return avg
}

// ============= end functional function =============

// ======= OOP ========

function SaleData(hour) {
    this.hour = hour
    this.sale = Math.floor(Math.random() * 100)
}

function generateSaleDatas() {
    let saleDatas = []

    for (let i = 6; i <= 19; i++) {
        let item = new SaleData(i)
        saleDatas.push(item)
    }

    return saleDatas
}


function Location(name, saleData) {
    this.name = name
    this.min = getMin(getValueArrayObject(saleData))
    this.max = getMax(getValueArrayObject(saleData))
    this.avgSale = getAverage(saleData)
}

let seattle = new Location("Seattle", generateSaleDatas())
let tokyo = new Location("Tokyo", generateSaleDatas())
let dubai = new Location("Dubai", generateSaleDatas())
let paris = new Location("Paris", generateSaleDatas())
let lima = new Location("Lima", generateSaleDatas())

// =======end OOP ========

function render(location) {

    let table = document.querySelector("#sale-table")

    let tr = document.createElement("tr")
    tr.innerHTML =
                `<td>${location.name}</td>
                <td>${location.min}</td>
                <td>${location.max}</td>
                <td>${location.avgSale}</td>`

    table.appendChild(tr)
}

render(seattle)
render(tokyo)
render(dubai)
render(paris)
render(lima)




