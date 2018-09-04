<template>
  <div>
    <ul id="dropdown" class="dropdown-content menu_el">
            <li><router-link class="menu_el" to = "/">Top</router-link></li>
            <li><router-link class="menu_el" to = "/about">About</router-link> </li>
            <li><router-link class="menu_el" to = "/contact">Contact</router-link></li>
    </ul>
    <nav>
      <div class="nav-wrapper container">
          <img href="/" class="logo_img brand-logo center" src="/assets/12basket_small.png"></img>
        <ul class="right hide-on-med-and-down">
            <li><router-link class="menu_el" to = "/">Top</router-link></li>
            <li><router-link class="menu_el" to = "/about">About</router-link> </li>
            <li><router-link class="menu_el" to = "/contact">Contact</router-link></li>
        </ul>
        <ul class="right hide-on-large-only">
          <li>
            <a class="dropdown-button menu_el" href="#!" data-activates="dropdown">
              Menu<i class="material-icons right">arrow_drop_down</i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>