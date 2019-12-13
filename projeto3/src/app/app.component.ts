import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'projeto3';

  ngOnInit() {
    let firebaseConfig = {
      apiKey: "AIzaSyCOroH_5745uKspdqsEyQNmWwtfrb6kM_U",
      authDomain: "jta-instagram-clone-9506f.firebaseapp.com",
      databaseURL: "https://jta-instagram-clone-9506f.firebaseio.com",
      projectId: "jta-instagram-clone-9506f",
      storageBucket: "jta-instagram-clone-9506f.appspot.com",
      messagingSenderId: "472675565068",
      appId: "1:472675565068:web:8a76b5decabbd0e0393829",
      measurementId: "G-304R6VVSWM"
    };

    firebase.initializeApp(firebaseConfig);
  }
}


/*
  <!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.5.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.5.0/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCOroH_5745uKspdqsEyQNmWwtfrb6kM_U",
    authDomain: "jta-instagram-clone-9506f.firebaseapp.com",
    databaseURL: "https://jta-instagram-clone-9506f.firebaseio.com",
    projectId: "jta-instagram-clone-9506f",
    storageBucket: "jta-instagram-clone-9506f.appspot.com",
    messagingSenderId: "472675565068",
    appId: "1:472675565068:web:8a76b5decabbd0e0393829",
    measurementId: "G-304R6VVSWM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>
*/