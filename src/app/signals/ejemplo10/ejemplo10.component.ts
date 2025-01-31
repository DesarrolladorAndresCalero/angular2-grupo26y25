import { Component, computed, signal } from '@angular/core';
import { products } from './products';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-ejemplo10',
  imports: [CardModule, 
    ButtonModule,
    InputTextModule,
    FormsModule,
    FloatLabel,
    TableModule],
  templateUrl: './ejemplo10.component.html',
  styleUrl: './ejemplo10.component.css'
})
export class Ejemplo10Component {

  readonly firsPage = 1;
  itemPerPage = 5

  searchInput = signal("");
  currentPage = signal(this.firsPage)

  isNextPageNotAvaible = computed(()=> {
    const filterProducts = products
    .filter((product) => 
      product.title.toLowerCase().includes(this.searchInput().toLowerCase())
    )
    return filterProducts.length < (this.currentPage() + 1) * this.itemPerPage;
  });

  filterProducts = computed(() => {
    const startIndex = (this.currentPage() - 1) * this.itemPerPage;
    const endIndex = startIndex + this.itemPerPage;
  
    return products
      .filter(product => 
        product.title.toLowerCase().includes(this.searchInput().toLowerCase())
      ).slice(startIndex,endIndex)
  })

  searchProduct(searchText: string){
    this.searchInput.set(searchText);
    if(this.currentPage() > this.firsPage){
      this.currentPage.set(this.firsPage)
    }
  }

  goToPrevPage(){
    this.currentPage.update(currentPage => Math.max(currentPage - 1, 1))
  }

  goToNextPage(){
    this.currentPage.update( currentPage => Math.min(currentPage + 1, this.itemPerPage + 1 )  )
  }
}
