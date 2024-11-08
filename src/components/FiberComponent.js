
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class FiberComponent extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__FiberComponent"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {FiberComponent} */
	static getComponent(gameObject) {
		return gameObject["__FiberComponent"];
	}

	/** @type {Phaser.GameObjects.Sprite} */
	gameObject;
	/** @type {Phaser.GameObjects.GameObject} */
	player;
	/** @type {Phaser.GameObjects.GameObject} */
	itemHud;
	/** @type {Phaser.GameObjects.GameObject} */
	alert;

	/* START-USER-CODE */

	// Write your code here.

	HarvestState = Object.freeze({
		FIBER: 19,
		LAND: 5,
		PLANTED: 6,
		GROWING: 7,
		HARVEST: 8,
	});
	states = [this.HarvestState.FIBER, this.HarvestState.LAND, this.HarvestState.PLANTED, this.HarvestState.GROWING, this.HarvestState.HARVEST]
	stateIndex = 0;

	nearTile = false;

	wateredHarvest = false;

	start() {
		const scene = this.gameObject.scene;

		scene.physics.add.overlap(this.player, this.gameObject,this.playerTouchingFiber, undefined, this);
	}

	awake() {
		this.spaceKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

		this.gameObject.setInteractive({ useHandCursor: true })
		this.gameObject.on("pointerdown",() => {
			this.updateHarvestState();
		})
	}

	update() {
	}

	updateHarvestState() {
		if(this.player.energy == 0){
			this.alert.showAlert("Player Energy Low")
			return;
		}

		let harvestState = this.gameObject.frame.name;

		switch(harvestState){
			case this.HarvestState.FIBER:
				this.hoeFiber();
				break;
			case this.HarvestState.LAND:
				this.platingHarvest();
				break;
			case this.HarvestState.PLANTED:
				this.wateringHarvest();
				break;	
			case this.HarvestState.GROWING:
				this.alert.showAlert("Please wait till harvest is ready")
				break;		
			case this.HarvestState.HARVEST:
				this.harvesting();
				break;	
		}

		return;
	}

	hoeFiber() {
		if (this.player.currentItem == Items.HOE) {
			this.gameObject.setTexture("FarmCrops",this.HarvestState.LAND)

			this.levelUpHarvesting()
		} else {
			this.alert.showAlert("Please Select Hoe Item")
		}
	}

	platingHarvest(){
		if (this.player.currentItem == Items.CARROT_SEED) {
			this.gameObject.setTexture("FarmCrops",this.HarvestState.PLANTED)
			this.itemHud.useItem(3);

			this.levelUpHarvesting()
		} else {
			this.alert.showAlert("Please Select Seed Item")
		}
	}

	wateringHarvest() {
		if(this.wateredHarvest == false){
			if (this.player.currentItem == Items.WATERING_CAN) {
				this.wateredHarvest = true;
				this.alert.showAlert("Harvest Watered")
				this.levelUpHarvesting()

				setTimeout(() => {
		 			this.gameObject.setTexture("FarmCrops", this.HarvestState.GROWING);
					this.alert.showAlert("Harvest Growed")

					setTimeout(() => {
						this.alert.showAlert("Harvest Ready")
						this.gameObject.setTexture("FarmCrops", this.HarvestState.HARVEST);
					}, 5 * 1000);
					
				}, 5 * 1000);

			} else {
				this.alert.showAlert("Please Select Watering Can Item")
			}
		}else{
			this.alert.showAlert("Please wait till harvest is ready")
		}

	}

	harvesting(){
		this.itemHud.setItem(this.player,4,1,"HarvestTiles",6,Items.CARROT)
		this.itemHud.item4.setScale(2,2);

		this.player.currentItemIndex = 3 
		this.player.currentItem = Items.CARROT

		this.itemHud.increaseItem(4);

		this.alert.showAlert("Carrot Item Added To Inventory")
		this.levelUpHarvesting()
		this.gameObject.destroy()
	}

	levelUpHarvesting(){
		if(this.player.harvestingExp+this.player.harvestingExpStep >= this.player.harvestingMaxExp){
			this.player.harvestingLevel +=1;
			this.player.harvestingExp = 0;
			this.player.harvestingMaxExp += this.player.harvestingExpStep;

			this.alert.showAlert("Harvesting Level Up!")
			return;
		}

		this.player.harvestingExp += this.player.harvestingExpStep;
		this.player.energy -= 1;
	}


	playerTouchingFiber() {
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
