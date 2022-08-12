import { AuthService } from 'src/app/services/auth.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { Component, OnInit } from '@angular/core';
import {
  Event,
  NavigationStart,
  Router,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
} from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  categories: Category[] = [];
  displayLoadingIndicator: boolean = false;
  destroy$ = new Subject();

  constructor(
    private router: Router,
    private categoriesService: CategoriesService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['admin']);
    }

    this.categoriesService
      .getCategories()
      .subscribe((categories: Category[]) => {
        this.categories = categories;
      });

    this.router.events
      .pipe(takeUntil(this.destroy$))
      .subscribe((routerEvent: Event) => {
        if (routerEvent instanceof NavigationStart) {
          this.displayLoadingIndicator = true;
        }
        if (
          routerEvent instanceof NavigationEnd ||
          routerEvent instanceof NavigationCancel ||
          routerEvent instanceof NavigationError
        ) {
          setTimeout(() => {
            this.displayLoadingIndicator = false;
          }, 100);
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
