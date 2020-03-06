import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureShellLibraryComponent } from './feature-shell-library.component';

describe('FeatureShellLibraryComponent', () => {
  let component: FeatureShellLibraryComponent;
  let fixture: ComponentFixture<FeatureShellLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureShellLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureShellLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
