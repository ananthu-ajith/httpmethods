import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import path from 'path';
import { Component } from '@angular/core';
import { FindrecComponent } from './findrec/findrec.component';
import { NewrecComponent } from './newrec/newrec.component';
import { UpdaterecComponent } from './updaterec/updaterec.component';

export const routes: Routes = [
    {
        path: 'find',
        component: FindrecComponent,
        
    },
    {
        path: 'create',
        component: NewrecComponent,
        
    },
    {
        path: 'update',
        component: UpdaterecComponent,
        
    },
];
