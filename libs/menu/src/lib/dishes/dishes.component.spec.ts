import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Dish } from '@yfx-data-models';
import { MenusService } from './../data-access/menus.service';
import { DishesComponent } from './dishes.component';

const dish: Dish = {
  taste: 'spicy',
  name: 'ceviche',
  country: {
    name: 'Perú',
    language: 'Español'
  },
  available: true
};

// class MenusServiceMocks {
//   availableDishes() {
//     return ['', ''];
//   }
// }

const menusServiceMocks = {
  availableDishes: () => [dish]
};

describe('DishesComponent', () => {
  let component: DishesComponent;
  let fixture: ComponentFixture<DishesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DishesComponent],
      //providers: [{ provide: MenusService, useClass: MenusServiceMocks }]

      providers: [{ provide: MenusService, useValue: menusServiceMocks }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the menu', () => {
    // Arrange

    // Act
    component.showMenu();
    // Assert

    expect(component.dishes).toStrictEqual([dish]);
  });
});
