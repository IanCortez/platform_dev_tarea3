import { Component, OnInit } from '@angular/core';
import { MenuItemsService } from '../_services/menu-items.service';

@Component({
  selector: 'app-menu-table',
  templateUrl: './menu-table.component.html',
  styleUrls: ['./menu-table.component.scss']
})
export class MenuTableComponent implements OnInit {

  menu_items = [{
    nombre_plato: "placeholder",
    precio: 0
  }]

  constructor(
    private menu_items_service: MenuItemsService
  ) { }

  ngOnInit(): void {
    this.menu_items_service.getMenuItems().subscribe(data => {
      this.menu_items = data;
    })
  }

}
