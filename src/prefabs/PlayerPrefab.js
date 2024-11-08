
// You can write more code here

/* START OF COMPILED CODE */

class PlayerPrefab extends Phaser.Physics.Arcade.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 119, y ?? 176, texture || "Player", frame ?? 0);

		this.scaleX = 1.5;
		this.scaleY = 1.5;
		scene.physics.add.existing(this, false);
		this.body.allowGravity = false;
		this.body.collideWorldBounds = true;
		this.body.setSize(32, 32, false);

		// shadowFx
		this.preFX.addShadow(0.75, 0, 0.3, 0.5, 0, 2, 1);

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.items = [null,null,null]
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

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	useEnergy(energy = 1){
		if(this.energy == 0) return false

		this.energy = this.energy - energy;
		return true;
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
