export default class BTFTActorSheet extends ActorSheet {
  get template() {
    console.log("BeyondTheFairyTree | Actor Sheet Loaded")
    return `systems/beyondthefairytree/templates/sheets/btft-actor-sheet-${this.actor.data.type}.html`
  }
}
