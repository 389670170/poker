"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseCounter_1 = require("../../gameplays/BaseCounter");
exports.BonusDrawPokerFuncList = [
    BaseCounter_1.BaseCounter.hasNaturalRoyalFlush,
    BaseCounter_1.BaseCounter.hasStraightFlush,
    BaseCounter_1.BaseCounter.has4Aces,
    BaseCounter_1.BaseCounter.has4TwosThreesFours,
    BaseCounter_1.BaseCounter.has4FivesThruKs,
    BaseCounter_1.BaseCounter.hasFullHouse,
    BaseCounter_1.BaseCounter.hasFlush,
    BaseCounter_1.BaseCounter.hasStraight,
    BaseCounter_1.BaseCounter.hasThreeOfAKind,
    BaseCounter_1.BaseCounter.hasTwoPair,
    BaseCounter_1.BaseCounter.hasJacksOrBetter,
    BaseCounter_1.BaseCounter.hasNothing
];
exports.BonusDrawPokerHandName = [
    'RoyalFlush',
    'StraightFlush',
    '4Aces',
    '42s,3s,4s',
    '45sThruKings',
    'FullHouse',
    'Flush',
    'Straight',
    'ThreeOfAKind',
    'TwoPair',
    'JacksOrBetter',
    'Nothing'
];