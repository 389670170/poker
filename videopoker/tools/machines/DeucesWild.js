"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseCounter_1 = require("../../gameplays/BaseCounter");
exports.DeucesWildFuncList = [
    BaseCounter_1.BaseCounter.hasNaturalRoyalFlush,
    BaseCounter_1.BaseCounter.has4DeucesWild,
    BaseCounter_1.BaseCounter.hasRoyalFlushWild,
    BaseCounter_1.BaseCounter.hasFiveOfAKindWild,
    BaseCounter_1.BaseCounter.hasStraightFlushWild,
    BaseCounter_1.BaseCounter.hasFourOfAKindWild,
    BaseCounter_1.BaseCounter.hasFullHouseWild,
    BaseCounter_1.BaseCounter.hasFlushWild,
    BaseCounter_1.BaseCounter.hasStraightWild,
    BaseCounter_1.BaseCounter.hasThreeOfAKindWild,
    BaseCounter_1.BaseCounter.hasNothingWild
];
exports.DeucesWildHandName = [
    'NaturalRoyalFlush',
    '4Deuces',
    'WildRoyalFlush',
    '5OfAKind',
    'StraightFlush',
    '4OfAKind',
    'FullHouse',
    'Flush',
    'Straight',
    '3OfAKind',
    'Nothing'
];
