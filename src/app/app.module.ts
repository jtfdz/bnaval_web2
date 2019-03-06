import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LobbyComponent } from './lobby/lobby.component';
import { BattleComponent } from './battle/battle.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { EnemyBoardComponent } from './enemy-board/enemy-board.component';
import { OwnBoardComponent } from './own-board/own-board.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { CellComponent } from './cell/cell.component';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };
 

@NgModule({
  declarations: [
    AppComponent,
    LobbyComponent,
    BattleComponent,
    BoardComponent,
    EnemyBoardComponent,
    OwnBoardComponent,
    CellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
