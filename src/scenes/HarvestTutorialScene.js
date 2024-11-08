
// You can write more code here

/* START OF COMPILED CODE */

class HarvestTutorialScene extends Phaser.Scene {

	constructor() {
		super("HarvestTutorialScene");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// harvestSceneMap
		const harvestSceneMap = this.add.tilemap("HarvestSceneMap");
		harvestSceneMap.addTilesetImage("MultiTileset", "MultiTileset");
		harvestSceneMap.addTilesetImage("GroundTileset", "GroundTileset");
		harvestSceneMap.addTilesetImage("PixelFarmTileset", "PixelFarmTileset");

		// spaceKey
		const spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

		// numberOneKey
		const numberOneKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);

		// numberTwoKey
		const numberTwoKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO);

		// numberThreeKey
		const numberThreeKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.THREE);

		// bgLayer
		const bgLayer = harvestSceneMap.createLayer("BackgroundLayer", ["GroundTileset"], 0, 1);
		bgLayer.scaleX = 2.0063314872640334;
		bgLayer.scaleY = 1.1244824515483554;

		// terrainLayer
		const terrainLayer = harvestSceneMap.createLayer("TerrainLayer", ["GroundTileset","MultiTileset"], 510, 60);

		// farmingLayer
		const farmingLayer = harvestSceneMap.createLayer("FramingArea", ["PixelFarmTileset"], 510, 61);

		// harvestNpcPrefab
		const harvestNpcPrefab = new HarvestNpcPrefab(this, 874, 517);
		this.add.existing(harvestNpcPrefab);

		// fiberPrefab
		const fiberPrefab = new FiberPrefab(this, 1118, 532);
		this.add.existing(fiberPrefab);

		// fiberPrefab_1
		const fiberPrefab_1 = new FiberPrefab(this, 1119, 584);
		this.add.existing(fiberPrefab_1);

		// playerCryptoAddress
		const playerCryptoAddress = this.add.text(34, 7, "", {});
		playerCryptoAddress.setOrigin(0.5, 0.5);
		playerCryptoAddress.text = "New text";
		playerCryptoAddress.setStyle({ "fontSize": "14px" });

		// gate
		/** @type {Phaser.GameObjects.Sprite & { body: Phaser.Physics.Arcade.StaticBody }} */
		const gate = this.add.sprite(821, 375, "Gates", 11);
		this.physics.add.existing(gate, true);
		gate.body.allowGravity = false;
		gate.body.setSize(128, 128, false);
		gate.play("FishingSceneGateAnimGates");

		// smallTreePrefab
		const smallTreePrefab = new SmallTreePrefab(this, 953, 327);
		this.add.existing(smallTreePrefab);

		// bigTreePrefab
		const bigTreePrefab = new BigTreePrefab(this, 1154, 333);
		this.add.existing(bigTreePrefab);

		// basicTreePrefab
		const basicTreePrefab = new BasicTreePrefab(this, 1018, 698);
		this.add.existing(basicTreePrefab);

		// player
		const player = new ImprovedPlayerPrefab(this, 817, 630);
		this.add.existing(player);

		// itemHudPrefab
		const itemHudPrefab = new ItemHudPrefab(this, 1570.8000000906975, 996.900010874052);
		this.add.existing(itemHudPrefab);

		// npcMsgPrefab
		const npcMsgPrefab = new NpcMsgPrefab(this, -0.6837352579401568, 0.8100544149114057);
		this.add.existing(npcMsgPrefab);

		// alertPrefab
		const alertPrefab = new AlertPrefab(this, 1760.492614612736, -2.0074139378888987);
		this.add.existing(alertPrefab);

		// playerStatPrefab
		const playerStatPrefab = new PlayerStatPrefab(this, 2.597965656686199, 3.943157154532116);
		this.add.existing(playerStatPrefab);
		playerStatPrefab.scaleX = 0.6;
		playerStatPrefab.scaleY = 0.6;

		// inventoryPrefab
		const inventoryPrefab = new InventoryPrefab(this, 0.07472992992362747, 660.9553533819078);
		this.add.existing(inventoryPrefab);

		// cameraScriptNode
		const cameraScriptNode = new ScriptNode(this);

		// lists
		const fibers = [fiberPrefab, fiberPrefab_1];
		const trees = [basicTreePrefab, bigTreePrefab, smallTreePrefab];

		// PlayerTerrainCollider
		this.physics.add.collider(player, terrainLayer);

		// PlayerFarmingAreaCollider
		this.physics.add.collider(player, farmingLayer);

		// PlayerTreeCollider
		this.physics.add.collider(player, trees);

		// harvestNpcPrefab (prefab fields)
		harvestNpcPrefab.msg = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

		// harvestNpcPrefab (components)
		const harvestNpcPrefabNpcComponent = NpcComponent.getComponent(harvestNpcPrefab);
		harvestNpcPrefabNpcComponent.player = player;
		harvestNpcPrefabNpcComponent.msgContainer = npcMsgPrefab;
		harvestNpcPrefabNpcComponent.onConversationComplete = () => this.harvestNpcConversationDone();

		// fiberPrefab (components)
		const fiberPrefabFiberComponent = FiberComponent.getComponent(fiberPrefab);
		fiberPrefabFiberComponent.player = player;
		fiberPrefabFiberComponent.itemHud = itemHudPrefab;
		fiberPrefabFiberComponent.alert = alertPrefab;

		// fiberPrefab_1 (components)
		const fiberPrefab_1FiberComponent = FiberComponent.getComponent(fiberPrefab_1);
		fiberPrefab_1FiberComponent.player = player;
		fiberPrefab_1FiberComponent.itemHud = itemHudPrefab;
		fiberPrefab_1FiberComponent.alert = alertPrefab;

		// playerCryptoAddress (components)
		const playerCryptoAddressPlayerCryptoAddressComponent = new PlayerCryptoAddressComponent(playerCryptoAddress);
		playerCryptoAddressPlayerCryptoAddressComponent.player = player;

		// player (components)
		new PlayerMovementComponent(player);

		// itemHudPrefab (prefab fields)
		itemHudPrefab.inventory = inventoryPrefab;

		// itemHudPrefab (components)
		const itemHudPrefabLevelHudComponent = LevelHudComponent.getComponent(itemHudPrefab);
		itemHudPrefabLevelHudComponent.player = player;

		// playerStatPrefab (prefab fields)
		playerStatPrefab.player = player;

		// cameraScriptNode (components)
		const cameraScriptNodeGameCameraComponent = new GameCameraComponent(cameraScriptNode);
		cameraScriptNodeGameCameraComponent.player = player;

		this.bgLayer = bgLayer;
		this.terrainLayer = terrainLayer;
		this.farmingLayer = farmingLayer;
		this.harvestNpcPrefab = harvestNpcPrefab;
		this.playerCryptoAddress = playerCryptoAddress;
		this.gate = gate;
		this.player = player;
		this.itemHudPrefab = itemHudPrefab;
		this.alertPrefab = alertPrefab;
		this.inventoryPrefab = inventoryPrefab;
		this.cameraScriptNode = cameraScriptNode;
		this.harvestSceneMap = harvestSceneMap;
		this.spaceKey = spaceKey;
		this.numberOneKey = numberOneKey;
		this.numberTwoKey = numberTwoKey;
		this.numberThreeKey = numberThreeKey;
		this.fibers = fibers;
		this.trees = trees;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Tilemaps.TilemapLayer} */
	bgLayer;
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	terrainLayer;
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	farmingLayer;
	/** @type {HarvestNpcPrefab} */
	harvestNpcPrefab;
	/** @type {Phaser.GameObjects.Text} */
	playerCryptoAddress;
	/** @type {Phaser.GameObjects.Sprite & { body: Phaser.Physics.Arcade.StaticBody }} */
	gate;
	/** @type {ImprovedPlayerPrefab} */
	player;
	/** @type {ItemHudPrefab} */
	itemHudPrefab;
	/** @type {AlertPrefab} */
	alertPrefab;
	/** @type {InventoryPrefab} */
	inventoryPrefab;
	/** @type {ScriptNode} */
	cameraScriptNode;
	/** @type {Phaser.Tilemaps.Tilemap} */
	harvestSceneMap;
	/** @type {Phaser.Input.Keyboard.Key} */
	spaceKey;
	/** @type {Phaser.Input.Keyboard.Key} */
	numberOneKey;
	/** @type {Phaser.Input.Keyboard.Key} */
	numberTwoKey;
	/** @type {Phaser.Input.Keyboard.Key} */
	numberThreeKey;
	/** @type {FiberPrefab[]} */
	fibers;
	/** @type {Array<BasicTreePrefab|BigTreePrefab|SmallTreePrefab>} */
	trees;

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.editorCreate();

		this.terrainLayer.setCollisionBetween(55899,55934);
		this.farmingLayer.setCollisionBetween(57046,57070);
		//this.farmingLayer.renderDebug(this.add.graphics());

		this.physics.add.existing(this.harvestNpcPrefab, true);
		this.physics.add.collider(this.player, this.farmerNpc);

		this.physics.add.collider(this.player, this.gate,() => {
			if(this.gate.visible == false) return;

			this.scene.start("FishingScene")
		});

		this.gate.visible = true;
		this.gate.alpha = 1;

		this.alertPrefab.showAlert(`Mouse click npc's to talk with them`)
	}

	update(){
		if((this.fibers.filter((x) => x.active == false)).length == this.fibers.length && this.gate.visible == false){
			this.gate.visible = true;
			this.tweens.add({ targets: this.gate, alpha: 1, duration: 3000, ease: 'Linear' });
		}
	}

	harvestNpcConversationDone(){
		this.itemHudPrefab.setItem(this.player,1,1,"FarmToolAnimation",0,Items.WATERING_CAN)
		this.itemHudPrefab.setItem(this.player,2,1,"FarmToolAnimation",4,Items.HOE)
		this.itemHudPrefab.setItem(this.player,3,3,"ItemSeedBag",0,Items.CARROT_SEED)

		this.itemHudPrefab.item3.setScale(0.5,0.5);

		this.player.currentItem = Items.WATERING_CAN

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
