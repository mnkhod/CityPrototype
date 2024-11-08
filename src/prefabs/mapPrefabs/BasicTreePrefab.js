
// You can write more code here

/* START OF COMPILED CODE */

class BasicTreePrefab extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 64, y ?? 64, texture || "TreeBasic", frame ?? 0);

		scene.physics.add.existing(this, false);
		this.body.allowGravity = false;
		this.body.pushable = false;
		this.body.setOffset(0, 60);
		this.body.setSize(124, 64, false);
		this.play("BasicTreeAnim");

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
