"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseCounter_1 = require("../../gameplays/BaseCounter");
exports.DoubleDoubleBonusPokerPlusHandName = [
    'RoyalFlush',
    'StraightFlush',
    '4AcesW/Any2,3,4',
    '4Aces',
    '42s,3s,4sW/Ace,2,3,4',
    '42s,3s,4s',
    '45sThruKingsPlusAce',
    '45sThruKs',
    'FullHouse',
    'Flush',
    'Straight',
    '3OfAKind',
    'TwoPair',
    'JacksOrBetter',
    'Nothing'
];
exports.DoubleDoubleBonusPokerPlusFuncList = [
    BaseCounter_1.BaseCounter.hasNaturalRoyalFlush,
    BaseCounter_1.BaseCounter.hasStraightFlush,
    BaseCounter_1.BaseCounter.has4AcesWTwoThreeFour,
    BaseCounter_1.BaseCounter.has4Aces,
    BaseCounter_1.BaseCounter.has4TwosThreesFoursWAceTwoThreeFour,
    BaseCounter_1.BaseCounter.has4TwosThreesFours,
    BaseCounter_1.BaseCounter.has4FivesThruKsPlusAce,
    BaseCounter_1.BaseCounter.has4FivesThruKs,
    BaseCounter_1.BaseCounter.hasFullHouse,
    BaseCounter_1.BaseCounter.hasFlush,
    BaseCounter_1.BaseCounter.hasStraight,
    BaseCounter_1.BaseCounter.hasThreeOfAKind,
    BaseCounter_1.BaseCounter.hasTwoPair,
    BaseCounter_1.BaseCounter.hasJacksOrBetter,
    BaseCounter_1.BaseCounter.hasNothing
];
