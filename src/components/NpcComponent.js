
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class NpcComponent extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__NpcComponent"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {NpcComponent} */
	static getComponent(gameObject) {
		return gameObject["__NpcComponent"];
	}

	/** @type {Phaser.GameObjects.Sprite} */
	gameObject;
	/** @type {Phaser.GameObjects.GameObject} */
	player;
	/** @type {Phaser.GameObjects.GameObject} */
	msgContainer;
	/** @type {string} */
	npcMessage = "";
	/** @type {Function} */
	onConversationComplete = () => console.log("default complete event");

	/* START-USER-CODE */

	/** @type {Phaser.Physics.Arcade.Collider} */
	playerNpcCollider;

	/** @type {Boolean} */
	npcFound;

	/** @type {Phaser.Input.Keyboard.Key} */
	spaceKey;

	// Write your code here.

	wordLimit = 20;
	isConversationDone = false;
	conversationLength = 1;
	conversationIndex = 0;

	awake(){
		this.playerNpcCollider = this.scene.physics.add.collider(this.gameObject, this.player, () => {}, undefined, this);
		this.spaceKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

		if(this.gameObject.msg){
			if(this.gameObject.msg.length > 0){
				this.npcMessage = limitWords(this.gameObject.msg,this.wordLimit);			
				this.conversationLength = this.npcMessage.length
			}else{
				this.npcMessage = ["Default Text","Default Text"]
			}
		}else {
			if(this.npcMessage.length > 0){
				this.npcMessage = limitWords(this.npcMessage,this.wordLimit);			
				this.conversationLength = this.npcMessage.length
			}else{
				this.npcMessage = ["Default Text","Default Text"]
			}
		}



		this.msgContainer.alertMessage.text = this.npcMessage[this.conversationIndex];

		this.gameObject.setInteractive({ useHandCursor: true})
		this.gameObject.on("pointerdown",() => {
			this.msgContainer.showNpcMsg();
		})

		// console.log(this.msgContainer.alertContainer);
		
		this.msgContainer.alertContainer.on("pointerdown",() => {
			if(this.isConversationDone){
				if(this.msgContainer.alertContainer.visibility == true) return

				this.msgContainer.hideNpcMsg();
				this.onConversationComplete();
			}

			if(this.conversationIndex +1 != this.conversationLength){
				this.conversationIndex += 1;
				this.msgContainer.alertMessage.text = this.npcMessage[this.conversationIndex];
			}

			if(this.conversationIndex + 1 == this.conversationLength){
				this.isConversationDone = true;
			}
		})

	}

	checkIfBodyIsTouching(){
		if(this.player.body.wasTouching.up) return true
		if(this.player.body.wasTouching.down) return true
		if(this.player.body.wasTouching.left) return true
		if(this.player.body.wasTouching.right) return true

		return false
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

function limitWords(paragraph, wordLimit) {
    // Split the paragraph into words, trimming whitespace
    const words = paragraph.trim().split(/\s+/);

    // If the word count is already within the limit, return the whole paragraph as a single-element array
    if (words.length <= wordLimit) {
        return [paragraph];
    }

    // Use reduce to create chunks of words
    let paragraphs = words.reduce((result, word, index) => {
        const chunkIndex = Math.floor(index / wordLimit);

        if (!result[chunkIndex]) {
            result[chunkIndex] = [];
        }

        result[chunkIndex].push(word);

        return result;
    }, []).map(chunk => chunk.join(' '));

	for (let i = 0; i < paragraphs.length - 1; i++) {
		paragraphs[i] += "...";

	}

	return paragraphs
}
