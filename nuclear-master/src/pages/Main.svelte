<script>
  import { getContext } from "svelte";
  import Header from "../components/Header-Login.svelte";
  const donationService = getContext("DonationService");
  donationService.logout();
</script>
<div class="uk-margin-medium"></div>
<Header title="Nuclear Testing"/>

<div class="uk-height-large uk-margin-large uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="https://res.cloudinary.com/dvw91nuuj/image/upload/v1654342760/images/nuke_swa0h4.jpg" uk-img>
  <h1 class="uk-heading-large">Nuclear Testing</h1>
</div>