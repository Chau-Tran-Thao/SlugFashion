import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer'; 
@Component({
  selector: 'app-group-customers',
  standalone: false, 
  templateUrl: './group-customers.html',
  styleUrl: './group-customers.css'
})
export class GroupCustomersComponent implements OnInit {
  customerGroups: any[] = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getGroupCustomers().subscribe({
      next: (data) => {
        this.customerGroups = data;
      },
      error: (err) => {
        console.error('Lỗi khi đọc file json:', err);
      }
    });
  }
}