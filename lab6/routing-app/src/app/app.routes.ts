import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AlbumsComponent } from './albums/albums.component';
import { HomeComponent } from './home/home.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumPhotosComponent } from './album-photos/album-photos.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
    {path:'home', component: HomeComponent}, 
    {path:'about', component: AboutComponent},
    {path: '', redirectTo:'/home', pathMatch:'full'}, 
    // {path:'**', component: PageNotFoundComponent},  
    {path: 'albums', component: AlbumsComponent},
    {path:'albums/:id', component:AlbumDetailComponent}, 
    {path:'albums/:id/photos', component:AlbumPhotosComponent}  
];

@NgModule({
        imports:[RouterModule.forRoot(routes)], 
        exports:[RouterModule]
})
export class AppRoutingModule {}