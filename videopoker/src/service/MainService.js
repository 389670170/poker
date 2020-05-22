const winType = require('../dao/dynamo/winTypeDao');
const userMain = require('../dao/dynamo/userMainDao');
const betsArray = require('../dao/dynamo/betsArrayDao');
const allSpins = require('../dao/dynamo/allSpinDao');
const userDao = require('../dao/rds/UserDao');
//const trainDao = require('../dao/rds/trainerDao');
const userAchievement = require('../dao/rds/UserAchievementDao');
const UserQuest = require('../dao/rds/UserQuestDao');
const game = require('../dao/rds/GameDao');
const Hand = require('pokersolver').Hand;
const gameRedis = require('../dao/redis/GameDao');
const practiceRedis = require('../dao/redis/IsPractice');
let send = require('../handler/MainHandler');
let n2CfgLevelDao = require('../dao/rds/N2CfgLevelDao');
let n2CfgJackpotDao = require('../dao/dynamo/cfgJackpotDao');
let simulator = require('../../tools/Simulator');
let n2CfgVipDao = require('../dao/rds/N2CfgVipDao');
let IsPigFull = require('../../tools/pigFull');
//·······················································································································
let __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : {"default": mod};
};
let __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    let result = {};
    if (mod != null) for (let k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", {value: true});
const PokerCounter = require("../../tools/PokerCounter");
const DeucesWildCounter = require("../../tools/DeucesWildCounter");
const JacksOrBetterCounter = require("../../tools/JacksOrBetterCounter");
const TwoWaysRoyalCounter = require("../../tools/TwoWaysRoyal");
const AcesEightsCounter = require("../../tools/AcesEightsCounter");
const DeucesJokerWildCounter = require("../../tools/DeucesJokerWildCounter");
const AcesFacesCounter_1 = require("../../tools/AcesFacesCounter");
const JokerCounter = require("../../tools/JokerCounter");
const fs_extra_1 = __importDefault(require("fs-extra"));
const path = __importStar(require("path"));
const Hand_1 = require("../../tools/Hand");
const solver = require('../../tools/PokerSolver').Hand;
const stringify = require('csv-stringify');
const sd = require('silly-datetime');
const random = require('number-random');
const trainDao = require('../../src/dao/rds/trainerDaoLast');
const cfgJackpot = require('../../src/dao/dynamo/cfgJackpotDao');
//·······················································································································
const JacksOrBetter_1 = require("../../tools/machines/JacksOrBetter");
const DeucesWild_1 = require("../../tools/machines/DeucesWild");
const Joker_1 = require("../../tools/machines/Joker");
const DeucesJokerWild_1 = require("../../tools/machines/DeucesJokerWild");
const AcesEights_1 = require("../../tools/machines/AcesEights");
const TwoWayRoyal_1 = require("../../tools/machines/TwoWayRoyal");
const AcesFaces_1 = require("../../tools/machines/AcesFaces");
const AllAmerican_1 = require("../../tools/machines/AllAmerican");
const BonusPoker_1 = require("../../tools/machines/BonusPoker");
const BonusDeucesWild_1 = require("../../tools/machines/BonusDeucesWild");
const BlackJackBonusPoker_1 = require("../../tools/machines/BlackJackBonusPoker");
const BonusDrawPoker_1 = require("../../tools/machines/BonusDrawPoker");
const BonusPokerDeluxe_1 = require("../../tools/machines/BonusPokerDeluxe");
const DoubleAcesFaces_1 = require("../../tools/machines/DoubleAcesFaces");
const DoubleDoubleAcesFaces_1 = require("../../tools/machines/DoubleDoubleAcesFaces");
const DoubleBonusDeucesWild_1 = require("../../tools/machines/DoubleBonusDeucesWild");
const DoubleDeucesWild_1 = require("../../tools/machines/DoubleDeucesWild");
const DoubleDoubleBonusPokerPlus_1 = require("../../tools/machines/DoubleDoubleBonusPokerPlus");
const DoubleJokerPoker_1 = require("../../tools/machines/DoubleJokerPoker");
const DoubleJackpotPoker_1 = require("../../tools/machines/DoubleJackpotPoker");
const JokerPokerAcesOrBetter_1 = require("../../tools/machines/JokerPokerAcesOrBetter");
const RoyalAcesBonusPoker_1 = require("../../tools/machines/RoyalAcesBonusPoker");
const SuperAcesBonusPoker_1 = require("../../tools/machines/SuperAcesBonusPoker");
const SuperBonusDeucesWild_1 = require("../../tools/machines/SuperBonusDeucesWild");
const LooseDeuces_1 = require("../../tools/machines/LooseDeuces");
const TensOrBetter_1 = require("../../tools/machines/TensOrBetter");
const SuperDoubleBonus_1 = require("../../tools/machines/SuperDoubleBonus");
const SuperDoubleDoubleBonusPoker_1 = require("../../tools/machines/SuperDoubleDoubleBonusPoker");
const TripleBonusPoker_1 = require("../../tools/machines/TripleBonusPoker");
const TripleBonusPokerPlus_1 = require("../../tools/machines/TripleBonusPokerPlus");
const TripleDeucesWild_1 = require("../../tools/machines/TripleDeucesWild");
const TripleDoubleDrawPoker_1 = require("../../tools/machines/TripleDoubleDrawPoker");
const UltraBonusPoker_1 = require("../../tools/machines/UltraBonusPoker");
const WhiteHotAces_1 = require("../../tools/machines/WhiteHotAces");
const TripleDoubleBonusPoker_1 = require("../../tools/machines/TripleDoubleBonusPoker");
//·······················································································································
module.exports = {
    pokerArray: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51],
    /**
     * 请求进入大厅
     * @param userId
     * @param idx
     * @param isPractice
     * @returns {Promise<{curBetIdx: *, creditAmount: (*|string[]), payTable: {bet1List: Array, bet2List: Array, bet3List: Array, bet4List: Array, bet5List: Array, winData: Array, jackPot: Array}, jackpotAcc: *, jackpotBase: *, creditAmountIdx: *, isHaveInterstitial: boolean, isPractice: *, creditAmountMax: *, jackpotAdd: *, gameId: *}>}
     */
    findBet: async function (userId, idx, isPractice) {
        let newUser = await userDao.selectUserById(userId);
        if (newUser.enter_game) {
            await userDao.updateEnterGame(userId, Number(newUser.enter_game) + 1)
        } else {
            await userDao.updateEnterGame(userId, 1)
        }
        let levelConfig = await n2CfgLevelDao.selectConfigByLevel(newUser.level);
        let bet_array = levelConfig.stakegear.split(',');
        for (let i = 0; i < bet_array.length; i++) {
            bet_array[i] = Number(bet_array[i])
        }
        await gameRedis.setUserMesg("game_pos", userId, {pos: idx});
        await practiceRedis.setUserMesg(userId, {practice: isPractice});
        let cur_bet;
        let creditAmountIdx;
        let user_main = await userMain.findUserMain(userId);
        if (!user_main.Items || user_main.Items.length === 0) {
            cur_bet = 0;
            creditAmountIdx = 0
        }
        else {
            cur_bet = user_main.Items[0].cur_bet;
            creditAmountIdx = user_main.Items[0].creditAmountIdx
        }
        let cur_bet_idx = bet_array.indexVf(cur_bet);
        let mult = await winType.findMult(idx);
        let bet1List = [];
        let bet2List = [];
        let bet3List = [];
        let bet4List = [];
        let bet5List = [];
        let winData = [];
        let jackpotId = await cfgJackpot.findJackpot(idx);
        let jackPot = [];
        let row = jackpotId.Items[0].jackpotCombinationID;
        if (row.toString().indexOf(',') !== -1) {
            let arr = row.split(',');
            for (let i = 0; i < arr.length; i++) {
                jackPot.push({row: Number(arr[i]), col: 4})
            }
        } else {
            jackPot = [{row: Number(row), col: 4}];
        }
        console.log("jackpot:", jackPot);
        let mults = mult.Items.sort(compare('id'));
        for (let o = 0; o < mults.length; o++) {
            bet1List.push(mults[o].mult1);
            bet2List.push(mults[o].mult2);
            bet3List.push(mults[o].mult3);
            bet4List.push(mults[o].mult4);
            bet5List.push(mults[o].mult5);
            winData.push({name: mults[o].name});
        }
        let allSpin = await n2CfgJackpotDao.findJackpot(idx);
        console.log("winData:", winData);
        await gameRedis.setUserMesg("game_bet_array", userId, {bet_array: bet_array});
        let isHaveInterstitial = newUser.have_pay_dollar;
        if (isHaveInterstitial === true) {
            isHaveInterstitial = false
        }
        else {
            isHaveInterstitial = true
        }
        if (newUser.level < 11) {
            isHaveInterstitial = false;
        }
        if (newUser.tutorial_state !== 3) {
            cur_bet = 4;
            creditAmountIdx = 3;
        }
        let result = {
            curBetIdx: cur_bet,
            creditAmount: bet_array,
            payTable: {bet1List, bet2List, bet3List, bet4List, bet5List, winData, jackPot},
            jackpotAcc: jackpotId.Items[0].jackpot,
            jackpotBase: allSpin.Items[0].jackpotNow,
            creditAmountIdx: creditAmountIdx,
            isHaveInterstitial: isHaveInterstitial,
            isPractice: isPractice,
            creditAmountMax: levelConfig.maxbet,
            jackpotAdd: jackpotId.Items[0].jackpotRestore,
            gameId: idx
        };
        return result
    },
    /**
     * 第一次发牌
     * @param cur_bet_idx
     * @param userId
     * @param creditAmountIdx
     * @param hand
     * @param pokerList
     * @param isPractice
     * @param res
     * @param commonParams
     * @param common
     * @returns {Promise<*>}
     */
    poker: async function (cur_bet_idx, userId, creditAmountIdx, hand, pokerList, isPractice, res, commonParams, common) {
        let userDebug = await userDao.selectUserById(userId);
        if (userDebug.is_debug_user === false) {
            pokerList = []
        }
        if (cur_bet_idx === 4) {
            await userAchievement.updateCollected(userId, 2, 1)
        }
        let pos1 = await gameRedis.getUserMesg("game_pos", userId);
        let pos = pos1.pos;
        let random = Math.random();
        let mult = await winType.findMult(pos);
        let mults = mult.Items.sort(compare('id'));
        let num = cur_bet_idx + 1;
        let bestMult;
        let payTable = [];
        for (let i = 0; i < mults.length; i++) {
            payTable.push(mults[mults.length - i - 1]["mult" + num])
        }
        // payTable.sort(sortNumberBTS);
        let allPro = 0;
        for (let i = 0; i < mults.length; i++) {
            if (allPro < random && random < allPro + mults[i].probability) {
                bestMult = mults[i].id
            }
            allPro = allPro + mults[i].probability
        }
        let deck = shuffleDeck(true, 0);
        if (pos === 3 || pos === 6) {
            deck = shuffleDeck(true, 1);
        }
        //发初始五张牌

        let firstFiveArr = deck.slice(0, 5);
        if (pokerList.length > 4) {
            for (let i = 0; i < pokerList.length; i++) {
                firstFiveArr[i] = PokerCounter.PokerCounter.ptoi(pokerList[i])
            }
        }
        for (let i = 0; i < firstFiveArr.length; i++) {
            deck.remove1(firstFiveArr[i]);
            firstFiveArr[i] = PokerCounter.PokerCounter.cardToText(firstFiveArr[i]);
        }
        //todo----------------------------------------
        //firstFiveArr = ["10H", "JH", "QH", "KH", "AH"];
        console.log("pokerList:", pokerList);
        console.log("pokerList:", pokerList.length);
        await gameRedis.setUserMesg("game_poker_deck", userId, {deck: deck});
        let bet_array1 = await gameRedis.getUserMesg("game_bet_array", userId);
        let bet_array = bet_array1.bet_array;
        let cur_bet = bet_array[creditAmountIdx];
        await gameRedis.setUserMesg("game_cur_bet", userId, {cur_bet: cur_bet});
        console.log("payTable1:",payTable);
        await gameRedis.setUserMesg("game_pay_table", userId, {payTable: payTable});
        await gameRedis.setUserMesg("game_cur_bet_idx", userId, {cur_bet_idx: cur_bet_idx});
        await gameRedis.setUserMesg("game_creditAmountIdx", userId, {creditAmountIdx: creditAmountIdx});
        await gameRedis.setUserMesg("game_hand", userId, {hand: hand});
        await userMain.updateUserMain(userId, cur_bet_idx, creditAmountIdx);
        let allSpin = await allSpins.findAllSpin();
        let jackpot_acc = allSpin.Items[0].spin;
        let user = await userDao.selectUserById(userId);
        await gameRedis.setUserMesg("game_firstFiveArr", userId, {firstFiveArr: firstFiveArr});
        if (num * cur_bet * hand > userDebug.cash) {
            return {pokerList: ""}
        }
        if (isPractice === false) {
            await userDao.addMoney(userId, -num * cur_bet * hand);
        }
        let posName;
        if (pos === 1) {
            posName = 'jacksbetter';
        }
        if (pos === 2) {
            posName = 'deuceswild';
        }
        if (pos === 3) {
            posName = 'joker';
        }
        if (pos === 6) {
            posName = 'deucesjokerwild';
        }
        if (pos === 5) {
            posName = 'aceseights';
        }
        if (pos === 4) {
            posName = 'twowayroyal';
        }
        if (pos === 7) {
            posName = 'acesFaces';
        }
        if (pos === 8) {
            posName = 'allAmerican';
        }
        if (pos === 9) {
            posName = 'blackJackBonusPoker';
        }
        if (pos === 10) {
            posName = 'bonusDeucesWild';
        }
        if (pos === 11) {
            posName = 'bonusDrawPoker';
        }
        if (pos === 12) {
            posName = 'bonusPoker';
        }
        if (pos === 13) {
            posName = 'bonusPokerDeluxe';
        }
        if (pos === 14) {
            posName = 'doubleAcesFaces';
        }
        if (pos === 15) {
            posName = 'doubleBonusDeucesWild';
        }
        if (pos === 16) {
            posName = 'doubleDeucesWild';
        }
        if (pos === 17) {
            posName = 'doubleDoubleAcesFaces';
        }
        if (pos === 18) {
            posName = 'doubleDoubleBonusPokerPlus';
        }
        if (pos === 19) {
            posName = 'doubleJackpotPoker';
        }
        if (pos === 20) {
            posName = 'doubleJokerPoker';
        }
        if (pos === 21) {
            posName = 'jokerPokerAcesOrBetter';
        }
        if (pos === 22) {
            posName = 'looseDeuces';
        }
        if (pos === 23) {
            posName = 'royalAcesBonusPoker';
        }
        if (pos === 24) {
            posName = 'superAcesBonusPoker';
        }
        if (pos === 25) {
            posName = 'superBonusDeucesWild';
        }
        if (pos === 26) {
            posName = 'superDoubleBonus';
        }
        if (pos === 27) {
            posName = 'superDoubleDoubleBonusPoker';
        }
        if (pos === 28) {
            posName = 'tensOrBetter';
        }
        if (pos === 29) {
            posName = 'tripleBonusPoker';
        }
        if (pos === 30) {
            posName = 'tripleBonusPokerPlus';
        }
        if (pos === 31) {
            posName = 'tripleDeucesWild';
        }
        if (pos === 32) {
            posName = 'tripleDoubleBonusPoker';
        }
        if (pos === 33) {
            posName = 'tripleDoubleDrawPoker';
        }
        if (pos === 34) {
            posName = 'ultraBonusPoker';
        }
        if (pos === 35) {
            posName = 'whiteHotAces';
        }
        //todo
        let totals = simulate(firstFiveArr, deck, posName);
        let winType1 = 'NONE';
        let title = [];
        let payTab = await winType.findMult(pos);
        payTab.Items.sort(compareBTS('id'));
        for (let i = 0; i < payTab.Items.length; i++) {
            title.push(payTab.Items[i].name)
        }
        for (let i = 0; i < totals.length; i++) {
            if (totals[i] !== 0) {
                winType1 = title[i];
                break;
            }
        }
        let jackpot = await n2CfgJackpotDao.findJackpot(pos);
        let jackpotPer = jackpot.Items[0].per;
        if (num * cur_bet * hand * jackpotPer > 1) {
            await n2CfgJackpotDao.updateNowJackpotByIdx(pos, num * cur_bet * hand * jackpotPer);
        }
        res.log2Cloud(['deal', common.device_id, common.email_id, common.facebook_id, common.userId, common.platform, firstFiveArr, winType1, cur_bet_idx, creditAmountIdx, hand]);
        if (isPractice === true) {
            res.log2Cloud(['training_deal', common.device_id, common.email_id, common.facebook_id, common.userId, common.platform, firstFiveArr, winType1, cur_bet_idx, creditAmountIdx, hand]);
        }
        return {pokerList: firstFiveArr, winTypeName: winType1, jackpot: jackpot.Items[0].jackpotNow}
    },
    /**
     * 第二次发牌
     * @param res
     * @param holdIdxList
     * @param userId
     * @param commonParams
     * @param common
     * @returns {Promise<{result: {balance: (number|*), pokerDataList: Array, jackpotAcc: number, isDoubleOrNothing: boolean, isRewardRoulette: boolean, upgrade: number, curExp: number, nextExp: number, levelUpReward: {coins: number, vipExp: number, creditAmount: (*|string[]), pushAmount: *, creditAmountMax: *}, bigWin, isFlash: boolean, jackPot, jackpot: *, pokerEvData: {pokerList: *[], pokerEvList: Array}}, other: {name: *, win: number, pos: (*|number), winType: boolean, isPigFull: number, levelUp: boolean, vipLevel: number, vipExp: number, vipNextExp: *}}>}
     */
    secondPoker: async function (res, holdIdxList, userId, commonParams, common) {
        let user1 = await userDao.selectUserById(userId);
        let oldLevel = user1.level;
        //cur_bet押注
        let pos1 = await gameRedis.getUserMesg("game_pos", userId);
        let isPractice = await gameRedis.getUserMesg("practice", userId);
        isPractice = isPractice.practice;
        let pos = pos1.pos;
        let cur_bet_idx1 = await gameRedis.getUserMesg("game_cur_bet_idx", userId);
        let hand = await gameRedis.getUserMesg("game_hand", userId);
        let finalPos = 0;
        if (hand.hand == 100) {
            finalPos = pos + 100
        }
        else {
            finalPos = pos
        }
        //cur_bet_idx:0,1,2,3,4
        let cur_bet_idx = cur_bet_idx1.cur_bet_idx;
        let firstFiveArr1 = await gameRedis.getUserMesg("game_firstFiveArr", userId);
        let firstArr1 = await gameRedis.getUserMesg("game_firstFiveArr", userId);
        let firstArr = firstArr1.firstFiveArr;
        let firstFiveArr = firstFiveArr1.firstFiveArr;
        let lists = [0, 1, 2, 3, 4];
        let finalArr = [];
        for (let p = 0; p < holdIdxList.length; p++) {
            lists.remove1(holdIdxList[p]);
            finalArr[holdIdxList[p]] = firstFiveArr[holdIdxList[p]]
        }
        let cur_bet1 = await gameRedis.getUserMesg("game_cur_bet", userId);
        let cur_bet = cur_bet1.cur_bet;
        let held = [];
        let disc = [];
        let listss = [0, 1, 2, 3, 4];
        for (let p = 0; p < holdIdxList.length; p++) {
            listss.remove1(holdIdxList[p]);
            held.push(firstFiveArr[holdIdxList[p]])
        }
        for (let p = 0; p < listss.length; p++) {
            disc.push(firstFiveArr[listss[p]])
        }
        let payTable = await gameRedis.getUserMesg("game_pay_table", userId);
        let deck1 = await gameRedis.getUserMesg("game_poker_deck", userId);
        let posName;
        let trainName;
        let totalWinCount;
        let pokerCount;
        let allNum;
        if (pos === 1) {
            posName = 'jacksbetter';
            trainName = 'jacks_or_better';
            pokerCount = 52;
            allNum = 2598960;
        }
        if (pos === 2) {
            posName = 'deuceswild';
            trainName = 'deuces_wild';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 3) {
            posName = 'joker';
            trainName = 'joker';
            pokerCount = 53
            allNum = 2869685;
        }
        if (pos === 6) {
            posName = 'deucesjokerwild';
            trainName = 'deuces_joker_wild';
            pokerCount = 53
            allNum = 2869685;
        }
        if (pos === 5) {
            posName = 'aceseights';
            trainName = 'aces_eights';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 4) {
            posName = 'twowayroyal';
            trainName = 'two_ways_royal';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 7) {
            posName = 'acesFaces';
            trainName = 'aces_faces';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 8) {
            posName = 'allAmerican';
            trainName = 'all_american';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 9) {
            posName = 'blackJackBonusPoker';
            trainName = 'black_jack_bonus_poker';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 10) {
            posName = 'bonusDeucesWild';
            trainName = 'bonus_deuces_wild';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 11) {
            posName = 'bonusDrawPoker';
            trainName = 'bonus_draw_poker';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 12) {
            posName = 'bonusPoker';
            trainName = 'bonus_poker';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 13) {
            posName = 'bonusPokerDeluxe';
            trainName = 'bonus_poker_deluxe';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 14) {
            posName = 'doubleAcesFaces';
            trainName = 'double_aces_faces';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 15) {
            posName = 'doubleBonusDeucesWild';
            trainName = 'double_bonus_deuces_wild';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 16) {
            posName = 'doubleDeucesWild';
            trainName = 'double_deuces_wild';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 17) {
            posName = 'doubleDoubleAcesFaces';
            trainName = 'double_double_aces_faces';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 18) {
            posName = 'doubleDoubleBonusPokerPlus';
            trainName = 'double_double_bonus_poker_plus';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 19) {
            posName = 'doubleJackpotPoker';
            trainName = 'double_jackpot_poker';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 20) {
            posName = 'doubleJokerPoker';
            trainName = 'double_joker_poker';
            pokerCount = 53
            allNum = 2869685;
        }
        if (pos === 21) {
            posName = 'jokerPokerAcesOrBetter';
            trainName = 'joker_poker_aces_or_better';
            pokerCount = 53
            allNum = 2869685;
        }
        if (pos === 22) {
            posName = 'looseDeuces';
            trainName = 'loose_deuces';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 23) {
            posName = 'royalAcesBonusPoker';
            trainName = 'royal_aces_bonus_poker';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 24) {
            posName = 'superAcesBonusPoker';
            trainName = 'super_aces_bonus_poker';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 25) {
            posName = 'superBonusDeucesWild';
            trainName = 'super_bonus_deuces_wild';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 26) {
            posName = 'superDoubleBonus';
            trainName = 'super_double_bonus';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 27) {
            posName = 'superDoubleDoubleBonusPoker';
            trainName = 'super_double_double_bonus_poker';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 28) {
            posName = 'tensOrBetter';
            trainName = 'tens_or_better';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 29) {
            posName = 'tripleBonusPoker';
            trainName = 'triple_bonus_poker';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 30) {
            posName = 'tripleBonusPokerPlus';
            trainName = 'triple_bonus_poker_plus';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 31) {
            posName = 'tripleDeucesWild';
            trainName = 'triple_deuces_wild';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 32) {
            posName = 'tripleDoubleBonusPoker';
            trainName = 'triple_double_bonus_poker';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 33) {
            posName = 'tripleDoubleDrawPoker';
            trainName = 'triple_double_draw_poker';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 34) {
            posName = 'ultraBonusPoker';
            trainName = 'ultra_bonus_poker';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 35) {
            posName = 'whiteHotAces';
            trainName = 'white_hot_aces';
            pokerCount = 52
            allNum = 2598960;
        }
        //todo
        let vip = false;
        let isSubscribe = true;
        if (!user1.subscribe_time || Number(user1.subscribe_time) < new Date().getTime()) {
            isSubscribe = false
        }
        if (isSubscribe === true || user1.vip_time && user1.vip_time > new Date().getTime()) {
            vip = true;
        }
        let totals1;
        let pokerEvList = [];
        if (isPractice === true || vip === true) {
            console.log("trainName:", trainName, "+++", firstFiveArr.sort());
            let train1 = await trainDao.asyncFind(`select * from ${'machine_' + trainName + '_training_data'} where id='${firstFiveArr.sort()}'`);
            console.log("train1:", train1);
            if (train1 && train1.length !== 0) {
                train1 = train1[0].poker_choose_list;
                for (let i = 0; i < train1.length; i++) {
                    let combos = train1[i].Combos;
                    let pokerTypeDataList = [];
                    for (let p = 0; p < Object.keys(combos).length; p++) {
                        let oneCombos = {winTypeNameIndex: (Object.keys(combos).length - 1 - p) + "", num: combos[p]};
                        pokerTypeDataList.push(oneCombos)
                    }
                    let one = {holdPokerList: train1[i].Held, pokerTypeDataList: pokerTypeDataList, allNum: allNum};
                    pokerEvList.push(one)
                }
            }
        }
        let pokerEvData = {pokerList: firstArr, pokerEvList: pokerEvList};
        //let train = await trainDao.asyncFind(`select * from ${'machine_' + trainName + '_training_data'} where id='${firstFiveArr.sort()}'`);
        let train = [];
        console.log("held*:", held);
        if (train.length === 0) {
        }
        else {
            if (train[0].hasOwnProperty('poker_choose_list') === false) {
                totals1 = {
                    "0": 0,
                    "1": 44,
                    "2": 192,
                    "3": 296,
                    "4": 8,
                    "5": 11242,
                    "6": 1638,
                    "7": 117,
                    "8": 14079,
                    "9": 68451,
                    "10": 82298,
                    "11": 1000000
                }
            }
            else {
                for (let i = 0; i < train[0].poker_choose_list.length; i++) {
                    if (train[0].poker_choose_list[i].hasOwnProperty('Held')) {
                        if (held.sort().toString() === train[0].poker_choose_list[i].Held.sort().toString() && disc.sort().toString() === train[0].poker_choose_list[i].Disc.sort().toString()) {
                            totalWinCount = train[0].poker_choose_list[i].TotalWinCount;
                            totals1 = train[0].poker_choose_list[i].Combos
                        }
                    }
                    if (train[0].poker_choose_list[i].hasOwnProperty('HELD')) {
                        if (held.sort().toString() === train[0].poker_choose_list[i].HELD.sort().toString() && disc.sort().toString() === train[0].poker_choose_list[i].DISC.sort().toString()) {
                            totalWinCount = train[0].poker_choose_list[i].TotalWinCount;
                            totals1 = train[0].poker_choose_list[i].COMBOS
                        }
                    }
                }
            }
        }
        console.log("held*:", held);
        let arr = [];
        for (let q in totals1) {
            arr.push(totals1[q]);
        }
        let totals = arr;
        console.log("totalWinCount:", totalWinCount);
        let payTab = await winType.findMult(pos);
        let payTables = [];
        payTab.Items.sort(compareBTS('id'));
        for (let i = 0; i < payTab.Items.length; i++) {
            payTables.push(payTab.Items[i].name)
        }
        let expValueDenom = _combination(pokerCount - 5, 5 - held.length);
        let expectedVal = getEv(payTable.payTable, totals, expValueDenom);
        //held = held.sort();
        //disc = disc.sort();
        let allResult = [];
        let allNextExp;
        let allCoinsResult = 0;
        let allGameCoins = 0;
        let bigWin = false;
        console.log("payTables:", payTables);
        // bigWin的具体计算 result.winCoins/hand >=8
        let bigWinNumber = 0;
        let bigWinMoney = 0;
        let bigWinLast = 0;
        let bigWinTypeName = "";
        let bigWinPokerList = [];
        let bigWinTrue = {};
        let jackpotTrue = {};
        let user = await userDao.selectUserById(userId);
        let jackpot1 = await n2CfgJackpotDao.findJackpot(pos);
        let newUser = await userDao.selectUserById(userId);
        let levelConfig = await n2CfgLevelDao.selectConfigByLevel(newUser.level);
        let allGameArray = [];
        let allAddMoney = 0;
        let achi1 = 0;
        let achi6 = 0;
        let winCoin1 = 0;
        let winCoin2 = 0;
        let winCoin3 = 0;
        for (let i = 0; i < hand.hand; i++) {
            let heldFirst = held.slice(0, 5);
            let deck = deck1.deck.slice(0, 53);
            let result = deal(heldFirst, disc, expectedVal, totalWinCount, deck, payTable.payTable, '', posName, payTables);
            console.log("result:", result);
            bigWinNumber += result.winCoins / (cur_bet_idx + 1);
            bigWinMoney += result.winCoins * cur_bet;
            for (let u = 0; u < result.draw.length; u++) {
                finalArr[lists[u]] = result.draw[u]
            }
            let bigWinFinalArr = finalArr.slice(0, 5);
            if (result.winCoins * cur_bet > bigWinLast) {
                bigWinTypeName = result.winType;
                bigWinPokerList = bigWinFinalArr;
                bigWinLast = result.winCoins * cur_bet;
            }
            let num = cur_bet_idx + 1;
            // let oldLevel = user.level;
            let balance = user.cash;
            if (hand.hand === 1) {
                await gameRedis.setUserMesg("game_reward", userId, {reward: result.winCoins * cur_bet});
                await gameRedis.setUserMesg("game_reward_first", userId, {reward: result.winCoins * cur_bet});
            }
            let bigWinOne = false;
            if (isPractice === false) {
                if (bigWinNumber / hand.hand >= Number(jackpot1.Items[0].bigWinTreshold)) {
                    bigWinOne = true
                }
                if (result.winCoins / (cur_bet_idx + 1) < Number(jackpot1.Items[0].bigWinTreshold)) {
                    bigWinOne = false
                }
                allGameArray.push({
                    user_id: userId,
                    card_array: result.final,
                    seed: 1,
                    pay_coin: num * cur_bet,
                    win_coin: result.winCoins * cur_bet,
                    stage: finalPos,
                    big_win: bigWinOne
                });
            } else {
                allGameArray.push({
                    user_id: userId,
                    card_array: result.final,
                    seed: 1,
                    pay_coin: 0,
                    win_coin: 0,
                    stage: finalPos,
                    big_win: false
                });
            }
            /* await game.insert({
                 user_id: userId,
                 card_array: result.final,
                 seed: 1,
                 pay_coin: num * cur_bet,
                 win_coin: result.winCoins * cur_bet,
                 stage: finalPos,
                 big_win: bigWinOne
             });*/
            if (result.winCoins * cur_bet > 0) {
                achi1 += 1;
                achi6 += result.winCoins * cur_bet;
            }
            if (isPractice === false) {
                winCoin1 += num * cur_bet;
                winCoin2 += result.winCoins * cur_bet;
                winCoin3 += result.winCoins * cur_bet;
            }
            let name = user.name;
            let win = result.winCoins * cur_bet;
            if (isPractice === true) {
                win = 0;
            }
            let getJackpot = 0;
            if (hand.hand === 1 && cur_bet_idx === 4) {
                //领取jackpot
                let jackpotId1 = await cfgJackpot.findJackpot(pos);
                let jackpotId = jackpotId1.Items[0].jackpotCombinationID;
                if (jackpotId.toString().indexOf(',') !== -1) {
                    let arr = jackpotId.split(',');
                    let jackpotid = await winType.findOneMult(result.winType, pos);
                    let jackpotIdNow = jackpotid.Items[0].id;
                    if (arr.indexOf(jackpotIdNow.toString()) !== -1) {
                        //中了jackpot
                        let jackpotNow1 = await cfgJackpot.findJackpot(pos);
                        let jackpotNow = jackpotNow1.Items[0].jackpotNow;
                        win += jackpotNow;
                        getJackpot += jackpotNow;
                        jackpotTrue = {win: jackpotNow, winTypeName: result.winType, pokerList: finalArr.slice(0, 5)};
                        console.log("jackpotTrue:", jackpotTrue);
                        await cfgJackpot.resetNowJackpotByIdx(pos);
                    }
                } else {
                    let jackpotName = await winType.findOneMult(result.winType, pos);
                    if (jackpotName.Items[0].id.toString() === jackpotId.toString()) {
                        //中了jackpot
                        let jackpotNow1 = await cfgJackpot.findJackpot(pos);
                        let jackpotNow = jackpotNow1.Items[0].jackpotNow;
                        win += jackpotNow;
                        getJackpot += jackpotNow;
                        jackpotTrue = {win: jackpotNow, winTypeName: result.winType, pokerList: finalArr.slice(0, 5)};
                        await cfgJackpot.resetNowJackpotByIdx(pos);
                    }
                }
            }
            if (isPractice === false) {
                allAddMoney += (result.winCoins * cur_bet + getJackpot);
                res.log2Cloud(['coin_change', common.device_id, common.email_id, common.facebook_id, common.userId, common.platform, user.cash - result.winCoins * cur_bet, user.cash, "draw", pos]);
            }
            let nextExp = Number(levelConfig.exp);
            let finalA = finalArr.slice(0, 5);
            allResult.push({win: win, winTypeName: result.winType, pokerList: finalA});
            allNextExp = Number(nextExp);
            allGameCoins += win
        }
        let userQuest = await UserQuest.selectUserQuest(userId);
        if (isPractice === false) {
            await userDao.addExp(userId, ((cur_bet_idx + 1) * cur_bet + allGameCoins) / Number(hand.hand));
            await addlevel(userId);
            console.log("exp------:", ((cur_bet_idx + 1) * cur_bet + allGameCoins) / Number(hand.hand));
            if (isPractice === false) {
                for (let i = 0; i < userQuest.length; i++) {
                    if (userQuest[i].type === 1) {
                        await UserQuest.updateCollected(userQuest[i].id, 1)
                    }
                    if (userQuest[i].type === 2) {
                        if (cur_bet_idx === 4) {
                            await UserQuest.updateCollected(userQuest[i].id, 1)
                        }
                    }
                    if (userQuest[i].type === 6) {
                        if (allGameCoins !== 0) {
                            await UserQuest.updateCollected(userQuest[i].id, allGameCoins)
                        }
                    }
                    if (userQuest[i].type === 5) {
                        if (jackpotTrue.win > 0) {
                            await UserQuest.updateCollected(userQuest[i].id, 1)
                        }
                    }
                    if (userQuest[i].type === 8) {
                        if (jackpotTrue.win > 0) {
                            await UserQuest.updateCollected(userQuest[i].id, Number(allGameCoins) + Number(jackpotTrue.win))
                        }
                    }
                }
                if (jackpotTrue.win > 0) {
                    console.log("jackpotTrue:", jackpotTrue);
                    await userAchievement.updateCollected(userId, 5, 1);
                    await userAchievement.updateCollected(userId, 8, jackpotTrue.win)
                }
            }
        }
        let user3 = await userDao.selectUserById(userId);
        let levelConfig1 = await n2CfgLevelDao.selectConfigByLevel(user3.level);
        let nextExp = Number(levelConfig1.exp);
        let isDoubleOrNothing;
        if (hand.hand > 1) {
            isDoubleOrNothing = false;
        } else {
            isDoubleOrNothing = true;
        }
        let jackpot = await n2CfgJackpotDao.findJackpot(pos);
        if (isPractice === false) {
            if (bigWinNumber / hand.hand >= Number(jackpot.Items[0].bigWinTreshold)) {
                bigWinTrue = {
                    win: bigWinMoney,
                    winTypeName: bigWinTypeName,
                    pokerList: bigWinPokerList
                };
                bigWin = true;
                for (let i = 0; i < userQuest.length; i++) {
                    if (userQuest[i].type === 10) {
                        await UserQuest.updateCollected(userQuest[i].id, 1)
                    }
                }
                await userAchievement.updateCollected(userId, 10, 1)
            }
        }
        let isPigFull = await IsPigFull.pigIsFull(userId);
        console.log("isPigFull:", isPigFull);
        let newUser2 = await userDao.selectUserById(userId);
        let upgrade = newUser2.level - oldLevel;
        let allCoins = 0;
        let vipExp = 0;
        for (let i = 0; i < upgrade; i++) {
            let oldLevelConfig = await n2CfgLevelDao.selectConfigByLevel(oldLevel + i);
            allCoins += oldLevelConfig.coinbonus;
            let vipPts = oldLevelConfig.lv_honor_pts;
            vipPts = vipPts.replace(/honor_multiplier/, 1);
            vipPts = eval(vipPts);
            vipExp += vipPts
        }
        let vipConfig = await n2CfgVipDao.selectConfigByLevel(user.vip_level);
        let level_up_gifts = vipConfig.level_up_gifts;
        allCoins += allCoins * Number(level_up_gifts);
        if (isPractice === false) {
            await userDao.addMoney(userId, allCoins);
            await userDao.addHonour(userId, vipExp);
        }
        let level_up = await IsPigFull.levelUp(userId);
        allCoinsResult += allCoins;
        let userFinal = await userDao.selectUserById(userId);
        let vipConfigFinal = await n2CfgVipDao.selectConfigByLevel(userFinal.vip_level);
        let bet_array = levelConfig1.stakegear.split(',');
        for (let i = 0; i < bet_array.length; i++) {
            bet_array[i] = Number(bet_array[i])
        }
        let honor_pts_final = vipConfigFinal.honor_pts;
        await userAchievement.updateCollected(userId, 20, upgrade);
        let newUser1 = await userDao.selectUserById(userId);
        res.log2Cloud(['draw', common.device_id, common.email_id, common.facebook_id, common.userId, common.platform, holdIdxList, new Date(), JSON.stringify(allResult), userId]);
        if (isPractice === true) {
            bigWinTrue.win = 0;
            isDoubleOrNothing = false;
            res.log2Cloud(['training_draw', common.device_id, common.email_id, common.facebook_id, common.userId, common.platform, holdIdxList, new Date(), JSON.stringify(allResult), userId]);
        }
        console.log("allGameArray:", allGameArray);
        for (let i = 0; i < allGameArray.length; i++) {
            await game.insert(allGameArray[i]);
        }
        if (isPractice === false) {
            await userDao.addMoney(userId, allAddMoney);
            await userAchievement.updateCollected(userId, 1, achi1);
            await userAchievement.updateCollected(userId, 6, achi6);
            await userDao.addWinCoin(userId, winCoin1, winCoin2, winCoin3);
        }
        let creditAmount;
        creditAmount = bet_array;
        if (allCoinsResult === 0) {
            creditAmount = []
        }
        console.log("bet_array:", JSON.stringify(bet_array));
        await gameRedis.setUserMesg("game_bet_array", userId, {bet_array: bet_array});
        return {
            result: {
                balance: newUser1.cash,
                pokerDataList: allResult,
                jackpotAcc: 1,
                isDoubleOrNothing: isDoubleOrNothing,
                isRewardRoulette: false,
                upgrade: Number(newUser2.level),
                curExp: Number(newUser2.cur_exp),
                nextExp: Number(nextExp),
                levelUpReward: {
                    coins: allCoinsResult,
                    vipExp: vipExp,
                    creditAmount: creditAmount,
                    pushAmount: levelConfig1.recommendbet,
                    creditAmountMax: levelConfig1.maxbet
                },
                bigWin: bigWinTrue,
                isFlash: bigWin,
                jackPot: jackpotTrue,
                jackpot: jackpot.Items[0].jackpotNow,
                pokerEvData: pokerEvData
            }, other: {
                name: user.name,
                win: bigWinMoney,
                pos: finalPos,
                winType: bigWin,
                isPigFull: isPigFull,
                levelUp: level_up,
                vipLevel: userFinal.vip_level,
                vipExp: userFinal.cur_vip_exp - vipExp,
                vipNextExp: honor_pts_final
            }
        }
    },
    /**
     * 小游戏double or nothing
     * @param type
     * @param userId
     * @returns {Promise<{balance: (number|*), reward: number, poker: *, doubleGameItem}>}
     */
    doubleSpin: async function (type, userId) {
        let oldReward1 = await gameRedis.getUserMesg("game_reward", userId);
        let oldReward = oldReward1.reward;
        let firstReward1 = await gameRedis.getUserMesg("game_reward_first", userId);
        let firstReward = firstReward1.reward;
        if (oldReward === firstReward) {
            await userDao.addMoney(userId, -oldReward);
        }
        let oneArr = getRandomArrayElements(this.pokerArray, 1);
        let sendPoker = PokerCounter.PokerCounter.cardToText(oneArr[0]);
        let mult;
        let color = sendPoker.slice(1, 2);
        if (type === 0) {
            mult = 1;
            let reward = mult * oldReward;
            if (reward < 0) {
                await userAchievement.updateCollected(userId, 1, -1);
            }
            if (reward !== firstReward) {
                await userAchievement.updateCollected(userId, 3, 1)
            }
            if (reward - firstReward > 0) {
                await userAchievement.updateCollected(userId, 4, 1);
                await userAchievement.updateCollected(userId, 7, reward - firstReward)
            }
            let user = await userDao.selectUserById(userId);
            let vipConfig = await n2CfgVipDao.selectConfigByLevel(user.vip_level);
            let double_or_nothing_gifts = vipConfig.double_or_nothing_gifts;
            reward += (reward - firstReward) * Number(double_or_nothing_gifts);
            await userDao.addMoney(userId, reward);

            let userQuest = await UserQuest.selectUserQuest(userId);
            for (let i = 0; i < userQuest.length; i++) {
                if (userQuest[i].type === 3) {
                    await UserQuest.updateCollected(userQuest[i].id, 1)
                }
                if (userQuest[i].type === 7) {
                    if (reward !== 0) {
                        await UserQuest.updateCollected(userQuest[i].id, reward - firstReward);
                    }
                }
            }
        }
        else if (type === 1 && color === "S") {
            mult = 2
        }
        else if (type === 1 && color === "C") {
            mult = 2
        }
        else if (type === 2 && color === "H") {
            mult = 2
        }
        else if (type === 2 && color === "D") {
            mult = 2
        }
        else if (type === 3 && color === "S") {
            mult = 4
        }
        else if (type === 4 && color === "H") {
            mult = 4
        }
        else if (type === 5 && color === "C") {
            mult = 4
        }
        else if (type === 6 && color === "D") {
            mult = 4
        }
        else {
            mult = 0
        }
        let doubleGameItem = {};
        if (mult === 0) {
            await gameRedis.setUserMesg("game_reward_last", userId, {reward: oldReward});
            doubleGameItem = {
                itemInfo: 9,
                valueInfoList: [],
                itemId: "123123",
                finalSku: "casino.video.poker.winning.android.google.doubleup.099",
                originSku: "casino.video.poker.winning.android.google.doubleup.099"
            }
        }
        let reward = mult * oldReward;
        await gameRedis.setUserMesg("game_reward", userId, {reward: reward});
        let user = await userDao.selectUserById(userId);
        let balance = user.cash;
        if (reward === 0) {
            let userQuest = await UserQuest.selectUserQuest(userId);
            for (let i = 0; i < userQuest.length; i++) {
                if (userQuest[i].type === 3) {
                    await UserQuest.updateCollected(userQuest[i].id, 1)
                }
                /* if (userQuest[i].type === 7) {
                     if (reward !== 0) {
                         await UserQuest.updateCollected(userQuest[i].id, reward - firstReward);
                     }
                 }*/
            }
            mult = 1;
            let reward = mult * oldReward;
            if (reward === 0) {
                await userAchievement.updateCollected(userId, 1, -1)
            }
            await userAchievement.updateCollected(userId, 3, 1);
            if (reward - firstReward > 0) {
                await userAchievement.updateCollected(userId, 4, 1);
                await userAchievement.updateCollected(userId, 7, reward - firstReward)
            }
            let user = await userDao.selectUserById(userId);
            let vipConfig = await n2CfgVipDao.selectConfigByLevel(user.vip_level);
            let double_or_nothing_gifts = vipConfig.double_or_nothing_gifts;
            reward += (reward - firstReward) * Number(double_or_nothing_gifts);
            await userDao.addMoney(userId, reward);
        }
        return {balance: balance, reward: reward, poker: sendPoker, doubleGameItem: doubleGameItem}
    },
    /**
     * 请求EV数据
     * @param userId
     * @param res
     * @param common
     * @returns {Promise<{pokerList: *[], pokerEvList: Array}>}
     */
    requestPokerEvData: async function (userId, res, common) {
        let pos1 = await gameRedis.getUserMesg("game_pos", userId);
        let pos = pos1.pos;
        let trainName;
        let pokerCount;
        let allNum;
        let posName;
        if (pos === 1) {
            posName = 'jacksbetter';
            trainName = 'jacks_or_better';
            pokerCount = 52;
            allNum = 2598960;
        }
        if (pos === 2) {
            posName = 'deuceswild';
            trainName = 'deuces_wild';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 3) {
            posName = 'joker';
            trainName = 'joker';
            pokerCount = 53
            allNum = 2869685;
        }
        if (pos === 6) {
            posName = 'deucesjokerwild';
            trainName = 'deuces_joker_wild';
            pokerCount = 53
            allNum = 2869685;
        }
        if (pos === 5) {
            posName = 'aceseights';
            trainName = 'aces_eights';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 4) {
            posName = 'twowayroyal';
            trainName = 'two_ways_royal';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 7) {
            posName = 'acesFaces';
            trainName = 'aces_faces';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 8) {
            posName = 'allAmerican';
            trainName = 'all_american';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 9) {
            posName = 'blackJackBonusPoker';
            trainName = 'black_jack_bonus_poker';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 10) {
            posName = 'bonusDeucesWild';
            trainName = 'bonus_deuces_wild';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 11) {
            posName = 'bonusDrawPoker';
            trainName = 'bonus_draw_poker';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 12) {
            posName = 'bonusPoker';
            trainName = 'bonus_poker';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 13) {
            posName = 'bonusPokerDeluxe';
            trainName = 'bonus_poker_deluxe';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 14) {
            posName = 'doubleAcesFaces';
            trainName = 'double_aces_faces';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 15) {
            posName = 'doubleBonusDeucesWild';
            trainName = 'double_bonus_deuces_wild';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 16) {
            posName = 'doubleDeucesWild';
            trainName = 'double_deuces_wild';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 17) {
            posName = 'doubleDoubleAcesFaces';
            trainName = 'double_double_aces_faces';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 18) {
            posName = 'doubleDoubleBonusPokerPlus';
            trainName = 'double_double_bonus_poker_plus';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 19) {
            posName = 'doubleJackpotPoker';
            trainName = 'double_jackpot_poker';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 20) {
            posName = 'doubleJokerPoker';
            trainName = 'double_joker_poker';
            pokerCount = 53
            allNum = 2869685;
        }
        if (pos === 21) {
            posName = 'jokerPokerAcesOrBetter';
            trainName = 'joker_poker_aces_or_better';
            pokerCount = 53
            allNum = 2869685;
        }
        if (pos === 22) {
            posName = 'looseDeuces';
            trainName = 'loose_deuces';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 23) {
            posName = 'royalAcesBonusPoker';
            trainName = 'royal_aces_bonus_poker';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 24) {
            posName = 'superAcesBonusPoker';
            trainName = 'super_aces_bonus_poker';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 25) {
            posName = 'superBonusDeucesWild';
            trainName = 'super_bonus_deuces_wild';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 26) {
            posName = 'superDoubleBonus';
            trainName = 'super_double_bonus';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 27) {
            posName = 'superDoubleDoubleBonusPoker';
            trainName = 'super_double_double_bonus_poker';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 28) {
            posName = 'tensOrBetter';
            trainName = 'tens_or_better';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 29) {
            posName = 'tripleBonusPoker';
            trainName = 'triple_bonus_poker';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 30) {
            posName = 'tripleBonusPokerPlus';
            trainName = 'triple_bonus_poker_plus';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 31) {
            posName = 'tripleDeucesWild';
            trainName = 'triple_deuces_wild';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 32) {
            posName = 'tripleDoubleBonusPoker';
            trainName = 'triple_double_bonus_poker';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 33) {
            posName = 'tripleDoubleDrawPoker';
            trainName = 'triple_double_draw_poker';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 34) {
            posName = 'ultraBonusPoker';
            trainName = 'ultra_bonus_poker';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 35) {
            posName = 'whiteHotAces';
            trainName = 'white_hot_aces';
            pokerCount = 52
            allNum = 2598960;
        }
        let firstFiveArr1 = await gameRedis.getUserMesg("game_firstFiveArr", userId);
        console.log("pos:", trainName + "....." + firstFiveArr1.firstFiveArr);
        let firstArr1 = await gameRedis.getUserMesg("game_firstFiveArr", userId);
        console.log("pos:", trainName + "....." + firstArr1.firstFiveArr);
        let firstArr = firstArr1.firstFiveArr;
        let firstFiveArr = firstFiveArr1.firstFiveArr;
        let pokerEvList = [];
        firstFiveArr = firstFiveArr.sort();
        let train1 = await trainDao.asyncFind(`select * from ${'machine_' + trainName + '_training_data'} where id='${firstFiveArr}'`);
        console.log("train1:", train1);
        train1 = train1[0].poker_choose_list;
        for (let i = 0; i < train1.length; i++) {
            let combos = train1[i].Combos;
            let pokerTypeDataList = [];
            for (let p = 0; p < Object.keys(combos).length; p++) {
                let oneCombos = {winTypeNameIndex: (Object.keys(combos).length - 1 - p) + "", num: combos[p]};
                pokerTypeDataList.push(oneCombos)
            }
            let one = {holdPokerList: train1[i].Held, pokerTypeDataList: pokerTypeDataList, allNum: allNum};
            pokerEvList.push(one)
        }
        res.log2Cloud(['try_help', common.device_id, common.email_id, common.facebook_id, common.userId, common.platform, firstArr, 1, 1, new Date()]);
        return {pokerList: firstArr, pokerEvList: pokerEvList};
    },
    /**
     * 发送小游戏的reward
     * @param userId
     * @returns {Promise<{lastCoin: *}>}
     */
    sendBuyDoubleGamePayment: async function (userId) {
        let oldReward1 = await gameRedis.getUserMesg("game_reward_last", userId);
        await gameRedis.setUserMesg("game_reward", userId, {reward: oldReward1.reward});
        return {lastCoin: oldReward1.reward}
    }
    ,
    /**
     * Ev数据
     * @param userId
     * @param pokerList
     * @param res
     * @param common
     * @returns {Promise<{pokerList: *, pokerEvList: Array}>}
     */
    pokerEv: async function (userId, pokerList, res, common) {
        let pos1 = await gameRedis.getUserMesg("game_pos", userId);
        let pos = pos1.pos;
        let posName;
        let trainName;
        let pokerCount;
        if (pos === 1) {
            posName = 'jacksbetter';
            trainName = 'jacks_or_better';
            pokerCount = 2598960
        }
        if (pos === 2) {
            posName = 'deuceswild';
            trainName = 'deuces_wild';
            pokerCount = 2598960
        }
        if (pos === 3) {
            posName = 'joker';
            trainName = 'joker';
            pokerCount = 2869685
        }
        if (pos === 6) {
            posName = 'deucesjokerwild';
            trainName = 'deuces_joker_wild';
            pokerCount = 2869685
        }
        if (pos === 5) {
            posName = 'aceseights';
            trainName = 'aces_eights';
            pokerCount = 2598960
        }
        if (pos === 4) {
            posName = 'twowayroyal';
            trainName = 'two_ways_royal';
            pokerCount = 2598960
        }
        if (pos === 7) {
            posName = 'acesFaces';
            trainName = 'aces_faces';
            pokerCount = 2598960
        }
        if (pos === 8) {
            posName = 'allAmerican';
            trainName = 'all_american';
            pokerCount = 2598960
        }
        if (pos === 9) {
            posName = 'blackJackBonusPoker';
            trainName = 'black_jack_bonus_poker';
            pokerCount = 2598960
        }
        if (pos === 10) {
            posName = 'bonusDeucesWild';
            trainName = 'bonus_deuces_wild';
            pokerCount = 2598960
        }
        if (pos === 11) {
            posName = 'bonusDrawPoker';
            trainName = 'bonus_draw_poker';
            pokerCount = 2598960
        }
        if (pos === 12) {
            posName = 'bonusPoker';
            trainName = 'bonus_poker';
            pokerCount = 2598960
        }
        if (pos === 13) {
            posName = 'bonusPokerDeluxe';
            trainName = 'bonus_poker_deluxe';
            pokerCount = 2598960
        }
        if (pos === 14) {
            posName = 'doubleAcesFaces';
            trainName = 'double_aces_faces';
            pokerCount = 2598960
        }
        if (pos === 15) {
            posName = 'doubleBonusDeucesWild';
            trainName = 'double_bonus_deuces_wild';
            pokerCount = 2598960
        }
        if (pos === 16) {
            posName = 'doubleDeucesWild';
            trainName = 'double_deuces_wild';
            pokerCount = 2598960
        }
        if (pos === 17) {
            posName = 'doubleDoubleAcesFaces';
            trainName = 'double_double_aces_faces';
            pokerCount = 2598960
        }
        if (pos === 18) {
            posName = 'doubleDoubleBonusPokerPlus';
            trainName = 'double_double_bonus_poker_plus';
            pokerCount = 2598960
        }
        if (pos === 19) {
            posName = 'doubleJackpotPoker';
            trainName = 'double_jackpot_poker';
            pokerCount = 2598960
        }
        if (pos === 20) {
            posName = 'doubleJokerPoker';
            trainName = 'double_joker_poker';
            pokerCount = 2869685
        }
        if (pos === 21) {
            posName = 'jokerPokerAcesOrBetter';
            trainName = 'joker_poker_aces_or_better';
            pokerCount = 2869685
        }
        if (pos === 22) {
            posName = 'looseDeuces';
            trainName = 'loose_deuces';
            pokerCount = 2598960
        }
        if (pos === 23) {
            posName = 'royalAcesBonusPoker';
            trainName = 'royal_aces_bonus_poker';
            pokerCount = 2598960
        }
        if (pos === 24) {
            posName = 'superAcesBonusPoker';
            trainName = 'super_aces_bonus_poker';
            pokerCount = 2598960
        }
        if (pos === 25) {
            posName = 'superBonusDeucesWild';
            trainName = 'super_bonus_deuces_wild';
            pokerCount = 2598960
        }
        if (pos === 26) {
            posName = 'superDoubleBonus';
            trainName = 'super_double_bonus';
            pokerCount = 2598960
        }
        if (pos === 27) {
            posName = 'superDoubleDoubleBonusPoker';
            trainName = 'super_double_double_bonus_poker';
            pokerCount = 2598960
        }
        if (pos === 28) {
            posName = 'tensOrBetter';
            trainName = 'tens_or_better';
            pokerCount = 2598960
        }
        if (pos === 29) {
            posName = 'tripleBonusPoker';
            trainName = 'triple_bonus_poker';
            pokerCount = 2598960
        }
        if (pos === 30) {
            posName = 'tripleBonusPokerPlus';
            trainName = 'triple_bonus_poker_plus';
            pokerCount = 2598960
        }
        if (pos === 31) {
            posName = 'tripleDeucesWild';
            trainName = 'triple_deuces_wild';
            pokerCount = 2598960
        }
        if (pos === 32) {
            posName = 'tripleDoubleBonusPoker';
            trainName = 'triple_double_bonus_poker';
            pokerCount = 2598960
        }
        if (pos === 33) {
            posName = 'tripleDoubleDrawPoker';
            trainName = 'triple_double_draw_poker';
            pokerCount = 2598960
        }
        if (pos === 34) {
            posName = 'ultraBonusPoker';
            trainName = 'ultra_bonus_poker';
            pokerCount = 2598960
        }
        if (pos === 35) {
            posName = 'whiteHotAces';
            trainName = 'white_hot_aces';
            pokerCount = 2598960
        }
        let train = await trainDao.asyncFind(`select * from ${'machine_' + trainName + '_training_data'} where id='${pokerList.sort()}'`);
        let pokerEvList = [];
        for (let i = 0; i < train.length; i++) {
            let combos = train[i].Combos;
            let pokerTypeDataList = [];
            for (let p = 0; p < Object.keys(combos).length; p++) {
                let oneCombos = {winTypeNameIndex: p, num: combos[p]};
                pokerTypeDataList.push(oneCombos)
            }
            let one = {holdPokerList: train[i].Held, pokerTypeDataList: pokerTypeDataList, allNum: pokerCount};
            pokerEvList.push(one)
        }
        return {pokerList: pokerList, pokerEvList: pokerEvList}
    },
    //测试专用-----------------------------------------------------------------------------------------------------------------
    //用于宣传视频
    requestPokerEvDataDebug: async function (userId, pokerList) {
        let firstArr = pokerList.slice(0);
        let user = await userDao.selectUserById(userId);
        console.log("uesr:", user);
        if (user.is_debug_user === false) {
            console.log("不是测试用户");
            return {pokerList: "不是测试用户", pokerEvList: "不是测试用户"}
        }
        let pos1 = await gameRedis.getUserMesg("game_pos", userId);
        let pos = pos1.pos;
        let trainName;
        let pokerCount;
        let allNum;
        let posName;
        if (pos === 1) {
            posName = 'jacksbetter';
            trainName = 'jacks_or_better';
            pokerCount = 52;
            allNum = 2598960;
        }
        if (pos === 2) {
            posName = 'deuceswild';
            trainName = 'deuces_wild';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 3) {
            posName = 'joker';
            trainName = 'joker';
            pokerCount = 53
            allNum = 2869685;
        }
        if (pos === 6) {
            posName = 'deucesjokerwild';
            trainName = 'deuces_joker_wild';
            pokerCount = 53
            allNum = 2869685;
        }
        if (pos === 5) {
            posName = 'aceseights';
            trainName = 'aces_eights';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 4) {
            posName = 'twowayroyal';
            trainName = 'two_ways_royal';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 7) {
            posName = 'acesFaces';
            trainName = 'aces_faces';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 8) {
            posName = 'allAmerican';
            trainName = 'all_american';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 9) {
            posName = 'blackJackBonusPoker';
            trainName = 'black_jack_bonus_poker';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 10) {
            posName = 'bonusDeucesWild';
            trainName = 'bonus_deuces_wild';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 11) {
            posName = 'bonusDrawPoker';
            trainName = 'bonus_draw_poker';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 12) {
            posName = 'bonusPoker';
            trainName = 'bonus_poker';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 13) {
            posName = 'bonusPokerDeluxe';
            trainName = 'bonus_poker_deluxe';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 14) {
            posName = 'doubleAcesFaces';
            trainName = 'double_aces_faces';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 15) {
            posName = 'doubleBonusDeucesWild';
            trainName = 'double_bonus_deuces_wild';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 16) {
            posName = 'doubleDeucesWild';
            trainName = 'double_deuces_wild';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 17) {
            posName = 'doubleDoubleAcesFaces';
            trainName = 'double_double_aces_faces';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 18) {
            posName = 'doubleDoubleBonusPokerPlus';
            trainName = 'double_double_bonus_poker_plus';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 19) {
            posName = 'doubleJackpotPoker';
            trainName = 'double_jackpot_poker';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 20) {
            posName = 'doubleJokerPoker';
            trainName = 'double_joker_poker';
            pokerCount = 53
            allNum = 2869685;
        }
        if (pos === 21) {
            posName = 'jokerPokerAcesOrBetter';
            trainName = 'joker_poker_aces_or_better';
            pokerCount = 53
            allNum = 2869685;
        }
        if (pos === 22) {
            posName = 'looseDeuces';
            trainName = 'loose_deuces';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 23) {
            posName = 'royalAcesBonusPoker';
            trainName = 'royal_aces_bonus_poker';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 24) {
            posName = 'superAcesBonusPoker';
            trainName = 'super_aces_bonus_poker';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 25) {
            posName = 'superBonusDeucesWild';
            trainName = 'super_bonus_deuces_wild';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 26) {
            posName = 'superDoubleBonus';
            trainName = 'super_double_bonus';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 27) {
            posName = 'superDoubleDoubleBonusPoker';
            trainName = 'super_double_double_bonus_poker';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 28) {
            posName = 'tensOrBetter';
            trainName = 'tens_or_better';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 29) {
            posName = 'tripleBonusPoker';
            trainName = 'triple_bonus_poker';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 30) {
            posName = 'tripleBonusPokerPlus';
            trainName = 'triple_bonus_poker_plus';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 31) {
            posName = 'tripleDeucesWild';
            trainName = 'triple_deuces_wild';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 32) {
            posName = 'tripleDoubleBonusPoker';
            trainName = 'triple_double_bonus_poker';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 33) {
            posName = 'tripleDoubleDrawPoker';
            trainName = 'triple_double_draw_poker';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 34) {
            posName = 'ultraBonusPoker';
            trainName = 'ultra_bonus_poker';
            pokerCount = 52
            allNum = 2598960;
        }
        if (pos === 35) {
            posName = 'whiteHotAces';
            trainName = 'white_hot_aces';
            pokerCount = 52
            allNum = 2598960;
        }
        let firstFiveArr = pokerList;
        console.log("firstFiveArr:", typeof firstFiveArr);
        let pokerEvList = [];
        firstFiveArr = firstFiveArr.sort();
        let train1 = await trainDao.asyncFind(`select * from ${'machine_' + trainName + '_training_data'} where id='${firstFiveArr}'`);
        console.log("train1:", train1);
        train1 = train1[0].poker_choose_list;
        for (let i = 0; i < train1.length; i++) {
            let combos = train1[i].Combos;
            let pokerTypeDataList = [];
            for (let p = 0; p < Object.keys(combos).length; p++) {
                let oneCombos = {winTypeNameIndex: (Object.keys(combos).length - 1 - p) + "", num: combos[p]};
                pokerTypeDataList.push(oneCombos)
            }
            let one = {holdPokerList: train1[i].Held, pokerTypeDataList: pokerTypeDataList, allNum: allNum};
            pokerEvList.push(one)
        }
        return {pokerList: firstArr, pokerEvList: pokerEvList};
    },
}
;


