import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'coachupper-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss'],
})
export class GridListComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe('(max-width: 991px)').pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          {
            title:
              'Completa la checklist per migliorare la tua esperienza in CoachUpper',
            content: '',
            cols: 12,
            rows: 3,
          },
          { title: 'Coachees', content: '3', cols: 6, rows: 1 },
          { title: 'Sessioni completate', content: '12', cols: 6, rows: 1 },
          { title: 'Totale ore sessioni', content: '48', cols: 6, rows: 1 },
          { title: 'Fatture non pagate', content: '2', cols: 6, rows: 1 },
          {
            title: 'Sessione attive più recenti',
            content: 'Nessun dato disponibile',
            cols: 12,
            rows: 1,
          },
          {
            title: 'Registro attività',
            content: 'Nessun dato disponibile',
            cols: 12,
            rows: 1,
          },
          {
            title: 'Inizia una sessione',
            content: 'Inizia',
            cols: 12,
            rows: 1,
          },
          {
            title: 'Sessioni recenti',
            content: 'Nessun dato disponibile',
            cols: 12,
            rows: 1,
          },
          { title: 'Coach rating', content: '5', cols: 12, rows: 1 },
          {
            title: 'Prossimi appuntamenti',
            content: 'Inserisci un calendario..',
            cols: 12,
            rows: 2,
          },
          {
            title: 'Valutazioni assegnate',
            content: 'Nessuna valutazione pendente trovata.',
            cols: 12,
            rows: 2,
          },
        ];
      }

      return [
        {
          title:
            'Completa la checklist per migliorare la tua esperienza in CoachUpper',
          content: '',
          cols: 12,
          rows: 3,
        },
        { title: 'Coachees', content: '3', cols: 3, rows: 1 },
        { title: 'Sessioni completate', content: '12', cols: 3, rows: 1 },
        { title: 'Totale ore sessioni', content: '48', cols: 3, rows: 1 },
        { title: 'Fatture non pagate', content: '2', cols: 3, rows: 1 },
        {
          title: 'Sessione attive più recenti',
          content: 'Nessun dato disponibile',
          cols: 6,
          rows: 1,
        },
        {
          title: 'Registro attività',
          content: 'Nessun dato disponibile',
          cols: 6,
          rows: 1,
        },
        { title: 'Inizia una sessione', content: 'Inizia', cols: 4, rows: 1 },
        {
          title: 'Sessioni recenti',
          content: 'Nessun dato disponibile',
          cols: 4,
          rows: 1,
        },
        { title: 'Coach rating', content: '5', cols: 4, rows: 1 },
        {
          title: 'Prossimi appuntamenti',
          content: 'Inserisci un calendario..',
          cols: 6,
          rows: 2,
        },
        {
          title: 'Valutazioni assegnate',
          content: 'Nessuna valutazione pendente trovata.',
          cols: 6,
          rows: 2,
        },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
