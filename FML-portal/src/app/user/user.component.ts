import { Component, OnInit } from '@angular/core';
import { ModalService } from '../_services';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private bodyText: string;
  
  constructor(private modalService: ModalService) { }

  ngOnInit() {
    
    this.bodyText = 'This text can be updated in modal 1';
    
  }
  
  openModal(id: string) {
        this.modalService.open(id);
    }
 
    closeModal(id: string) {
        this.modalService.close(id);
    }

}
