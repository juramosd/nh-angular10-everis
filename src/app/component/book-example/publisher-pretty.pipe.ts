import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'publisherPretty'
})
export class PublisherPrettyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
