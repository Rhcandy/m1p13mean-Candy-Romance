// Angular import
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

// third party import
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-nav-right',
  imports: [RouterModule, SharedModule],
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss']
})
export class NavRightComponent implements OnInit {
  currentUser: any = null;
  userImage: string = 'assets/images/user/user.webp';
  greeting: string = 'Hey';
  userName: string = 'John Doe';
  userRole: string = 'Project Admin';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.currentUser$.subscribe(user => {
      if (user) {
        this.currentUser = user;
        this.userName = user.nom || 'John Doe';
        this.userImage = user.pdppath ? `${user.pdppath}` : 'assets/images/user/user.webp';
        
        // Définir le rôle en fonction du roleName
        switch(user.role) {
          case 'user':
            this.userRole = 'Client';
            break;
          case 'admin_boutique':
            this.userRole = 'Shop Owner';
            break;
          case 'admin_center':
            this.userRole = 'Royal City Owner';
            break;
          case 'super_admin':
            this.userRole = 'Project Admin';
            break;
          default:
            this.userRole = 'User';
        }
        
        // Définir le salutation en fonction de l'heure
        const hour = new Date().getHours();
        if (hour < 12) {
          this.greeting = 'Good Morning';
        } else if (hour < 17) {
          this.greeting = 'Good Afternoon';
        } else {
          this.greeting = 'Good Evening';
        }
      } else {
        this.currentUser = null;
        this.userName = 'John Doe';
        this.userImage = 'assets/images/user/user.webp';
        this.userRole = 'Project Admin';
        this.greeting = 'Hey';
      }
    });
  }

  logout() {
    this.authService.logout();
  }
}
