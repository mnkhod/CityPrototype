
// You can write more code here

/* START OF COMPILED CODE */

class FishingScene extends Phaser.Scene {

	constructor() {
		super("FishingScene");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// fishingSceneMap
		const fishingSceneMap = this.add.tilemap("FishingSceneMap");
		fishingSceneMap.addTilesetImage("GroundTileset", "GroundTileset");
		fishingSceneMap.addTilesetImage("MultiTileset", "MultiTileset");
		fishingSceneMap.addTilesetImage("fishing deck", "Fishing Deck");
		fishingSceneMap.addTilesetImage("FishingTilset", "FishingTilset");

		// seaLayer
		const seaLayer = fishingSceneMap.createLayer("Sea", ["GroundTileset"], 0, -68);

		// terrainLayer
		const terrainLayer = fishingSceneMap.createLayer("Terrain", ["GroundTileset"], 0, -68);

		// fishingPondLayer
		const fishingPondLayer = fishingSceneMap.createLayer("FishingPond", ["GroundTileset","FishingTilset","MultiTileset"], 0, -71);

		// fishingDeckLayer
		const fishingDeckLayer = fishingSceneMap.createLayer("FishingDeck", ["fishing deck"], 0, -70);

		// playerCryptoAddress
		const playerCryptoAddress = this.add.text(34, 7, "", {});
		playerCryptoAddress.setOrigin(0.5, 0.5);
		playerCryptoAddress.text = "New text";
		playerCryptoAddress.setStyle({ "fontSize": "14px" });

		// improvedPlayer
		const improvedPlayer = new ImprovedPlayerPrefab(this, 787, 589);
		this.add.existing(improvedPlayer);

		// fisherPrefab
		const fisherPrefab = new FisherPrefab(this, 774, 383);
		this.add.existing(fisherPrefab);

		// fishingAreaContainer
		const fishingAreaContainer = this.add.container(974, 492);
		fishingAreaContainer.scaleY = 1.68;

		// fishingAreaPrefab
		const fishingAreaPrefab = new FishingAreaPrefab(this, 66, -2);
		fishingAreaPrefab.scaleX = 1;
		fishingAreaPrefab.scaleY = 0.5;
		fishingAreaContainer.add(fishingAreaPrefab);

		// fishingAreaPrefab_1
		const fishingAreaPrefab_1 = new FishingAreaPrefab(this, 3, 17);
		fishingAreaPrefab_1.scaleX = 1;
		fishingAreaPrefab_1.scaleY = 0.5;
		fishingAreaContainer.add(fishingAreaPrefab_1);

		// fishingAreaPrefab_2
		const fishingAreaPrefab_2 = new FishingAreaPrefab(this, 66, 74);
		fishingAreaPrefab_2.scaleX = 1;
		fishingAreaPrefab_2.scaleY = 0.5;
		fishingAreaContainer.add(fishingAreaPrefab_2);

		// itemHudPrefab
		const itemHudPrefab = new ItemHudPrefab(this, 1570.8, 995.9);
		this.add.existing(itemHudPrefab);

		// npcMsgPrefab
		const npcMsgPrefab = new NpcMsgPrefab(this, -0.6837199991510943, -0.18994558508859427);
		this.add.existing(npcMsgPrefab);

		// playerStatPrefab
		const playerStatPrefab = new PlayerStatPrefab(this, 2.597965656686199, 3.943157154532116);
		this.add.existing(playerStatPrefab);

		// alertPrefab
		const alertPrefab = new AlertPrefab(this, 1760.4925841618367, -0.007413930814664127);
		this.add.existing(alertPrefab);

		// fishingGameHudPrefab
		const fishingGameHudPrefab = new FishingGameHudPrefab(this, 0, 875.1999969482422);
		this.add.existing(fishingGameHudPrefab);
		fishingGameHudPrefab.scaleX = 1;
		fishingGameHudPrefab.scaleY = 0.8;

		// gameCameraScript
		const gameCameraScript = new ScriptNode(this);

		// lists
		const fishingAreaList = [fishingAreaPrefab];

		// playerCryptoAddress (components)
		const playerCryptoAddressPlayerCryptoAddressComponent = new PlayerCryptoAddressComponent(playerCryptoAddress);
		playerCryptoAddressPlayerCryptoAddressComponent.player = improvedPlayer;

		// improvedPlayer (components)
		new PlayerMovementComponent(improvedPlayer);

		// fisherPrefab (components)
		const fisherPrefabNpcComponent = NpcComponent.getComponent(fisherPrefab);
		fisherPrefabNpcComponent.player = improvedPlayer;
		fisherPrefabNpcComponent.msgContainer = npcMsgPrefab;
		fisherPrefabNpcComponent.npcMessage = "Hello World";
		fisherPrefabNpcComponent.onConversationComplete = () => this.onNpcInteractionDone();

		// fishingAreaPrefab (prefab fields)
		fishingAreaPrefab.player = improvedPlayer;
		fishingAreaPrefab.alert = alertPrefab;
		fishingAreaPrefab.itemHud = itemHudPrefab;
		fishingAreaPrefab.fishingGameHud = fishingGameHudPrefab;

		// fishingAreaPrefab_1 (prefab fields)
		fishingAreaPrefab_1.player = improvedPlayer;
		fishingAreaPrefab_1.alert = alertPrefab;
		fishingAreaPrefab_1.itemHud = itemHudPrefab;
		fishingAreaPrefab_1.fishingGameHud = fishingGameHudPrefab;

		// fishingAreaPrefab_2 (prefab fields)
		fishingAreaPrefab_2.player = improvedPlayer;
		fishingAreaPrefab_2.alert = alertPrefab;
		fishingAreaPrefab_2.itemHud = itemHudPrefab;
		fishingAreaPrefab_2.fishingGameHud = fishingGameHudPrefab;

		// itemHudPrefab (components)
		const itemHudPrefabLevelHudComponent = LevelHudComponent.getComponent(itemHudPrefab);
		itemHudPrefabLevelHudComponent.player = improvedPlayer;

		// playerStatPrefab (prefab fields)
		playerStatPrefab.player = improvedPlayer;

		// fishingGameHudPrefab (prefab fields)
		fishingGameHudPrefab.player = improvedPlayer;
		fishingGameHudPrefab.alert = alertPrefab;

		// gameCameraScript (components)
		const gameCameraScriptGameCameraComponent = new GameCameraComponent(gameCameraScript);
		gameCameraScriptGameCameraComponent.player = improvedPlayer;

		this.seaLayer = seaLayer;
		this.terrainLayer = terrainLayer;
		this.fishingPondLayer = fishingPondLayer;
		this.fishingDeckLayer = fishingDeckLayer;
		this.playerCryptoAddress = playerCryptoAddress;
		this.improvedPlayer = improvedPlayer;
		this.fisherPrefab = fisherPrefab;
		this.itemHudPrefab = itemHudPrefab;
		this.playerStatPrefab = playerStatPrefab;
		this.alertPrefab = alertPrefab;
		this.fishingGameHudPrefab = fishingGameHudPrefab;
		this.fishingSceneMap = fishingSceneMap;
		this.fishingAreaList = fishingAreaList;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Tilemaps.TilemapLayer} */
	seaLayer;
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	terrainLayer;
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	fishingPondLayer;
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	fishingDeckLayer;
	/** @type {Phaser.GameObjects.Text} */
	playerCryptoAddress;
	/** @type {ImprovedPlayerPrefab} */
	improvedPlayer;
	/** @type {FisherPrefab} */
	fisherPrefab;
	/** @type {ItemHudPrefab} */
	itemHudPrefab;
	/** @type {PlayerStatPrefab} */
	playerStatPrefab;
	/** @type {AlertPrefab} */
	alertPrefab;
	/** @type {FishingGameHudPrefab} */
	fishingGameHudPrefab;
	/** @type {Phaser.Tilemaps.Tilemap} */
	fishingSceneMap;
	/** @type {FishingAreaPrefab[]} */
	fishingAreaList;

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.editorCreate();

