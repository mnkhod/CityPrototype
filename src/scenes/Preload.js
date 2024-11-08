
// You can write more code here

/* START OF COMPILED CODE */

class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// preloadContainer
		const preloadContainer = this.add.container(704, 473.5);

		// progressBar
		const progressBar = this.add.rectangle(0, 93, 256, 20);
		progressBar.scaleX = 2;
		progressBar.scaleY = 2;
		progressBar.setOrigin(0, 0);
		progressBar.isFilled = true;
		progressBar.fillColor = 14737632;
		preloadContainer.add(progressBar);

		// preloadUpdater
		new PreloadBarUpdaterScript(progressBar);

		// progressBarBg
		const progressBarBg = this.add.rectangle(0, 93, 256, 20);
		progressBarBg.scaleX = 2;
		progressBarBg.scaleY = 2;
		progressBarBg.setOrigin(0, 0);
		progressBarBg.fillColor = 14737632;
		progressBarBg.isStroked = true;
		preloadContainer.add(progressBarBg);

		// loadingText
		const loadingText = this.add.text(124, 0, "", {});
		loadingText.scaleX = 3;
		loadingText.scaleY = 3;
		loadingText.text = "Loading...";
		loadingText.setStyle({ "color": "#e0e0e0", "fontFamily": "arial", "fontSize": "20px" });
		preloadContainer.add(loadingText);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	preload() {

		this.editorCreate();

		this.editorPreload();

		// this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("LoginScene"));
		this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("HarvestTutorialScene"));
		// this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("FishingScene"));
		this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
	}

	create(){
		WebFont.load({
			custom: {
				families: ['LittleMalio8Bit']
			},
			active: () => {
				// Font is loaded and ready to use
				this.addText();
			}
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
