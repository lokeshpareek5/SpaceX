import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class SpacexListingService {

    constructor(public http: HttpClient) { }
    
    public getConfig() {
        let config = {
          headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
          }),
        };
        return config;
    }
    public getAllSpecexListingData() {
        return this.http.get<Config>('https://api.spaceXdata.com/v3/launches?limit=100', this.getConfig());
        // return this.http.get<Config>('../../assets/data/launches.json', this.getConfig());
    }

    public getLunchSuccessData(){
        return this.http.get<Config>('../../assets/data/Filterwithsuccess.json', this.getConfig());
    }

    public getLunchAndLandingSuccessData() {
        return this.http.get<Config>('../../assets/data/FilterwithLunchAndLand.json', this.getConfig());
    }

    public getAllLunch() {
        return this.http.get<Config>('../../assets/data/allFilter.json', this.getConfig());
    }
}

export interface Config {
    data: Array<any>;
}
