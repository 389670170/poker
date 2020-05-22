"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DeucesJokerWildCounter {
    static has4DeucesWJoker(hand) {
        return hand.wildCnt === 5;
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
    static hasFourDeuces(hand) {
        return (hand.wildCnt === 4 && hand.rankCounts[1] == 4);
    }
    static hasFiveOfAKindWild(hand) {
        if (hand.wildCnt != 0) {
            return ((hand.wildCnt === 1 && hand.fourCnt === 1)
                || (hand.wildCnt === 2 && hand.threeCnt === 1)
                || (hand.wildCnt === 3 && hand.pairCnt == 1)
                || (hand.wildCnt === 4 && hand.singleCnt == 1));
        }
        return false;
    }
    static hasRoyalFlushWild(hand) {
        let wildCnt = hand.wildCnt;
        for (let i = 0; i < 4; i++) {
            let bi = i * 13;
            if (hand.suitCounts[i] >= 5 - wildCnt) {
                if (wildCnt != 0 && hand.cardCounts[bi] === 0) { //A有没有
                    wildCnt -= 1;
                }
                else if (hand.cardCounts[bi] === 0) {
                    break;
                }
                let j;
                for (j = 9; j < 13; j++) { //TJQK有没有
                    if (wildCnt != 0 && hand.cardCounts[j + bi] === 0) {
                        wildCnt -= 1;
                    }
                    else if (hand.cardCounts[j + bi] === 0) {
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
    static hasStraightFlushWild(hand) {
        return DeucesJokerWildCounter.hasStraightWild(hand) && DeucesJokerWildCounter.hasFlushWild(hand);
    }
    static hasFourOfAKindWild(hand) {
        if (hand.wildCnt === 0) {
            return (hand.fourCnt === 1 && hand.singleCnt === 1);
        }
        else {
            return ((hand.wildCnt === 1 && hand.threeCnt === 1)
                || (hand.wildCnt === 2 && hand.pairCnt === 1 && hand.singleCnt === 1)
                || (hand.wildCnt === 3 && hand.singleCnt == 2));
        }
    }
    static hasFullHouseWild(hand) {
        if (hand.wildCnt == 0) {
            return (hand.threeCnt === 1 && hand.pairCnt === 1);
        }
        else {
            return ((hand.wildCnt === 1 && hand.pairCnt === 2)
                || (hand.wildCnt === 2 && hand.pairCnt === 1 && hand.singleCnt === 1));
        }
    }
    static hasFlushWild(hand) {
        for (let i = 0; i < 4; i++) {
            if (hand.wildCnt === 0 && hand.suitCounts[i] >= 5)
                return true;
            else if (hand.wildCnt !== 0 && hand.suitCounts[i] >= hand.cards.length - hand.wildCnt) {
                let lastSuit = -1;
                for (let j = 0; j < hand.cards.length; j++) {
                    let suit = Math.floor(hand.cards[j] / 13);
                    if (lastSuit !== -1 && suit !== lastSuit)
                        return false;
                    lastSuit = suit;
                }
                return true;
            }
        }
        return false;
    }
    static hasStraightWild(hand) {
        if (hand.singleCnt == 5 || (hand.singleCnt == 4 && hand.wildCnt == 1) || (hand.singleCnt == 3 && hand.wildCnt == 2)) {
            let cardsCpy = hand.cards.concat();
            let slotsCnt = 0;
            let last = -1;
            let ranks = [];
            // 将牌换成点数
            for (let i = 0; i < cardsCpy.length; i++) {
                if (cardsCpy[i] == 52 || cardsCpy[i] == 53) {
                    ranks.push(14);
                }
                else {
                    let cur = cardsCpy[i] % 13;
                    ranks.push(cur + 1);
                }
            }
            // 用点数排序，升序
            ranks.sort((a, b) => {
                if (a > b) {
                    return 1;
                }
                if (a < b) {
                    return -1;
                }
                return 0;
            });
            // 如果首位为A末位为K，那么就不可能组成1、2、3、4、5的顺子，直接将A标记为K之后的值以便统一处理
            if (ranks[0] == 1 && ranks[4] == 13) {
                ranks.splice(0, 1);
                ranks.push(14);
            }
            for (let i = 0; i < ranks.length; i++) {
                let cur = ranks[i];
                // 如果是wild牌，跳过
                if (hand.wildRank.indexOf(cur) !== -1)
                    continue;
                if (last !== -1 && cur - last !== 1) {
                    slotsCnt += cur - last - 1;
                }
                last = cur;
            }
            return hand.wildCnt >= slotsCnt;
        }
        else {
            return false;
        }
    }
    static hasThreeOfAKindWild(hand) {
        return ((hand.threeCnt == 1 && hand.singleCnt == 2) ||
            (hand.wildCnt == 1 && hand.pairCnt == 1 && hand.singleCnt == 2) ||
            (hand.wildCnt == 2 && hand.singleCnt == 3));
    }
    static hasNothingWild(hand) {
        return true;
    }
    static hasNotingWildFalse(hand) {
        return false;
    }
}
exports.DeucesJokerWildCounter = DeucesJokerWildCounter;
