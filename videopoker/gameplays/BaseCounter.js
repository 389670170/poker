"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseCounter {
    /**
     * 顺子辅助函数
     * @param suitArray
     * @param startIndex
     */
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
    /**
     * 4张
     * @param hand
     */
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
    /**
     * 同花顺
     * @param hand
     */
    static hasStraightFlush(hand) {
        for (let i = 0; i < 4; i++) {
            if (hand.suitCounts[i] >= 5) {
                let v = BaseCounter.helperHasStraight(hand.cardCounts, 13 * i);
                if (v != null) {
                    return [v, i];
                }
            }
        }
        return null;
    }
    /**
     * 葫芦（3带2）
     * @param hand
     */
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
    /**
     * 同花
     * @param hand
     */
    static hasFlush(hand) {
        for (let i = 0; i < 4; i++) {
            if (hand.suitCounts[i] >= 5) {
                let kickers = new Uint8Array(5);
                let kickerCount = 0;
                let baseIdx = 13 * i;
                for (let j = 13; j > 0; j--) {
                    let idx = j % 13;
                    // idx + baseIdx = 这张牌最终的idx0-52
                    if (hand.cardCounts[idx + baseIdx] > 0) {
                        kickers[kickerCount++] = j;
                        if (kickerCount === 5) {
                            return kickers;
                        }
                    }
                }
            }
        }
        return null;
    }
    /**
     * 顺子
     * @param hand
     */
    static hasStraight(hand) {
        for (let i = 0; i < 4; i++) {
            let v = BaseCounter.helperHasStraight(hand.rankCounts, 0);
            if (v != null) {
                return [v];
            }
        }
        return null;
    }
    /**
     *
     * @param hand
     */
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
    /**
     * 2对
     * @param hand
     */
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
    /**
     * 一对J及以上
     * @param hand
     */
    static hasJacksOrBetter(hand) {
        let v = BaseCounter.hasPair(hand);
        if (v != null) {
            if (v[0] >= 10) {
                return true;
            }
        }
        return false;
    }
    /**
     * 对子
     * @param hand
     */
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
    /**
     * 什么都不是
     * @param hand
     */
    static hasNothing(hand) {
        return true;
    }
    /**
     * 非wild组成的皇家同花顺
     * @param hand
     */
    static hasNaturalRoyalFlush(hand) {
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
    /**
     * 五张
     * @param hand
     */
    static hasFiveOfAKindWild(hand) {
        if (hand.wildCnt != 0) {
            return ((hand.wildCnt === 1 && hand.fourCnt === 1)
                || (hand.wildCnt === 2 && hand.threeCnt === 1)
                || (hand.wildCnt === 3 && hand.pairCnt == 1)
                || (hand.wildCnt === 4 && hand.singleCnt == 1));
        }
        return false;
    }
    /**
     * 皇家同花顺
     * @param hand
     */
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
    /**
     * 同花顺
     * @param hand
     */
    static hasStraightFlushWild(hand) {
        return BaseCounter.hasStraightWild(hand) && BaseCounter.hasFlushWild(hand);
    }
    /**
     * 4张
     * @param hand
     */
    static hasFourOfAKindWild(hand) {
        if (hand.wildCnt === 0) {
            return (hand.fourCnt === 1 && hand.singleCnt === 1);
        }
        else {
            return ((hand.wildCnt === 1 && hand.threeCnt === 1)
                || (hand.wildCnt === 2 && hand.pairCnt === 1 && hand.singleCnt === 1)
                || (hand.wildCnt === 3 && hand.singleCnt == 2)
                || (hand.wildCnt === 4 && hand.singleCnt == 2)
                || (hand.wildCnt === 5 && hand.singleCnt == 1));
        }
    }
    /**
     * 葫芦（3带2）
     * @param hand
     */
    static hasFullHouseWild(hand) {
        if (hand.wildCnt == 0) {
            return (hand.threeCnt === 1 && hand.pairCnt === 1);
        }
        else {
            return ((hand.wildCnt === 1 && hand.pairCnt === 2)
                || (hand.wildCnt === 2 && hand.pairCnt === 1 && hand.singleCnt === 1)
                || (hand.wildCnt === 3 && hand.pairCnt === 2)
                || (hand.wildCnt === 4 && hand.singleCnt === 1)
                || (hand.wildCnt === 5));
        }
    }
    /**
     * 同花
     * @param hand
     */
    static hasFlushWild(hand) {
        for (let i = 0; i < 4; i++) {
            if (hand.wildCnt === 0 && hand.suitCounts[i] >= 5) {
                return true;
            }
            else if (hand.wildCnt !== 0 && hand.suitCounts[i] >= hand.cards.length - hand.wildCnt) {
                return true;
            }
        }
        return false;
    }
    /**
     * 顺子
     * @param hand
     */
    static hasStraightWild(hand) {
        if (hand.singleCnt == 5
            || (hand.singleCnt == 4 && hand.wildCnt == 1)
            || (hand.singleCnt == 3 && hand.wildCnt == 2)
            || (hand.singleCnt == 2 && hand.wildCnt == 3)
            || (hand.singleCnt == 1 && hand.wildCnt == 4)
            || (hand.wildCnt == 5)) {
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
            // 正常的计算，A作为首位
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
            if (hand.wildCnt >= slotsCnt) {
                return true;
            }
            else if (ranks[0] == 1) { //如果有A，计算A作为末位的时候，组成的顺子可能性
                slotsCnt = 0;
                last = -1;
                ranks.splice(0, 1);
                ranks.push(1);
                for (let i = 0; i < ranks.length; i++) {
                    let cur = ranks[i];
                    // 如果是wild牌，跳过
                    if (hand.wildRank.indexOf(cur) !== -1)
                        continue;
                    if (cur == 1)
                        cur = 14;
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
        else {
            return false;
        }
    }
    /**
     * 3张
     * @param hand
     */
    static hasThreeOfAKindWild(hand) {
        return ((hand.threeCnt == 1 && hand.singleCnt == 2)
            || (hand.wildCnt == 1 && hand.pairCnt == 1 && hand.singleCnt == 2)
            || (hand.wildCnt == 2 && hand.singleCnt == 3)
            || (hand.wildCnt == 3 && hand.singleCnt == 2)
            || (hand.wildCnt == 4 && hand.singleCnt == 1)
            || (hand.wildCnt == 5));
    }
    /**
     * 什么都不是
     * @param hand
     */
    static hasNothingWild(hand) {
        return true;
    }
    /**
     * 什么都是
     * @param hand
     */
    static hasNotingWildFalse(hand) {
        return false;
    }
    /**
     * 两对
     * @param hand
     */
    static hasTwoPairWild(hand) {
        return ((hand.pairCnt === 2 && hand.wildCnt === 0)
            || (hand.singleCnt === 2 && hand.pairCnt === 1 && hand.wildCnt === 1));
    }
    /**
     * 一对K及以上
     * @param hand
     */
    static hasKingsOrBetterWild(hand) {
        return ((hand.rankCounts[12] + hand.wildCnt === 2) || (hand.rankCounts[0] + hand.wildCnt === 2));
    }
    /**
     * hasSequentialRoyalFlush的辅助函数
     * @param hand
     */
    static hasASCSequentialRoyalFlush(hand) {
        let cardsCpy = hand.cards.concat();
        let last = -1;
        let ranks = [];
        let suitOk = false;
        // 将牌换成点数
        for (let i = 0; i < cardsCpy.length; i++) {
            let cur = cardsCpy[i] % 13;
            ranks.push(cur + 1);
            if (hand.suitCounts[i] >= 5) {
                suitOk = true;
            }
        }
        if (ranks[0] === 10 && ranks[4] === 1 && suitOk) {
            for (let i = 0; i < ranks.length - 1; i++) {
                let cur = ranks[i];
                // 后一个比前一个大，升序
                if (last !== -1 && cur - last !== 1) {
                    return false;
                }
                last = cur;
            }
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * hasSequentialRoyalFlush的辅助函数
     * @param hand
     */
    static hasDESCSequentialRoyalFlush(hand) {
        let cardsCpy = hand.cards.concat();
        let last = -1;
        let ranks = [];
        let suitOk = false;
        // 将牌换成点数
        for (let i = 0; i < cardsCpy.length; i++) {
            let cur = cardsCpy[i] % 13;
            ranks.push(cur + 1);
            if (hand.suitCounts[i] >= 5) {
                suitOk = true;
            }
        }
        if (ranks[0] === 1 && ranks[4] === 10 && suitOk) {
            for (let i = 1; i < ranks.length; i++) {
                let cur = ranks[i];
                // 后一个比前一个小，降序
                if (last !== -1 && cur - last !== -1) {
                    return false;
                }
                last = cur;
            }
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * A1234或4321A或TJQKA或AKQJT组成的序列化皇家同花顺
     * @param hand
     */
    static hasSequentialRoyalFlush(hand) {
        return BaseCounter.hasASCSequentialRoyalFlush(hand) || BaseCounter.hasDESCSequentialRoyalFlush(hand);
    }
    /**
     * TJQKA组成的皇家同花顺
     * @param hand
     */
    static hasHiRoyalFlush(hand) {
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
    /**
     * A1234组成的同花顺
     * @param hand
     */
    static hasLoRoyalFlush(hand) {
        for (let i = 0; i < 4; i++) {
            let bi = i * 13;
            if (hand.suitCounts[i] >= 5) {
                if (hand.cardCounts[bi] === 0) {
                    continue;
                }
                let j;
                for (j = 1; j < 5; j++) {
                    if (hand.cardCounts[j + bi] === 0) {
                        break;
                    }
                }
                if (j === 5) {
                    return true;
                }
            }
        }
        return false;
    }
    /**
     * 4个A或4个8
     * @param hand
     */
    static has4Aces4Eights(hand) {
        return hand.rankCounts[0] === 4 || hand.rankCounts[7] === 4;
    }
    /**
     * 4个7
     * @param hand
     */
    static has4Sevens(hand) {
        return hand.rankCounts[6] >= 4;
    }
    /**
     * 4个A
     * @param hand
     */
    static has4Aces(hand) {
        return hand.rankCounts[0] === 4;
    }
    /**
     * 四个J或Q或K
     * @param hand
     */
    static has4JsQsKs(hand) {
        return hand.rankCounts[10] === 4 || hand.rankCounts[11] === 4 || hand.rankCounts[12] === 4;
    }
    /**
     * 4个2到4个10
     * @param hand
     */
    static has4TwosThruTens(hand) {
        for (let i = 1; i < 10; i++) {
            if (hand.rankCounts[i] === 4) {
                return true;
            }
        }
        return false;
    }
    /**
     * 4个2、3、4
     * @param hand
     */
    static has4TwosThreesFours(hand) {
        return hand.rankCounts[1] === 4 || hand.rankCounts[2] === 4 || hand.rankCounts[3] === 4;
    }
    /**
     * 4个5、6、7、8、9、10、J、Q、K
     * @param hand
     */
    static has4FivesThruKs(hand) {
        for (let i = 4; i < 14; i++) {
            if (hand.rankCounts[i] === 4) {
                return true;
            }
        }
        return false;
    }
    /**
     * 4个2和一个王
     * @param hand
     */
    static has4DeucesWJoker(hand) {
        return hand.rankCounts[1] === 4 && hand.rankCounts[13] == 1;
    }
    /**
     * 4个2
     * @param hand
     */
    static has4DeucesWild(hand) {
        return hand.rankCounts[1] === 4;
    }
    /**
     * 4个2带一个A
     * @param hand
     */
    static has4DeucesWAceWild(hand) {
        return hand.rankCounts[1] === 4 && hand.rankCounts[0] === 1;
    }
    /**
     * 5个3、4、5（包含wild）
     * @param hand
     */
    static has5ThreesFoursFivesWild(hand) {
        return hand.rankCounts[2] + hand.wildCnt === 5 ||
            hand.rankCounts[3] + hand.wildCnt === 5 ||
            hand.rankCounts[4] + hand.wildCnt === 5;
    }
    /**
     * 5个6、7、8、9、10、J、Q、K
     * @param hand
     */
    static has5SixesThruKings(hand) {
        for (let i = 5; i < 14; i++) {
            if (hand.rankCounts[i] + hand.wildCnt === 5) {
                return true;
            }
        }
        return false;
    }
    /**
     * 4个A和黑桃J或梅花J
     * @param hand
     */
    static has4AcesAndBlackJ(hand) {
        return (hand.rankCounts[0] === 4 && hand.rankCounts[10] === 1 && (hand.suitCounts[0] === 2 || hand.suitCounts[3] === 2));
    }
    /**
     * 4个2/3/4和黑桃J或梅花J
     * @param hand
     */
    static has4TwosThruFoursAndBlackJ(hand) {
        return (BaseCounter.has4TwosThreesFours(hand) && hand.rankCounts[10] === 1 && (hand.suitCounts[0] === 2 || hand.suitCounts[3] === 2));
    }
    /**
     * 4个5到k和黑桃J或梅花J
     * @param hand
     */
    static has4FivesThruKsAndBlackJ(hand) {
        return (BaseCounter.has4FivesThruKs(hand) && hand.rankCounts[10] === 1 && (hand.suitCounts[0] === 2 || hand.suitCounts[3] === 2));
    }
    /**
     * 4个A或J
     * @param hand
     */
    static has4AcesJs(hand) {
        return hand.rankCounts[0] === 4 || hand.rankCounts[10] === 4;
    }
    /**
     * 4个A和J/Q/K
     * @param hand
     */
    static has4AcesWJQK(hand) {
        return (BaseCounter.has4Aces(hand) && (hand.rankCounts[10] === 1 || hand.rankCounts[11] === 1 || hand.rankCounts[12] === 1));
    }
    /**
     * 4个J/Q/K和J/Q/K/A
     * @param hand
     */
    static has4JsQsKsWJQKAce(hand) {
        return (BaseCounter.has4JsQsKs(hand) && (hand.rankCounts[10] === 1 || hand.rankCounts[11] === 1 || hand.rankCounts[12] === 1 || hand.rankCounts[0] === 1));
    }
    /**
     * 4个A和任意一个2、3、4
     * @param hand
     */
    static has4AcesWTwoThreeFour(hand) {
        for (let i = 1; i < 4; i++) {
            if (hand.rankCounts[i] === 1 && hand.rankCounts[0] === 4) {
                return true;
            }
        }
        return false;
    }
    /**
     * 4个2、3、4与任意一个A、2、3、4
     * @param hand
     */
    static has4TwosThreesFoursWAceTwoThreeFour(hand) {
        for (let i = 1; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (j === i)
                    continue;
                if (hand.rankCounts[j] === 1 && hand.rankCounts[i] === 4) {
                    return true;
                }
            }
        }
        return false;
    }
    /**
     * 4个5、6、7、8、9、10、J、Q、K配一个A
     * @param hand
     */
    static has4FivesThruKsPlusAce(hand) {
        for (let i = 4; i < 14; i++) {
            if (hand.rankCounts[i] === 4 && hand.rankCounts[0] === 1) {
                return true;
            }
        }
        return false;
    }
    /**
     * 两个A
     * @param hand
     */
    static has2AcesWild(hand) {
        return hand.rankCounts[0] + hand.wildCnt >= 2;
    }
    /**
     * 4个5、6、7、8、9、10
     * @param hand
     */
    static has4FivesThruTens(hand) {
        for (let i = 4; i < 10; i++) {
            if (hand.rankCounts[i] === 4) {
                return true;
            }
        }
        return false;
    }
    /**
     * 由1个2组成的5张
     * @param hand
     */
    static hasFiveOfAKindWOneDeuceWild(hand) {
        for (let i = 0; i < 14; i++) {
            if (i === 1)
                continue; // 2不计算
            if (hand.rankCounts[i] === 4 && hand.rankCounts[1] === 1) {
                return true;
            }
        }
        return false;
    }
    /**
     * 一对10或者以上
     * @param hand
     */
    static hasTensOrBetter(hand) {
        for (let i = 9; i < 14; i++) {
            if (hand.rankCounts[i] >= 2) {
                return true;
            }
        }
        return hand.rankCounts[0] >= 2;
    }
    /**
     * 一对K及以上
     * @param hand
     */
    static hasKingsOrBetter(hand) {
        return ((hand.rankCounts[12] === 2) || (hand.rankCounts[0] === 2));
    }
}
exports.BaseCounter = BaseCounter;
