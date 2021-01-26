export default class BTFTItemSheet extends ItemSheet {
  get template() {
    return `systems/beyondthefairytree/templates/sheets/btft-${this.item.data.type}-sheet.html`
  }
}
