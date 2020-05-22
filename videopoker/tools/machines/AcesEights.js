"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseCounter_1 = require("../../gameplays/BaseCounter");
exports.AcesEightsHandName = [
    'SequentialRoyalFlush',
    'RoyalFlush',
    'StraightFlush',
    '4AcesOr8s',
    '4Sevens',
    '4OfAKind',
    'FullHouse',
    'Flush',
    'Straight',
    '3OfAKind',
    'TwoPair',
    'JacksOrBetter',
    'Nothing'
];
exports.AcesEightsFuncList = [
    BaseCounter_1.BaseCounter.hasSequentialRoyalFlush,
    BaseCounter_1.BaseCounter.hasNaturalRoyalFlush,
    BaseCounter_1.BaseCounter.hasStraightFlush,
    BaseCounter_1.BaseCounter.has4Aces4Eights,
    BaseCounter_1.BaseCounter.has4Sevens,
    BaseCounter_1.BaseCounter.hasFourOfAKind,
    BaseCounter_1.BaseCounter.hasFullHouse,
    BaseCounter_1.BaseCounter.hasFlush,
    BaseCounter_1.BaseCounter.hasStraight,
    BaseCounter_1.BaseCounter.hasThreeOfAKind,
    BaseCounter_1.BaseCounter.hasTwoPair,
    BaseCounter_1.BaseCounter.hasJacksOrBetter,
    BaseCounter_1.BaseCounter.hasNothing
];
