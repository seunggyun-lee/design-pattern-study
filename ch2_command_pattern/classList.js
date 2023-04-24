// Interface
class ICommand {
  execute(params) {}
}

// Receiver
class Door {
  constructor() {
    this.isOpen = false
  }

  open() {
    this.isOpen = true
  }

  close() {
    this.isOpen = false
  }

  get state() {
    return this.isOpen
  }
}

class Window {
  constructor() {
    this.isOpen = false
  }

  open() {
    this.isOpen = true
  }

  close() {
    this.isOpen = false
  }

  get state() {
    return this.isOpen
  }
}
class Lamp {
  constructor() {
    this.isOn = false
  }

  on() {
    this.isOn = true
  }

  off() {
    this.isOn = false
  }

  get state() {
    return this.isOn
  }
}

class Robovac {
  constructor() {
    this.isCleaning = false
  }

  start() {
    this.isCleaning = true
    return this.isCleaning
  }

  end() {
    this.isCleaning = false
  }

  get state() {
    return this.isCleaning
  }
}
// Invoker
class CleaningManager {
  constructor(reciverList) {
    this._reciver = reciverList
  }

  execute(command) {
    command.execute(this._reciver)
  }
}

// Command
class StartCleaning extends ICommand {
  execute(params) {
    const { door, window, lamp, robovac } = params
    door.open()
    window.open()
    lamp.on()
    robovac.start()
  }
}

class EndCleaning extends ICommand {
  execute(params) {
    const { window, lamp, robovac } = params
    window.close()
    lamp.off()
    robovac.end()
  }
}

export {
  Door,
  Window,
  Lamp,
  Robovac,
  CleaningManager,
  StartCleaning,
  EndCleaning,
}
