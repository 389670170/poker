"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseCounter_1 = require("../../gameplays/BaseCounter");
exports.BonusDeucesWildFuncList = [
    BaseCounter_1.BaseCounter.hasNaturalRoyalFlush,
    BaseCounter_1.BaseCounter.has4DeucesWAceWild,
    BaseCounter_1.BaseCounter.has4DeucesWild,
    BaseCounter_1.BaseCounter.hasRoyalFlushWild,
    BaseCounter_1.BaseCounter.hasFiveOfAKindWild,
    BaseCounter_1.BaseCounter.has5ThreesFoursFivesWild,
    BaseCounter_1.BaseCounter.has5SixesThruKings,
    BaseCounter_1.BaseCounter.hasStraightFlushWild,
    BaseCounter_1.BaseCounter.hasFourOfAKindWild,
    BaseCounter_1.BaseCounter.hasFullHouseWild,
    BaseCounter_1.BaseCounter.hasFlushWild,
    BaseCounter_1.BaseCounter.hasStraightWild,
    BaseCounter_1.BaseCounter.hasThreeOfAKindWild,
    BaseCounter_1.BaseCounter.hasNothingWild
];
exports.BonusDeucesWildHandName = [
    'NaturalRoyalFlush',
    '4DeucesW/Ace',
    '4Deuces',
    'WildRoyalFlush',
    '5OfAKind',
    '53s,4s,5s',
    '56sThruKings',
    'StraightFlush',
    '4OfAKind',
    'FullHouse',
    'Flush',
    'Straight',
    '3OfAKind',
    'Nothing'
];
