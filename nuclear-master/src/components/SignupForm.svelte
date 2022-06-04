<script lang="ts">
  import { push } from "svelte-spa-router";
  import { getContext } from "svelte";

  let firstName = "";
  let lastName = "";
  let email = "";
  let password = "";
  let errorMessage = "";

  const donationService = getContext("DonationService");

  async function signup() {
    let success = await donationService.signup(
      firstName,
      lastName,
      email,
      password
    );
    if (success) {
      push("/home");
    } else {
      errorMessage = "Error Trying to sign up";
    }
  }
</script>

<div class="uk-card uk-card-secondary uk-card-body-centered">
  <form on:submit|preventDefault={signup} class=uk-form-horizontal>
    <div >
      <label
        class="uk-form-label uk-text-center uk-margin-medium-top"
        for="firstname">First Name</label
      >
      <input
        bind:value={firstName}
        id="firstname"
        class="uk-form-controls uk-text-centerr"
        type="text"
        placeholder="Enter first name"
        name="firstName"
      />
    </div>
    <div>
      <label
        for="lastname"
        class="uk-form-label uk-text-center uk-margin-medium-top"
        >Last Name
      </label>
      <input
        class="uk-form-controls uk-text-center"
        type="text"
        bind:value={lastName}
        id="lastname"
        placeholder="Enter last name"
        name="lastName"
      />
    </div>
    <div>
      <label
        for="email"
        class="uk-form-label uk-text-center uk-margin-medium-top">Email</label
      >
      <input
        bind:value={email}
        id="email"
        class="uk-form-controls"
        type="email"
        placeholder="Enter email"
        name="email"
      />
    </div>
    <div>
      <label
        class="uk-form-label uk-text-center uk-margin-medium-top"
        for="password">Password</label
      >
      <input
        bind:value={password}
        id="password"
        class="uk-form-controls"
        type="password"
        placeholder="Enter Password"
        name="password"
      />
    </div>
    <div class="field is-grouped">
      <button class="uk-button uk-button-primary uk-margin-medium-top"
        >Sign Up</button
      >
    </div>
  </form>
  {#if errorMessage}
    <div class="section">
      {errorMessage}
    </div>
  {/if}
</div>
