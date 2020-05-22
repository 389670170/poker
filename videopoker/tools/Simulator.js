"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const PokerCounter_1 = require("../tools/PokerCounter");
const fs_extra_1 = __importDefault(require("fs-extra"));
const path = __importStar(require("path"));
const Hand_1 = require("./Hand");
const solver = require('../tools/PokerSolver').Hand;
const stringify = require('csv-stringify');
const sd = require('silly-datetime');
const random = require('number-random');
const trainDao = require('../src/dao/rds/trainerDao');
var Game;
(function (Game) {
    Game["NON"] = "non";
    Game["JACKSORBETTER"] = "jacksbetter";
    Game["JOKER"] = "joker";
    Game["DEUCESWILD"] = "deuceswild";
})(Game = exports.Game || (exports.Game = {}));
var MachineID;
(function (MachineID) {
    MachineID[MachineID["JACKSORBETTER"] = 1] = "JACKSORBETTER";
    MachineID[MachineID["JOKER"] = 2] = "JOKER";
    MachineID[MachineID["DEUCESWILD"] = 3] = "DEUCESWILD";
})(MachineID = exports.MachineID || (exports.MachineID = {}));
class PokerChoose {
    constructor(ev, h, d) {
        this.ExpectedValue = 0;
        this.Held = [];
        this.Disc = [];
        this.Combos = [];
        this.TotalWinCount = 0; // 所有的中奖数量，用于计算EV的中间值
        this.ExpectedValue = ev;
        this.Held = h;
        this.Disc = d;
    }
    PrintText() {
        console.log(`ExpectedValue: ${this.ExpectedValue}`);
        console.log(`Held: ${this.Held}`);
        console.log(`Disc: ${this.Disc}`);
    }
}
exports.PokerChoose = PokerChoose;
//coins, initStr, heldStr, drawStr, finalStr, result.winCoins, result.winType, result.physicalWR, result.correctedWR, allChoose
class SimulateResult {
    constructor() {
        this.InitCards = [];
        this.PokerChooseList = [];
    }
}
exports.SimulateResult = SimulateResult;
class Simulator {
    constructor(idx, root, title, funcList, game, cr = 1.0, write = false) {
        this.index = -1;
        this.rootPath = '';
        this.controlRate = 1.0;
        this.title = [];
        this.functionList = [];
        this.game = Game.NON;
        this.pokerCount = 0;
        this.writeSql = false;
        this.index = idx;
        this.rootPath = root;
        this.controlRate = cr;
        this.title = title;
        this.functionList = funcList;
        this.game = game;
        this.writeSql = write;
        switch (this.game) {
            case Game.JACKSORBETTER:
                this.pokerCount = 52;
                break;
            case Game.DEUCESWILD:
                this.pokerCount = 52;
                break;
            case Game.JOKER:
                this.pokerCount = 53;
                break;
        }
    }
    shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    shuffleDeck(random, jokerCnt) {
        let deck = [];
        for (let i = 0; i < 52 + jokerCnt; i++) {
            deck.push(i);
        }
        if (random)
            this.shuffle(deck);
        return deck;
    }
    test() {
        let deck = this.shuffleDeck(true, 1);
        // let initDraw = deck.slice(0, 5);
        // let payouts = [250, 50, 25, 8, 6, 4, 3, 2, 1, 0];
        // let payouts = [300, 200, 25, 15, 9, 5, 3, 2, 2, 1, 0];
        let payouts = [250, 200, 100, 50, 17, 7, 5, 3, 2, 1, 1, 0];
        let initDrawText = ['2C', '5S', '6H', '4D', '8H'];
        // for (let i = 0; i < initDraw.length; i++) {
        //     initDrawText.push(PokerCounter.cardToText(initDraw[i]));
        // }
        this.deleteCardFromDeck(initDrawText, deck);
        let allChoose = this.getResult(0, initDrawText, deck, payouts);
        allChoose.PokerChooseList.sort((a, b) => {
            if (a.ExpectedValue > b.ExpectedValue) {
                return -1;
            }
            if (a.ExpectedValue < b.ExpectedValue) {
                return 1;
            }
            return 0;
        });
        let totals = this.simulate(initDrawText, deck);
        console.log(initDrawText);
        for (let i = 0; i < totals.length; i++) {
            console.log(`${this.title[i]}: ${totals[i]}`);
        }
    }
    simulate(held, deck) {
        if (this.game == Game.DEUCESWILD) {
            let hand = new Hand_1.WildHand(PokerCounter_1.PokerCounter.ptois(held), 2);
            return PokerCounter_1.PokerCounter.findHandCount(hand, this.functionList, 5, deck, 0);
        }
        else if (this.game == Game.JACKSORBETTER) {
            let hand = new Hand_1.Hand(PokerCounter_1.PokerCounter.ptois(held), -1);
            return PokerCounter_1.PokerCounter.findHandCount(hand, this.functionList, 5, deck, 0);
        }
        else if (this.game == Game.JOKER) {
            let hand = new Hand_1.OneJokerHand(PokerCounter_1.PokerCounter.ptois(held), 14);
            return PokerCounter_1.PokerCounter.findHandCount(hand, this.functionList, 5, deck, 0);
        }
        return [];
    }
    getResult(jokerCnt, initDraw, deck = [], payouts = []) {
        if (deck.length === 0) {
            deck = this.shuffleDeck(false, jokerCnt);
            this.deleteCardFromDeck(initDraw, deck);
        }
        let allComb = this.getGroup(initDraw);
        allComb.push([]);
        let allChoose = [];
        for (let i = 0; i < allComb.length; i++) {
            let held = allComb[i];
            let disc = initDraw.filter(x => !held.includes(x));
            let expValueDenom = this._combination(this.pokerCount - 5, 5 - held.length);
            let totals = this.simulate(held, deck);
            let totalWinCount = this.addSum(totals, totals.length - 1);
            let newChoose = new PokerChoose(0, held, disc);
            newChoose.TotalWinCount = totalWinCount;
            newChoose.Combos = totals;
            if (payouts.length != 0) {
                let expectedVal = this.getEv(payouts, totals, expValueDenom);
                newChoose.ExpectedValue = expectedVal;
            }
            allChoose.push(newChoose);
        }
        let ret = new SimulateResult();
        ret.InitCards = initDraw;
        ret.PokerChooseList = allChoose.concat();
        return ret;
    }
    getEv(payouts, combos, expValueDenom) {
        let expectedVal = 0;
        for (let j = 0; j < combos.length; j++) {
            expectedVal += payouts[j] * combos[j] / expValueDenom;
        }
        return expectedVal;
    }
    addSum(list, lengthLimit = -1) {
        let ret = 0;
        if (lengthLimit === -1)
            lengthLimit = list.length;
        for (let i = 0; i < list.length && i < lengthLimit; i++) {
            ret += list[i];
        }
        return ret;
    }
    async randomSimulate(payouts, coins, jokerCnt, name) {
        for (let i = 0; i < payouts.length; i++) {
            payouts[i] = payouts[i] * coins;
        }
        let deck = this.shuffleDeck(true, jokerCnt);
        let initDraw = deck.slice(0, 5);
        let initDrawText = [];
        for (let i = 0; i < initDraw.length; i++) {
            initDrawText.push(PokerCounter_1.PokerCounter.cardToText(initDraw[i]));
        }
        if (this.writeSql) {
            let trainId = initDrawText.sort().join(",");
            let findInitDraw = await trainDao.asyncFind(`select * from ${'machine_' + name + '_training_data'} where id='${trainId}'`);
            if (findInitDraw.length !== 0) {
                return [];
            }
        }
        this.deleteCardFromDeck(initDrawText, deck);
        let allChoose = this.getResult(jokerCnt, initDrawText, deck, payouts);
        allChoose.PokerChooseList.sort((a, b) => {
            if (a.ExpectedValue > b.ExpectedValue) {
                return -1;
            }
            if (a.ExpectedValue < b.ExpectedValue) {
                return 1;
            }
            return 0;
        });
        let bestChoose = allChoose.PokerChooseList[0];
        let dealDraw = [];
        let result = this.deal(bestChoose.Held, bestChoose.Disc, bestChoose.ExpectedValue, bestChoose.TotalWinCount, deck, payouts, dealDraw);
        let heldStr = '', initStr = '', drawStr = '', finalStr = '', initArr = [], stage = 0;
        for (let i = 0; i < initDrawText.length; i++) {
            initStr += initDrawText[i];
            initArr.push(initDrawText[i]);
        }
        for (let i = 0; i < bestChoose.Held.length; i++) {
            heldStr += bestChoose.Held[i];
        }
        for (let i = 0; i < result.draw.length; i++) {
            drawStr += result.draw[i];
        }
        for (let i = 0; i < result.final.length; i++) {
            finalStr += result.final[i];
        }
        let sinKey = initArr.sort().join(",");
        console.log(`${coins}, ${initStr}, ${heldStr}, ${drawStr}, ${finalStr}, ${result.winType}, ${result.winCoins}, ${result.physicalWR} ${result.correctedWR}`);
        if (this.writeSql) {
            await trainDao.asyncInsert('machine_' + name + '_training_data', {
                id: sinKey,
                poker_choose_list: allChoose.PokerChooseList
            });
        }
        return [coins, initStr, heldStr, drawStr, finalStr, result.winCoins, result.winType, result.physicalWR, result.correctedWR, allChoose];
    }
    deal(held, disc, expectedValue, totalWinCount, deck, payouts, dealDraw) {
        let deal = deck.slice(0, disc.length);
        let drawText = [];
        for (let i = 0; i < deal.length; i++) {
            drawText.push(PokerCounter_1.PokerCounter.cardToText(deal[i]));
        }
        this.deleteCardFromDeck(drawText, deck);
        let { win, newHeld, winType, winCount } = this.doDeal(drawText, deck, held, payouts);
        // 客观中奖率
        let physicalWinningRate = totalWinCount / this._combination(this.pokerCount - 5, disc.length);
        // 修正中奖率
        let correctedWinningRate = physicalWinningRate * this.controlRate;
        try {
            // 必然中奖，不控制
            let hit = held.length >= 2 && !['Pair', 'High Card'].includes(solver.solve(held, this.game).name);
            if (hit) {
                return {
                    winCoins: win,
                    draw: drawText,
                    final: newHeld,
                    winType: winType,
                    physicalWR: physicalWinningRate,
                    correctedWR: correctedWinningRate
                };
            }
            else {
                let rate = random(0, 1, true);
                // 中奖
                if (rate <= correctedWinningRate) {
                    let naturalResult = {
                        winCoins: win,
                        draw: drawText.concat(),
                        final: newHeld,
                        winType: winType,
                        physicalWR: physicalWinningRate,
                        correctedWR: correctedWinningRate
                    };
                    console.log('make win');
                    do {
                        console.log('calc make win');
                        deal = deck.slice(0, disc.length);
                        drawText = [];
                        for (let i = 0; i < deal.length; i++) {
                            drawText.push(PokerCounter_1.PokerCounter.cardToText(deal[i]));
                        }
                        deck.splice(0, disc.length);
                        let newResult = this.doDeal(drawText, deck, held, payouts);
                        if (newResult.win != 0) {
                            return {
                                winCoins: newResult.win,
                                draw: drawText,
                                final: newResult.newHeld,
                                winType: newResult.winType,
                                physicalWR: physicalWinningRate,
                                correctedWR: correctedWinningRate
                            };
                        }
                    } while (deck.length >= disc.length && disc.length != 0);
                    return naturalResult;
                }
                else if (win != 0) { // 中奖但控制机率没有命中，生成最大可能的无中奖牌
                    let minResult = null;
                    console.log('make zero');
                    do {
                        console.log('calc make zero');
                        deal = deck.slice(0, disc.length);
                        drawText = [];
                        for (let i = 0; i < deal.length; i++) {
                            drawText.push(PokerCounter_1.PokerCounter.cardToText(deal[i]));
                        }
                        deck.splice(0, disc.length);
                        let newResult = this.doDeal(drawText, deck, held, payouts);
                        if (newResult.win == 0) {
                            return {
                                winCoins: newResult.win,
                                draw: drawText,
                                final: newResult.newHeld,
                                winType: newResult.winType,
                                physicalWR: physicalWinningRate,
                                correctedWR: correctedWinningRate
                            };
                        }
                        else {
                            if (minResult == null || minResult.winCoins > newResult.win) {
                                minResult = {
                                    winCoins: newResult.win,
                                    draw: drawText,
                                    final: newResult.newHeld,
                                    winType: newResult.winType,
                                    physicalWR: physicalWinningRate,
                                    correctedWR: correctedWinningRate
                                };
                            }
                        }
                    } while (deck.length >= disc.length && disc.length != 0);
                    return minResult;
                }
                else { // 没有中奖
                    console.log('no win');
                    return {
                        winCoins: win,
                        draw: drawText,
                        final: newHeld,
                        winType: winType,
                        physicalWR: physicalWinningRate,
                        correctedWR: correctedWinningRate
                    };
                }
            }
        }
        catch (e) {
            console.error(`error happen`);
            console.error(`held: ${held} disc: ${disc}`);
        }
    }
    doDeal(drawText, deck, held, payouts) {
        let win = 0;
        // this.deleteCardFromDeck(drawText, deck);
        let newHeld = held.concat();
        drawText.forEach((value) => {
            newHeld.push(value);
        });
        let totals = this.simulate(newHeld, deck);
        let winCount = 0;
        let winType = 'High Card';
        for (let i = 0; i < totals.length; i++) {
            if (totals[i] != 0) {
                win += totals[i] * payouts[i];
                winType = this.title[i];
                winCount += totals[i];
                break;
            }
        }
        return { win, newHeld, winType, winCount };
    }
    saveResult(data, idx) {
        let time = sd.format(new Date(), 'YYYY-MM-DD-HH-mm-ss');
        fs_extra_1.default.ensureDir(path.join(this.rootPath, 'result'));
        fs_extra_1.default.ensureDir(path.join(this.rootPath, 'result', 'temp'));
        let columns = {
            spend: 'spend',
            init: 'init',
            held: 'held',
            draw: 'draw',
            final: 'final',
            win: 'win',
            winType: 'winType',
            physicalWR: 'physicalWinningRate',
            correctedWR: 'correctedWinningRate'
        };
        stringify(data, { header: true, columns: columns }, (err, output) => {
            if (err) {
                console.error(err);
            }
            fs_extra_1.default.writeFileSync(`${path.join(this.rootPath, 'result', 'temp')}/${time}-${idx}-${this.index}-${this.game}-${this.controlRate}.csv`, output);
        });
    }
    deleteCardFromDeck(drawText, deck) {
        for (let i = drawText.length - 1; i >= 0; i--) {
            let idx = deck.indexOf(PokerCounter_1.PokerCounter.ptoi(drawText[i]));
            if (idx != -1) {
                deck[idx] = -1;
            }
        }
        for (let i = 0, flag = true, len = deck.length; i < len; flag ? i++ : i) {
            if (deck[i] == -1) {
                deck.splice(i, 1);
                flag = false;
            }
            else {
                flag = true;
            }
        }
    }
    DeskChecker(deck, held, disc) {
        if (deck.length + held.length + disc.length != this.pokerCount) {
            console.error(`total count error - deck: ${deck.length}, held: ${held.length}, disc: ${disc.length}`);
            console.error(`deck: ${deck}`);
            console.error(`held: ${held}`);
            console.error(`disc: ${disc}`);
            throw new Error();
        }
    }
    getGroup(data, index = 0, group = []) {
        let need_apply = [];
        need_apply.push(data[index]);
        for (let i = 0; i < group.length; i++) {
            need_apply.push(group[i] + data[index]);
        }
        group.push.apply(group, need_apply);
        if (index + 1 >= data.length)
            return this._sepGroup(group);
        else
            return this.getGroup(data, index + 1, group);
    }
    _sepGroup(group) {
        let ret = [];
        for (let i = 0; i < group.length; i++) {
            let curSel = group[i];
            let curSelSp = [];
            for (let j = 0; j < curSel.length; j += 2) {
                curSelSp.push(curSel.slice(j, j + 2));
            }
            ret.push(curSelSp);
        }
        return ret;
    }
    _combination(m, n) {
        if (m < 0 || n < 0 || m < n)
            return 0; // 简化输入条件
        return this._factorial(m, n) / this._factorial(n, n);
    }
    _combinationArray(arr, n, res, resultHandler) {
        if (n == 0) {
            resultHandler(res);
            return;
        }
        if (arr.length == n) {
            resultHandler(res.concat(arr));
            return;
        }
        for (let i = 0; i <= arr.length - n; i++) {
            let temp = res.slice(0);
            temp.push(arr[i]);
            this._combinationArray(arr.slice(i + 1), n - 1, temp, resultHandler);
        }
    }
    _array(m, n) {
        return this._factorial(m, n);
    }
    _factorial(m, n) {
        let num = 1;
        let count = 0;
        for (let i = m; i > 0; i--) {
            if (count == n) {
                break;
            }
            num = num * i;
            count++;
        }
        return num;
    }
}
exports.Simulator = Simulator;