Array.prototype.indexVf = function (arr) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === arr) {
            return i;
        }
    }
};

Array.prototype.indexOf = function (val) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === val) return i;
    }
    return -1;
};

Array.prototype.remove1 = function (val) {
    let index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};

function compare(property) {
    return function (a, b) {
        let value1 = a[property];
        let value2 = b[property];
        return value1 - value2;
    }
}

function compareBTS(property) {
    return function (a, b) {
        let value1 = a[property];
        let value2 = b[property];
        return value2 - value1;
    }
}

function convertNumberToPoker(num) {
    let number = parseInt((num - 1) / 4) + 1;
    let color = parseInt((num - 1) % 4) + 1;
    return {color: color, number: number}
}

function convertPokerToNumber(color, number) {
    return (number - 1) * 4 + color
}

//从数组中随机取count个
function getRandomArrayElements(arr, count) {
    let shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}


function sortNumber(a, b) {
    return a - b
}

function sortNumberBTS(a, b) {
    return b - a
}

async function addlevel(userId) {
    let user1 = await userDao.selectUserById(userId);
    let nowExp = await n2CfgLevelDao.selectConfigByLevel(user1.level);
    console.log("user1.cur_exp+nowExp.exp:", user1.cur_exp, "++++", nowExp.exp);
    if (Number(user1.level) === 999) {
        return
    }
    if (Number(nowExp.exp) < Number(user1.cur_exp)) {
        await userDao.changeExp(userId, Number(user1.cur_exp) - Number(nowExp.exp));
        await userDao.addLevel(userId);
        return await addlevel(userId)
    }
}

