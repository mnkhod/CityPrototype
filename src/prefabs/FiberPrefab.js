
// You can write more code here

/* START OF COMPILED CODE */

class FiberPrefab extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 16, y ?? 16, texture || "FarmCrops", frame ?? 19);

		this.scaleX = 2;
		this.scaleY = 2;

		// this (components)
		new FiberComponent(this);

		/* START-USER-CTR-CODE */
		scene.physics.add.existing(this, true);
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.



	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
