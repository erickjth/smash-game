const Constans = {};

/** Card Types */
Constans.CARD_TYPE_NUMBER = 'CARD_TYPE_NUMBER';
Constans.CARD_TYPE_PUNISHMENT = 'CARD_TYPE_PUNISHMENT';
Constans.CARD_TYPE_EVENT = 'CARD_TYPE_EVENT';
Constans.CARD_TYPE_WILDCARD = 'CARD_TYPE_WILDCARD';

Constans.CARD_TYPES = [
	Constans.CARD_TYPE_NUMBER,
	Constans.CARD_TYPE_PUNISHMENT,
	Constans.CARD_TYPE_EVENT,
	Constans.CARD_TYPE_WILDCARD,
];

/** Card Colors */
Constans.CARD_COLOR_YELLOW = 'CARD_COLOR_YELLOW';
Constans.CARD_COLOR_BLUE = 'CARD_COLOR_BLUE';
Constans.CARD_COLOR_RED = 'CARD_COLOR_RED';
Constans.CARD_COLOR_GREEN = 'CARD_COLOR_GREEN';
Constans.CARD_COLOR_WHITE = 'CARD_COLOR_WHITE';
Constans.CARD_COLOR_BLACK = 'CARD_COLOR_BLACK';

Constans.COLOR_CARDS = [
	Constans.CARD_COLOR_YELLOW,
	Constans.CARD_COLOR_BLUE,
	Constans.CARD_COLOR_RED,
	Constans.CARD_COLOR_GREEN,
	Constans.CARD_COLOR_WHITE,
	Constans.CARD_COLOR_BLACK,
];

/** Numbers Card  */
Constans.CARD_ZERO = 0;
Constans.CARD_ONE = 1;
Constans.CARD_TWO = 2;
Constans.CARD_THREE = 3;
Constans.CARD_FOUR = 4;
Constans.CARD_FIVE = 5;
Constans.CARD_SIX = 6;
Constans.CARD_SEVEN = 7;
Constans.CARD_EIGHT = 8;

Constans.NUMBER_CARDS = [
	Constans.CARD_ZERO,
	Constans.CARD_ONE,
	Constans.CARD_TWO,
	Constans.CARD_THREE,
	Constans.CARD_FOUR,
	Constans.CARD_FIVE,
	Constans.CARD_SIX,
	Constans.CARD_SEVEN,
	Constans.CARD_EIGHT,
];

/** Punishment Cards */
Constans.CARD_REVERSE = 'CARD_REVERSE';
Constans.CARD_ANNUL = 'CARD_ANNUL';
Constans.CARD_PLUS_ONE = 'CARD_PLUS_ONE';
Constans.CARD_ALL_PLUS_ONE = 'CARD_ALL_PLUS_ONE';
Constans.CARD_GIFT_PLUS_TWO = 'CARD_ALL_PLUS_ONE';

Constans.PUNISHMENT_CARDS = [
	Constans.CARD_REVERSE,
	Constans.CARD_ANNUL,
	Constans.CARD_PLUS_ONE,
	Constans.CARD_ALL_PLUS_ONE,
	Constans.CARD_GIFT_PLUS_TWO,
];

/** Event Cards */
Constans.CARD_ANNUL_PUNISHMENT = 'CARD_ANNUL_PUNISHMENT';
Constans.CARD_REBOUND = 'CARD_REBOUND';
Constans.CARD_CHANGE_HANDS = 'CARD_CHANGE_HANDS';
Constans.CARD_END_GAME = 'CARD_END_GAME';
Constans.CARD_SMASH = 'CARD_SMASH';

Constans.EVENT_CARDS = [
	Constans.CARD_ANNUL_PUNISHMENT,
	Constans.CARD_REBOUND,
	Constans.CARD_CHANGE_HANDS,
	Constans.CARD_END_GAME,
	Constans.CARD_SMASH
];

/** Wildcard Cards */
Constans.CARD_CHANGE_COLOR = 'CARD_CHANGE_COLOR';
Constans.CARD_PLUS_TWO = 'CARD_PLUS_TWO';
Constans.CARD_PLUS_THREE = 'CARD_PLUS_THREE';
Constans.CARD_PLUS_FOUR = 'CARD_PLUS_FOUR';
Constans.CARD_PLUS_FIVE = 'CARD_PLUS_FIVE';
Constans.CARD_PLUS_SIX = 'CARD_PLUS_SIX';

Constans.WILDCARD_CARDS = [
	Constans.CARD_CHANGE_COLOR,
	Constans.CARD_PLUS_TWO,
	Constans.CARD_PLUS_THREE,
	Constans.CARD_PLUS_FOUR,
	Constans.CARD_PLUS_FIVE,
	Constans.CARD_PLUS_SIX,
];

module.exports = { ...Constans };
