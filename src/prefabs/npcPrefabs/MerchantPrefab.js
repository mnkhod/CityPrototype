
// You can write more code here

/* START OF COMPILED CODE */

class MerchantPrefab extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 483, y ?? 204, texture || "Merchant", frame ?? 0);

		this.setOrigin(0, 0);
		scene.physics.add.existing(this, true);
		this.body.allowGravity = false;
		this.body.setSize(48, 64, false);
		this.play("MerchantIdleAnim");

		// this (components)
		const thisNpcComponent = new NpcComponent(this);
		thisNpcComponent.onConversationComplete = () => console.log("default");

		/* START-USER-CTR-CODE */
		scene.physics.add.existing(this, true);
		this.component = thisNpcComponent
		/* END-USER-CTR-CODE */
	}

	/** @type {string} */
	msg = "";

	/* START-USER-CODE */

	// Write your code here.

	isConversationDone(){
		return this.component.isConversationDone
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
