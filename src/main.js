
window.addEventListener('load', function () {

	var game = new Phaser.Game({
		width: 1920,
		height: 1080,
        // type: Phaser.AUTO,
		// type: Phaser.CANVAS,
		type: Phaser.WEBGL,
        backgroundColor: "#242424",
		physics: {
		  default: "arcade",
		  arcade: {
			debug: false,
			tileBias: 32,
			gravity: {
			  y: 500
			}
		  }
		},
		render: {
		  pixelArt: true,
		},
		scale: {
			// mode: Phaser.Scale.FIT,
			mode: Phaser.Scale.STRETCH,
			width: 1920,
			height: 1080,
			// mode: Phaser.Scale.RESIZE,
			// min: {
			// 	width: 720,
			// 	height: 1080
			// },
			// max: {
			// 	width: 1920,
			// 	height: 1080
			// },
			autoCenter: Phaser.Scale.CENTER_BOTH
		}
	});

	game.scene.add("Preload", Preload);
	game.scene.add("LoginScene", LoginScene);
	game.scene.add("HarvestTutorialScene", HarvestTutorialScene);
	game.scene.add("FishingScene", FishingScene);
	game.scene.add("Boot", Boot, true);
});

class Boot extends Phaser.Scene {

	preload() {
		
		this.load.pack("pack", "assets/preload-asset-pack.json");
	}

	create() {

		this.scene.start("Preload");
	}
}