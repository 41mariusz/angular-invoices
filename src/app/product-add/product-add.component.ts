import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class NewMyInvoicesCompunent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ps: ProductsService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      InputName: ['', Validators.required ],
      InputDescription: ['', Validators.required ],
      InputTax: ['', Validators.required ],
      InputAmount: ['', Validators.required ],
      InputDate: ['', Validators.required ]
    });
  }

  addProduct(InputName, InputDescription, InputTax, InputAmount, InputDate) {
    this.ps.addProduct(InputName, InputDescription, InputTax, InputAmount, InputDate);
  }

  ngOnInit() {
  }

}
