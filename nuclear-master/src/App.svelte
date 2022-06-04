<script lang="ts">
  import {DonationService} from "./services/donation-service";
  import Router from "svelte-spa-router";
  import NotFound from "./pages/NotFound.svelte";
  import Home from "./pages/Home.svelte";
  import Main from "./pages/Main.svelte"
  import Login from "./pages/Login.svelte"
  import Signup from "./pages/Signup.svelte"
  import Island from "./pages/Island.svelte";
  import Navigator from "./pages/Navigator.svelte";
  import Sidebar from "./components/Sidebar.svelte";
  import {setContext} from "svelte";
  import {Oileain} from "./services/oileain-api";
  import Charts from "./pages/Charts.svelte";

  setContext("oileain", new Oileain());
  setContext("DonationService", new DonationService("http://localhost:4000"));

  let routes = {
    "/": Main,
    "/home": Home,
    "/poi/*": Island,
    "/navigator": Navigator,
    "/charts": Charts,
    "*": NotFound,
    "/login": Login,
    "/signup": Signup,
  };
</script>

<svelte:head>
  <title>Nuclear Testing</title>
</svelte:head>

<div class="uk-container">
  <Router {routes}/>
</div>
<Sidebar />
