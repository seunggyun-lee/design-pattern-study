import {
  CleaningManager,
  Door,
  EndCleaning,
  Lamp,
  Robovac,
  StartCleaning,
  Window,
} from "./classList.js"

// command
const startCleaning = new StartCleaning()
const endCleaning = new EndCleaning()

// recevier
const door = new Door()
const window = new Window()
const lamp = new Lamp()
const robovac = new Robovac()

// invoker & reciver
const cleaningManager = new CleaningManager({ door, window, lamp, robovac })

// 확인
console.log("==================================== 상태확인")
console.log(`door 상태: ${door.state ? "open" : "close"}`)
console.log(`window 상태: ${window.state ? "open" : "close"}`)
console.log(`lamp 상태: ${lamp.state ? "open" : "close"}`)
console.log(`robovac 상태: ${robovac.state ? "open" : "close"}`)

// 청소 시작
console.log("==================================== 청소시작")
cleaningManager.execute(startCleaning)

// 확인
console.log("==================================== 상태확인")
console.log(`door 상태: ${door.state ? "open" : "close"}`)
console.log(`window 상태: ${window.state ? "open" : "close"}`)
console.log(`lamp 상태: ${lamp.state ? "open" : "close"}`)
console.log(`robovac 상태: ${robovac.state ? "open" : "close"}`)

// 청소 시작
console.log("==================================== 청소끝")
cleaningManager.execute(endCleaning)

// 확인
console.log("==================================== 상태확인")
console.log(`door 상태: ${door.state ? "open" : "close"}`)
console.log(`window 상태: ${window.state ? "open" : "close"}`)
console.log(`lamp 상태: ${lamp.state ? "open" : "close"}`)
console.log(`robovac 상태: ${robovac.state ? "open" : "close"}`)
