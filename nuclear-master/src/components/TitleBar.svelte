<script>
  import nuclear from "/src/assets/nuclear.png"
  import user1 from "/src/assets/user.png"
  import {user} from "../stores.js"
  export let title = "";
  export let subTitle = "";
</script>

<div class="box has-text-centered columns m-2">
  <div class="column">
    <img src="{nuclear}" width="80" alt="img"/>
  </div>
  <div class="column">
    <div class="title is-5"> Nuclear Testing </div>
    <div class="subtitle is-5"> An experiment in displaying nuclear testing locations </div>
  </div>
  <div class="column">
    <img src="{user1}" width="80" alt="img" title="Source repo" pos="bottom" uk-tooltip/>
    {#if $user.email}
      <div class="is-size-7">{$user.email} </div>
    {:else}
      <div class="is-size-7">Nuclear Testing</div>
    {/if}
  </div>
</div>
