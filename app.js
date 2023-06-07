

function SaleData(hour) {
    this.hour = hour
    this.sale = Math.round(Math.random() * 100)
}

const saleDatas = [
    new SaleData(6),
    new SaleData(7),
    new SaleData(8),
    new SaleData(9),
    new SaleData(10),
    new SaleData(11),
]

const minmax = []

saleDatas.forEach(item => {
    keys = Object.keys(item)
    keys.forEach(key => {
       minmax.push(item[key])
    })
})

console.log(minmax);

function Location(name, min, max, saleData) {
    this.name = name
    this.min = min
    this.max = max
    this.saleData = saleData
}
