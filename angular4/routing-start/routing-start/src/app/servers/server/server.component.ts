import { Params, Router, Data, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Rx';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit, OnDestroy {
  server: { id: number, name: string, status: string };
  paramsSub: Subscription;

  constructor(private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      this.server = data['server'];
    })
    // const id = +this.route.snapshot.params['id'];
    // if (id) {
    //   this.server = this.serversService.getServer(id);
    //   this.paramsSub = this.route.params
    //     .subscribe((params: Params) => {
    //       this.server = this.serversService.getServer(+params['id']);
    //     });
    // }
  }

  ngOnDestroy() {
    if (this.paramsSub)
      this.paramsSub.unsubscribe();
  }

  onEditServer(): void {
    this.router.navigate(['edit'],
      { relativeTo: this.route, queryParamsHandling: 'preserve' });
  }
}
