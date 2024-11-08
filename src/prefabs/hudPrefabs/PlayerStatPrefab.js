
// You can write more code here

/* START OF COMPILED CODE */

class PlayerStatPrefab extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 5, y ?? 5);

		this.scaleX = 0.6;
		this.scaleY = 0.6;

		// alertContainer
		const alertContainer = scene.add.container(-4, -6);
		alertContainer.scaleX = 0.75;
		alertContainer.scaleY = 1.3;
		this.add(alertContainer);

		// bg
		const bg = scene.add.rectangle(222, 83, 213, 128);
		bg.scaleX = 2.0245452627539473;
		bg.scaleY = 1.1294206458894107;
		bg.isFilled = true;
		bg.fillColor = 8683143;
		alertContainer.add(bg);

		// leftBottom
		const leftBottom = scene.add.image(31.560062772588587, 137.5600627725886, "AlertTileset", 8);
		alertContainer.add(leftBottom);

		// leftRight
		const leftRight = scene.add.image(31, 82, "AlertTileset", 4);
		alertContainer.add(leftRight);

		// leftTop
		const leftTop = scene.add.image(31.560062772588587, 31.560062772588587, "AlertTileset", 0);
		alertContainer.add(leftTop);

		// bottomMiddle
		const bottomMiddle = scene.add.image(223.56006658728586, 137.5600627725886, "AlertTileset", 9);
		bottomMiddle.scaleX = 5;
		alertContainer.add(bottomMiddle);

		// topMiddle
		const topMiddle = scene.add.image(223.56006658728586, 31.560062772588587, "AlertTileset", 1);
		topMiddle.scaleX = 5;
		alertContainer.add(topMiddle);

		// rightBottom
		const rightBottom = scene.add.image(414.56006658728586, 136.5600627725886, "AlertTileset", 10);
		alertContainer.add(rightBottom);

		// rightSide
		const rightSide = scene.add.image(414, 84, "AlertTileset", 6);
		alertContainer.add(rightSide);

		// rightTop
		const rightTop = scene.add.image(414.56006658728586, 31.560062772588587, "AlertTileset", 2);
		alertContainer.add(rightTop);

		// addressStat
		const addressStat = scene.add.text(71, 32, "", {});
		addressStat.text = "Player: 0x7c...z212f";
		this.add(addressStat);

		// energyStat
		const energyStat = scene.add.text(105, 57, "", {});
		energyStat.text = "Energy: 14/14";
		this.add(energyStat);

		// harvestingLevelStat
		const harvestingLevelStat = scene.add.text(71, 82, "", {});
		harvestingLevelStat.text = "Harvesting Level : 0";
		this.add(harvestingLevelStat);

		// harvestingExpStat
		const harvestingExpStat = scene.add.text(61.5, 132, "", {});
		harvestingExpStat.text = "Harvesting Exp : 0/100";
		this.add(harvestingExpStat);

		// fishingLevelStat
		const fishingLevelStat = scene.add.text(85.5, 107, "", {});
		fishingLevelStat.text = "Fishing Level : 0";
		this.add(fishingLevelStat);

		// FishingExpStat
		const fishingExpStat = scene.add.text(76, 157, "", {});
		fishingExpStat.text = "Fishing Exp : 0/100";
		this.add(fishingExpStat);

		this.alertContainer = alertContainer;
		this.addressStat = addressStat;
		this.energyStat = energyStat;
		this.harvestingLevelStat = harvestingLevelStat;
		this.harvestingExpStat = harvestingExpStat;
		this.fishingLevelStat = fishingLevelStat;
		this.fishingExpStat = fishingExpStat;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.container = this;

		this.scene.events.on('update', this.onSceneUpdate, this);
		this.boxSpeed = 0.08;
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Container} */
	alertContainer;
	/** @type {Phaser.GameObjects.Text} */
	addressStat;
	/** @type {Phaser.GameObjects.Text} */
	energyStat;
	/** @type {Phaser.GameObjects.Text} */
	harvestingLevelStat;
	/** @type {Phaser.GameObjects.Text} */
	harvestingExpStat;
	/** @type {Phaser.GameObjects.Text} */
	fishingLevelStat;
	/** @type {Phaser.GameObjects.Text} */
	fishingExpStat;
	/** @type {Phaser.GameObjects.GameObject} */
	player;

	/* START-USER-CODE */

	onSceneUpdate(){
	// console.log(this.container)
	const cam = this.scene.cameras.main;

	let width = Math.floor(this.container.getBounds().width)
	let height = Math.floor(this.container.getBounds().height)

	let newX = cam.worldView.left + 10
	let newY = cam.worldView.top + 15

	this.container.setPosition(
			Phaser.Math.Linear(this.container.x, newX, this.boxSpeed),
			Phaser.Math.Linear(this.container.y, newY, this.boxSpeed),
		);

		this.addressStat.text = `Player : ${this.player.cryptoAddress}`
		this.energyStat.text = `Energy : ${this.player.energy}/${this.player.maxEnergy}`
		this.harvestingLevelStat.text = `Harvesting Level : ${this.player.harvestingLevel}`
		this.harvestingExpStat.text = `Harvesting Exp : ${this.player.harvestingExp}/${this.player.harvestingMaxExp}`
		this.fishingLevelStat.text = `Fishing Level : ${this.player.fishingLevel}`
		this.fishingExpStat.text = `Fishing Exp : ${this.player.fishingExp}/${this.player.fishingMaxExp}`
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
