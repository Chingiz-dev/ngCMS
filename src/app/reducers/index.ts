import { isDevMode } from "@angular/core";
import {
	ActionReducer,
	ActionReducerMap,
	createFeatureSelector,
	createSelector,
	MetaReducer
} from "@ngrx/store";
import { likerReducer, LikerState, LIKER_KEY } from "./liker";

export interface State {
	[LIKER_KEY]: LikerState;
}

export const reducers: ActionReducerMap<State> = {
	[LIKER_KEY]: likerReducer
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
