import DoThings from "./DoThings";
export default function AnotherOne(watch) {
    return function (_) {
        return function (next) {
            return function (action) {
                if (action.type.startsWith(watch)) {
                    next(DoThings());
                }
                next(action);
            };
        };
    };
}
//# sourceMappingURL=index.js.map