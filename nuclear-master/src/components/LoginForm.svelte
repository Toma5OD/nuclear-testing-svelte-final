<script>
  import { push } from "svelte-spa-router";
  import { getContext } from "svelte";

  let email = "";
  let password = "";
  let errorMessage = "";

  const donationService = getContext("DonationService");

  async function login() {
    let success = await donationService.login(email, password);
    if (success) {
      push("/home");
    } else {
      email = "";
      password = "";
      errorMessage = "Invalid Credentials";
    }
  }
</script>

<div class="uk-card uk-card-primary uk-card-body-left">
  <form
    on:submit|preventDefault={login}
    class="uk-form-horizontal uk-margin-large"
  >
  <div class="uk-grid-row">
      <label class="uk-form-label uk-margin-medium-top" for="email">Email</label
      >
      <input
        bind:value={email}
        class="uk-form-controls uk-form-controls-text"
        id="email"
        name="email"
        placeholder="Enter email"
        type="text"
      />
  </div>
    <div class="uk-grid-row">
      <label class="uk-form-label" for="password">Password</label>
      <div class="uk-margin">
        <input
          bind:value={password}
          class="uk-form-controls uk-form-controls-text"
          id="password"
          name="password"
          placeholder="Enter Password"
          type="password"
        />
      </div>
      <div class="uk-margin">
        <div class="field is-grouped">
          <button class="uk-button uk-button-primary">Log In</button>
        </div>
      </div>
    </div>
  </form>
  {#if errorMessage}
    <div class="section">
      {errorMessage}
    </div>
  {/if}
</div>
