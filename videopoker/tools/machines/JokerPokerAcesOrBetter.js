"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseCounter_1 = require("../../gameplays/BaseCounter");
exports.JokerPokerAcesOrBetterHandName = [
    'NaturalRoyalFlush',
    '5OfAKind',
    'RoyalFlushW/Joker',
    'StraightFlush',
    '4OfAKind',
    'FullHouse',
    'Flush',
    'Straight',
    '3OfAKind',
    'TwoPair',
    'PairOfAces',
    'Nothing'
];
exports.JokerPokerAcesOrBetterFuncList = [
    BaseCounter_1.BaseCounter.hasNaturalRoyalFlush,
    BaseCounter_1.BaseCounter.hasFiveOfAKindWild,
    BaseCounter_1.BaseCounter.hasRoyalFlushWild,
    BaseCounter_1.BaseCounter.hasStraightFlushWild,
    BaseCounter_1.BaseCounter.hasFourOfAKindWild,
    BaseCounter_1.BaseCounter.hasFullHouseWild,
    BaseCounter_1.BaseCounter.hasFlushWild,
    BaseCounter_1.BaseCounter.hasStraightWild,
    BaseCounter_1.BaseCounter.hasThreeOfAKindWild,
    BaseCounter_1.BaseCounter.hasTwoPairWild,
    BaseCounter_1.BaseCounter.has2AcesWild,
    BaseCounter_1.BaseCounter.hasNothing
];
