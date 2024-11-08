
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class GameCameraComponent extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__GameCameraComponent"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {GameCameraComponent} */
	static getComponent(gameObject) {
		return gameObject["__GameCameraComponent"];
	}

	/** @type {ScriptNode} */
	gameObject;
	/** @type {Phaser.GameObjects.GameObject} */
	player;

	/* START-USER-CODE */

	// Write your code here.

	awake(){
		const cam = this.scene.cameras.main;
		cam.setBounds(0, 0,this.scene.sys.game.config.width, this.scene.sys.game.config.height);
		cam.setZoom(2)
		cam.startFollow(this.player,true,0.5,0.5)
		cam.fadeIn(5000)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
