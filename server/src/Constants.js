const Constants = {};

/** Card Types */
Constants.CARD_TYPE_NUMBER = 'CARD_TYPE_NUMBER';
Constants.CARD_TYPE_PUNISHMENT = 'CARD_TYPE_PUNISHMENT';
Constants.CARD_TYPE_EVENT = 'CARD_TYPE_EVENT';
Constants.CARD_TYPE_WILDCARD = 'CARD_TYPE_WILDCARD';

Constants.CARD_TYPES = [
	Constants.CARD_TYPE_NUMBER,
	Constants.CARD_TYPE_PUNISHMENT,
	Constants.CARD_TYPE_EVENT,
	Constants.CARD_TYPE_WILDCARD,
];

/** Card Colors */
Constants.CARD_COLOR_YELLOW = 'CARD_COLOR_YELLOW';
Constants.CARD_COLOR_BLUE = 'CARD_COLOR_BLUE';
Constants.CARD_COLOR_RED = 'CARD_COLOR_RED';
Constants.CARD_COLOR_GREEN = 'CARD_COLOR_GREEN';
Constants.CARD_COLOR_WHITE = 'CARD_COLOR_WHITE';
Constants.CARD_COLOR_BLACK = 'CARD_COLOR_BLACK';

Constants.COLOR_CARDS = [
	Constants.CARD_COLOR_YELLOW,
	Constants.CARD_COLOR_BLUE,
	Constants.CARD_COLOR_RED,
	Constants.CARD_COLOR_GREEN,
	Constants.CARD_COLOR_WHITE,
	Constants.CARD_COLOR_BLACK,
];

/** Numbers Card  */
Constants.CARD_ZERO = 0;
Constants.CARD_ONE = 1;
Constants.CARD_TWO = 2;
Constants.CARD_THREE = 3;
Constants.CARD_FOUR = 4;
Constants.CARD_FIVE = 5;
Constants.CARD_SIX = 6;
Constants.CARD_SEVEN = 7;
Constants.CARD_EIGHT = 8;

Constants.NUMBER_CARDS = [
	Constants.CARD_ZERO,
	Constants.CARD_ONE,
	Constants.CARD_TWO,
	Constants.CARD_THREE,
	Constants.CARD_FOUR,
	Constants.CARD_FIVE,
	Constants.CARD_SIX,
	Constants.CARD_SEVEN,
	Constants.CARD_EIGHT,
];

/** Punishment Cards */
Constants.CARD_REVERSE = 'CARD_REVERSE';
Constants.CARD_ANNUL = 'CARD_ANNUL';
Constants.CARD_PLUS_ONE = 'CARD_PLUS_ONE';
Constants.CARD_ALL_PLUS_ONE = 'CARD_ALL_PLUS_ONE';
Constants.CARD_GIFT_PLUS_TWO = 'CARD_ALL_PLUS_ONE';

Constants.PUNISHMENT_CARDS = [
	Constants.CARD_REVERSE,
	Constants.CARD_ANNUL,
	Constants.CARD_PLUS_ONE,
	Constants.CARD_ALL_PLUS_ONE,
	Constants.CARD_GIFT_PLUS_TWO,
];

/** Event Cards */
Constants.CARD_ANNUL_PUNISHMENT = 'CARD_ANNUL_PUNISHMENT';
Constants.CARD_REBOUND = 'CARD_REBOUND';
Constants.CARD_CHANGE_HANDS = 'CARD_CHANGE_HANDS';
Constants.CARD_END_GAME = 'CARD_END_GAME';
Constants.CARD_SMASH = 'CARD_SMASH';

Constants.EVENT_CARDS = [
	Constants.CARD_ANNUL_PUNISHMENT,
	Constants.CARD_REBOUND,
	Constants.CARD_CHANGE_HANDS,
	Constants.CARD_END_GAME,
	Constants.CARD_SMASH
];

/** Wildcard Cards */
Constants.CARD_CHANGE_COLOR = 'CARD_CHANGE_COLOR';
Constants.CARD_PLUS_TWO = 'CARD_PLUS_TWO';
Constants.CARD_PLUS_THREE = 'CARD_PLUS_THREE';
Constants.CARD_PLUS_FOUR = 'CARD_PLUS_FOUR';
Constants.CARD_PLUS_FIVE = 'CARD_PLUS_FIVE';
Constants.CARD_PLUS_SIX = 'CARD_PLUS_SIX';

Constants.WILDCARD_CARDS = [
	Constants.CARD_CHANGE_COLOR,
	Constants.CARD_PLUS_TWO,
	Constants.CARD_PLUS_THREE,
	Constants.CARD_PLUS_FOUR,
	Constants.CARD_PLUS_FIVE,
	Constants.CARD_PLUS_SIX,
];

export default { ...Constants };
