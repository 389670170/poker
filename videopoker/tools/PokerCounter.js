"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PokerCounter {
    static cardToText(card) {
        if (card == 52) {
            return "OS";
        }
        else if (card == 53) {
            return "OD";
        }
        else {
            let idx = card % 13;
            let suit = Math.floor(card / 13);
            return ["A", "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K"][idx] + "SDHC".substr(suit, 1);
        }
    }
    static handToText(hand) {
        return hand.cards.map(this.cardToText).join(" ");
    }
    static findHandCount(hand, identifierFunc, maxCardCount, deck, deckIdx, totals = null) {
        if (totals == null) {
            totals = new Uint32Array(identifierFunc.length);
        }
        deckIdx = deckIdx || 0;
        if (hand.cards.length >= maxCardCount) {
            for (let idx = 0; idx < identifierFunc.length; idx++) {
                let handRet = identifierFunc[idx](hand);
                if (handRet != null && handRet) {
                    // console.log(this.handToText(hand));
                    totals[idx]++;
                    return totals;
                }
            }
            throw "can't identify a hand: " + PokerCounter.handToText(hand);
        }
        for (let idx = deckIdx; idx < deck.length; idx++) {
            let c = deck[idx];
            hand.addCards([c]);
            PokerCounter.findHandCount(hand, identifierFunc, maxCardCount, deck, idx + 1, totals);
            hand.popCard();
        }
        return totals;
    }
    static ptoi(poker) {
        let ret = -1;
        let rank = '';
        if (poker.length == 3) {
            rank = poker.slice(0, 2);
        }
        else {
            rank = poker.slice(0, 1);
        }
        let suit = poker.slice(poker.length - 1, poker.length).toUpperCase();
        if (rank === 'T') {
            ret = 9;
        }
        else if (rank === 'A') {
            ret = 0;
        }
        else if (rank === 'J') {
            ret = 10;
        }
        else if (rank === 'Q') {
            ret = 11;
        }
        else if (rank === 'K') {
            ret = 12;
        }
        else if (rank === 'O') {
            ret = 52;
        }
        else {
            ret = (parseInt(rank) - 1);
        }
        if (suit === 'S' && rank != 'O') {
            ret += 0;
        }
        else if (suit === 'D' && rank != 'O') {
            ret += 13;
        }
        else if (suit === 'H' && rank != 'O') {
            ret += 26;
        }
        else if (suit === 'C' && rank != 'O') {
            ret += 39;
        }
        return ret;
    }
    static ptois(pokers) {
        let ret = [];
        for (let i = 0; i < pokers.length; i++) {
            ret.push(PokerCounter.ptoi(pokers[i]));
        }
        return ret;
    }
}
exports.PokerCounter = PokerCounter;
