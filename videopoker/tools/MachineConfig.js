"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JokerCounter_1 = require("../../video-poker-trainer/src/gameplays/JokerCounter");
const JacksOrBetterCounter_1 = require("../../video-poker-trainer/src/gameplays/JacksOrBetterCounter");
const DeucesWildCounter_1 = require("../../video-poker-trainer/src/gameplays/DeucesWildCounter");
var MachineTag;
(function (MachineTag) {
    MachineTag["jacksOrBetter"] = "job";
    MachineTag["deucesWild"] = "dw";
    MachineTag["joker"] = "joker";
})(MachineTag = exports.MachineTag || (exports.MachineTag = {}));
exports.JacksOrBetterHandName = [
    'RoyalFlush',
    'StraightFlush',
    'FourOfAKind',
    'FullHouse',
    'Flush',
    'Straight',
    'ThreeOfAKind',
    'TwoPair',
    'JacksOrBetter',
    'Nothing'
];
exports.DeucesWildHandName = [
    'NaturalRoyalFlush',
    'FourDeuces',
    'WildRoyalFlush',
    'FiveOfAKind',
    'StraightFlush',
    'FourOfAKind',
    'FullHouse',
    'Flush',
    'Straight',
    'ThreeOfAKind',
    'Nothing'
];
exports.JokerHandName = [
    'NaturalRoyalFlush',
    'FiveOfAKind',
    'WildRoyalFlush',
    'StraightFlush',
    'FourOfAKind',
    'FullHouse',
    'Flush',
    'Straight',
    'ThreeOfAKind',
    'TwoPair',
    'KingsOrBetter',
    'Nothing'
];
exports.JacksOrBetterFuncList = [
    JacksOrBetterCounter_1.JacksOrBetterCounter.hasRoyalFlush,
    JacksOrBetterCounter_1.JacksOrBetterCounter.hasStraightFlush,
    JacksOrBetterCounter_1.JacksOrBetterCounter.hasFourOfAKind,
    JacksOrBetterCounter_1.JacksOrBetterCounter.hasFullHouse,
    JacksOrBetterCounter_1.JacksOrBetterCounter.hasFlush,
    JacksOrBetterCounter_1.JacksOrBetterCounter.hasStraight,
    JacksOrBetterCounter_1.JacksOrBetterCounter.hasThreeOfAKind,
    JacksOrBetterCounter_1.JacksOrBetterCounter.hasTwoPair,
    JacksOrBetterCounter_1.JacksOrBetterCounter.hasJacksOrBetter,
    JacksOrBetterCounter_1.JacksOrBetterCounter.hasNothing
];
exports.DeucesWildFuncList = [
    DeucesWildCounter_1.DeucesWildCounter.hasRoyalFlush,
    DeucesWildCounter_1.DeucesWildCounter.hasFourDeuces,
    DeucesWildCounter_1.DeucesWildCounter.hasRoyalFlushWild,
    DeucesWildCounter_1.DeucesWildCounter.hasFiveOfAKindWild,
    DeucesWildCounter_1.DeucesWildCounter.hasStraightFlushWild,
    DeucesWildCounter_1.DeucesWildCounter.hasFourOfAKindWild,
    DeucesWildCounter_1.DeucesWildCounter.hasFullHouseWild,
    DeucesWildCounter_1.DeucesWildCounter.hasFlushWild,
    DeucesWildCounter_1.DeucesWildCounter.hasStraightWild,
    DeucesWildCounter_1.DeucesWildCounter.hasThreeOfAKindWild,
    DeucesWildCounter_1.DeucesWildCounter.hasNothingWild
];
exports.JokerFuncList = [
    JokerCounter_1.JokerCounter.hasRoyalFlush,
    JokerCounter_1.JokerCounter.hasFiveOfAKindWild,
    JokerCounter_1.JokerCounter.hasRoyalFlushWild,
    JokerCounter_1.JokerCounter.hasStraightFlushWild,
    JokerCounter_1.JokerCounter.hasFourOfAKindWild,
    JokerCounter_1.JokerCounter.hasFullHouseWild,
    JokerCounter_1.JokerCounter.hasFlushWild,
    JokerCounter_1.JokerCounter.hasStraightWild,
    JokerCounter_1.JokerCounter.hasThreeOfAKindWild,
    JokerCounter_1.JokerCounter.hasTwoPairWild,
    JokerCounter_1.JokerCounter.hasKingsOrBetterWild,
    JokerCounter_1.JokerCounter.hasNothingWild,
];
