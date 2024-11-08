
// You can write more code here

/* START OF COMPILED CODE */

class InventoryPrefab extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 124.04125698314189, y ?? 114.26145439260618);

		this.scaleX = 1.036914516890823;
		this.scaleY = 1.036914516890823;

		// mainContainer
		const mainContainer = scene.add.container(23.668842028905804, 12.972739665512044);
		this.add(mainContainer);

		// hudBackgrounds
		const hudBackgrounds = scene.add.image(315.9772834777832, 141.68901824951172, "HudBackgrounds");
		hudBackgrounds.scaleX = 0.35385381715494524;
		hudBackgrounds.scaleY = 0.26954429370933575;
		mainContainer.add(hudBackgrounds);

		// innerInventoryContainer
		const innerInventoryContainer = scene.add.container(0, 16.049514770507812);
		mainContainer.add(innerInventoryContainer);

		// hudInventoryBackground
		const hudInventoryBackground = scene.add.image(313.7776131306897, 125.08558024345146, "HudInventoryBackground");
		hudInventoryBackground.scaleX = 0.3268412820198059;
		hudInventoryBackground.scaleY = 0.22974897000922537;
		innerInventoryContainer.add(hudInventoryBackground);

		// itemSlotsContainer
		const itemSlotsContainer = scene.add.container(15.483273989897505, 40.56859154616923);
		innerInventoryContainer.add(itemSlotsContainer);

		// hudSlot
		const hudSlot = scene.add.container(259, 12);
		itemSlotsContainer.add(hudSlot);

		// hudInventoryBox
		const hudInventoryBox = scene.add.image(1, 0, "HudInventoryBox");
		hudInventoryBox.scaleX = 0.5;
		hudInventoryBox.scaleY = 0.5;
		hudSlot.add(hudInventoryBox);

		// hudSlotItem
		const hudSlotItem = scene.add.sprite(0, 2, "_MISSING");
		hudSlot.add(hudSlotItem);

		// hudSlot_1
		const hudSlot_1 = scene.add.container(332, 85);
		itemSlotsContainer.add(hudSlot_1);

		// hudInventoryBox_1
		const hudInventoryBox_1 = scene.add.image(1, 0, "HudInventoryBox");
		hudInventoryBox_1.scaleX = 0.5;
		hudInventoryBox_1.scaleY = 0.5;
		hudSlot_1.add(hudInventoryBox_1);

		// hudSlotItem_1
		const hudSlotItem_1 = scene.add.sprite(0, 2, "_MISSING");
		hudSlot_1.add(hudSlotItem_1);

		// hudSlot_2
		const hudSlot_2 = scene.add.container(551, 85);
		itemSlotsContainer.add(hudSlot_2);

		// hudInventoryBox_2
		const hudInventoryBox_2 = scene.add.image(1, 0, "HudInventoryBox");
		hudInventoryBox_2.scaleX = 0.5;
		hudInventoryBox_2.scaleY = 0.5;
		hudSlot_2.add(hudInventoryBox_2);

		// hudSlotItem_2
		const hudSlotItem_2 = scene.add.sprite(0, 2, "_MISSING");
		hudSlot_2.add(hudSlotItem_2);

		// hudSlot_3
		const hudSlot_3 = scene.add.container(40, 158);
		itemSlotsContainer.add(hudSlot_3);

		// hudInventoryBox_3
		const hudInventoryBox_3 = scene.add.image(1, 0, "HudInventoryBox");
		hudInventoryBox_3.scaleX = 0.5;
		hudInventoryBox_3.scaleY = 0.5;
		hudSlot_3.add(hudInventoryBox_3);

		// hudSlotItem_3
		const hudSlotItem_3 = scene.add.sprite(0, 2, "_MISSING");
		hudSlot_3.add(hudSlotItem_3);

		// hudSlot_4
		const hudSlot_4 = scene.add.container(186, 85);
		itemSlotsContainer.add(hudSlot_4);

		// hudInventoryBox_4
		const hudInventoryBox_4 = scene.add.image(1, 0, "HudInventoryBox");
		hudInventoryBox_4.scaleX = 0.5;
		hudInventoryBox_4.scaleY = 0.5;
		hudSlot_4.add(hudInventoryBox_4);

		// hudSlotItem_4
		const hudSlotItem_4 = scene.add.sprite(0, 2, "_MISSING");
		hudSlot_4.add(hudSlotItem_4);

		// hudSlot_5
		const hudSlot_5 = scene.add.container(186, 158);
		itemSlotsContainer.add(hudSlot_5);

		// hudInventoryBox_5
		const hudInventoryBox_5 = scene.add.image(1, 0, "HudInventoryBox");
		hudInventoryBox_5.scaleX = 0.5;
		hudInventoryBox_5.scaleY = 0.5;
		hudSlot_5.add(hudInventoryBox_5);

		// hudSlotItem_5
		const hudSlotItem_5 = scene.add.sprite(0, 2, "_MISSING");
		hudSlot_5.add(hudSlotItem_5);

		// hudSlot_6
		const hudSlot_6 = scene.add.container(113, 158);
		itemSlotsContainer.add(hudSlot_6);

		// hudInventoryBox_6
		const hudInventoryBox_6 = scene.add.image(1, 0, "HudInventoryBox");
		hudInventoryBox_6.scaleX = 0.5;
		hudInventoryBox_6.scaleY = 0.5;
		hudSlot_6.add(hudInventoryBox_6);

		// hudSlotItem_6
		const hudSlotItem_6 = scene.add.sprite(0, 2, "_MISSING");
		hudSlot_6.add(hudSlotItem_6);

		// hudSlot_7
		const hudSlot_7 = scene.add.container(405, 12);
		itemSlotsContainer.add(hudSlot_7);

		// hudInventoryBox_7
		const hudInventoryBox_7 = scene.add.image(1, 0, "HudInventoryBox");
		hudInventoryBox_7.scaleX = 0.5;
		hudInventoryBox_7.scaleY = 0.5;
		hudSlot_7.add(hudInventoryBox_7);

		// hudSlotItem_7
		const hudSlotItem_7 = scene.add.sprite(0, 2, "_MISSING");
		hudSlot_7.add(hudSlotItem_7);

		// hudSlot_8
		const hudSlot_8 = scene.add.container(259, 158);
		itemSlotsContainer.add(hudSlot_8);

		// hudInventoryBox_8
		const hudInventoryBox_8 = scene.add.image(1, 0, "HudInventoryBox");
		hudInventoryBox_8.scaleX = 0.5;
		hudInventoryBox_8.scaleY = 0.5;
		hudSlot_8.add(hudInventoryBox_8);

		// hudSlotItem_8
		const hudSlotItem_8 = scene.add.sprite(0, 2, "_MISSING");
		hudSlot_8.add(hudSlotItem_8);

		// hudSlot_9
		const hudSlot_9 = scene.add.container(113, 12);
		itemSlotsContainer.add(hudSlot_9);

		// hudInventoryBox_9
		const hudInventoryBox_9 = scene.add.image(1, 0, "HudInventoryBox");
		hudInventoryBox_9.scaleX = 0.5;
		hudInventoryBox_9.scaleY = 0.5;
		hudSlot_9.add(hudInventoryBox_9);

		// hudSlotItem_9
		const hudSlotItem_9 = scene.add.sprite(0, 2, "_MISSING");
		hudSlot_9.add(hudSlotItem_9);

		// hudSlot_10
		const hudSlot_10 = scene.add.container(186, 12);
		itemSlotsContainer.add(hudSlot_10);

		// hudInventoryBox_10
		const hudInventoryBox_10 = scene.add.image(1, 0, "HudInventoryBox");
		hudInventoryBox_10.scaleX = 0.5;
		hudInventoryBox_10.scaleY = 0.5;
		hudSlot_10.add(hudInventoryBox_10);

		// hudSlotItem_10
		const hudSlotItem_10 = scene.add.sprite(0, 2, "_MISSING");
		hudSlot_10.add(hudSlotItem_10);

		// hudSlot_11
		const hudSlot_11 = scene.add.container(405, 158);
		itemSlotsContainer.add(hudSlot_11);

		// hudInventoryBox_11
		const hudInventoryBox_11 = scene.add.image(1, 0, "HudInventoryBox");
		hudInventoryBox_11.scaleX = 0.5;
		hudInventoryBox_11.scaleY = 0.5;
		hudSlot_11.add(hudInventoryBox_11);

		// hudSlotItem_11
		const hudSlotItem_11 = scene.add.sprite(0, 2, "_MISSING");
		hudSlot_11.add(hudSlotItem_11);

		// hudSlot_12
		const hudSlot_12 = scene.add.container(405, 85);
		itemSlotsContainer.add(hudSlot_12);

		// hudInventoryBox_12
		const hudInventoryBox_12 = scene.add.image(1, 0, "HudInventoryBox");
		hudInventoryBox_12.scaleX = 0.5;
		hudInventoryBox_12.scaleY = 0.5;
		hudSlot_12.add(hudInventoryBox_12);

		// hudSlotItem_12
		const hudSlotItem_12 = scene.add.sprite(0, 2, "_MISSING");
		hudSlot_12.add(hudSlotItem_12);

		// hudSlot_13
		const hudSlot_13 = scene.add.container(551, 158);
		itemSlotsContainer.add(hudSlot_13);

		// hudInventoryBox_13
		const hudInventoryBox_13 = scene.add.image(1, 0, "HudInventoryBox");
		hudInventoryBox_13.scaleX = 0.5;
		hudInventoryBox_13.scaleY = 0.5;
		hudSlot_13.add(hudInventoryBox_13);

		// hudSlotItem_13
		const hudSlotItem_13 = scene.add.sprite(0, 2, "_MISSING");
		hudSlot_13.add(hudSlotItem_13);

		// hudSlot_14
		const hudSlot_14 = scene.add.container(478, 85);
		itemSlotsContainer.add(hudSlot_14);

		// hudInventoryBox_14
		const hudInventoryBox_14 = scene.add.image(1, 0, "HudInventoryBox");
		hudInventoryBox_14.scaleX = 0.5;
		hudInventoryBox_14.scaleY = 0.5;
		hudSlot_14.add(hudInventoryBox_14);

		// hudSlotItem_14
		const hudSlotItem_14 = scene.add.sprite(0, 2, "_MISSING");
		hudSlot_14.add(hudSlotItem_14);

		// hudSlot_15
		const hudSlot_15 = scene.add.container(40, 12);
		itemSlotsContainer.add(hudSlot_15);

		// hudInventoryBox_15
		const hudInventoryBox_15 = scene.add.image(1, 0, "HudInventoryBox");
		hudInventoryBox_15.scaleX = 0.5;
		hudInventoryBox_15.scaleY = 0.5;
		hudSlot_15.add(hudInventoryBox_15);

		// hudSlotItem_15
		const hudSlotItem_15 = scene.add.sprite(0, 2, "_MISSING");
		hudSlot_15.add(hudSlotItem_15);

		// hudSlot_16
		const hudSlot_16 = scene.add.container(40, 85);
		itemSlotsContainer.add(hudSlot_16);

		// hudInventoryBox_16
		const hudInventoryBox_16 = scene.add.image(1, 0, "HudInventoryBox");
		hudInventoryBox_16.scaleX = 0.5;
		hudInventoryBox_16.scaleY = 0.5;
		hudSlot_16.add(hudInventoryBox_16);

		// hudSlotItem_16
		const hudSlotItem_16 = scene.add.sprite(0, 2, "_MISSING");
		hudSlot_16.add(hudSlotItem_16);

		// hudSlot_17
		const hudSlot_17 = scene.add.container(332, 158);
		itemSlotsContainer.add(hudSlot_17);

		// hudInventoryBox_17
		const hudInventoryBox_17 = scene.add.image(1, 0, "HudInventoryBox");
		hudInventoryBox_17.scaleX = 0.5;
		hudInventoryBox_17.scaleY = 0.5;
		hudSlot_17.add(hudInventoryBox_17);

		// hudSlotItem_17
		const hudSlotItem_17 = scene.add.sprite(0, 2, "_MISSING");
		hudSlot_17.add(hudSlotItem_17);

		// hudSlot_18
		const hudSlot_18 = scene.add.container(551, 12);
		itemSlotsContainer.add(hudSlot_18);

		// hudInventoryBox_18
		const hudInventoryBox_18 = scene.add.image(1, 0, "HudInventoryBox");
		hudInventoryBox_18.scaleX = 0.5;
		hudInventoryBox_18.scaleY = 0.5;
		hudSlot_18.add(hudInventoryBox_18);

		// hudSlotItem_18
		const hudSlotItem_18 = scene.add.sprite(0, 2, "_MISSING");
		hudSlot_18.add(hudSlotItem_18);

		// hudSlot_19
		const hudSlot_19 = scene.add.container(113, 85);
		itemSlotsContainer.add(hudSlot_19);

		// hudInventoryBox_19
		const hudInventoryBox_19 = scene.add.image(1, 0, "HudInventoryBox");
		hudInventoryBox_19.scaleX = 0.5;
		hudInventoryBox_19.scaleY = 0.5;
		hudSlot_19.add(hudInventoryBox_19);

		// hudSlotItem_19
		const hudSlotItem_19 = scene.add.sprite(0, 2, "_MISSING");
		hudSlot_19.add(hudSlotItem_19);

		// hudSlot_20
		const hudSlot_20 = scene.add.container(478, 12);
		itemSlotsContainer.add(hudSlot_20);

		// hudInventoryBox_20
		const hudInventoryBox_20 = scene.add.image(1, 0, "HudInventoryBox");
		hudInventoryBox_20.scaleX = 0.5;
		hudInventoryBox_20.scaleY = 0.5;
		hudSlot_20.add(hudInventoryBox_20);

		// hudSlotItem_20
		const hudSlotItem_20 = scene.add.sprite(0, 2, "_MISSING");
		hudSlot_20.add(hudSlotItem_20);

		// hudSlot_21
		const hudSlot_21 = scene.add.container(332, 12);
		itemSlotsContainer.add(hudSlot_21);

		// hudInventoryBox_21
		const hudInventoryBox_21 = scene.add.image(1, 0, "HudInventoryBox");
		hudInventoryBox_21.scaleX = 0.5;
		hudInventoryBox_21.scaleY = 0.5;
		hudSlot_21.add(hudInventoryBox_21);

		// hudSlotItem_21
		const hudSlotItem_21 = scene.add.sprite(0, 2, "_MISSING");
		hudSlot_21.add(hudSlotItem_21);

		// hudSlot_22
		const hudSlot_22 = scene.add.container(478, 158);
		itemSlotsContainer.add(hudSlot_22);

		// hudInventoryBox_22
		const hudInventoryBox_22 = scene.add.image(1, 0, "HudInventoryBox");
		hudInventoryBox_22.scaleX = 0.5;
		hudInventoryBox_22.scaleY = 0.5;
		hudSlot_22.add(hudInventoryBox_22);

		// hudSlotItem_22
		const hudSlotItem_22 = scene.add.sprite(0, 2, "_MISSING");
		hudSlot_22.add(hudSlotItem_22);

		// hudSlot_23
		const hudSlot_23 = scene.add.container(259, 85);
		itemSlotsContainer.add(hudSlot_23);

		// hudInventoryBox_23
		const hudInventoryBox_23 = scene.add.image(1, 0, "HudInventoryBox");
		hudInventoryBox_23.scaleX = 0.5;
		hudInventoryBox_23.scaleY = 0.5;
		hudSlot_23.add(hudInventoryBox_23);

		// hudSlotItem_23
		const hudSlotItem_23 = scene.add.sprite(0, 2, "_MISSING");
		hudSlot_23.add(hudSlotItem_23);

		// exitButtonSprite
		const exitButtonSprite = scene.add.sprite(650.1577033996582, 0, "HudExitButtons", 0);
		exitButtonSprite.scaleX = 0.8;
		exitButtonSprite.scaleY = 0.8;
		mainContainer.add(exitButtonSprite);

		// lists
		const itemSlots = [hudInventoryBox_15, hudInventoryBox_9, hudInventoryBox_10, hudInventoryBox, hudInventoryBox_21, hudInventoryBox_7, hudInventoryBox_20, hudInventoryBox_18, hudInventoryBox_16, hudInventoryBox_19, hudInventoryBox_4, hudInventoryBox_23, hudInventoryBox_1, hudInventoryBox_12, hudInventoryBox_14, hudInventoryBox_2, hudInventoryBox_3, hudInventoryBox_6, hudInventoryBox_5, hudInventoryBox_8, hudInventoryBox_17, hudInventoryBox_11, hudInventoryBox_22, hudInventoryBox_13];
		const itemSlotSprites = [hudSlotItem_15, hudSlotItem_9, hudSlotItem_10, hudSlotItem, hudSlotItem_21, hudSlotItem_7, hudSlotItem_20, hudSlotItem_18, hudSlotItem_16, hudSlotItem_19, hudSlotItem_4, hudSlotItem_23, hudSlotItem_1, hudSlotItem_12, hudSlotItem_14, hudSlotItem_2, hudSlotItem_3, hudSlotItem_6, hudSlotItem_5, hudSlotItem_8, hudSlotItem_17, hudSlotItem_11, hudSlotItem_22, hudSlotItem_13];

		this.hudInventoryBox = hudInventoryBox;
		this.hudSlotItem = hudSlotItem;
		this.hudSlot = hudSlot;
		this.hudInventoryBox_1 = hudInventoryBox_1;
		this.hudSlotItem_1 = hudSlotItem_1;
		this.hudSlot_1 = hudSlot_1;
		this.hudInventoryBox_2 = hudInventoryBox_2;
		this.hudSlotItem_2 = hudSlotItem_2;
		this.hudSlot_2 = hudSlot_2;
		this.hudInventoryBox_3 = hudInventoryBox_3;
		this.hudSlotItem_3 = hudSlotItem_3;
		this.hudSlot_3 = hudSlot_3;
		this.hudInventoryBox_4 = hudInventoryBox_4;
		this.hudSlotItem_4 = hudSlotItem_4;
		this.hudSlot_4 = hudSlot_4;
		this.hudInventoryBox_5 = hudInventoryBox_5;
		this.hudSlotItem_5 = hudSlotItem_5;
		this.hudSlot_5 = hudSlot_5;
		this.hudInventoryBox_6 = hudInventoryBox_6;
		this.hudSlotItem_6 = hudSlotItem_6;
		this.hudSlot_6 = hudSlot_6;
		this.hudInventoryBox_7 = hudInventoryBox_7;
		this.hudSlotItem_7 = hudSlotItem_7;
		this.hudSlot_7 = hudSlot_7;
		this.hudInventoryBox_8 = hudInventoryBox_8;
		this.hudSlotItem_8 = hudSlotItem_8;
		this.hudSlot_8 = hudSlot_8;
		this.hudInventoryBox_9 = hudInventoryBox_9;
		this.hudSlotItem_9 = hudSlotItem_9;
		this.hudSlot_9 = hudSlot_9;
		this.hudInventoryBox_10 = hudInventoryBox_10;
		this.hudSlotItem_10 = hudSlotItem_10;
		this.hudSlot_10 = hudSlot_10;
		this.hudInventoryBox_11 = hudInventoryBox_11;
		this.hudSlotItem_11 = hudSlotItem_11;
		this.hudSlot_11 = hudSlot_11;
		this.hudInventoryBox_12 = hudInventoryBox_12;
		this.hudSlotItem_12 = hudSlotItem_12;
		this.hudSlot_12 = hudSlot_12;
		this.hudInventoryBox_13 = hudInventoryBox_13;
		this.hudSlotItem_13 = hudSlotItem_13;
		this.hudSlot_13 = hudSlot_13;
		this.hudInventoryBox_14 = hudInventoryBox_14;
		this.hudSlotItem_14 = hudSlotItem_14;
		this.hudSlot_14 = hudSlot_14;
		this.hudInventoryBox_15 = hudInventoryBox_15;
		this.hudSlotItem_15 = hudSlotItem_15;
		this.hudSlot_15 = hudSlot_15;
		this.hudInventoryBox_16 = hudInventoryBox_16;
		this.hudSlotItem_16 = hudSlotItem_16;
		this.hudSlot_16 = hudSlot_16;
		this.hudInventoryBox_17 = hudInventoryBox_17;
		this.hudSlotItem_17 = hudSlotItem_17;
		this.hudSlot_17 = hudSlot_17;
		this.hudInventoryBox_18 = hudInventoryBox_18;
		this.hudSlotItem_18 = hudSlotItem_18;
		this.hudSlot_18 = hudSlot_18;
		this.hudInventoryBox_19 = hudInventoryBox_19;
		this.hudSlotItem_19 = hudSlotItem_19;
		this.hudSlot_19 = hudSlot_19;
		this.hudInventoryBox_20 = hudInventoryBox_20;
		this.hudSlotItem_20 = hudSlotItem_20;
		this.hudSlot_20 = hudSlot_20;
		this.hudInventoryBox_21 = hudInventoryBox_21;
		this.hudSlotItem_21 = hudSlotItem_21;
		this.hudSlot_21 = hudSlot_21;
		this.hudInventoryBox_22 = hudInventoryBox_22;
		this.hudSlotItem_22 = hudSlotItem_22;
		this.hudSlot_22 = hudSlot_22;
		this.hudInventoryBox_23 = hudInventoryBox_23;
		this.hudSlotItem_23 = hudSlotItem_23;
		this.hudSlot_23 = hudSlot_23;
		this.itemSlotsContainer = itemSlotsContainer;
		this.exitButtonSprite = exitButtonSprite;
		this.mainContainer = mainContainer;
		this.itemSlots = itemSlots;
		this.itemSlotSprites = itemSlotSprites;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.setVisible(false)
		this.setAlpha(0)
		// this.setScale(1.3,1.3)

		this.scene.events.on('update', this.onSceneUpdate, this);

        this.exitButtonSprite.setInteractive({ useHandCursor: true });
		this.exitButtonSprite.on("pointerdown",this.hideInventory,this)

		this.itemSlots.forEach((itemSlot,index) => {
			this.itemSlotSprites[index].setVisible(false)
			this.itemSlotSprites[index].setInteractive({ draggable: true,useHandCursor: true })

			itemSlot.setInteractive({ useHandCursor: true });
			itemSlot.on("pointerdown",() => { this.itemSlotPressed(index) })
		})

		this.scene.input.on('dragstart', (pointer, obj) =>
        {
            // obj.body.moves = false;
        });

        this.scene.input.on('drag', (pointer, obj, dragX, dragY) =>
        {
            obj.setPosition(dragX, dragY);
        });

        this.scene.input.on('dragend', (pointer, obj) =>
        {
            // obj.body.moves = true;
        });
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	hudInventoryBox;
	/** @type {Phaser.GameObjects.Sprite} */
	hudSlotItem;
	/** @type {Phaser.GameObjects.Container} */
	hudSlot;
	/** @type {Phaser.GameObjects.Image} */
	hudInventoryBox_1;
	/** @type {Phaser.GameObjects.Sprite} */
	hudSlotItem_1;
	/** @type {Phaser.GameObjects.Container} */
	hudSlot_1;
	/** @type {Phaser.GameObjects.Image} */
	hudInventoryBox_2;
	/** @type {Phaser.GameObjects.Sprite} */
	hudSlotItem_2;
	/** @type {Phaser.GameObjects.Container} */
	hudSlot_2;
	/** @type {Phaser.GameObjects.Image} */
	hudInventoryBox_3;
	/** @type {Phaser.GameObjects.Sprite} */
	hudSlotItem_3;
	/** @type {Phaser.GameObjects.Container} */
	hudSlot_3;
	/** @type {Phaser.GameObjects.Image} */
	hudInventoryBox_4;
	/** @type {Phaser.GameObjects.Sprite} */
	hudSlotItem_4;
	/** @type {Phaser.GameObjects.Container} */
	hudSlot_4;
	/** @type {Phaser.GameObjects.Image} */
	hudInventoryBox_5;
	/** @type {Phaser.GameObjects.Sprite} */
	hudSlotItem_5;
	/** @type {Phaser.GameObjects.Container} */
	hudSlot_5;
	/** @type {Phaser.GameObjects.Image} */
	hudInventoryBox_6;
	/** @type {Phaser.GameObjects.Sprite} */
	hudSlotItem_6;
	/** @type {Phaser.GameObjects.Container} */
	hudSlot_6;
	/** @type {Phaser.GameObjects.Image} */
	hudInventoryBox_7;
	/** @type {Phaser.GameObjects.Sprite} */
	hudSlotItem_7;
	/** @type {Phaser.GameObjects.Container} */
	hudSlot_7;
	/** @type {Phaser.GameObjects.Image} */
	hudInventoryBox_8;
	/** @type {Phaser.GameObjects.Sprite} */
	hudSlotItem_8;
	/** @type {Phaser.GameObjects.Container} */
	hudSlot_8;
	/** @type {Phaser.GameObjects.Image} */
	hudInventoryBox_9;
	/** @type {Phaser.GameObjects.Sprite} */
	hudSlotItem_9;
	/** @type {Phaser.GameObjects.Container} */
	hudSlot_9;
	/** @type {Phaser.GameObjects.Image} */
	hudInventoryBox_10;
	/** @type {Phaser.GameObjects.Sprite} */
	hudSlotItem_10;
	/** @type {Phaser.GameObjects.Container} */
	hudSlot_10;
	/** @type {Phaser.GameObjects.Image} */
	hudInventoryBox_11;
	/** @type {Phaser.GameObjects.Sprite} */
	hudSlotItem_11;
	/** @type {Phaser.GameObjects.Container} */
	hudSlot_11;
	/** @type {Phaser.GameObjects.Image} */
	hudInventoryBox_12;
	/** @type {Phaser.GameObjects.Sprite} */
	hudSlotItem_12;
	/** @type {Phaser.GameObjects.Container} */
	hudSlot_12;
	/** @type {Phaser.GameObjects.Image} */
	hudInventoryBox_13;
	/** @type {Phaser.GameObjects.Sprite} */
	hudSlotItem_13;
	/** @type {Phaser.GameObjects.Container} */
	hudSlot_13;
	/** @type {Phaser.GameObjects.Image} */
	hudInventoryBox_14;
	/** @type {Phaser.GameObjects.Sprite} */
	hudSlotItem_14;
	/** @type {Phaser.GameObjects.Container} */
	hudSlot_14;
	/** @type {Phaser.GameObjects.Image} */
	hudInventoryBox_15;
	/** @type {Phaser.GameObjects.Sprite} */
	hudSlotItem_15;
	/** @type {Phaser.GameObjects.Container} */
	hudSlot_15;
	/** @type {Phaser.GameObjects.Image} */
	hudInventoryBox_16;
	/** @type {Phaser.GameObjects.Sprite} */
	hudSlotItem_16;
	/** @type {Phaser.GameObjects.Container} */
	hudSlot_16;
	/** @type {Phaser.GameObjects.Image} */
	hudInventoryBox_17;
	/** @type {Phaser.GameObjects.Sprite} */
	hudSlotItem_17;
	/** @type {Phaser.GameObjects.Container} */
	hudSlot_17;
	/** @type {Phaser.GameObjects.Image} */
	hudInventoryBox_18;
	/** @type {Phaser.GameObjects.Sprite} */
	hudSlotItem_18;
	/** @type {Phaser.GameObjects.Container} */
	hudSlot_18;
	/** @type {Phaser.GameObjects.Image} */
	hudInventoryBox_19;
	/** @type {Phaser.GameObjects.Sprite} */
	hudSlotItem_19;
	/** @type {Phaser.GameObjects.Container} */
	hudSlot_19;
	/** @type {Phaser.GameObjects.Image} */
	hudInventoryBox_20;
	/** @type {Phaser.GameObjects.Sprite} */
	hudSlotItem_20;
	/** @type {Phaser.GameObjects.Container} */
	hudSlot_20;
	/** @type {Phaser.GameObjects.Image} */
	hudInventoryBox_21;
	/** @type {Phaser.GameObjects.Sprite} */
	hudSlotItem_21;
	/** @type {Phaser.GameObjects.Container} */
	hudSlot_21;
	/** @type {Phaser.GameObjects.Image} */
	hudInventoryBox_22;
	/** @type {Phaser.GameObjects.Sprite} */
	hudSlotItem_22;
	/** @type {Phaser.GameObjects.Container} */
	hudSlot_22;
	/** @type {Phaser.GameObjects.Image} */
	hudInventoryBox_23;
	/** @type {Phaser.GameObjects.Sprite} */
	hudSlotItem_23;
	/** @type {Phaser.GameObjects.Container} */
	hudSlot_23;
	/** @type {Phaser.GameObjects.Container} */
	itemSlotsContainer;
	/** @type {Phaser.GameObjects.Sprite} */
	exitButtonSprite;
	/** @type {Phaser.GameObjects.Container} */
	mainContainer;
	/** @type {Phaser.GameObjects.Image[]} */
	itemSlots;
	/** @type {Phaser.GameObjects.Sprite[]} */
	itemSlotSprites;

	/* START-USER-CODE */

	fadeDuration = 500

	// Write your code here.

	onSceneUpdate(){
		const cam = this.scene.cameras.main;

		let width = Math.floor(this.getBounds().width)
		let height = Math.floor(this.getBounds().height)

		let newX = cam.worldView.centerX - (width / 2)
		let newY = cam.worldView.centerY - (height / 2)

		this.setPosition(
			Phaser.Math.Linear(this.x, newX, 0.03),
			Phaser.Math.Linear(this.y, newY, 0.03),
		);
	}

	hideInventory(){
		this.scene.tweens.add({
			targets: this,
            alpha: { from: 1, to: 0 },
			duration: this.fadeDuration,
			ease: 'Linear', 
			onComplete: () => {
				this.setVisible(false)
			}
		});
	}

	showInventory(){
		this.setVisible(true)

		this.scene.tweens.add({
			targets: this,
            alpha: { from: 0, to: 1 },
			duration: this.fadeDuration,
			ease: 'Linear', 
			onComplete: () => {}
		});
	}

	itemSlotPressed(index) {
		this.itemSlotSprites[index].setTexture("FarmToolAnimation",0)
		this.itemSlotSprites[index].setVisible(true)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