function deal(held, disc, expectedValue, totalWinCount, deck, payouts, dealDraw, game, payTables) {
    console.log("deck1:", deck.length);
    console.log("held,disc:", held, disc, new Date());
    deck = shuffle(deck);
    let deal = deck.slice(0, disc.length);
    let drawText = [];
    for (let i = 0; i < deal.length; i++) {
        drawText.push(PokerCounter.PokerCounter.cardToText(deal[i]));
    }
    //deleteCardFromDeck(drawText, deck);
    let {win, newHeld, winType, winCount} = doDeal(drawText, deck, held, payouts, game, payTables);
    // 客观中奖率
    let physicalWinningRate = totalWinCount / _combination(52 - 5, disc.length);
    // 修正中奖率
    let correctedWinningRate = physicalWinningRate * 1;
    let hit = true;
    try {
        // let hit;
        // 必然中奖，不控制
        if (game === 'deucesjokerwild' || game === 'aceseights' || game === 'twowayroyal' || game === 'acesFaces') {
            hit = true
        }
        if (held.length !== 0) {
            if (held.sort().toString() === ['2H', '2S'].sort().toString() || held.sort().toString() === ['2H', '2C'].sort().toString() || held.sort().toString() === ['2H', '2D'].sort().toString() || held.sort().toString() === ['2S', '2C'].sort().toString() || held.sort().toString() === ['2S', '2D'].sort().toString() || held.sort().toString() === ['2C', '2D'].sort().toString() || held.sort().toString() === ['2H', '2S', '2C'].sort().toString() || held.sort().toString() === ['2H', '2S', '2D'].sort().toString() || held.sort().toString() === ['2S', '2C', '2D'].sort().toString() || held.sort().toString() === ['2H', '2S', '2C'].sort().toString() || held.sort().toString() === ['2H', '2S', '2C', '2D'].sort().toString()) {
                hit = true
            }
            else {
                hit = held.length >= 2 && !['Pair', 'High Card'].includes(solver.solve(held, game).name);
            }
        }
        else {
            hit = false
        }
        //不控制
        hit = true;
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
                console.log('make win', new Date());
                do {
                    console.log('calc make win', new Date());
                    deal = deck.slice(0, disc.length);
                    drawText = [];
                    for (let i = 0; i < deal.length; i++) {
                        drawText.push(PokerCounter.PokerCounter.cardToText(deal[i]));
                    }
                    deck.splice(0, disc.length);
                    let newResult = doDeal(drawText, deck, held, payouts, game, payTables);
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
                } while (deck.length >= disc.length && disc.length !== 0);
                return naturalResult;
            }
            else if (win != 0) { // 中奖但控制机率没有命中，生成最大可能的无中奖牌
                let minResult = null;
                console.log('make zero', new Date());
                do {
                    console.log('calc make zero', new Date());
                    deal = deck.slice(0, disc.length);
                    drawText = [];
                    for (let i = 0; i < deal.length; i++) {
                        drawText.push(PokerCounter.PokerCounter.cardToText(deal[i]));
                    }
                    deck.splice(0, disc.length);
                    let newResult = doDeal(drawText, deck, held, payouts, game, payTables);
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
                } while (deck.length >= disc.length && disc.length !== 0);
                return minResult;
            }
            else { // 没有中奖
                console.log('no win', new Date());
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
        console.error(e);
        console.error(`held: ${held} disc: ${disc}`);
    }
}

