import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { PopularMoviesResponse, Movie } from "./movie"
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<PopularMoviesResponse> {
    return this.http.get<PopularMoviesResponse>(`${environment.BASE_URL}/movie/popular?api_key=${environment.API_KEY}&language=en-US&page=1`)
      .pipe(
        catchError(this.handleError<PopularMoviesResponse>('getMovies'))
      )
  }

  getMovie(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${environment.BASE_URL}/movie/${id}?language=en-US&api_key=${environment.API_KEY}`)
      .pipe(
        catchError(this.handleError<Movie>('getMovie'))
      )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation}failed: ${error.message} `)
      return of(result as T)
    }
  }
}