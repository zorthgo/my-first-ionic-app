import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExcerciseLogPage } from './excercise-log.page';

describe('ExcerciseLogPage', () => {
  let component: ExcerciseLogPage;
  let fixture: ComponentFixture<ExcerciseLogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcerciseLogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExcerciseLogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
