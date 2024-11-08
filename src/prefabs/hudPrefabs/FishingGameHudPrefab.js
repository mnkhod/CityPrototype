
// You can write more code here

/* START OF COMPILED CODE */

class FishingGameHudPrefab extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// captureHeightBox
		const captureHeightBox = scene.add.rectangle(72.00000461312914, 26.59999933833491, 128, 128);
		captureHeightBox.scaleX = 0.17824140122640697;
		captureHeightBox.scaleY = 1.6;
		captureHeightBox.setOrigin(0.5, 0);
		captureHeightBox.isFilled = true;
		this.add(captureHeightBox);

		// background
		const background = scene.add.image(64, 128, "FishingHudBackground");
		this.add(background);

		// fishCaptureContainer
		const fishCaptureContainer = scene.add.container(72, 50);
		this.add(fishCaptureContainer);

		// fishCaptureBodyBox
		/** @type {Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body }} */
		const fishCaptureBodyBox = scene.add.rectangle(0, 0, 128, 128);
		fishCaptureBodyBox.scaleX = 0.126;
		fishCaptureBodyBox.scaleY = 0.3;
		scene.physics.add.existing(fishCaptureBodyBox, false);
		fishCaptureBodyBox.body.allowGravity = false;
		fishCaptureBodyBox.body.setSize(128, 128, false);
		fishCaptureBodyBox.isFilled = true;
		fishCaptureBodyBox.fillColor = 15466496;
		fishCaptureContainer.add(fishCaptureBodyBox);

		// fishCaptureSectionBox
		const fishCaptureSectionBox = scene.add.rectangle(0, 0, 128, 128);
		fishCaptureSectionBox.scaleX = 0.126;
		fishCaptureSectionBox.scaleY = 0.12;
		fishCaptureSectionBox.isFilled = true;
		fishCaptureContainer.add(fishCaptureSectionBox);

		// fishHudProgressBar
		const fishHudProgressBar = scene.add.rectangle(102, 128, 128, 128);
		fishHudProgressBar.scaleX = 0.06401954832635304;
		fishHudProgressBar.scaleY = 1.6;
		fishHudProgressBar.angle = -180;
		fishHudProgressBar.isFilled = true;
		fishHudProgressBar.fillColor = 15781984;
		this.add(fishHudProgressBar);

		// fish
		/** @type {Phaser.GameObjects.Sprite & { body: Phaser.Physics.Arcade.Body }} */
		const fish = scene.add.sprite(72, 213, "FishItem", 0);
		fish.scaleX = 0.75;
		fish.scaleY = 0.75;
		scene.physics.add.existing(fish, false);
		fish.body.allowGravity = false;
		fish.body.pushable = false;
		fish.body.setSize(32, 32, false);
		this.add(fish);

		// fishingHudBody
		const fishingHudBody = scene.add.image(64, 128, "FishingHud");
		this.add(fishingHudBody);

		this.captureHeightBox = captureHeightBox;
		this.background = background;
		this.fishCaptureBodyBox = fishCaptureBodyBox;
		this.fishCaptureSectionBox = fishCaptureSectionBox;
		this.fishCaptureContainer = fishCaptureContainer;
		this.fishHudProgressBar = fishHudProgressBar;
		this.fish = fish;
		this.fishingHudBody = fishingHudBody;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.scene = scene;
		this.container = this;
		this.spaceKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

		scene.events.on('create', this.onSceneCreate, this);
		scene.events.on('update', this.onSceneUpdate, this);



		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	captureHeightBox;
	/** @type {Phaser.GameObjects.Image} */
	background;
	/** @type {Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body }} */
	fishCaptureBodyBox;
	/** @type {Phaser.GameObjects.Rectangle} */
	fishCaptureSectionBox;
	/** @type {Phaser.GameObjects.Container} */
	fishCaptureContainer;
	/** @type {Phaser.GameObjects.Rectangle} */
	fishHudProgressBar;
	/** @type {Phaser.GameObjects.Sprite & { body: Phaser.Physics.Arcade.Body }} */
	fish;
	/** @type {Phaser.GameObjects.Image} */
	fishingHudBody;
	/** @type {Phaser.GameObjects.GameObject} */
	player;
	/** @type {Phaser.GameObjects.GameObject} */
	alert;

	/* START-USER-CODE */

	progressMaxPercentage;
	isCapturingFish = false;
	wonFish = false;

	// Write your code here.
	onSceneCreate() {
		this.container.visible = false;
		this.progressMaxPercentage = this.fishHudProgressBar.height;
		
		this.scene.physics.add.overlap(this.fish, this.fishCaptureBodyBox,() => {
			this.isCapturingFish = true;
		});
	}

	play(successCallBack){
		this.container.visible = true;
		this.playing = true;

		this.fishHudProgressBar.height = 0;

		this.fishUpDownLogic();

		this.scene.tweens.add({
			targets: this.fishHudProgressBar,
			height: this.progressMaxPercentage, 
			duration: 3000,
			ease: 'Linear', 
			onComplete: () => {				
				this.playing = false;

				if(this.isCapturingFish){
					this.alert.showAlert("Won Fish")
				}else{
					this.alert.showAlert("Lost Fish")
				}

				successCallBack(this.isCapturingFish)
				this.container.visible = false;
			}
		});
	}

	onSceneUpdate() {		
		let width = Math.floor(this.container.getBounds().width)
		let height = Math.floor(this.container.getBounds().height)

		let newX = this.player.x - width - 20;
		let newY = this.player.y - (height / 2);

		this.container.setPosition(
			Phaser.Math.Linear(this.container.x, newX, 0.03),
			Phaser.Math.Linear(this.container.y, newY, 0.03),
		);

		this.captureBoxLogic();
		this.checkIfStillOverlapping();
	}

	checkIfStillOverlapping(){
		if(Phaser.Geom.Intersects.RectangleToRectangle(
			this.fish.getBounds(),
			this.fishCaptureBodyBox.getBounds()
		) == false){
			this.isCapturingFish = false;
		}
	}

	captureBoxLogic(){
		if(this.playing == false) return;

		let dropSpeed = 0.3;
		let topY = Math.round(this.captureHeightBox.y + 23);
		let bottomY = Math.round(this.captureHeightBox.getBounds().height) + 43;

		if(this.spaceKey.isDown){
			let upSpeed = 0.3;
			if(this.fishCaptureContainer.y - upSpeed <= topY) return;

			this.fishCaptureContainer.y -= upSpeed;
		}else {
			if(this.fishCaptureContainer.y + dropSpeed >= bottomY) return;

			this.fishCaptureContainer.y += dropSpeed;
		}
	}

	fishUpDownLogic(){
		if(this.playing == false) return;

		let topY = Math.round(this.captureHeightBox.y + 10);
		let bottomY = Math.round(this.captureHeightBox.getBounds().height) + 10;

		let randomY = Phaser.Math.Between(topY,bottomY);
		let randomSpeed = Phaser.Math.Between(1,3)

		this.scene.tweens.add({
			targets: this.fish,
			y: randomY, 
			duration: randomSpeed * 1000,
			ease: 'Linear',
			onComplete: () => { 
				this.fishUpDownLogic() 
			}
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
