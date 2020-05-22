"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseCounter_1 = require("../../gameplays/BaseCounter");
exports.JokerHandName = [
    'NaturalRoyalFlush',
    '5OfAKind',
    'WildRoyalFlush',
    'StraightFlush',
    '4OfAKind',
    'FullHouse',
    'Flush',
    'Straight',
    '3OfAKind',
    'TwoPair',
    'KingsOrBetter',
    'Nothing'
];
exports.JokerFuncList = [
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
    BaseCounter_1.BaseCounter.hasKingsOrBetterWild,
    BaseCounter_1.BaseCounter.hasNothingWild,
];
