
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class PlayerMovementComponent extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__PlayerMovementComponent"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.player = gameObject;
		this.input = gameObject.scene.input;
		/* END-USER-CTR-CODE */
	}

	/** @returns {PlayerMovementComponent} */
	static getComponent(gameObject) {
		return gameObject["__PlayerMovementComponent"];
	}

	/** @type {Phaser.Physics.Arcade.Sprite} */
	gameObject;

	/* START-USER-CODE */

	// Write your code here.

	dragStartX = 0;
	dragStartY = 0;
	isDragging = false;


	awake() {
		// this.mouseBindings();
	}

	mouseBindings() {
		this.input.on('pointerdown', (pointer) => {
			this.isDragging = true;

			this.dragStartX = pointer.x;
			this.dragStartY = pointer.y;
		}, this);

		this.input.on('pointermove', (pointer) => {
			if (!this.isDragging) return;
			var vel = 150;

			const dragThreshold = 20; // Adjust this value to change sensitivity
			const dx = pointer.x - this.dragStartX;
			const dy = pointer.y - this.dragStartY;

			if (Math.abs(dx) > Math.abs(dy)) {
				// Horizontal movement
				if (dx > dragThreshold) {
					// Right
					this.player.body.velocity.x = +vel;
					this.player.play("PlayerRightMoveAnimPlayer", true);
				} else if (dx < -dragThreshold) {
					// Left
					this.player.body.velocity.x = -vel;
					this.player.play("PlayerLeftMoveAnim", true);
				}
			} else {
				// Vertical movement
				if (dy > dragThreshold) {
					// Down
					this.player.body.velocity.y = +vel;
					this.player.play("PlayerDownMoveAnimPlayerPlayer", true);
				} else if (dy < -dragThreshold) {
					// Up
					this.player.body.velocity.y = -vel;
					this.player.play("PlayerUpMoveAnimPlayerPlayer", true);
				}
			}

		}, this);

		this.input.on('pointerup', () => {
			this.isDragging = false;
		}, this);
	}

	update() {
		this.playerMovement();

		const oneKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);
		const twoKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO);
		const threeKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.THREE);
		const rKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);


		if(Phaser.Input.Keyboard.JustDown(oneKey)){
			this.player.changePlayerHair("PlayerHair01")
			this.player.changePlayerOutfit("PlayerOutfit01")
		} else if(Phaser.Input.Keyboard.JustDown(twoKey)){
			this.player.changePlayerHair("PlayerHair02")
			this.player.changePlayerOutfit("PlayerOutfit02")
		} else if(Phaser.Input.Keyboard.JustDown(threeKey)){
			this.player.changePlayerHair("PlayerHair03")
			this.player.changePlayerOutfit("PlayerOutfit03")
		} else if(Phaser.Input.Keyboard.JustDown(rKey)){
			this.player.randomSkin()
		} 
	}

	playerMovement() {
		var vel = 150;

		const upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
		const downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
		const leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
		const rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

		if(this.player.noOtherAnimation) return;


		if (rightKey.isDown) {
			this.player.body.velocity.x = +vel;
			this.player.body.velocity.y = 0;

			this.player.playerHair.play("LayerPlayerHairRightAnim", true);
			this.player.playerBody.play("LayerPlayerBodyRightAnim", true);
			this.player.playerOutfit.play("LayerPlayerOutfitRightAnim", true);

		} else if (leftKey.isDown) {
			this.player.body.velocity.x = -vel;
			this.player.body.velocity.y = 0;

			this.player.playerHair.play("LayerPlayerHairLeftAnim", true);
			this.player.playerBody.play("LayerPlayerBodyLeftAnim", true);
			this.player.playerOutfit.play("LayerPlayerOutfitLeftAnim", true);
		} else if (upKey.isDown) {
			this.player.body.velocity.y = -vel;
			this.player.body.velocity.x = 0;

			this.player.playerHair.play("LayerPlayerHairUpAnim", true);
			this.player.playerBody.play("LayerPlayerBodyUpAnim", true);
			this.player.playerOutfit.play("LayerPlayerOutfitUpAnim", true);
		} else if (downKey.isDown) {
			this.player.body.velocity.y = +vel;
			this.player.body.velocity.x = 0;

			this.player.playerHair.play("LayerPlayerHairDownAnim", true);
			this.player.playerBody.play("LayerPlayerBodyDownAnim", true);
			this.player.playerOutfit.play("LayerPlayerOutfitDownAnim", true);
		} else {
			this.player.body.velocity.y = 0;
			this.player.body.velocity.x = 0;

			if(this.player.noOtherAnimation == false){
				this.player.playerHair.play("LayerPlayerHairIdleAnim", true);
				this.player.playerBody.play("LayerPlayerBodyIdleAnim", true);
				this.player.playerOutfit.play("LayerPlayerOutfitIdleAnim", true);
			}
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
