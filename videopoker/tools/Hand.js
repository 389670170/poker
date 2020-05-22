"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Hand {
    constructor(cards, wildRank) {
        this.cards = [];
        this.suitCounts = new Uint8Array(4);
        this.rankCounts = new Uint8Array(14);
        this.cardCounts = new Uint8Array(54);
        this.fourCnt = 0;
        this.threeCnt = 0;
        this.pairCnt = 0;
        this.singleCnt = 0;
        this.wildCnt = 0;
        this.wildRank = [];
        this.textCards = [];
        this.wildRank = wildRank;
        this.addCards(cards);
    }
    addCards(cards) {
        for (let i = 0; i < cards.length; i++) {
            let c = cards[i]; // 获取当前牌的idx
            this.cards.push(c);
            this.cardCounts[c]++; // 序列计数
            let rank = c % 13;
            // joker牌
            if (this.wildRank.indexOf(14) != -1 && (c === 52 || c === 53)) {
                this.rankCounts[13]++; // 点数计数
                this.wildCnt += 1;
            }
            else if (this.wildRank.indexOf(rank + 1) !== -1) {
                this.wildCnt += 1;
                this.rankCounts[rank]++;
            }
            else {
                this.rankCounts[rank]++; // 点数计数
                this.suitCounts[Math.floor(c / 13)]++; // 花色计数
                let cnt = this.rankCounts[rank];
                switch (cnt) {
                    case 1:
                        this.singleCnt += 1;
                        break;
                    case 2:
                        this.singleCnt -= 1;
                        this.pairCnt += 1;
                        break;
                    case 3:
                        this.pairCnt -= 1;
                        this.threeCnt += 1;
                        break;
                    case 4:
                        this.threeCnt -= 1;
                        this.fourCnt += 1;
                        break;
                }
            }
        }
        // this.textCards = [];
        // for (let i = 0; i < this.cards.length; i++) {
        //     this.textCards.push(PokerCounter.cardToText(this.cards[i]));
        // }
    }
    popCard() {
        let c = this.cards.pop();
        if (c != null) {
            this.cardCounts[c]--;
            let rank = c % 13;
            // joker牌
            if (this.wildRank.indexOf(14) != -1 && (c === 52 || c === 53)) {
                this.rankCounts[13]--; // 点数计数
                this.wildCnt -= 1;
            }
            else if (this.wildRank.indexOf(rank + 1) !== -1) {
                this.wildCnt -= 1;
                this.rankCounts[rank]--;
            }
            else {
                this.rankCounts[rank]--;
                this.suitCounts[Math.floor(c / 13)]--;
                let cnt = this.rankCounts[rank];
                switch (cnt) {
                    case 0:
                        this.singleCnt -= 1;
                        break;
                    case 1:
                        this.singleCnt += 1;
                        this.pairCnt -= 1;
                        break;
                    case 2:
                        this.pairCnt += 1;
                        this.threeCnt -= 1;
                        break;
                    case 3:
                        this.threeCnt += 1;
                        this.fourCnt -= 1;
                        break;
                }
            }
        }
        // this.textCards = [];
        // for (let i = 0; i < this.cards.length; i++) {
        //     this.textCards.push(PokerCounter.cardToText(this.cards[i]));
        // }
    }
}
exports.Hand = Hand;
