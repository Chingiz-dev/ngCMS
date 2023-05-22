import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-likes",
	templateUrl: "./likes.component.html",
	styleUrls: ["./likes.component.scss"]
})
export class LikesComponent implements OnInit {
	public likes = 0;
	public updatedAt?: number;
	public get cannotDecrease(): boolean {
		return this.likes <= 0;
	}

	constructor() {}

	ngOnInit(): void {}

	public increase(): void {
		this.updatedAt = Date.now();
		this.likes++;
	}

	public decrease(): void {
		this.updatedAt = Date.now();
		this.likes--;
	}

	public clear(): void {
		this.updatedAt = Date.now();
		this.likes = 0;
	}
}
