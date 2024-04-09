import { createElm } from "./utils.js";

const CardCreator = (function () {
	const body = document.querySelector(".vertical-scroll");
	const GOOGLE_ICON = "material-symbols-outlined";

	const createCard = function (name, weightVal, settingsVal, restVal) {
		const PLACEHOLDER_IMG =
			"https://images.unsplash.com/photo-1690731033723-ad718c6e585a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

		const newCard = createElm({ type: "div", classes: "exerciseCard" });

		const newCardImg = createElm({
			type: "div",
			classes: "exerciseImg",
			parent: newCard,
		});
		newCardImg.style.backgroundImage = `linear-gradient(rgba(100, 100, 100, 0.5), rgba(30, 30, 30, 0.8)), url(${PLACEHOLDER_IMG})`;

		const newExercise = createElm({
			classes: "exerciseContainer",
			parent: newCard,
		});

		const exerciseName = createElm({
			type: "h4",
			text: name,
			parent: newExercise,
		});

		const nameIcon = createElm({
			type: "span",
			classes: GOOGLE_ICON,
			text: "fitness_center",
			parent: exerciseName,
		});

		const sets = createElm({
			type: "p",
			classes: "sets",
			parent: newExercise,
		});

		const setsValue = createElm({
			type: "span",
			classes: ["value", "sets-value"],
			text: "4x8",
			parent: sets,
		});

		const paramsText = createElm({
			type: "h2",
			classes: "params",
			text: "Parameters",
			parent: newExercise,
		});

		createParam("Weight", "weight", weightVal, newExercise);
		createParam("Settings", "settings", settingsVal, newExercise);
		createParam("Rest", "timer", restVal, newExercise);

		const doButton = createElm({
			type: "button",
			classes: "do-set-btn",
			text: "Complete Set",
			parent: newExercise,
		});

		body.insertBefore(
			newCard,
			document.querySelector(".vertical-scroll").firstChild
		);

		return newCard;
	};

	function createParam(text, icon, value, card) {
		const newParamText = createElm({
			type: "p",
			classes: ["param", text.toLowerCase()],
			text: text,
			parent: card,
		});

		const newParamIcon = createElm({
			type: "span",
			classes: [GOOGLE_ICON, "icon"],
			text: icon,
			parent: newParamText,
		});

		const newParamValue = createElm({
			type: "p",
			classes: ["value", `${text.toLowerCase()}-value`],
			text: String(value),
			parent: card,
		});
	}

	return { createCard };
})();

const GroupCreator = (function () {
	const body = document.querySelector(".vertical-scroll");

	function createGroup(groups, exercises) {
		for (let i = 0; i < groups; i++) {
			const newGroup = createElm({
				classes: ["group-container", "group" + i],
				parent: body,
			});
			const groupName = createElm({
				type: "h2",
				text: "Muscle Group",
				parent: newGroup,
			});
			const cardsContainer = createElm({
				classes: "cardsContainer",
				parent: newGroup,
			});
			for (let j = 0; j < exercises; j++) {
				const newCard = CardCreator.createCard("Bench Press", "45kg", 0, "1'");
				cardsContainer.appendChild(newCard);
			}
		}
	}

  return {createGroup}
})();

GroupCreator.createGroup(3,5);
