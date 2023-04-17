const toyArray = Array.from({ length: 64 }, () =>
  Array.from({ length: 64 }, () => 0)
)

class Toy {
  constructor(data) {
    this.name = data.name
    this.location = data.location
    this.price = (Math.round(Math.random() * 10) + 1) * 1000
    this.isHand = data.isHand
  }

  waveHand() {
    if (this.isHand) {
      return true
    }
    return false
  }

  changeLocation(location) {
    const before = this.location
    const after = location
    this.location = after

    toyArray[before.y][before.x] = 0
    toyArray[after.y][after.x] = 1
  }

  changePrice(price) {
    this.price = price
  }

  getName() {
    console.log(this.name)
  }
  getLocation() {
    console.log(this.location)
  }

  getPrice() {
    console.log(this.price)
  }
}

class AtypeToy extends Toy {
  constructor(name) {
    const isHand = true
    if (!toyArray[0][1]) {
      toyArray[0][1] = 1
      super({ name: name || "", location: { x: 1, y: 0 }, isHand })
      return
    }

    const lastIndex = toyArray[0].lastIndexOf(1)

    super({ name: name || "", location: { x: lastIndex + 1, y: 0 }, isHand })
    toyArray[0][lastIndex + 1] = 1
  }
}

class BtypeToy extends Toy {
  constructor(name) {
    const isHand = false
    if (!toyArray[1][0]) {
      toyArray[1][0] = 1
      super({ name: name || "", location: { x: 0, y: 1 }, isHand })
      return
    }

    const yValue = toyArray.map((row) => row.find((_, index) => index === 0))

    const lastIndex = yValue.lastIndexOf(1)

    super({ name: name || "", location: { x: 0, y: lastIndex + 1 }, isHand })
    toyArray[lastIndex + 1][0] = 1
  }
}

const test = new AtypeToy("aaaa")
test.getName()
const test2 = new AtypeToy()
test2.getName()
const test3 = new BtypeToy()
const test4 = new BtypeToy("test4")

console.log(toyArray[0][0], toyArray[1][0], toyArray[2][0], toyArray[3][4])

test4.getName()
test4.getLocation()
test4.changeLocation({ x: 4, y: 3 })
test4.getLocation()

console.log(toyArray[0][0], toyArray[1][0], toyArray[2][0], toyArray[3][4])
