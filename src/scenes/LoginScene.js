
// You can write more code here

/* START OF COMPILED CODE */

class LoginScene extends Phaser.Scene {

	constructor() {
		super("LoginScene");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// backgroundRectangle
		const backgroundRectangle = this.add.rectangle(960, 540, 128, 128);
		backgroundRectangle.scaleX = 15.836595857633629;
		backgroundRectangle.scaleY = 8.811916879438426;
		backgroundRectangle.isFilled = true;
		backgroundRectangle.fillColor = 8307946;

		// loginContainer
		const loginContainer = this.add.container(960, 540);
		loginContainer.scaleX = 0.7255317941581021;
		loginContainer.scaleY = 0.7255317941581021;

		// titleScreen
		const titleScreen = this.add.image(0, 0, "TitleScreen");
		loginContainer.add(titleScreen);

		// connectButton
		const connectButton = this.add.image(0, 356, "ConnectButton", 0);
		connectButton.scaleX = 3.0699916582020568;
		connectButton.scaleY = 3.0699916582020568;
		loginContainer.add(connectButton);

		this.connectButton = connectButton;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	connectButton;

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.editorCreate();
		this.connectButton.setInteractive({ useHandCursor : true });
		this.connectButton.on("pointerdown", () => {
			this.connectToMetamask()
		})

	}

	async connectToMetamask(){
		const provider = new ethers.BrowserProvider(window.ethereum)
		const signer = await provider.getSigner();
		this.scene.start("Level",{
			address: signer.address
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
