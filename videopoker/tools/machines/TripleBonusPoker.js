"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseCounter_1 = require("../../gameplays/BaseCounter");
exports.TripleBonusPokerHandName = [
    'RoyalFlush',
    'StraightFlush',
    '4Aces',
    '42s,3s,4s',
    '45sThruKings',
    'FullHouse',
    'Flush',
    'Straight',
    '3OfAKind',
    'TwoPair',
    'kingsOrBetter',
    'Nothing'
];
exports.TripleBonusPokerFuncList = [
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
    BaseCounter_1.BaseCounter.hasKingsOrBetter,
    BaseCounter_1.BaseCounter.hasNothing
];
