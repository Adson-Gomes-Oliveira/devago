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
const connection_1 = __importDefault(require("../helpers/connection"));
class ProjectModel {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const [result] = yield connection_1.default.execute(`
      SELECT *, FROM projects;
    `);
            return result;
        });
    }
    ;
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const [dataInserted] = yield connection_1.default.execute(`
      INSERT INTO projects (title, description, thumbnail) VALUES
        (?, ?, ?);
    `, [payload.title, payload.description, payload.thumbnail]);
            payload.id = dataInserted.insertId;
            return payload;
        });
    }
    ;
    editAll(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connection_1.default.execute(`
      UPDATE projects
      SET title = ?, description = ?, thumbnail = ?
      WHERE id = ?
    `, [payload.title, payload.description, payload.thumbnail, payload.id]);
            return payload;
        });
    }
    ;
    exclude(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connection_1.default.execute(`
      DELETE FROM projects 
      WHERE id = ?
    `, [id]);
        });
    }
    ;
}
exports.default = ProjectModel;
