import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, map } from "rxjs";
import { clear, decrease, increase, likeSelector } from "src/app/reducers/liker";

@Component({
	selector: "app-likes",
	templateUrl: "./likes.component.html",
	styleUrls: ["./likes.component.scss"]
})
export class LikesComponent implements OnInit {
	public updatedAt?: number;

	public like$: Observable<number> = this.store.select(likeSelector);
	cannotDecrease$ = this.like$.pipe(map((like) => like <= 0));

	constructor(private store: Store) {}

	ngOnInit(): void {}

	public increase(): void {
		this.updatedAt = Date.now();
		this.store.dispatch(increase());
	}

	public decrease(): void {
		this.updatedAt = Date.now();
		this.store.dispatch(decrease());
	}

	public clear(): void {
		this.updatedAt = Date.now();
		this.store.dispatch(clear());
	}
}
