/* eslint-disable @typescript-eslint/no-empty-function */
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

    public form = {
        email: null,
        password: null,
    };

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
    }

    public onSubmit() {
        const url = 'http://localhost:8000/login';
        return this.http.post(url, this.form).subscribe(
            data => console.log(data),
            error => console.log(error),
        );
    }

}
