<script lang="ts">
  import type {Island} from "../services/oileain-types";

  export let island: Island;
</script>

<div class="uk-text-center uk-text-small" uk-grid>
  <div class="uk-width-expand@m uk-margin-large-top uk-margin-large-bottom">
    <img src="{island.image}" alt="place">
  </div>
</div>
