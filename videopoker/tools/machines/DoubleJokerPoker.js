"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseCounter_1 = require("../../gameplays/BaseCounter");
exports.DoubleJokerPokerFuncList = [
    BaseCounter_1.BaseCounter.hasSequentialRoyalFlush,
    BaseCounter_1.BaseCounter.hasNaturalRoyalFlush,
    BaseCounter_1.BaseCounter.hasRoyalFlushWild,
    BaseCounter_1.BaseCounter.hasFiveOfAKindWild,
    BaseCounter_1.BaseCounter.hasStraightFlushWild,
    BaseCounter_1.BaseCounter.hasFourOfAKindWild,
    BaseCounter_1.BaseCounter.hasFullHouseWild,
    BaseCounter_1.BaseCounter.hasFlushWild,
    BaseCounter_1.BaseCounter.hasStraightWild,
    BaseCounter_1.BaseCounter.hasThreeOfAKindWild,
    BaseCounter_1.BaseCounter.hasTwoPairWild,
    BaseCounter_1.BaseCounter.hasNothingWild
];
exports.DoubleJokerPokerHandName = [
    'SequentialRoyalFlush',
    'NaturalRoyalFlush',
    'RoyalFlushW/Joker',
    '5OfAKind',
    'StraightFlush',
    '4OfAKind',
    'FullHouse',
    'Flush',
    'Straight',
    '3OfAKind',
    'TwoPair',
    'Nothing'
];
