import { ComponentFixture, TestBed, async, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [InputComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have a title 'I love cherry!'`, async(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.title).toEqual('I love cherry!');
  }));
});
