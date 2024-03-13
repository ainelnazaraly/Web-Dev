import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from './models/album.model';
import { AlbumPhoto } from './models/album-photo.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) { }

  ALB_URL ='https://jsonplaceholder.typicode.com/albums';

  getAlbums() {
    return this.http.get<Album[]>(`${this.ALB_URL}/albums`);
  }

  getAlbum(id: number) {
    return this.http.get<Album>(`${this.ALB_URL}/albums/${id}`);
  }

  addAlbum(album: Album) {
    return this.http.post<Album>(`${this.ALB_URL}/albums`, album);
  }

  deleteAlbum(id: number) {
    return this.http.delete<any>(`${this.ALB_URL}/albums/${id}`);
  }

  updateAlbum(albumId: number, newTitle: string) {
    const body = { title: newTitle };
    return this.http.put<Album>(`${this.ALB_URL}/albums/${albumId}`, body);
  }

  getAlbumPhotos(id: number) {
    return this.http.get<AlbumPhoto[]>(`${this.ALB_URL}/albums/${id}/photos`);
  }

}
