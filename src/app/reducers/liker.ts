import {
	createAction,
	createFeatureSelector,
	createReducer,
	createSelector,
	on,
	props
} from "@ngrx/store";

export const LIKER_KEY = "liker";

export const increase = createAction("[LIKER] increase");
export const decrease = createAction("[LIKER] decrease");
export const clear = createAction("[LIKER] clear");
export const changeUpdatedAt = createAction(
	"[LIKER] change updated at",
	props<{ updatedAt: number }>()
);

export interface LikerState {
	like: number;
	updatedAt?: number;
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
	})),
	on(changeUpdatedAt, (state, action) => ({ ...state, updatedAt: action.updatedAt }))
);

export const featureSelector = createFeatureSelector<LikerState>(LIKER_KEY);

export const likeSelector = createSelector(featureSelector, (state) => state.like);

export const updatedAtSelector = createSelector(featureSelector, (state) => state.updatedAt);
