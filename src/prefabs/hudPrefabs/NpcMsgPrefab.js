
// You can write more code here

/* START OF COMPILED CODE */

class NpcMsgPrefab extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? -0.6837310997207666, y ?? -0.18995226416497957);

		// alertContainer
		/** @type {Phaser.GameObjects.Container & { body: Phaser.Physics.Arcade.Body }} */
		const alertContainer = scene.add.container(1.1236683065129753, 0.6298900777532097);
		scene.physics.add.existing(alertContainer, false);
		alertContainer.body.moves = false;
		alertContainer.body.allowGravity = false;
		alertContainer.body.pushable = false;
		this.add(alertContainer);

		// bg
		const bg = scene.add.rectangle(222, 61, 213, 128);
		bg.scaleX = 2.0245452627539473;
		bg.scaleY = 0.8430356063794083;
		bg.isFilled = true;
		bg.fillColor = 8683143;
		alertContainer.add(bg);

		// leftTop
		const leftTop = scene.add.image(31.560062772588587, 31.560062772588587, "AlertTileset", 0);
		alertContainer.add(leftTop);

		// topMiddle
		const topMiddle = scene.add.image(223.56006658728586, 31.560062772588587, "AlertTileset", 1);
		topMiddle.scaleX = 5;
		alertContainer.add(topMiddle);

		// rightTop
		const rightTop = scene.add.image(414.56006658728586, 31.560062772588587, "AlertTileset", 2);
		alertContainer.add(rightTop);

		// leftBottom
		const leftBottom = scene.add.image(31.560062772588587, 94.5600627725886, "AlertTileset", 8);
		alertContainer.add(leftBottom);

		// bottomMiddle
		const bottomMiddle = scene.add.image(223.56006658728586, 94.5600627725886, "AlertTileset", 9);
		bottomMiddle.scaleX = 5;
		alertContainer.add(bottomMiddle);

		// rightBottom
		const rightBottom = scene.add.image(414.56006658728586, 93.5600627725886, "AlertTileset", 10);
		alertContainer.add(rightBottom);

		// alertMessage
		const alertMessage = scene.add.bitmapText(222.5, 55.5, "Little Malio 8 Bit", "New text");
		alertMessage.setOrigin(0.5, 0.5);
		alertMessage.tintFill = true;
		alertMessage.text = "New text";
		alertMessage.fontSize = 8;
		alertMessage.align = 1;
		alertMessage.letterSpacing = 6;
		alertMessage.maxWidth = 250;
		alertContainer.add(alertMessage);

		// this (components)
		const thisNpcMessageComponent = new NpcMessageComponent(this);
		thisNpcMessageComponent.msgContainer = alertContainer;

		this.alertMessage = alertMessage;
		this.alertContainer = alertContainer;

		/* START-USER-CTR-CODE */
		// Write your code here.

		this.alertContainer.visible = false;
		this.alertContainer.alpha = 0;

		// this.setInteractive(new Phaser.Geom.Rectangle(0, 0, this.getBounds().width, this.getBounds().height), Phaser.Geom.Rectangle.Contains);
		// this.on("pointerdown",() => {
		// 	alert("pressed")
		// })

		this.alertContainer.setInteractive({
			hitArea: new Phaser.Geom.Rectangle(0, 0, this.getBounds().width, this.getBounds().height),
			hitAreaCallback: Phaser.Geom.Rectangle.Contains,
			useHandCursor: true,
		});


		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.BitmapText} */
	alertMessage;
	/** @type {Phaser.GameObjects.Container & { body: Phaser.Physics.Arcade.Body }} */
	alertContainer;

	/* START-USER-CODE */

	showNpcMsg(){
		this.alertContainer.visible = true;
		this.scene.tweens.add({ targets: this.alertContainer, alpha: 1, duration: 500, ease: 'Linear' });
	}

	hideNpcMsg(){
		this.alertContainer.visible = false;
		this.alertContainer.alpha = 0;
	}

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
