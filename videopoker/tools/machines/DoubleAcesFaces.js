"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseCounter_1 = require("../../gameplays/BaseCounter");
exports.DoubleAcesFacesFuncList = [
    BaseCounter_1.BaseCounter.hasNaturalRoyalFlush,
    BaseCounter_1.BaseCounter.hasStraightFlush,
    BaseCounter_1.BaseCounter.has4Aces,
    BaseCounter_1.BaseCounter.has4JsQsKs,
    BaseCounter_1.BaseCounter.has4TwosThruTens,
    BaseCounter_1.BaseCounter.hasFullHouse,
    BaseCounter_1.BaseCounter.hasFlush,
    BaseCounter_1.BaseCounter.hasStraight,
    BaseCounter_1.BaseCounter.hasThreeOfAKind,
    BaseCounter_1.BaseCounter.hasTwoPair,
    BaseCounter_1.BaseCounter.hasJacksOrBetter,
    BaseCounter_1.BaseCounter.hasNothing
];
exports.DoubleAcesFacesHandName = [
    'RoyalFlush',
    'StraightFlush',
    '4Aces',
    '4Js,Qs,Ks',
    '42sThru10s',
    'FullHouse',
    'Flush',
    'Straight',
    '3OfAKind',
    'TwoPair',
    'JacksOrBetter',
    'Nothing'
];
