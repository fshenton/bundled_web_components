import template from "./template.js"; 
import { randomInt } from "./utils.js";

class FriendlyButton extends HTMLElement {
	
	constructor(){
		super();
		this.compliments = [ 
			"You're looking mighty fine today! 😊",
			"I like your face very much.",
			"Wah wah wee wah. Very nice 👌",
			"You can sit on my lap anytime 🎅",
			"I think you're fantastic!"
		];
		this.logGreeting = this.logGreeting.bind(this);
	}
	connectedCallback(){
		const clone = document.importNode(template.content, true);
		const button = clone.querySelector("button");

		button.addEventListener("click", this.logGreeting);

		this.appendChild(clone);

	}
	logGreeting(){
		const min = 0;
		const max = this.compliments.length-1;
		const index = randomInt(min, max);

		console.log(this.compliments[index]);
	}
}

export default FriendlyButton;