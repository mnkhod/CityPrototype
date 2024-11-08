
// You can write more code here

/* START OF COMPILED CODE */

class BigTreePrefab extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 539, y ?? 224, texture || "TreeBig", frame ?? 0);

		this.play("BigTreeAnim");

		/* START-USER-CTR-CODE */
		// Write your code here.
		scene.physics.add.existing(this, true);
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
