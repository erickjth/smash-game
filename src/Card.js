const { isArray, intersection, difference } = require('lodash');
const Consts = require('./Constants');

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
		if (Consts.CARD_TYPES.includes(this.type) === false) {
			throw new Error('Invalid Card Type.');
		}

		// A Card can have four colors maximun
		if (this.colors.length < 1 || this.colors.length > 4) {
			throw new Error('Invalid colors for card.');
		}

		// Check if the given color is valid
		if (intersection(this.colors, Consts.COLOR_CARDS).length === 0) {
			throw new Error('Invalid Card Color.');
		}

		// Check number cards
		if (
			this.type === Consts.CARD_TYPE_NUMBER && (
				intersection(this.colors, [Consts.CARD_COLOR_WHITE, Consts.CARD_COLOR_BLACK]).length > 0 ||
				Consts.NUMBER_CARDS.includes(this.value) === false ||
				this.colors.length !== 1
			)
		) {
			throw new Error('Invalid Card Number.');
		}

		// Two color cards
		const twoColorsCards = [
			Consts.CARD_ALL_PLUS_ONE,
			Consts.CARD_GIFT_PLUS_TWO,
			Consts.CARD_CHANGE_HANDS,
		];

		if (
			twoColorsCards.includes(this.value) && (
				this.colors.length !== 2 || (
					intersection(this.colors, [Consts.CARD_COLOR_BLUE, Consts.CARD_COLOR_GREEN]).length !== 2 &&
					intersection(this.colors, [Consts.CARD_COLOR_YELLOW, Consts.CARD_COLOR_RED]).length !== 2
				)
			)
		) {
			throw new Error(`Invalid Card Colors. Card '${this.value}' requires 2 valid colors`);
		}

		const fourColorsCards = [
			Consts.CARD_ANNUL_PUNISHMENT,
			Consts.CARD_REBOUND,
			Consts.CARD_END_GAME,
		];

		if (
			fourColorsCards.includes(this.value) && (
				this.colors.length !== 4 ||
				intersection(this.colors, [
					Consts.CARD_COLOR_BLUE,
					Consts.CARD_COLOR_GREEN,
					Consts.CARD_COLOR_YELLOW,
					Consts.CARD_COLOR_RED
				]).length !== 4
			)
		) {
			throw new Error(`Invalid Card Colors. Card '${this.value}' requires 4 colors`);
		}

		if (
			this.type === Consts.CARD_TYPE_WILDCARD && (
				difference(this.colors, [Consts.CARD_COLOR_WHITE, Consts.CARD_COLOR_BLACK]).length > 0 ||
				this.colors.length !== 1
			)
		) {
			throw new Error(`Invalid Wildcard Card. Card '${this.value}' requires one color BLACK or WHITE`);
		}

	}
}

module.exports = Card;