		this.terrainLayer.setCollisionByExclusion([706]);

		this.fishingDeckLayer.setCollisionBetween(57000,58000);


		this.fishingPondLayer.setCollisionBetween(1,57052);
		// this.fishingPondLayer.renderDebug(this.add.graphics());

		this.physics.add.collider(this.terrainLayer, this.improvedPlayer)
		this.physics.add.collider(this.fishingPondLayer, this.improvedPlayer)
		this.physics.add.collider(this.fisherPrefab, this.improvedPlayer)

		this.alertPrefab.showAlert(`Press 1,2,3 to change clothes and hair`)

		this.bgMusicPlaylist = [
			this.sound.add('Eterna Forest'),
			this.sound.add('Santalune Forest'),
			this.sound.add('Unwavering Emotions'),
		];

		this.backgroundMusic = this.bgMusicPlaylist[Phaser.Math.Between(0,this.bgMusicPlaylist.length-1)]
		this.backgroundMusic.play({ loop: true , volume: 0.5 });
	}

	update(){
		let zKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
		let xKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
		let mKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);

		if(Phaser.Input.Keyboard.JustDown(zKey)){
			this.improvedPlayer.playerHair.visible = !this.improvedPlayer.playerHair.visible
		} else if(Phaser.Input.Keyboard.JustDown(xKey)){
			this.improvedPlayer.playerOutfit.visible = !this.improvedPlayer.playerOutfit.visible
		}else if(Phaser.Input.Keyboard.JustDown(mKey)){
			if(this.backgroundMusic.isPaused){
				this.backgroundMusic.resume()
			}else{
				this.backgroundMusic.pause();
			}
		}
	}

	onNpcInteractionDone(){
		this.itemHudPrefab.item1.setTexture("FishingRodItem",0)
		this.itemHudPrefab.item1.visible = true;
		this.itemHudPrefab.itemCounter1.text = 1;
		this.itemHudPrefab.itemCounter1.visible = true;

		this.improvedPlayer.items[0] = Items.FISHING_ROD
		this.improvedPlayer.currentItem = Items.FISHING_ROD
		console.log(this.improvedPlayer.currentItem)
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
