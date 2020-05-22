"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class JacksOrBetterCounter {
    static helperHasStraight(suitArray, startIndex) {
        let i;
        let checkIndex = 9;
        while (checkIndex >= 0) {
            for (i = 0; i < 5; i++) {
                if (suitArray[startIndex + (i + checkIndex) % 13] == 0) {
                    checkIndex = checkIndex - 5 + i;
                    break;
                }
            }
            if (i == 5) {
                return checkIndex + 4;
            }
        }
        return null;
    }
    static hasFourOfAKind(hand) {
        let rank = null, cnt = null, kicker = null;
        for (let i = 13; i > 0; i--) {
            let idx = i % 13;
            cnt = hand.rankCounts[idx];
            if ((cnt === 4) && (rank == null)) {
                rank = i;
            }
            else if ((kicker == null) && (cnt > 0)) {
                kicker = i;
            }
            if ((rank != null) && (kicker != null)) {
                return [rank, kicker];
            }
        }
        return null;
    }
    static hasStraightFlush(hand) {
        for (let i = 0; i < 4; i++) {
            if (hand.suitCounts[i] >= 5) {
                let v = JacksOrBetterCounter.helperHasStraight(hand.cardCounts, 13 * i);
                if (v != null) {
                    return [v, i];
                }
            }
        }
        return null;
    }
    static hasFullHouse(hand) {
        let trip = null, doub = null, idx;
        for (let i = 13; i > 0; i--) {
            idx = i % 13;
            if ((trip == null) && (hand.rankCounts[idx] >= 3)) {
                trip = i;
                if (doub != null) {
                    return [trip, doub];
                }
                continue;
            }
            if ((doub == null) && (hand.rankCounts[idx] >= 2)) {
                doub = i;
                if (trip != null) {
                    return [trip, doub];
                }
            }
        }
        return null;
    }
    static hasFlush(hand) {
        for (let i = 0; i < 4; i++) {
            if (hand.suitCounts[i] >= 5) {
                let kickers = new Uint8Array(5);
                let kickerCount = 0;
                let baseIdx = 13 * i;
                for (i = 13; i > 0; i--) {
                    let idx = i % 13;
                    // idx + baseIdx = 这张牌最终的idx0-52
                    if (hand.cardCounts[idx + baseIdx] > 0) {
                        kickers[kickerCount++] = i;
                        if (kickerCount === 5) {
                            return kickers;
                        }
                    }
                }
            }
        }
        return null;
    }
    static hasStraight(hand) {
        for (let i = 0; i < 4; i++) {
            let v = JacksOrBetterCounter.helperHasStraight(hand.rankCounts, 0);
            if (v != null) {
                return [v];
            }
        }
        return null;
    }
    static hasThreeOfAKind(hand) {
        let rank = null;
        let kickers = new Uint8Array(2);
        let kickerCount = 0;
        for (let i = 13; i > 0; i--) {
            let idx = i % 13;
            let cnt = hand.rankCounts[idx];
            if ((cnt >= 3) && (rank == null)) {
                rank = i;
            }
            else if ((cnt > 0) && (kickerCount < 2)) {
                kickers[kickerCount] = i;
                kickerCount++;
            }
            if (rank && (kickerCount == 2)) {
                return [rank, kickers[0], kickers[1]];
            }
        }
        return null;
    }
    static hasTwoPair(hand) {
        let pairs = new Uint8Array(2), pairCount = 0;
        let kicker = null;
        for (let i = 13; i > 0; i--) {
            let idx = i % 13;
            let cnt = hand.rankCounts[idx];
            if ((pairCount < 2) && (cnt >= 2)) {
                pairs[pairCount] = i;
                pairCount++;
            }
            else if ((cnt > 0) && (kicker == null)) {
                kicker = i;
            }
            if ((pairCount >= 2) && kicker) {
                return [pairs[0], pairs[1], kicker];
            }
        }
        return null;
    }
    static hasRoyalFlush(hand) {
        for (let i = 0; i < 4; i++) {
            let bi = i * 13;
            if (hand.suitCounts[i] >= 5) {
                if (hand.cardCounts[bi] === 0) {
                    continue;
                }
                let j;
                for (j = 9; j < 13; j++) {
                    if (hand.cardCounts[j + bi] === 0) {
                        break;
                    }
                }
                if (j === 13) {
                    return true;
                }
            }
        }
        return false;
    }
    static hasJacksOrBetter(hand) {
        let v = JacksOrBetterCounter.hasPair(hand);
        if (v != null) {
            if (v[0] >= 10) {
                return true;
            }
        }
        return false;
    }
    static hasPair(hand) {
        let rank = null;
        let kickers = new Uint8Array(3);
        let kickerCount = 0;
        for (let i = 13; i > 0; i--) {
            let idx = i % 13;
            let cnt = hand.rankCounts[idx];
            if ((cnt >= 2) && (rank == null)) {
                rank = i;
            }
            else if ((cnt > 0) && (kickerCount < 3)) {
                kickers[kickerCount] = i;
                kickerCount++;
            }
            if (rank && (kickerCount == 3)) {
                return [rank, kickers[0], kickers[1], kickers[2]];
            }
        }
        return null;
    }
    static hasNothing(hand) {
        return true;
    }
}
exports.JacksOrBetterCounter = JacksOrBetterCounter;
