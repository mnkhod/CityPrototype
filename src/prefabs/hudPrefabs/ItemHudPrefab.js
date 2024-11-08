
// You can write more code here

/* START OF COMPILED CODE */

class ItemHudPrefab extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? -1);

		this.scaleX = 0.8;
		this.scaleY = 0.8;

		// backpack
		const backpack = scene.add.sprite(307.6, 42.5, "Backpack", 0);
		backpack.scaleX = 1.3;
		backpack.scaleY = 1.3;
		this.add(backpack);

		// itemBox1
		const itemBox1 = scene.add.container(33, 42.04399995727539);
		this.add(itemBox1);

		// itemSlotBox1
		const itemSlotBox1 = scene.add.sprite(1, 0, "HudItemSlot", 0);
		itemBox1.add(itemSlotBox1);

		// item1
		const item1 = scene.add.sprite(0, 0, "_MISSING");
		itemBox1.add(item1);

		// itemCounter1
		const itemCounter1 = scene.add.text(17.54401397705078, 12.664440155029297, "", {});
		itemCounter1.text = "0";
		itemCounter1.setStyle({ "fontSize": "10px" });
		itemBox1.add(itemCounter1);

		// itemBox2
		const itemBox2 = scene.add.container(100, 42.04399995727539);
		this.add(itemBox2);

		// itemSlotBox2
		const itemSlotBox2 = scene.add.sprite(0, 0, "HudItemSlot", 0);
		itemBox2.add(itemSlotBox2);

		// item2
		const item2 = scene.add.sprite(0, 0, "_MISSING");
		itemBox2.add(item2);

		// itemCounter2
		const itemCounter2 = scene.add.text(16.54401397705078, 12.664440155029297, "", {});
		itemCounter2.text = "0";
		itemCounter2.setStyle({ "fontSize": "10px" });
		itemBox2.add(itemCounter2);

		// itemBox3
		const itemBox3 = scene.add.container(166, 41.04399995727539);
		this.add(itemBox3);

		// itemSlotBox3
		const itemSlotBox3 = scene.add.sprite(0, 1, "HudItemSlot", 0);
		itemBox3.add(itemSlotBox3);

		// item3
		const item3 = scene.add.sprite(0, 0, "_MISSING");
		itemBox3.add(item3);

		// itemCounter3
		const itemCounter3 = scene.add.text(17.544021606445312, 13.664440155029297, "", {});
		itemCounter3.text = "0";
		itemCounter3.setStyle({ "fontSize": "10px" });
		itemBox3.add(itemCounter3);

		// itemBox4
		const itemBox4 = scene.add.container(232, 41.04399995727539);
		this.add(itemBox4);

		// itemSlotBox4
		const itemSlotBox4 = scene.add.sprite(0, 1, "HudItemSlot", 0);
		itemBox4.add(itemSlotBox4);

		// item4
		const item4 = scene.add.sprite(0, 0, "_MISSING");
		itemBox4.add(item4);

		// itemCounter4
		const itemCounter4 = scene.add.text(17, 14, "", {});
		itemCounter4.text = "0";
		itemCounter4.setStyle({ "fontSize": "10px" });
		itemBox4.add(itemCounter4);

		// this (components)
		new LevelHudComponent(this);

		this.backpack = backpack;
		this.itemSlotBox1 = itemSlotBox1;
		this.item1 = item1;
		this.itemCounter1 = itemCounter1;
		this.itemSlotBox2 = itemSlotBox2;
		this.item2 = item2;
		this.itemCounter2 = itemCounter2;
		this.itemSlotBox3 = itemSlotBox3;
		this.item3 = item3;
		this.itemCounter3 = itemCounter3;
		this.itemSlotBox4 = itemSlotBox4;
		this.item4 = item4;
		this.itemCounter4 = itemCounter4;

		/* START-USER-CTR-CODE */
		// Write your code here.

        this.backpack.setInteractive({ useHandCursor: true });
		this.backpack.on("pointerdown",() => {
			if(this.inventory.visible == true) return;

			this.inventory.showInventory()
		})
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Sprite} */
	backpack;
	/** @type {Phaser.GameObjects.Sprite} */
	itemSlotBox1;
	/** @type {Phaser.GameObjects.Sprite} */
	item1;
	/** @type {Phaser.GameObjects.Text} */
	itemCounter1;
	/** @type {Phaser.GameObjects.Sprite} */
	itemSlotBox2;
	/** @type {Phaser.GameObjects.Sprite} */
	item2;
	/** @type {Phaser.GameObjects.Text} */
	itemCounter2;
	/** @type {Phaser.GameObjects.Sprite} */
	itemSlotBox3;
	/** @type {Phaser.GameObjects.Sprite} */
	item3;
	/** @type {Phaser.GameObjects.Text} */
	itemCounter3;
	/** @type {Phaser.GameObjects.Sprite} */
	itemSlotBox4;
	/** @type {Phaser.GameObjects.Sprite} */
	item4;
	/** @type {Phaser.GameObjects.Text} */
	itemCounter4;
	/** @type {Phaser.GameObjects.GameObject} */
	inventory;

	/* START-USER-CODE */

	// Write your code here.


	setItem(player,itemNumber,quantity,textureKey,textureId,itemObj){
		if(itemNumber == 0) return;

		let index = itemNumber - 1
		let items = [this.item1,this.item2,this.item3,this.item4]
		let itemCounters = [this.itemCounter1,this.itemCounter2,this.itemCounter3,this.itemCounter4]

		let item = items[index]
		let itemCounter = itemCounters[index]

		item.visible = true;
		itemCounter.visible = true;

		item.setTexture(textureKey,textureId)
		itemCounter.text = quantity;

		player.items[index] = itemObj
	}

	useItem(itemNum){
		let itemCounters = [this.itemCounter1,this.itemCounter2,this.itemCounter3,this.itemCounter4]
		let itemCounter = itemCounters[itemNum - 1]
		let amount = parseInt(itemCounter.text)

		if(amount == 0) throw Error("Item Amount is Zero")

		itemCounter.text = amount - 1;
	}

	increaseItem(itemNum){
		let itemCounters = [this.itemCounter1,this.itemCounter2,this.itemCounter3,this.itemCounter4]
		let itemCounter = itemCounters[itemNum-1]
		let amount = parseInt(itemCounter.text)

		itemCounter.text = amount + 1;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
