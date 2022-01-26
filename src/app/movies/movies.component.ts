import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = []

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getPopularMovies()
  }

  getPopularMovies(): void {
    this.movieService.getPopularMovies().subscribe(movies => this.movies = movies.results)
  }
}