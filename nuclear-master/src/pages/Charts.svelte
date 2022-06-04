<script>
  import MainNavigator from "../components/MainNavigator.svelte";
  import DonationsByCandidate from "../components/DonationsByCandidate.svelte";
  import DonationsMyMethod from "../components/DonationsMyMethod.svelte";
  import Header from "../components/Header.svelte";
</script>

<div class="uk-margin-small-top">
  <Header title="Nuclear Testing" />
</div>

<div class="columns is-vcentered uk-margin-medium-top">
  <div class="column">
    <MainNavigator/>
  </div>
</div>

<div class="columns">
  <div class="column has-text-centered">
    <DonationsMyMethod/>
  </div>
  <div class="column has-text-centered">
    <DonationsByCandidate/>
  </div>
</div>
