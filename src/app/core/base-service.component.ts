import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

export abstract class BaseServiceComponent {
  private apiGateway: string;

  constructor( public authHttpd: HttpClient ) {    
    this.apiGateway = environment.apiGateway;
  }

  public getBaseUrl( url: string ) {
    return this.apiGateway.concat( url );
  }
}
