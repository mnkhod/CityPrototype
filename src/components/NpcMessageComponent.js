
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class NpcMessageComponent extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__NpcMessageComponent"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {NpcMessageComponent} */
	static getComponent(gameObject) {
		return gameObject["__NpcMessageComponent"];
	}

	/** @type {ScriptNode} */
	gameObject;
	/** @type {Phaser.GameObjects.GameObject} */
	msgContainer;

	/* START-USER-CODE */

	// Write your code here.

	update() {
		const cam = this.scene.cameras.main;
		this.msgContainer.setScale(1.2,1)

		let msgBoxContainerWidth = Math.floor(this.msgContainer.getBounds().width)
		let msgBoxContainerHeight = Math.floor(this.msgContainer.getBounds().height)

		let msgBoxContainerNewX = ((cam.worldView.left + cam.worldView.right) / 2) - msgBoxContainerWidth /2
		let msgBoxContainerNewY = cam.worldView.bottom - msgBoxContainerHeight - 20

		this.msgContainer.setPosition(
			Phaser.Math.Linear(this.msgContainer.x, msgBoxContainerNewX, 0.03),
			Phaser.Math.Linear(this.msgContainer.y, msgBoxContainerNewY, 0.03),
		);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
