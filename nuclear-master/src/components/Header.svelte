<script lang="ts">
  import Icon from "svelte-awesome";
  import {faGithub} from "@fortawesome/free-brands-svg-icons";
  import {faMap} from "@fortawesome/free-regular-svg-icons";
  import {faBars, faChartPie, faMapMarked, faSignOut} from "@fortawesome/free-solid-svg-icons";
  import {user} from "../stores.js"
  import user1 from "/src/assets/user.png"
  export let title = "";
</script>

<div class="uk-flex uk-flex-center uk-flex-middle uk-text-center uk-padding-small" uk-grid>
  <div class="uk-padding-small uk-margin-medium-right">
    <a href="#coasts-menu" uk-toggle uk-tooltip="title: Clickable list all Islands by Costal Region; pos: bottom">
      <div uk-tooltip="title: Index of all Islands; pos: bottom">
        <Icon data={faBars} scale="2"/>
      </div>
    </a>
  </div>
  <div class="uk-padding-small uk-margin-medium-right">
    <a href="/#/charts" uk-toggle uk-tooltip="title: Chart Page; pos: bottom">
        <Icon data={faChartPie} scale="2"/>
    </a>
  </div>
  <div class="uk-padding-small uk-margin-medium-right">
    <a href="/#/home" uk-tooltip="title: Home Page; pos:bottom">
      <Icon data={faMap} scale="3"/>
    </a>
  </div>
  <div class="uk-child-width-1-2@s uk-card uk-card-default uk-grid-collapse" uk-grid>
    <div>
      <div class="uk-tile uk-tile-default uk-padding-small">
        <h2 class="uk-margin-large">{title}</h2>
      </div>
    </div>
    <div>
      <div class="uk-tile uk-tile-muted uk-padding-small">
        <div>
          <i class="fas fa-donate fa-3x" style="color:rgb(95, 96, 173)" title="Source repo" pos="bottom" uk-tooltip></i>
          <img src="{user1}" width="80" alt="img" title="Source repo" pos="bottom" uk-tooltip/>
          {#if $user.email}
            <div class="is-size-7">{$user.email} </div>
          {:else}
            <div class="is-size-7">Re-Sign in to display email here</div>
          {/if}
        </div>
      </div>
    </div>
  </div>
  <a href="/#/navigator" class="uk-margin-small-left" uk-tooltip="title: Explore Island Maps; pos:bottom">
    <Icon data={faMapMarked} scale="3"/>
  </a> <a href="https://github.com/Toma5OD" class="uk-margin-small-left" target="_blank" uk-tooltip="title: Project Source; pos:bottom">
  <Icon data={faGithub} scale="3"/>
</a>
<a class="uk-margin-small-left" href="/#" uk-tooltip="title: Logout; pos:bottom">
  <Icon data={faSignOut} scale="3" />
</a>
</div>
