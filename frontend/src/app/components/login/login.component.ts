/* eslint-disable @typescript-eslint/no-empty-function */
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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

    public error = null;

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
    }

    public onSubmit() {
        const url = 'http://localhost:8000/api/login';
        return this.http.post(url, this.form).subscribe(
            data => console.log(data),
            error => this.handleError(error),
        );
    }

    public handleError(error: HttpErrorResponse) {
        this.error = error.error.error;
    }

}
