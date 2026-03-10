import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface EnquiryForm {
  name: string;
  email: string;
  phone: string;
  message: string;
  recaptchaToken: string;
}

export interface SubmissionResponse {
  id: string;
  status: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class EnquiryService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:8000/properties';

  submitEnquiry(data: EnquiryForm): Observable<SubmissionResponse> {
    return this.http.post<SubmissionResponse>(this.apiUrl, data).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'An error occurred while submitting your enquiry.';

        if (error.error instanceof ErrorEvent) {
          // Client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else if (error.error?.message) {
          // Server-side error with message
          errorMessage = error.error.message;
        } else if (error.status === 0) {
          // Network error
          errorMessage = 'Network error. Please check your connection and try again.';
        } else if (error.status === 400) {
          errorMessage = 'Invalid form data. Please check your input and try again.';
        } else if (error.status === 500) {
          errorMessage = 'Server error. Please try again later.';
        }

        return throwError(() => new Error(errorMessage));
      })
    );
  }
}
