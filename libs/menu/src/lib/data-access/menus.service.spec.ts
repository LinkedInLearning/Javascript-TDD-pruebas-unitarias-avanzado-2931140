import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Dish } from '@yfx-data-models';
import { MenusService } from './menus.service';

describe('MenusService', () => {
  let service: MenusService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(MenusService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get menu list from API', (done) => {
    // Arrange
    const dish: Dish = {
      taste: 'spicy',
      name: 'ceviche',
      country: {
        name: 'Perú',
        language: 'Español'
      },
      available: true
    };
    const mockedDishes: Dish[] = [dish];
    const expectedDishes: Dish[] = [dish];

    // Act
    service.get().subscribe((dishes) => {
      dishes.length; // ?
      expectedDishes.length; // ?

      // Assert
      expect(dishes.length).toStrictEqual(expectedDishes.length);
      done();
    });

    // Post Arrange
    const req = httpMock.expectOne('http://i-dont-know-the-url.yet.com/dishes');
    expect(req.request.method).toBe('GET');
    req.flush(mockedDishes);
  });
});
