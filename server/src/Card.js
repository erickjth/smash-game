import { isArray, intersection, difference } from 'lodash';
import Constants from './Constants';

/**
 * Card Class
 */
class Card {
	constructor(type, colors, value) {
		this.type = type;
		this.colors = isArray(colors) ? colors : [colors];
		this.value = value;

		this.validate();
	}

	validate() {
		// Check if the card type is valid
		if (Constants.CARD_TYPES.includes(this.type) === false)
			throw new Error('Invalid Card Type.');

		// A Card can have four colors maximum
		if (this.colors.length < 1 || this.colors.length > 4)
			throw new Error('Invalid colors for card.');

		// Check if the given color is valid
		if (intersection(this.colors, Constants.COLOR_CARDS).length === 0)
			throw new Error('Invalid Card Color.');

		// Check number cards
		if (
			this.type === Constants.CARD_TYPE_NUMBER && (
				intersection(this.colors, [Constants.CARD_COLOR_WHITE, Constants.CARD_COLOR_BLACK]).length > 0 ||
				Constants.NUMBER_CARDS.includes(this.value) === false ||
				this.colors.length !== 1
			)
		)
			throw new Error('Invalid Card Number.');

		// Two color cards
		const twoColorsCards = [
			Constants.CARD_ALL_PLUS_ONE,
			Constants.CARD_GIFT_PLUS_TWO,
			Constants.CARD_CHANGE_HANDS,
		];

		if (
			twoColorsCards.includes(this.value) && (
				this.colors.length !== 2 || (
					intersection(this.colors, [Constants.CARD_COLOR_BLUE, Constants.CARD_COLOR_GREEN]).length !== 2 &&
					intersection(this.colors, [Constants.CARD_COLOR_YELLOW, Constants.CARD_COLOR_RED]).length !== 2
				)
			)
		)
			throw new Error(`Invalid Card Colors. Card '${this.value}' requires 2 valid colors`);

		const fourColorsCards = [
			Constants.CARD_ANNUL_PUNISHMENT,
			Constants.CARD_REBOUND,
			Constants.CARD_END_GAME,
		];

		if (
			fourColorsCards.includes(this.value) && (
				this.colors.length !== 4 ||
				intersection(this.colors, [
					Constants.CARD_COLOR_BLUE,
					Constants.CARD_COLOR_GREEN,
					Constants.CARD_COLOR_YELLOW,
					Constants.CARD_COLOR_RED
				]).length !== 4
			)
		)
			throw new Error(`Invalid Card Colors. Card '${this.value}' requires 4 colors`);

		if (
			this.type === Constants.CARD_TYPE_WILDCARD && (
				difference(this.colors, [Constants.CARD_COLOR_WHITE, Constants.CARD_COLOR_BLACK]).length > 0 ||
				this.colors.length !== 1
			)
		)
			throw new Error(`Invalid Wildcard Card. Card '${this.value}' requires one color BLACK or WHITE`);
	}
}

export default Card;
