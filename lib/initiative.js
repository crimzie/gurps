'use strict'

// Overkill? The class encapsulates the initiative strategy, and is responsible
// for setting that strategy during initialization.
export default class Initiative {
  constructor() {
    this.setup()
  }

  setup() {
    Hooks.once("init", () => {
      CONFIG.Combat.initiative = {
        formula: "@attributes.RF.value - 3d6",
        decimals: 0
      }

//      console.log(CONFIG.Combat.initiative)
    })
  }
}
