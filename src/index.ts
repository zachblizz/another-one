import { MiddlewareAPI } from "redux";
import { Dispatch } from "react";
import { PayloadAction } from "@reduxjs/toolkit";

import DoThings from "./DoThings";

export default function AnotherOne<S = any>(watch: string) {
    return function (_: MiddlewareAPI<any, S>) {
        return function (next: Dispatch<any>) {
            return function (action: PayloadAction<any>) {
                if (action.type.startsWith(watch)) {
                    next(DoThings());
                }

                next(action);
            }
        }
    }
}
