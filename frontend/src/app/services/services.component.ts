import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  services = [
    {
      id: 0,
      name: 'Web Development',
      description:
        'lorem iplsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum culpa quaerat iusto aspernatur error ipsa dolor suscipit tenetur! Illum eligendi rem iure sit facere magni omnis dolorum iusto reprehenderit et.',
      active: true,
    },
    {
      id: 1,
      name: 'Business Automation',
      description:
        'lorem iplsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum culpa quaerat iusto aspernatur error ipsa dolor suscipit tenetur! Illum eligendi rem iure sit facere magni omnis dolorum iusto reprehenderit et.',
      active: true,
    },
    {
      id: 2,
      name: 'Digital Marketing',
      description:
        'lorem iplsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum culpa quaerat iusto aspernatur error ipsa dolor suscipit tenetur! Illum eligendi rem iure sit facere magni omnis dolorum iusto reprehenderit et.',
      active: true,
    },
    {
      id: 3,
      name: 'Data Analytics',
      description:
        'lorem iplsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum culpa quaerat iusto aspernatur error ipsa dolor suscipit tenetur! Illum eligendi rem iure sit facere magni omnis dolorum iusto reprehenderit et.',
      active: true,
    },
  ];

  currentServiceIndex = 0;
  constructor(private cdr: ChangeDetectorRef) {}
}
