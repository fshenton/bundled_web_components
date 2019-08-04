import s from "./styles.scss";

const template = document.createElement("template");

template.innerHTML = `
	<button class="${s.wrapper}">
		<span class="${s.label}">
			Happy Time!
		</span>
	</button>
`;

export default template;