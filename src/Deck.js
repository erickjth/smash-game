import { concat, range } from 'lodash';
import Card from './Card';
import Constants from './Constants';

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
		const colorCards = Constants.COLOR_CARDS.filter(c => ![Constants.CARD_COLOR_WHITE, Constants.CARD_COLOR_BLACK].includes(c));

		const numbers = Constants.NUMBER_CARDS.reduce((numbers, number) => {
			const cards = colorCards.reduce(
				(carry, color) => carry.concat(this.buildRepeatCard(2, Constants.CARD_TYPE_NUMBER, [color], number)),
				[]
			);

			return numbers.concat(cards);
		}, []);

		/**
		 * Build single color Cards
		 */
		const singleColorCards = colorCards.reduce(
			(carry, color) => carry.concat(
				// Punishment - Reverse: There are two (2) cards for each color.
				this.buildRepeatCard(2, Constants.CARD_TYPE_PUNISHMENT, [color], Constants.CARD_REVERSE),
				// Punishment - Annul: There are two (2) cards for each color.
				this.buildRepeatCard(2, Constants.CARD_TYPE_PUNISHMENT, [color], Constants.CARD_ANNUL),
				// Punishment - +1: There are two (3) cards for each color.
				this.buildRepeatCard(3, Constants.CARD_TYPE_PUNISHMENT, [color], Constants.CARD_PLUS_ONE),
				// Event - Smash: There is one (1) card for each color.
				this.buildRepeatCard(1, Constants.CARD_TYPE_EVENT, [color], Constants.CARD_SMASH),
			),
			[]
		);

		/**
		 * Build cards with two colors
		 */
		const twoColorCards = [
			[Constants.CARD_COLOR_YELLOW, Constants.CARD_COLOR_RED],
			[Constants.CARD_COLOR_BLUE, Constants.CARD_COLOR_GREEN]
		].reduce(
			(carry, colors) => carry.concat(
				// Punishment - All plus two: There are two (2) cards for each two colors.
				this.buildRepeatCard(1, Constants.CARD_TYPE_PUNISHMENT, colors, Constants.CARD_ALL_PLUS_ONE),
				// Punishment - Gift Plus two: There are two (2) cards for each two colors.
				this.buildRepeatCard(1, Constants.CARD_TYPE_PUNISHMENT, colors, Constants.CARD_GIFT_PLUS_TWO),
				// Event - Change hands: There are two (2) cards for each two colors.
				this.buildRepeatCard(1, Constants.CARD_TYPE_EVENT, colors, Constants.CARD_CHANGE_HANDS),
			),
			[]
		);

		/**
		 * Build cards with four colors
		 */
		const fourColorCards = concat(
			// Event - Annul Punishment: There are two (2) cards with the 4 colors.
			this.buildRepeatCard(2, Constants.CARD_TYPE_EVENT, colorCards, Constants.CARD_ANNUL_PUNISHMENT),
			// Event - Rebound: There are two (2) cards with the 4 colors.
			this.buildRepeatCard(2, Constants.CARD_TYPE_EVENT, colorCards, Constants.CARD_REBOUND),
			// Event - EndGame: There is one (1) card with the 4 colors.
			this.buildRepeatCard(1, Constants.CARD_TYPE_EVENT, colorCards, Constants.CARD_END_GAME),
		);

		/**
		 * Build wildcard cards.
		 */
		const wildcardCards = [
			...this.buildRepeatCard(3, Constants.CARD_TYPE_WILDCARD, [Constants.CARD_COLOR_WHITE], Constants.CARD_CHANGE_COLOR),
			new Card(Constants.CARD_TYPE_WILDCARD, [Constants.CARD_COLOR_BLACK], Constants.CARD_PLUS_TWO),
			new Card(Constants.CARD_TYPE_WILDCARD, [Constants.CARD_COLOR_BLACK], Constants.CARD_PLUS_THREE),
			new Card(Constants.CARD_TYPE_WILDCARD, [Constants.CARD_COLOR_BLACK], Constants.CARD_PLUS_FOUR),
			new Card(Constants.CARD_TYPE_WILDCARD, [Constants.CARD_COLOR_BLACK], Constants.CARD_PLUS_FIVE),
			new Card(Constants.CARD_TYPE_WILDCARD, [Constants.CARD_COLOR_BLACK], Constants.CARD_PLUS_SIX),
		];

		this.cards = concat(numbers, singleColorCards, twoColorCards, fourColorCards, wildcardCards);
	}

	buildRepeatCard(qty, type, colors, value) {
		return range(qty).map(() => (new Card(type, colors, value)));
	}

	getCards() {
		return this.cards;
	}
}

export default Deck;
