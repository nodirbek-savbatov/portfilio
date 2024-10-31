"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBotDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_bot_dto_1 = require("./create-bot.dto");
class UpdateBotDto extends (0, mapped_types_1.PartialType)(create_bot_dto_1.CreateBotDto) {
}
exports.UpdateBotDto = UpdateBotDto;
//# sourceMappingURL=update-bot.dto.js.map