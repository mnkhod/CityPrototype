
// You can write more code here

/* START OF COMPILED CODE */

class SmallTreePrefab extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 543, y ?? 309, texture || "TreeSmall", frame ?? 0);

		this.play("SmallTreeAnim");

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
