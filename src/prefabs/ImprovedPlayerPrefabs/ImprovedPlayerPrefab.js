
// You can write more code here

/* START OF COMPILED CODE */

class ImprovedPlayerPrefab extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 32.69156956627587, y ?? 20.25347042047675);

		scene.physics.add.existing(this, false);
		this.body.allowGravity = false;
		this.body.collideWorldBounds = true;
		this.body.pushable = false;
		this.body.setSize(28, 55, false);

		// playerBody
		const playerBody = scene.add.sprite(15.308429722345409, 27.746528871751043, "ImprovedPlayer", 0);
		playerBody.scaleX = 1.5;
		playerBody.scaleY = 1.5;
		this.add(playerBody);

		// playerHair
		const playerHair = scene.add.sprite(15.308429722345409, 27.746528871751043, "PlayerHair01", 0);
		playerHair.scaleX = 1.5;
		playerHair.scaleY = 1.5;
		this.add(playerHair);

		// playerOutfit
		const playerOutfit = scene.add.sprite(15.308429722345409, 27.746528871751043, "PlayerOutfit01", 0);
		playerOutfit.scaleX = 1.5;
		playerOutfit.scaleY = 1.5;
		this.add(playerOutfit);

		// playerItem
		const playerItem = scene.add.sprite(15.308429722345409, 27.746528871751043, "FishingRodAnimSet", 36);
		playerItem.scaleX = 1.5;
		playerItem.scaleY = 1.5;
		this.add(playerItem);

		this.playerBody = playerBody;
		this.playerHair = playerHair;
		this.playerOutfit = playerOutfit;
		this.playerItem = playerItem;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.scene = scene;
		this.anims = this.scene.anims;

		scene.input.enableDebug(this);
		this.playerBody.preFX.addShadow(0.75, 0, 0.3, 0.5, 0, 2, 1);

		this.playerItem.visible = false;

		this.items = [null,null,null,null]
		this.currentItem = null;
		this.currentItemIndex = 0;

		this.cryptoAddress = "";
		this.energy = 10;
		this.maxEnergy = 14;
		this.level = 1;
		this.harvestingLevel = 0;
		this.harvestingExp = 0;
		this.harvestingMaxExp = 100;
		this.harvestingExpStep = 10;

		this.fishingLevel = 0;
		this.fishingExp = 0;
		this.fishingMaxExp = 100;
		this.fishingExpStep = 10;

		this.exp = 0;
		this.maxExp = 100;

		this.setDataEnabled()
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Sprite} */
	playerBody;
	/** @type {Phaser.GameObjects.Sprite} */
	playerHair;
	/** @type {Phaser.GameObjects.Sprite} */
	playerOutfit;
	/** @type {Phaser.GameObjects.Sprite} */
	playerItem;

	/* START-USER-CODE */

	// Write your code here.

	noOtherAnimation = false;

	useEnergy(energy = 1){
		if(this.energy == 0) return false

		this.energy = this.energy - energy;
		return true;
	}

	getCurrentItem(){
		return this.items[this.currentItemIndex]
	}

	resetPlayerAnimation(){
		this.playerHair.play("LayerPlayerHairIdleAnim", true);
		this.playerBody.play("LayerPlayerBodyIdleAnim", true);
		this.playerOutfit.play("LayerPlayerOutfitIdleAnim", true);
		this.playerItem.visible = false;
		this.noOtherAnimation = false
	}

	randomSkin(){
		this.changePlayerHair(`PlayerHair0${Phaser.Math.Between(1, 3)}`)
		this.changePlayerOutfit(`PlayerOutfit0${Phaser.Math.Between(1, 3)}`)
	}

	changePlayerOutfit(outfitSprite){	
		this.playerOutfit.setTexture(outfitSprite,0)

		this.replaceAnim("LayerPlayerOutfitIdleAnim",outfitSprite,0,0)
		this.replaceAnim("LayerPlayerOutfitLeftAnim",outfitSprite,19,23)
		this.replaceAnim("LayerPlayerOutfitRightAnim",outfitSprite,13,17)
		this.replaceAnim("LayerPlayerOutfitUpAnim",outfitSprite,7,9)
		this.replaceAnim("LayerPlayerOutfitDownAnim",outfitSprite,1,5)
	}

	changePlayerHair(hairSprite){
		this.playerHair.setTexture(hairSprite,0)

		this.replaceAnim("LayerPlayerHairIdleAnim",hairSprite,0,0)
		this.replaceAnim("LayerPlayerHairLeftAnim",hairSprite,19,23)
		this.replaceAnim("LayerPlayerHairRightAnim",hairSprite,13,17)
		this.replaceAnim("LayerPlayerHairUpAnim",hairSprite,7,9)
		this.replaceAnim("LayerPlayerHairDownAnim",hairSprite,1,5)
	}

	replaceAnim(name,spriteName,start,end){
		if (this.anims.exists(name)) this.anims.remove(name)

		this.anims.create({
			key: name,
			frames: this.anims.generateFrameNumbers(spriteName, { start, end }),
			frameRate: 10,
			repeat: -1,
			replace: true,
		});
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
