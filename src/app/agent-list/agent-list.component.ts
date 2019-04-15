import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-agent-list',
  templateUrl: './agent-list.component.html',
  styleUrls: ['./agent-list.component.css']
})
export class AgentListComponent implements OnInit {

  constructor( private router:Router) { }
  agentDetail()
  {
    console.log("Update");
    this.router.navigate(['./home/agents/singleList']);
  }

  ngOnInit() {
  }

}
