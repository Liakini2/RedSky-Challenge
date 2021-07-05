"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUsers = void 0;
const axios_1 = __importDefault(require("axios"));
let userId = 0;
let userList = [];
function initiateUserList() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = new URL(`https://reqres.in/api/users`);
        let result = yield axios_1.default.get(`${url}?page=1`);
        userList = [...userList, ...result.data.data];
        result = yield axios_1.default.get(`${url}?page=2`);
        userList = [...userList, ...result.data.data];
        for (let i = 0; i < userList.length; i++) {
            if (userId < userList[i].id) {
                userId = userList[i].id;
            }
            ;
        }
        ;
    });
}
;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (userList.length < 1) {
        yield initiateUserList();
    }
    ;
    return res.status(200).send({ data: userList });
});
exports.getUsers = getUsers;
const createUser = (req, res) => {
    const { first_name, last_name, avatar, email } = req.body;
    let newUser = {
        id: ++userId, first_name, last_name, avatar, email
    };
    userList.push(newUser);
    console.log(userList);
    return res.status(201).send(userList);
};
exports.createUser = createUser;
const updateUser = (req, res) => {
    const { first_name, last_name, avatar, email } = req.body;
    const index = userList.findIndex((elem) => { return elem.id === +req.params.id; });
    if (index < 0) {
        return res.status(404).send('Not modified.');
    }
    ;
    userList[index] = {
        id: userList[index].id,
        first_name: first_name || userList[index].first_name,
        last_name: last_name || userList[index].last_name,
        avatar: avatar || userList[index].avatar,
        email: email || userList[index].email
    };
    console.log(userList);
    return res.status(200).send(userList);
};
exports.updateUser = updateUser;
const deleteUser = (req, res) => {
    const index = userList.findIndex((elem) => { return elem.id === +req.params.id; });
    if (index < 0) {
        return res.status(404).send('Unable to delete.');
    }
    ;
    userList.splice(index, 1);
    return res.status(200).send(userList);
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb250cm9sbGVycy91c2VyQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrREFBMEI7QUFJMUIsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ2YsSUFBSSxRQUFRLEdBQWtCLEVBQUUsQ0FBQztBQUVqQyxTQUFlLGdCQUFnQjs7UUFDM0IsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUNuRCxJQUFJLE1BQU0sR0FBRyxNQUFNLGVBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBQzlDLFFBQVEsR0FBRyxDQUFDLEdBQUcsUUFBUSxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxNQUFNLEdBQUcsTUFBTSxlQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsQ0FBQztRQUMxQyxRQUFRLEdBQUcsQ0FBQyxHQUFHLFFBQVEsRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdEMsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDekIsTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUE7YUFDMUI7WUFBQSxDQUFDO1NBQ0w7UUFBQSxDQUFDO0lBQ04sQ0FBQztDQUFBO0FBQUEsQ0FBQztBQUVLLE1BQU0sUUFBUSxHQUFHLENBQU8sR0FBb0IsRUFBRSxHQUE2QixFQUFFLEVBQUU7SUFDbEYsSUFBSSxRQUFRLENBQUMsTUFB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