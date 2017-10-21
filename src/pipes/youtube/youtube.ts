import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'youtube',
})
export class YoutubePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */

  constructor(private dom: DomSanitizer) {

  }

  transform(value: string, ...args) {
    return this.dom.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${value}`);
  }
}
