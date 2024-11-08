
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class LevelHudComponent extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__LevelHudComponent"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.container = gameObject;
		this.numberOneKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);
		this.numberTwoKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO);
		this.numberThreeKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.THREE);
		this.numberFourKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FOUR);
		/* END-USER-CTR-CODE */
	}

	/** @returns {LevelHudComponent} */
	static getComponent(gameObject) {
		return gameObject["__LevelHudComponent"];
	}

	/** @type {Phaser.GameObjects.Container} */
	gameObject;
	/** @type {Phaser.GameObjects.GameObject} */
	player;

	/* START-USER-CODE */

	// Write your code here.
	awake(){
		this.container.itemSlotBox1.setTexture("HudItemSlot", 1)
		this.container.item1.visible = false;
		this.container.item2.visible = false;
		this.container.item3.visible = false;
		this.container.item4.visible = false;

		this.container.itemCounter1.text = 0;
		this.container.itemCounter2.text = 0;
		this.container.itemCounter3.text = 0;
		this.container.itemCounter4.text = 0;

		this.container.itemCounter1.visible = false;
		this.container.itemCounter2.visible = false;
		this.container.itemCounter3.visible = false;
		this.container.itemCounter4.visible = false;

		this.itemSlots = [this.container.itemSlotBox1,this.container.itemSlotBox2,this.container.itemSlotBox3,this.container.itemSlotBox4]
		this.itemSlots.map((slot) => slot.setInteractive({ useHandCursor : true }))

		this.setUpSlotMouseBinding()

		this.scene.cameras.main.on('followupdate', this.updateItemHudPosition, this);
	}

	update(){ }


	setUpSlotMouseBinding(){
		this.container.itemSlotBox1.on("pointerdown",() => {
			if(this.container.itemSlotBox1.frame.name == 0) {
				this.activateSlot(this.container.itemSlotBox1)
				this.player.currentItem = this.player.items[0]
				this.player.currentItemIndex = 0;
			}
		})

		this.container.itemSlotBox2.on("pointerdown",() => {
			if(this.container.itemSlotBox2.frame.name == 0){
				this.activateSlot(this.container.itemSlotBox2)
				this.player.currentItem = this.player.items[1]
				this.player.currentItemIndex = 1;
			}
		})

		this.container.itemSlotBox3.on("pointerdown",() => {
			if(this.container.itemSlotBox3.frame.name == 0){
				this.activateSlot(this.container.itemSlotBox3)
				this.player.currentItem = this.player.items[2]
				this.player.currentItemIndex = 2;
			}
		})

		this.container.itemSlotBox4.on("pointerdown",() => {
			if(this.container.itemSlotBox4.frame.name == 0){
				this.activateSlot(this.container.itemSlotBox4)
				this.player.currentItem = this.player.items[3]
				this.player.currentItemIndex = 3;
			}
		})
	}

	activateSlot(activeSlot){
		// console.log(this.item1.texture.key)
		// console.log(this.item2.frame.name)
		activeSlot.setTexture("HudItemSlot", 1)
		this.itemSlots.filter((slot) => slot != activeSlot).map((slot) => slot.setTexture("HudItemSlot", 0))
	}

	updateItemHudPosition(){
		const cam = this.scene.cameras.main;

		const itemHudContainerPadding = 10;
		let containerWidth = Math.floor(this.container.getBounds().width)
		let containerHeight = Math.floor(this.container.getBounds().height)

		this.container.x = cam.worldView.right - containerWidth - itemHudContainerPadding
		this.container.y = cam.worldView.bottom - containerHeight - itemHudContainerPadding	
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
