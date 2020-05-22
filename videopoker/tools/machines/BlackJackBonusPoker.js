"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseCounter_1 = require("../../gameplays/BaseCounter");
exports.BlackJackBonusPokerFuncList = [
    BaseCounter_1.BaseCounter.hasNaturalRoyalFlush,
    BaseCounter_1.BaseCounter.has4AcesAndBlackJ,
    BaseCounter_1.BaseCounter.has4TwosThruFoursAndBlackJ,
    BaseCounter_1.BaseCounter.has4FivesThruKsAndBlackJ,
    BaseCounter_1.BaseCounter.has4AcesJs,
    BaseCounter_1.BaseCounter.has4TwosThreesFours,
    BaseCounter_1.BaseCounter.hasStraightFlush,
    BaseCounter_1.BaseCounter.hasFourOfAKind,
    BaseCounter_1.BaseCounter.hasFullHouse,
    BaseCounter_1.BaseCounter.hasFlush,
    BaseCounter_1.BaseCounter.hasStraight,
    BaseCounter_1.BaseCounter.hasThreeOfAKind,
    BaseCounter_1.BaseCounter.hasTwoPair,
    BaseCounter_1.BaseCounter.hasJacksOrBetter,
    BaseCounter_1.BaseCounter.hasNothing
];
exports.BlackJackBonusPokerHandName = [
    'RoyalFlush',
    '4AcesW/BlackJack',
    '42s,3s,4sW/BlackJack',
    '4OfAKindW/BlackJack',
    '4AcesOrJacks',
    '42s,3s,4s',
    'StraightFlush',
    '4OfAKind',
    'FullHouse',
    'Flush',
    'Straight',
    '3OfAKind',
    'TwoPair',
    'JacksOrBetter',
    'Nothing',
];
