import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable, map, startWith } from 'rxjs';
import { IActive } from 'src/app/interfaces/IActive';
import { IEarning } from 'src/app/interfaces/IEarning';
import { ActiveService } from 'src/app/services/active.service';
import { EarningService } from 'src/app/services/earning.service';
import Formatter from 'src/utils/Formatter';

@Component({
  selector: 'app-new-earning-dialog',
  templateUrl: './new-earning-dialog.component.html',
  styleUrls: ['./new-earning-dialog.component.scss'],
})
export class NewEarningDialogComponent {
  actives: any;
  earning: IEarning = {} as IEarning;

  myControl = new FormControl<string | IActive>('');
  filteredOptions: Observable<IActive[]>;

  constructor(
    public formatter: Formatter,
    public dialogRef: MatDialogRef<NewEarningDialogComponent>,
    private activeService: ActiveService,
    private earningService: EarningService
  ) { }

  ngOnInit() {
    this.getStocks();
  }

  displayFn(active: IActive): string {
    return active && active.name ? active.name : '';
  }

  optionSelected(event: any) {
    this.earning.activeId = event.option.value.id;
  }

  private _filter(name: string): IActive[] {
    const filterValue = name.toLowerCase();

    return this.actives.filter((active: any) => active.name.toLowerCase().includes(filterValue));
  }

  getSelectedOption(id: string): IActive | null {
    return this.actives.find((option: any) => option.id === id) || null;
  }

  onNgModelChange(value: IActive | string) {
    if (typeof value === 'object' && value !== null) {
      this.earning.activeId = value.id;
    }
  }

  getStocks() {
    this.activeService.list().subscribe((data) => {
      this.actives = data;
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => (typeof value === 'string' ? value : value?.name)),
        map(name => (name ? this._filter(name) : this.actives.slice()))
      );
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  save() {
    this.earningService.create(this.earning).subscribe(() => {
      this.closeDialog();
    });
  }

  changePayDay(event: MatDatepickerInputEvent<Date>) {
    this.earning.payday = event.value || new Date();
  }
}
