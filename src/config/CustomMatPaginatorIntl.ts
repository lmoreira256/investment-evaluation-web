import { MatPaginatorIntl } from '@angular/material/paginator';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomMatPaginatorIntl extends MatPaginatorIntl {

    constructor() {
        super();
        this.getAndInitTranslations();
    }

    getAndInitTranslations() {
        this.itemsPerPageLabel = "Itens por página:";
        this.nextPageLabel = "Próxima Página";
        this.previousPageLabel = "Página Anterior";
        this.changes.next();
    }

    override getRangeLabel = (page: number, pageSize: number, length: number) => {
        if (length === 0 || pageSize === 0) {
            return `0 / ${length}`;
        }
        length = Math.max(length, 0);
        const startIndex = page * pageSize;
        const endIndex = startIndex < length ?
            Math.min(startIndex + pageSize, length) :
            startIndex + pageSize;
        return `${startIndex + 1} - ${endIndex} / ${length}`;
    }
}