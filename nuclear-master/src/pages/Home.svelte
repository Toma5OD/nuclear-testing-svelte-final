<script lang="ts">
  import { onMount, getContext } from "svelte";
  import LeafletMap from "../components/LeafletMap.svelte";
  import type { Oileain } from "../services/oileain-api";
  import type { IslandGroup } from "../services/oileain-types";
  import { generateMarkerLayers } from "../services/oileain-types";
  import type { MarkerLayer } from "../services/markers";
  import Router from "svelte-spa-router";
  import DonationsByCandidate from "../components/DonationsByCandidate.svelte";
  import Header from "../components/Header.svelte";
  import DonateForm from "../components/DonateForm.svelte";
  import DonationMap from "../components/DonationMap.svelte";
  let oileain: Oileain = getContext("oileain");
  let coasts: Array<IslandGroup> = null;
  let markerLayers = Array<MarkerLayer>();

  onMount(async () => {
    // retrieve shallow version of all islands (divided into coasts)
    coasts = await oileain.getCoasts();
    // create a set of Leaflet layers - one for each coast (island group)
    // these are sent to the LeafletMap and will be rendered (along with layer control to selectively disable)
    markerLayers = generateMarkerLayers(coasts);
  });

  let donationChart = null;
  function donationMade(event) {
    donationChart.refreshChart();
  }
</script>

<div class="uk-margin-small-top">
  <Header title="Nuclear Testing" />
</div>
<div class="uk-margin-medium-top">
  {#if coasts}
    <div class="uk-container">
      <LeafletMap height={800} {markerLayers} />
    </div>
  {/if}
</div>

<div class="uk-margin-large-top">
  <h3>
    Donations can be made to a charity of you choice. Locations of donations can
    be added with Lat and Lng and are displayed in the map below.
  </h3>
</div>

<div class="uk-margin-large-top">
  <div class="uk-child-width-expand@s" uk-grid>
    <div class="uk-grid-item-match">
      <DonationsByCandidate bind:this={donationChart} />
    </div>
    <div class="uk-container uk-margin-large-left">
      <h1 class="title is-4">Give Generously!</h1>
      <DonateForm on:message={donationMade} />
    </div>
  </div>
</div>

<div class="uk-margin-medium" />
<DonationMap />

<div class="uk-margin-xlarge-top" />


