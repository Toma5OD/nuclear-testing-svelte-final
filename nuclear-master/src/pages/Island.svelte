<script lang="ts">
  import {getContext, onDestroy, onMount} from "svelte";
  import { router } from "svelte-spa-router";
  import { toStore } from "svelte/store";
  import type {Oileain} from "../services/oileain-api";
  import type {Island, IslandGroup} from "../services/oileain-types";
  import {generateMarkerSpec} from "../services/oileain-types";
  import IslandDescription from "../components/IslandDescription.svelte";
  import IslandCoordinates from "../components/IslandCoordinates.svelte";
  import LeafletMap from "../components/LeafletMap.svelte";
  import type {MarkerSpec} from "../services/markers";
  import Header from "../components/Header.svelte";
  
  let oileain: Oileain = getContext("oileain");
  export let params: any = {};
  export let island: Island;
  let marker: MarkerSpec;
  let islandGroup: IslandGroup[];
  let refresh = true;

  const location = toStore(() => router.location);
  let requestId = 0;
  let destroyed = false;

  async function showIsland(id: string, toggleRefresh: boolean) {
    const current = ++requestId;
    const found = await oileain.getIslandById(id);
    if (destroyed || current !== requestId) return;
    island = found;
    marker = generateMarkerSpec(island);
    if (toggleRefresh) refresh = !refresh;
  }

  onMount(async () => {
    islandGroup = await oileain.getCoasts();
    if (!destroyed) await showIsland(encodeURI(params.wild), false);
  });

  const unsubscribe = location.subscribe((value) => {
    if (!islandGroup || typeof value !== "string") return;
    void showIsland(value.substring(value.lastIndexOf("/") + 1), true);
  });

  onDestroy(() => {
    destroyed = true;
    unsubscribe();
  });
</script>

<Header title="Nuclear Testing"/>

{#if island}
  <div class="uk-text-center" uk-grid>
    <div class="uk-width-expand@m uk-animation-slide-left">
      {#key refresh}
        <LeafletMap id="map-main" {marker} zoom={7} height={560}/>
        <div class="uk-card uk-card-default uk-card-body">
          <IslandCoordinates {island}/>
        </div>
      {/key}
    </div>
    <div class="uk-width-1-3@m uk-animation-slide-right">
      <IslandDescription {island}/>
    </div>
  </div>
{/if}
