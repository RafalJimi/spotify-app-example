import { createAction } from "typesafe-actions";
import { IS_AUTH } from "./consts";

export const isAuthStarted = createAction(IS_AUTH.started, () => ({}))();
