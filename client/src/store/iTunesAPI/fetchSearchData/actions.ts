import { FETCH_SEARCH_DATA } from "./consts";
import { createAction } from "typesafe-actions";

export type Props = {
  term: string;
};

export const fetchSearchDataStarted = createAction(
  FETCH_SEARCH_DATA.started,
  (term): Props => ({
    term,
  })
)();
