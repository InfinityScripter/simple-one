import {Component} from '@angular/core';
import {ButtonComponent} from '../../common-ui/button/button.component';
import {InputComponent} from '../../common-ui/input/input.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    ButtonComponent,
    InputComponent,
    NgForOf
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  navItems: string[] = [
    'Структура портала',
    'Личное расписание',
    'Отсутствие на рабочем месте',
    'Дашборды',
    'Доски задач',
    'Обращения',
    'События',
    'Инциденты',
    'Проблемы',
    'Настройка каталогов',
    'Запросы на обслуживание',
    'Запросы на изменение',
    'Управление конфигурациями',
    'Управление уровнем услуг',
    'Настройка соответствий'
  ];
}
