import {
	createAction,
	createFeatureSelector,
	createReducer,
	createSelector,
	on
} from "@ngrx/store";

export const increase = createAction("[LIKER] increase");
export const decrease = createAction("[LIKER] decrease");
export const clear = createAction("[LIKER] clear");

export interface LikerState {
	like: number;
}

export const initialState: LikerState = {
	like: 0
};

export const likerReducer = createReducer(
	initialState,
	on(increase, (state) => ({
		...state,
		like: state.like + 1
	})),
	on(decrease, (state) => ({
		...state,
		like: state.like - 1
	})),
	on(clear, (state) => ({
		...state,
		like: 0
	}))
);

export const featureSelector = createFeatureSelector<LikerState>("liker");

export const likeSelector = createSelector(featureSelector, (state) => state.like);
