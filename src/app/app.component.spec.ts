import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    afterEach(() => {
        fixture.destroy();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have 0 messages by default', () => {
        expect(component.msgNumber).toBe(0);
    });

    it('should be not started by default', () => {
        expect(component.hasStarted).toBe(false);
    });

    it('should increase number of messages after start click', fakeAsync (() => {
        component.start();

        fixture.detectChanges();

        tick(400);
        expect(component.hasStarted).toBe(true);
        expect(component.msgNumber).toBe(1);

        component.stop();
    }));

    it('should stop counting after stop click', fakeAsync (() => {
        component.start();

        fixture.detectChanges();

        tick(400);
        expect(component.hasStarted).toBe(true);
        expect(component.msgNumber).toBe(1);

        component.stop();

        tick(700);

        expect(component.hasStarted).toBe(false);
        expect(component.msgNumber).toBe(1);
    }));

    it('should clear number of messages after the badge click', fakeAsync (() => {
        component.start();

        fixture.detectChanges();

        tick(400);
        expect(component.hasStarted).toBe(true);
        expect(component.msgNumber).toBe(1);

        component.stop();
        component.clear();

        expect(component.msgNumber).toBe(0);
    }));
});
