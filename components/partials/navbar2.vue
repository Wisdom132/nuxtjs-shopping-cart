<template>
  <header>
    <div class="container px-0">
      <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand logo_h" href="index.html">
            <h2>Eyo</h2>
            <!-- <img src="/img/logo.png" alt /> -->
          </a>

       <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto"></ul>

          <ul class="navbar-nav my-2 my-lg-0">
            <li class="nav-item active">
              <a class="nav-link mx-3" href="#"
                >About <span class="sr-only">(current)</span></a
              >
            </li>
            <li class="nav-item active">
              <a class="nav-link mx-3" href="#">Stories</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link mx-3" href="#"
                >FAQ<span class="sr-only">(current)</span></a
              >
            </li>
            <li class="nav-item active">
              <a class="nav-link mx-3" href="#"> Blog</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link mx-3" href="#"> Login</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
}

.nav-item {
    font-family: 'Poppins', sans-serif;
    color: #000000;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    font-style: normal;
}

</style>
