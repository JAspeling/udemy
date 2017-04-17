import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';

import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, OnDestroy, CanComponentDeactivate {
  server: { id: number, name: string, status: string, };
  serverName = '';
  serverStatus = '';
  paramsSub: Subscription;
  queryParamsSub: Subscription;
  allowEdit: boolean = false;
  changesSaved: boolean = false;

  constructor(private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    let id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.queryParamsSub = this.route.queryParams
      .subscribe((params: Params) => {
        this.allowEdit = params['allowEdit'] === '1' ? true : false;
      })
    this.paramsSub = this.route.params
      .subscribe((params: Params) => {
        id = +params['id'];
        this.server = this.serversService.getServer(id);
        this.serverName = this.server.name;
        this.serverStatus = this.server.status;
      });

    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id,
      { name: this.serverName, status: this.serverStatus });
    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) return true;
    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status)
      && !this.changesSaved)
      return confirm('Do you want to discard the changes?');
    return true;
  }
}
