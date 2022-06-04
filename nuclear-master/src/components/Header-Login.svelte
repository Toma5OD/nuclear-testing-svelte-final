<script lang="ts">
  import Icon from "svelte-awesome";
  import LoginForm from "../components/LoginForm.svelte";
  import SignupForm from "../components/SignupForm.svelte";
  import { faMap, faUser } from "@fortawesome/free-regular-svg-icons";
  import {
    faSignIn,
  } from "@fortawesome/free-solid-svg-icons";

  export let title = "";
</script>

<div class="uk-flex uk-flex-center uk-flex-middle uk-text-center uk-padding-small" uk-grid>
  <div class="uk-child-width-1-2@s uk-card uk-card-default uk-grid-collapse" uk-grid>
    <div>
      <div class="uk-tile uk-tile-default uk-padding-small">
        <h2>{title}</h2>
      </div>
    </div>
    <div>
      <div class="uk-tile uk-tile-muted uk-padding-small">
        <div class="uk-text-small">
          An experiment in exploring all known Nuclear Testing locations.
        </div>
      </div>
    </div>
    <div class="uk-padding-small">
      <div class="uk-text-small">
        <ul uk-accordion>
          <li>
              <a class="uk-accordion-title" href="/signup"> <Icon data={faUser} scale="2" /></a>
              <div class="uk-accordion-content">
                <LoginForm />
              </div>
          </li>
        </ul> 
      </div>
    </div>
    <div class="uk-padding-small">
      <ul uk-accordion>
        <li>
            <a class="uk-accordion-title" href="/login"> <Icon data={faSignIn} scale="2" /></a>
            <div class="uk-accordion-content">
              <SignupForm />
            </div>
        </li>
      </ul> 
    </div>
  </div>
</div>
