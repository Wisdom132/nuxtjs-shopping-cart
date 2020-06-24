<template>
    <header>
        <div class="container px-0">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="col-md-2 col-lg-2">
                    <a class="navbar-brand logo_h" href="index.html">
                        <h2>Eyo</h2>
                        <!-- <img src="/img/logo.png" alt /> -->
                    </a>
                </div>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                </button>

                <div class="col-md-5">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search for products, brands and categories...">
                        <div class="input-group-append">
                            <button class="btn btn-success" type="submit"><i class="fa fa-search"></i></button>
                        </div>
                    </div>
                </div>

                <div class="collapse navbar-collapse col-md-5" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto"></ul>

                    <ul class="navbar-nav my-2 my-lg-0">
                        <li class="nav-item active">

                          
                            <a class="btn btn-light" data-toggle="dropdown" href="#" role="button"><i class="ti-user px-1"></i> Login</a> 
                            <div class="dropdown-menu mt-1">
                                <button type="button" class="btn btn-primary">Login</button>
                                <p>OR</p>
                                <a class="dropdown-item py-2" href="#">Create An Account</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item py-2" href="#"> <i class="ti-user"></i> <span class="px-2">Account</span> </a>
                                <a class="dropdown-item py-2" href="#"> <i class="fa fa-user"></i> <span class="px-2">Orders</span> </a>
                                <a class="dropdown-item py-2" href="#"> <i class="fa fa-user"></i> <span class="px-2">Wishlist</span> </a>
                            </div>
                        </li>

                        <li class="nav-item active">
                             <router-link to="/" href="#" role="button" class="btn btn-light mx-2"><i class="ti-heart px-1"></i> Wishlist </router-link>
                          
                        </li>

                        <li class="nav-item active">
                        <router-link to="/" href="#" class="cart_btn mx-2"><i class="ti-shopping-cart px-1" aria-hidden="true"></i> Cart <span class="badge badge-light px-1 py mx-1">4</span></router-link>
                          
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
    height: 100%;
    background: #ffffff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
}
::placeholder {
  font-size: 12px;
}

.nav-item {
    font-family: 'Poppins', sans-serif;
    color: #000000;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    font-style: normal;
}

.input-group>.input-group-append>.btn,
.input-group>.input-group-append>.input-group-text,
.input-group>.input-group-prepend:first-child>.btn:not(:first-child),
.input-group>.input-group-prepend:first-child>.input-group-text:not(:first-child),
.input-group>.input-group-prepend:not(:first-child)>.btn,
.input-group>.input-group-prepend:not(:first-child)>.input-group-text {
    background: #71CD1C;
    border: 1px solid #71CD1C;
}

.input-group>.input-group-append>.btn,
.input-group>.input-group-append>.input-group-text,
.input-group>.input-group-prepend:first-child>.btn:not(:first-child),
.input-group>.input-group-prepend:first-child>.input-group-text:not(:first-child),
.input-group>.input-group-prepend:not(:first-child)>.btn,
.input-group>.input-group-prepend:not(:first-child)>.input-group-text :focus {
    border-color: hidden;
    background-color: #71CD1C;
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
}

.btn-light {
    background-color: white;
    border-color: white;
}

.form-control:focus {
    border-color: #CED4DA!important;
    -webkit-box-shadow: none!important;
    -moz-box-shadow: none!important;
    box-shadow: none!important;
}

.dropdown-item.active,
.dropdown-item:active {
    background-color: #71CD1C;
}
.cart_btn {
    display: inline-block;
    background: #71cd14;
    padding: 0px 25px;
    letter-spacing: 0.25px;
    color: #fff;
    font-family: "Roboto", sans-serif;

    font-weight: 500;
    line-height: 37px;
    outline: none !important;
    box-shadow: none !important;
    text-align: center;
    border: 1px solid #71cd14;
    cursor: pointer;
  
    -webkit-transition: all 300ms linear 0s;
    transition: all 300ms linear 0s;
    border-radius: 5px;
}
</style>