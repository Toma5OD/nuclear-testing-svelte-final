<script>
  import { getContext } from "svelte";
  import SignupForm from "../components/SignupForm.svelte";
  import Header from "../components/Header-Login.svelte";
</script>

<Header title="Nuclear Testing"/>


<div class="columns">
  <div class="column">
    <div class="box">
      <h1 class="title">Login</h1>
      <SignupForm/>
    </div>
  </div>
</div>
