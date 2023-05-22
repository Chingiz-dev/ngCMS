import { isDevMode } from "@angular/core";
import {
	ActionReducer,
	ActionReducerMap,
	createFeatureSelector,
	createSelector,
	MetaReducer
} from "@ngrx/store";
import { likerReducer, LikerState } from "./liker";

export interface State {
	liker: LikerState;
}

export const reducers: ActionReducerMap<State> = {
	liker: likerReducer
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