function doDeal(drawText, deck, held, payouts, game, payTables) {
    console.count("次数:");
    let title = payTables;
    let win = 0;
    // this.deleteCardFromDeck(drawText, deck);
    let newHeld = held.concat();
    drawText.forEach((value) => {
        newHeld.push(value);
    });
    let totals = simulate(newHeld, deck, game);
    let winCount = 0;
    let winType = 'NONE';
    for (let i = 0; i < totals.length; i++) {
        if (totals[i] != 0) {
            win += totals[i] * payouts[i];
            winType = title[i];
            winCount += totals[i];
            break;
        }
    }
    return {win, newHeld, winType, winCount};
}

function _combination(m, n) {
    if (m < 0 || n < 0 || m < n)
        return 0; // 简化输入条件
    return _factorial(m, n) / _factorial(n, n);
}

function constructor(idx, root, title, funcList, game, cr = 1.0, write = false) {
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

function shuffle(array) {
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

function shuffleDeck(random, jokerCnt) {
    let deck = [];
    for (let i = 0; i < 52 + jokerCnt; i++) {
        deck.push(i);
    }
    if (random)
        shuffle(deck);
    return deck;
}

function simulate(held, deck, game) {
    if (game === 'deuceswild') {
        let hand = new Hand_1.Hand(PokerCounter.PokerCounter.ptois(held), [2]);
        return PokerCounter.PokerCounter.findHandCount(hand, DeucesWild_1.DeucesWildFuncList, 5, deck, 0);
    }
    else if (game === 'jacksbetter') {
        let hand = new Hand_1.Hand(PokerCounter.PokerCounter.ptois(held), [-1]);
        return PokerCounter.PokerCounter.findHandCount(hand, JacksOrBetter_1.JacksOrBetterFuncList, 5, deck, 0);
    }
    else if (game === 'joker') {
        let hand = new Hand_1.Hand(PokerCounter.PokerCounter.ptois(held), [14]);
        return PokerCounter.PokerCounter.findHandCount(hand, Joker_1.JokerFuncList, 5, deck, 0);
    }
    else if (game === 'deucesjokerwild') {
        let hand = new Hand_1.Hand(PokerCounter.PokerCounter.ptois(held), [2, 14]);
        return PokerCounter.PokerCounter.findHandCount(hand, DeucesJokerWild_1.DeucesJokerWildFuncList, 5, deck, 0);
    }
    else if (game === 'aceseights') {
        let hand = new Hand_1.Hand(PokerCounter.PokerCounter.ptois(held), [-1]);
        return PokerCounter.PokerCounter.findHandCount(hand, AcesEights_1.AcesEightsFuncList, 5, deck, 0);
    }
    else if (game === 'twowayroyal') {
        let hand = new Hand_1.Hand(PokerCounter.PokerCounter.ptois(held), [-1]);
        return PokerCounter.PokerCounter.findHandCount(hand, TwoWayRoyal_1.TwoWayRoyalFuncList, 5, deck, 0);
    }
    else if (game === 'acesFaces') {
        let hand = new Hand_1.Hand(PokerCounter.PokerCounter.ptois(held), [-1]);
        return PokerCounter.PokerCounter.findHandCount(hand, AcesFaces_1.AcesFacesFuncList, 5, deck, 0);
    }
    else if (game === 'allAmerican') {
        let hand = new Hand_1.Hand(PokerCounter.PokerCounter.ptois(held), [-1]);
        return PokerCounter.PokerCounter.findHandCount(hand, AllAmerican_1.AllAmericanFuncList, 5, deck, 0);
    }
    else if (game === 'blackJackBonusPoker') {
        let hand = new Hand_1.Hand(PokerCounter.PokerCounter.ptois(held), [-1]);
        return PokerCounter.PokerCounter.findHandCount(hand, BlackJackBonusPoker_1.BlackJackBonusPokerFuncList, 5, deck, 0);
    } else if (game === 'bonusDeucesWild') {
        let hand = new Hand_1.Hand(PokerCounter.PokerCounter.ptois(held), [2]);
        return PokerCounter.PokerCounter.findHandCount(hand, BonusDeucesWild_1.BonusDeucesWildFuncList, 5, deck, 0);
    } else if (game === 'doubleDoubleAcesFaces') {
        let hand = new Hand_1.Hand(PokerCounter.PokerCounter.ptois(held), [-1]);
        return PokerCounter.PokerCounter.findHandCount(hand, DoubleDoubleAcesFaces_1.DoubleDoubleAcesFacesFuncList, 5, deck, 0);
    } else if (game === 'bonusPoker') {
        let hand = new Hand_1.Hand(PokerCounter.PokerCounter.ptois(held), [-1]);
        return PokerCounter.PokerCounter.findHandCount(hand, BonusPoker_1.BonusPokerFuncList, 5, deck, 0);
    } else if (game === 'bonusPokerDeluxe') {
        let hand = new Hand_1.Hand(PokerCounter.PokerCounter.ptois(held), [-1]);
        return PokerCounter.PokerCounter.findHandCount(hand, BonusPokerDeluxe_1.BonusPokerDeluxeFuncList, 5, deck, 0);
    } else if (game === 'doubleAcesFaces') {
        let hand = new Hand_1.Hand(PokerCounter.PokerCounter.ptois(held), [-1]);
        return PokerCounter.PokerCounter.findHandCount(hand, DoubleAcesFaces_1.DoubleAcesFacesFuncList, 5, deck, 0);
    } else if (game === 'doubleBonusDeucesWild') {
        let hand = new Hand_1.Hand(PokerCounter.PokerCounter.ptois(held), [2]);
        return PokerCounter.PokerCounter.findHandCount(hand, DoubleBonusDeucesWild_1.DoubleBonusDeucesWildFuncList, 5, deck, 0);
    } else if (game === 'doubleDoubleBonusPokerPlus') {
        let hand = new Hand_1.Hand(PokerCounter.PokerCounter.ptois(held), [-1]);
        return PokerCounter.PokerCounter.findHandCount(hand, DoubleDoubleBonusPokerPlus_1.DoubleDoubleBonusPokerPlusFuncList, 5, deck, 0);
    } else if (game === 'doubleJackpotPoker') {
        let hand = new Hand_1.Hand(PokerCounter.PokerCounter.ptois(held), [-1]);
        return PokerCounter.PokerCounter.findHandCount(hand, DoubleJackpotPoker_1.DoubleJackpotPokerFuncList, 5, deck, 0);
    } else if (game === 'doubleJokerPoker') {
        let hand = new Hand_1.Hand(PokerCounter.PokerCounter.ptois(held), [14]);
        return PokerCounter.PokerCounter.findHandCount(hand, DoubleJokerPoker_1.DoubleJokerPokerFuncList, 5, deck, 0);
    } else if (game === 'jokerPokerAcesOrBetter') {
        let hand = new Hand_1.Hand(PokerCounter.PokerCounter.ptois(held), [14]);
        return PokerCounter.PokerCounter.findHandCount(hand, JokerPokerAcesOrBetter_1.JokerPokerAcesOrBetterFuncList, 5, deck, 0);
    } else if (game === 'looseDeuces') {
        let hand = new Hand_1.Hand(PokerCounter.PokerCounter.ptois(held), [2]);
        return PokerCounter.PokerCounter.findHandCount(hand, LooseDeuces_1.LooseDeucesFuncList, 5, deck, 0);
    } else if (game === 'royalAcesBonusPoker') {
        let hand = new Hand_1.Hand(PokerCounter.PokerCounter.ptois(held), [-1]);
        return PokerCounter.PokerCounter.findHandCount(hand, RoyalAcesBonusPoker_1.RoyalAcesBonusPokerFuncList, 5, deck, 0);
    } else if (game === 'superAcesBonusPoker') {
        let hand = new Hand_1.Hand(PokerCounter.PokerCounter.ptois(held), [-1]);
        return PokerCounter.PokerCounter.findHandCount(hand, SuperAcesBonusPoker_1.SuperAcesBonusPokerFuncList, 5, deck, 0);
    } else if (game === 'superBonusDeucesWild') {
        let hand = new Hand_1.Hand(PokerCounter.PokerCounter.ptois(held), [2]);
        return PokerCounter.PokerCounter.findHandCount(hand, SuperBonusDeucesWild_1.SuperBonusDeucesWildFuncList, 5, deck, 0);
    } else if (game === 'superDoubleBonus') {
        let hand = new Hand_1.Hand(PokerCounter.PokerCounter.ptois(held), [-1]);
        return PokerCounter.PokerCounter.findHandCount(hand, SuperDoubleBonus_1.SuperDoubleBonusFuncList, 5, deck, 0);
    } else if (game === 'superDoubleDoubleBonusPoker') {
        let hand = new Hand_1.Hand(PokerCounter.PokerCounter.ptois(held), [-1]);
        return PokerCounter.PokerCounter.findHandCount(hand, SuperDoubleDoubleBonusPoker_1.SuperDoubleDoubleBonusPokerFuncList, 5, deck, 0);
    } else if (game === 'tensOrBetter') {
        let hand = new Hand_1.Hand(PokerCounter.PokerCounter.ptois(held), [-1]);
        return PokerCounter.PokerCounter.findHandCount(hand, TensOrBetter_1.TensOrBetterFuncList, 5, deck, 0);
    } else if (game === 'tripleBonusPoker') {
        let hand = new Hand_1.Hand(PokerCounter.PokerCounter.ptois(held), [-1]);
        return PokerCounter.PokerCounter.findHandCount(hand, TripleBonusPoker_1.TripleBonusPokerFuncList, 5, deck, 0);
    } else if (game === 'tripleBonusPokerPlus') {
        let hand = new Hand_1.Hand(PokerCounter.PokerCounter.ptois(held), [-1]);
        return PokerCounter.PokerCounter.findHandCount(hand, TripleBonusPokerPlus_1.TripleBonusPokerPlusFuncList, 5, deck, 0);
    } else if (game === 'tripleDoubleBonusPoker') {
        let hand = new Hand_1.Hand(PokerCounter.PokerCounter.ptois(held), [-1]);
        return PokerCounter.PokerCounter.findHandCount(hand, TripleDoubleBonusPoker_1.TripleDoubleBonusPokerFuncList, 5, deck, 0);
    } else if (game === 'tripleDoubleDrawPoker') {
        let hand = new Hand_1.Hand(PokerCounter.PokerCounter.ptois(held), [-1]);
        return PokerCounter.PokerCounter.findHandCount(hand, TripleDoubleDrawPoker_1.TripleDoubleDrawPokerFuncList, 5, deck, 0);
    } else if (game === 'ultraBonusPoker') {
        let hand = new Hand_1.Hand(PokerCounter.PokerCounter.ptois(held), [-1]);
        return PokerCounter.PokerCounter.findHandCount(hand, UltraBonusPoker_1.UltraBonusPokerFuncList, 5, deck, 0);
    } else if (game === 'whiteHotAces') {
        let hand = new Hand_1.Hand(PokerCounter.PokerCounter.ptois(held), [-1]);
        return PokerCounter.PokerCounter.findHandCount(hand, WhiteHotAces_1.WhiteHotAcesFuncList, 5, deck, 0);
    } else if (game === 'bonusDrawPoker') {
        let hand = new Hand_1.Hand(PokerCounter.PokerCounter.ptois(held), [-1]);
        return PokerCounter.PokerCounter.findHandCount(hand, BonusDrawPoker_1.BonusDrawPokerFuncList, 5, deck, 0);
    } else if (game === 'doubleDeucesWild') {
        let hand = new Hand_1.Hand(PokerCounter.PokerCounter.ptois(held), [2]);
        return PokerCounter.PokerCounter.findHandCount(hand, DoubleDeucesWild_1.DoubleDeucesWildFuncList, 5, deck, 0);
    } else if (game === 'tripleDeucesWild') {
        let hand = new Hand_1.Hand(PokerCounter.PokerCounter.ptois(held), [2]);
        return PokerCounter.PokerCounter.findHandCount(hand, TripleDeucesWild_1.TripleDeucesWildFuncList, 5, deck, 0);
    }
    //todo
    return [];
}

function getEv(payouts, combos, expValueDenom) {
    let expectedVal = 0;
    for (let j = 0; j < combos.length; j++) {
        expectedVal += payouts[j] * combos[j] / expValueDenom;
    }
    return expectedVal;
}

function addSum(list, lengthLimit = -1) {
    let ret = 0;
    if (lengthLimit === -1)
        lengthLimit = list.length;
    for (let i = 0; i < list.length && i < lengthLimit; i++) {
        ret += list[i];
    }
    return ret;
}

function deleteCardFromDeck(drawText, deck) {
    for (let i = drawText.length - 1; i >= 0; i--) {
        let idx = deck.indexOf(PokerCounter.PokerCounter.ptoi(drawText[i]));
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

function DeskChecker(deck, held, disc) {
    if (deck.length + held.length + disc.length != this.pokerCount) {
        console.error(`total count error - deck: ${deck.length}, held: ${held.length}, disc: ${disc.length}`);
        console.error(`deck: ${deck}`);
        console.error(`held: ${held}`);
        console.error(`disc: ${disc}`);
        throw new Error();
    }
}

function getGroup(data, index = 0, group = []) {
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

function _sepGroup(group) {
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

function _combinationArray(arr, n, res, resultHandler) {
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

function _array(m, n) {
    return this._factorial(m, n);
}

function _factorial(m, n) {
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
