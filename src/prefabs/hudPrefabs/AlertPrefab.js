
// You can write more code here

/* START OF COMPILED CODE */

class AlertPrefab extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// alertContainer
		/** @type {Phaser.GameObjects.Container & { body: Phaser.Physics.Arcade.StaticBody }} */
		const alertContainer = scene.add.container(0, 0);
		alertContainer.scaleX = 0.5;
		alertContainer.scaleY = 0.5;
		scene.physics.add.existing(alertContainer, true);
		alertContainer.body.setSize(64, 64, false);
		this.add(alertContainer);

		// bg
		const bg = scene.add.rectangle(158, 62, 213, 128);
		bg.scaleX = 1.3924142049119013;
		bg.scaleY = 0.8430356063794083;
		bg.isFilled = true;
		bg.fillColor = 8683143;
		alertContainer.add(bg);

		// leftTop
		const leftTop = scene.add.image(32.01482786162924, 32.01482786162924, "AlertTileset", 0);
		alertContainer.add(leftTop);

		// topMiddle
		const topMiddle = scene.add.image(160.0148316763265, 32.01482786162924, "AlertTileset", 1);
		topMiddle.scaleX = 3;
		alertContainer.add(topMiddle);

		// rightTop
		const rightTop = scene.add.image(287.01483167632654, 32.01482786162924, "AlertTileset", 2);
		alertContainer.add(rightTop);

		// leftBottom
		const leftBottom = scene.add.image(32.01482786162924, 95.01482786162924, "AlertTileset", 8);
		alertContainer.add(leftBottom);

		// bottomMiddle
		const bottomMiddle = scene.add.image(160.0148316763265, 95.01482786162924, "AlertTileset", 9);
		bottomMiddle.scaleX = 3;
		alertContainer.add(bottomMiddle);

		// rightBottom
		const rightBottom = scene.add.image(287.01483167632654, 95.01482786162924, "AlertTileset", 10);
		alertContainer.add(rightBottom);

		// alertMessage
		const alertMessage = scene.add.bitmapText(157, 64, "Little Malio 8 Bit", "Hello World Hello World Hello World");
		alertMessage.setOrigin(0.4871612540551944, 1.1746830339073746);
		alertMessage.tintFill = true;
		alertMessage.text = "Hello World Hello World Hello World";
		alertMessage.fontSize = 8;
		alertMessage.align = NaN;
		alertContainer.add(alertMessage);

		this.alertMessage = alertMessage;
		this.alertContainer = alertContainer;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.container = this;
		this.alertContainer.visible = false;
		// this.alertContainer.alpha = 0;

		this.scene.events.on('create', this.onSceneCreate, this);
		this.scene.events.on('update', this.onSceneUpdate, this);

		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.BitmapText} */
	alertMessage;
	/** @type {Phaser.GameObjects.Container & { body: Phaser.Physics.Arcade.StaticBody }} */
	alertContainer;

	/* START-USER-CODE */

	// Write your code here.

	onSceneCreate(){
	}

	onSceneUpdate(){
		// this.alertContainer.visible = true;
		const cam = this.scene.cameras.main;

		let alertContainerWidth = Math.floor(this.alertContainer.getBounds().width)
		// let alertContainerHeight = Math.floor(this.alertContainer.getBounds().height)

		let newX = cam.worldView.right - alertContainerWidth - 10
		let newY = cam.worldView.top + 10

		this.container.setPosition(
			Phaser.Math.Linear(this.container.x, newX, 0.03),
			Phaser.Math.Linear(this.container.y, newY, 0.03),
		);
	}

	showAlert(msg){
		this.alertMessage.text = msg;
		this.alertContainer.visible = true;
		this.alertContainer.alpha = 1;

		// if(this.alertFadeInTween || this.alertFadeOutTween){
		// 	this.alertFadeInTween.destroy();
		// 	this.alertFadeOutTween.destroy();
		// }

		this.alertFadeInTween = this.scene.tweens.add({ targets: this.alertContainer, alpha: 1, duration: 1000, ease: 'Linear', onComplete: () => {
			setTimeout(() => {
				this.alertFadeOutTween = this.scene.tweens.add({ targets: this.alertContainer, alpha: 0, duration: 1000, ease: 'Linear', onComplete: () => {
					this.alertContainer.visible = false;
				} });
			}, 2000);
		} });
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
