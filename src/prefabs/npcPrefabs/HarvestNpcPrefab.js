
// You can write more code here

/* START OF COMPILED CODE */

class HarvestNpcPrefab extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 24, y ?? 24, texture || "Farmer", frame ?? 0);

		this.scaleX = 1.5;
		this.scaleY = 1.5;
		this.play("FarmerIdleAnimFarmer");

		// this (components)
		new NpcComponent(this);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {string} */
	msg = "";

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
