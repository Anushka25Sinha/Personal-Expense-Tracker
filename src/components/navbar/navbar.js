import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"

export default function (props) {
  return (
    <div>
      <link href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css" rel="stylesheet" />
      <link href="~/Content/navbar_side_1.css" rel="stylesheet" />
      {/* <title>Static Template</title> */}

      <div className="sidebar">
        <div class="logo_content">
          <div class="logo">
            <i class="bx bx-store"></i>
            <div class="logo_name">E STORE</div>
          </div>
          <i class="bx bx-menu" id="btn"></i>
        </div>
        <ul class="nav_list">
          <li>

            <i class='bx bx-search'></i>
            <input type="text" placeholder="Search..."></input>

            <span class="tooltip">Search</span>

          </li>
        </ul>
        <ul class="nav_list">
          <li>
            <a href="#">
              <i class="bx bx-grid-alt"></i>
              <span class="links_name">Dashboard</span>
            </a>
            <span class="tooltip">Dashboard</span>

          </li>

          <li>
            <Link to="/">
              <i class='bx bx-user'></i>
              <span class="links_name">Login</span>
            </Link>
            <span class="tooltip">Login</span>

          </li>

          <li>
            <a href="#">
              <i class='bx bx-chat'></i>
              <span class="links_name">Messages</span>
            </a>
            <span class="tooltip">Messages</span>

          </li>

        </ul>
        
      </div>

      {/* <div class="home_content">
  <div class="text">
    Home Content
  </div>
</div> */}

      {/* 
<script>
   
  let btn = document.querySelector("#btn");
  let siderbar = document.querySelector(".sidebar");
  let searchBtn = document.querySelector(".bx-search");
  btn.onclick = function() {
    siderbar.classList.toggle("active")
  }
  searchBtn.onclick = function() {
    siderbar.classList.toggle("active")
  }
</script> */}
    </div>
  )
}
