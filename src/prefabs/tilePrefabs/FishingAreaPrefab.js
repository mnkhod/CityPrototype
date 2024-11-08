
// You can write more code here

/* START OF COMPILED CODE */

class FishingAreaPrefab extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 16, y ?? 16, texture || "FishingTilset", frame ?? 2);

		/* START-USER-CTR-CODE */
		// Write your code here.
		// this.alpha = 0;

		this.setMouseInteractivity();
		scene.input.alwaysEnabled = true;

		scene.events.on('create', this.onSceneCreate, this);
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.GameObject} */
	player;
	/** @type {Phaser.GameObjects.GameObject} */
	alert;
	/** @type {Phaser.GameObjects.GameObject} */
	itemHud;
	/** @type {Phaser.GameObjects.GameObject} */
	fishingGameHud;

	/* START-USER-CODE */

	// Write your code here.

	onSceneCreate() {

		this.setupFishingAnimations();

		this.on("pointerdown", () => {

			if (this.player.getCurrentItem() != Items.FISHING_ROD) {
				this.alert.showAlert("Please choose fishing rod item")
				return;
			}

			if(this.player.useEnergy() == false){
				this.alert.showAlert("No Energy")
				return;
			}

			this.setTexture("FishingTileAnim", 0)
			this.playPlayerFishingAnimation();

			this.fishingGameHud.play((wonFish) => {
				if(!wonFish) {
					this.setTexture("FishingTilset", 2)	
					this.player.resetPlayerAnimation();
					return;
				}

				this.play({
					key: "FishingTileFishedInAnim",
					repeat: 0,
				})

				setTimeout(() => {
					if (this.itemHud.item2.visible == false) {
						this.itemHud.item2.setTexture("FishItem", 1)
						this.itemHud.item2.visible = true;
						this.itemHud.itemCounter2.visible = true;
						this.player.items[1] = Items.FISH
					}
	
					console.log(this.itemHud.itemCounter2.text);
					this.itemHud.itemCounter2.text = parseInt(this.itemHud.itemCounter2.text) + 1;
				}, 1500);
				
				this.on("animationcomplete-FishingTileFishedInAnim", () => {
					this.setTexture("FishingTilset", 2)
					this.player.resetPlayerAnimation();
				})
			})


		})


	}

	setupFishingAnimations() {
		// right side fishing
		this.scene.anims.create({
			key: "PlayerOutfitRightSideFishingAnim",
			frames: this.anims.generateFrameNumbers("PlayerFishingOutfitAnimSet", { start: 32, end: 34 }),
			frameRate: 6,
			repeat: 0,
		});

		this.scene.anims.create({
			key: "PlayerHairRightSideFishingAnim",
			frames: this.anims.generateFrameNumbers("FishingHairAnimSet", { start: 32, end: 34 }),
			frameRate: 6,
			repeat: 0,
		});

		this.scene.anims.create({
			key: "PlayerItemRightSideFishingAnim",
			frames: this.anims.generateFrameNumbers("FishingRodAnimSet", { start: 32, end: 34 }), frameRate: 6, repeat: 0,
		});


		// right side idle

		this.scene.anims.create({
			key: "PlayerItemRightSideIdleFishingAnim",
			frames: this.anims.generateFrameNumbers("FishingRodAnimSet", { start: 36, end: 36 }), frameRate: 6, repeat: -1,
		});

		this.scene.anims.create({
			key: "PlayerHairRightSideIdleFishingAnim",
			frames: this.anims.generateFrameNumbers("FishingHairAnimSet", { start: 36, end: 36 }), frameRate: 6, repeat: -1,
		});

		this.scene.anims.create({
			key: "PlayerOutfitRightSideIdleFishingAnim",
			frames: this.anims.generateFrameNumbers("PlayerFishingOutfitAnimSet", { start: 36, end: 36 }), frameRate: 6, repeat: -1,
		});
	}

	playPlayerFishingAnimation(){
		this.player.noOtherAnimation = true;
		this.player.playerItem.visible = true;

		this.player.playerItem.play("PlayerItemRightSideFishingAnim", true)
		this.player.playerBody.play("PlayerRightSideFishingAnim", true)
		this.player.playerHair.play("PlayerHairRightSideFishingAnim", true)
		this.player.playerOutfit.play("PlayerOutfitRightSideFishingAnim", true).on("animationcomplete",() => {
			this.player.noOtherAnimation = false;
			this.player.playerItem.visible = false;
			this.playPlayerFishingIdleAnimation()
		})
	}

	playPlayerFishingIdleAnimation(){
		this.player.noOtherAnimation = true;
		this.player.playerItem.visible = true;

		this.player.playerBody.play("PlayerRightSideFishingIdleAnim", true)
		this.player.playerItem.play("PlayerItemRightSideIdleFishingAnim", true)
		this.player.playerHair.play("PlayerHairRightSideIdleFishingAnim", true)
		this.player.playerOutfit.play("PlayerOutfitRightSideIdleFishingAnim", true)
	}


	setMouseInteractivity() {
		this.setInteractive({
			hitArea: new Phaser.Geom.Rectangle(0, 0, 32, 32),
			hitAreaCallback: Phaser.Geom.Rectangle.Contains,
			useHandCursor: true,
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
