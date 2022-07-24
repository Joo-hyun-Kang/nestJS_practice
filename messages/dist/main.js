"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const messages_module_1 = require("./messages/messages.module");
async function bootstrap() {
    var _a;
    const app = await core_1.NestFactory.create(messages_module_1.MessagesModule);
    const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map