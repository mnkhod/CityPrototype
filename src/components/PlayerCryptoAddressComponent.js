
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class PlayerCryptoAddressComponent extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__PlayerCryptoAddressComponent"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {PlayerCryptoAddressComponent} */
	static getComponent(gameObject) {
		return gameObject["__PlayerCryptoAddressComponent"];
	}

	/** @type {Phaser.GameObjects.Text} */
	gameObject;
	/** @type {Phaser.GameObjects.GameObject} */
	player;

	/* START-USER-CODE */

	// Write your code here.
	async awake(){
		const provider = new ethers.BrowserProvider(window.ethereum)
		const signer = await provider.getSigner();

		const address = signer.address

		if(address){
			this.gameObject.visible = false;
			this.gameObject.text = `${address.substring(0,4)}...${address.substring(address.length - 4)}`;
			this.player.cryptoAddress = this.gameObject.text
		}else {
			this.gameObject.visible = false;
		}

		this.scene.cameras.main.on('followupdate', this.updatePosition, this);
	}


	updatePosition(){
		this.gameObject.x = Phaser.Math.Linear(this.gameObject.x, this.player.x, 0.08);
		this.gameObject.y = Phaser.Math.Linear(this.gameObject.y, this.player.y - 40, 0.08);

		// this.gameObject.setPosition(Math.floor(this.player.x),Math.floor(this.player.y - 40))
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
