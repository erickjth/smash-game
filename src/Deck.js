const { concat, range } = require('lodash');
const Consts = require('./Constants');
const Card = require('./Card');

class Deck {
	constructor() {
		this.buildDesk();
	}

	buildDesk() {
		/**
		 * Build Number Cards
		 *
		 * There are two (2) cards by number and color.
		 */
		const colorCards = Consts.COLOR_CARDS.filter(c => ![Consts.CARD_COLOR_WHITE, Consts.CARD_COLOR_BLACK].includes(c));

		const numbers = Consts.NUMBER_CARDS.reduce((numbers, number) => {
			const cards = colorCards.reduce(
				(carry, color) => carry.concat(this.buildRepeatCard(2, Consts.CARD_TYPE_NUMBER, [color], number)),
			[]);

			return numbers.concat(cards);
		}, []);

		/**
		 * Build single color Cards
		 */
		const singleColorCards = colorCards.reduce(
			(carry, color) => carry.concat(
				// Punishment - Reverse: There are two (2) cards for each color.
				this.buildRepeatCard(2, Consts.CARD_TYPE_PUNISHMENT, [color], Consts.CARD_REVERSE),
				// Punishment - Annul: There are two (2) cards for each color.
				this.buildRepeatCard(2, Consts.CARD_TYPE_PUNISHMENT, [color], Consts.CARD_ANNUL),
				// Punishment - +1: There are two (3) cards for each color.
				this.buildRepeatCard(3, Consts.CARD_TYPE_PUNISHMENT, [color], Consts.CARD_PLUS_ONE),
				// Event - Smash: There is one (1) card for each color.
				this.buildRepeatCard(1, Consts.CARD_TYPE_EVENT, [color], Consts.CARD_SMASH),
			),
		[]);

		/**
		 * Build cards with two colors
		 */
		const twoColorCards = [
			[Consts.CARD_COLOR_YELLOW, Consts.CARD_COLOR_RED],
			[Consts.CARD_COLOR_BLUE, Consts.CARD_COLOR_GREEN]
		].reduce(
			(carry, colors) => carry.concat(
				// Punishment - All plus two: There are two (2) cards for each two colors.
				this.buildRepeatCard(1, Consts.CARD_TYPE_PUNISHMENT, colors, Consts.CARD_ALL_PLUS_ONE),
				// Punishment - Gift Plus two: There are two (2) cards for each two colors.
				this.buildRepeatCard(1, Consts.CARD_TYPE_PUNISHMENT, colors, Consts.CARD_GIFT_PLUS_TWO),
				// Event - Change hands: There are two (2) cards for each two colors.
				this.buildRepeatCard(1, Consts.CARD_TYPE_EVENT, colors, Consts.CARD_CHANGE_HANDS),
			),
		[]);

		/**
		 * Build cards with four colors
		 */
		const fourColorCards = concat(
			// Event - Annul Pusnisment: There are two (2) cards with the 4 colors.
			this.buildRepeatCard(2, Consts.CARD_TYPE_EVENT, colorCards, Consts.CARD_ANNUL_PUNISHMENT),
			// Event - Rebound: There are two (2) cards with the 4 colors.
			this.buildRepeatCard(2, Consts.CARD_TYPE_EVENT, colorCards, Consts.CARD_REBOUND),
			// Event - EndGame: There is one (1) card with the 4 colors.
			this.buildRepeatCard(1, Consts.CARD_TYPE_EVENT, colorCards, Consts.CARD_END_GAME),
		);

		/**
		 * Build wildcard cards.
		 */
		const wildcardCards = [
			...this.buildRepeatCard(3, Consts.CARD_TYPE_WILDCARD, [Consts.CARD_COLOR_WHITE], Consts.CARD_CHANGE_COLOR),
			new Card(Consts.CARD_TYPE_WILDCARD, [Consts.CARD_COLOR_BLACK], Consts.CARD_PLUS_TWO),
			new Card(Consts.CARD_TYPE_WILDCARD, [Consts.CARD_COLOR_BLACK], Consts.CARD_PLUS_THREE),
			new Card(Consts.CARD_TYPE_WILDCARD, [Consts.CARD_COLOR_BLACK], Consts.CARD_PLUS_FOUR),
			new Card(Consts.CARD_TYPE_WILDCARD, [Consts.CARD_COLOR_BLACK], Consts.CARD_PLUS_FIVE),
			new Card(Consts.CARD_TYPE_WILDCARD, [Consts.CARD_COLOR_BLACK], Consts.CARD_PLUS_SIX),
		];

		this.cards = concat(numbers, singleColorCards, twoColorCards, fourColorCards, wildcardCards);
	}

	buildRepeatCard(qty, type, colors, value) {
		return range(qty).map(_ => new Card(type, colors, value));
	}

	getCards() {
		return this.cards;
	}
}


module.exports = Deck;
