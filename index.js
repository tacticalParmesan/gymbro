import { createElm } from "./utils.js";
import { workoutOne } from "./workout.js";

const CardCreator = (function () {
	const body = document.querySelector(".vertical-scroll");
	const GOOGLE_ICON = "material-symbols-outlined";

	const createCard = function (name, weightVal, settingsVal, restVal) {
		
		const newCard = createElm({ type: "div", classes: "exerciseCard" });

    const exerciseImg = `./assets/${getImgName(name)}.jpg`;

		const newCardImg = createElm({
			type: "div",
			classes: "exerciseImg",
			parent: newCard,
		});
		newCardImg.style.backgroundImage = `linear-gradient(rgba(100, 100, 100, 0.5), rgba(30, 30, 30, 0.8)), url(${exerciseImg})`;

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

  function getImgName(name){

    const splitName = name.split(" ");

    if (splitName.length > 1) {
      return `${splitName[0].toLowerCase()}-${splitName[1].toLowerCase()}`;
    } else {
      return `${splitName[0].toLowerCase()}`
    }
    
  }

	return { createCard };
})();

const GroupCreator = (function () {
	const body = document.querySelector(".vertical-scroll");

	function createGroup(workout) {
		for (const key in workout) {
      const group = workout[key]

			const newGroup = createElm({
				classes: ["group-container"],
				parent: body,
			});
			const groupName = createElm({
				type: "h2",
				text: group.groupName,
				parent: newGroup,
			});
			const cardsContainer = createElm({
				classes: "cardsContainer",
				parent: newGroup,
			});
			for (const key in group.exercises) {
        const exercise = group.exercises[key];
				const newCard = CardCreator.createCard(
          exercise.name,
          exercise.weight,
          exercise.settings,
          exercise.rest
          );
				cardsContainer.appendChild(newCard);
			}
		}
	}

  return {createGroup}
})();

GroupCreator.createGroup(workoutOne);
