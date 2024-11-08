
// You can write more code here

/* START OF COMPILED CODE */

class FisherPrefab extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 19.2, y ?? 28.799999999999997, texture || "Fisher", frame ?? 0);

		this.scaleX = 1.2;
		this.scaleY = 1.2;
		scene.physics.add.existing(this, true);
		this.body.moves = false;
		this.body.allowGravity = false;
		this.body.pushable = false;
		this.body.setSize(32, 48, false);

		// this (components)
		new NpcComponent(this);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
