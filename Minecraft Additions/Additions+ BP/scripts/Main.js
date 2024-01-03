import { world } from "@minecraft/server";

const afterEvents = world.afterEvents;
afterEvents.playerBreakBlock.subscribe((Data) => {
  const player = Data.player;
  const item = Data.itemStackAfterBreak;

  if (item.typeId === "add:daxe_dh") {
    const damage = item.getComponent("durability").damage;
    const durability = item.getComponent("durability").maxDurability;
    const inv = player.getComponent("inventory").container;

    if (damage == durability) {
      inv.setItem(player.selectedSlot, null);
    } else {
      item.getComponent("durability").damage += 1;
      inv.setItem(player.selectedSlot, item);
    }
  }
}); //Diamond axe, Diamond handle
world.afterEvents.playerBreakBlock.subscribe((Data) => {
  const player = Data.player;
  const item = Data.itemStackAfterBreak;

  if (item.typeId === "add:daxe_gh") {
    const damage = item.getComponent("durability").damage;
    const durability = item.getComponent("durability").maxDurability;
    const inv = player.getComponent("inventory").container;

    if (damage == durability) {
      inv.setItem(player.selectedSlot, null);
    } else {
      item.getComponent("durability").damage += 1;
      inv.setItem(player.selectedSlot, item);
    }
  }
}); //Diamond axe, Gold handle
world.afterEvents.playerBreakBlock.subscribe((Data) => {
  const player = Data.player;
  const item = Data.itemStackAfterBreak;

  if (item.typeId === "add:daxe_ih") {
    const damage = item.getComponent("durability").damage;
    const durability = item.getComponent("durability").maxDurability;
    const inv = player.getComponent("inventory").container;

    if (damage == durability) {
      inv.setItem(player.selectedSlot, null);
    } else {
      item.getComponent("durability").damage += 1;
      inv.setItem(player.selectedSlot, item);
    }
  }
}); //Diamond axe, Iron handle
world.afterEvents.playerBreakBlock.subscribe((Data) => {
  const player = Data.player;
  const item = Data.itemStackAfterBreak;

  if (item.typeId === "add:daxe_sh") {
    const damage = item.getComponent("durability").damage;
    const durability = item.getComponent("durability").maxDurability;
    const inv = player.getComponent("inventory").container;

    if (damage == durability) {
      inv.setItem(player.selectedSlot, null);
    } else {
      item.getComponent("durability").damage += 1;
      inv.setItem(player.selectedSlot, item);
    }
  }
}); //Diamond axe, Stone handle
