// class Header extends HTMLElement {
//   connectedCallback() {
//     this.innerHTML = `
//       <nav class="navbar navbar-inverse  navbar-fixed-top navbar-dark bg-primary">
//       <div class="container-fluid">
//         <div class="navbar-header">
//           <button
//             type="button"
//             class="navbar-toggle"
//             data-toggle="collapse"
//             data-target="#myNavbar"
//           >
//             <span class="icon-bar"></span>
//             <span class="icon-bar"></span>
//             <span class="icon-bar"></span>
//           </button>
//           <a class="navbar-brand" href="#"></a>
//         </div>
//         <div class="collapse navbar-collapse" id="myNavbar">
//           <ul class="nav navbar-nav">
//           <li class=""><a href="Update_home.html">Update</a></li>
//             <li class=""><a href="HoldingCentres.html">Holding Centres</a></li>
//             <li class=""><a href="PerformanceBarometer.html">Performance Barometer</a></li>
//             <li class=""><a href="lgaBreakdown.html">LGA Breakdown</a></li>
//             <li class=""><a href="CasesManaged.html">Cases Managed</a></li>

//           </ul>
          
//         </div>
//       </div>
//     </nav>
//         `;
//   }
// }

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="mt-5 mb-2 py-2 text-dark">
      <h5>
        DELTA STATE-HOTLINES: 08031230480, 08031230481, 08031230528, 08031230529
      </h5>
      <h6>
        Twitter/Facebook: @deltasmoh/Deltasmoh Asaba
      </h6>
    </footer>
          `;
  }
}

// customElements.define("main-header", Header);
customElements.define("main-footer", Footer);
