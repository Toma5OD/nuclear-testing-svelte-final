<script>
  import {createEventDispatcher, getContext, onMount} from "svelte";
  import Coordinates from "./Coordinates.svelte";

  const dispatch = createEventDispatcher();

  const donationService = getContext("DonationService");

  let amount = 0;

  let candidateList = [];
  let selectedCandidate = "";

  let paymentMethods = ["paypal", "direct"]
  let selectedMethod = "";

  let lat = 52.160858;
  let lng = -7.152420;

  let message = "Please donate";

  onMount(async () => {
    candidateList = await donationService.getCandidates()
  });

  async function donate() {
    if (selectedCandidate && amount && selectedMethod) {
      const candidate = candidateList.find(candidate => candidate.firstName);
      const donation = {
        amount: amount,
        method: selectedMethod,
        candidate: candidate._id,
        lat: lat,
        lng: lng
      };
      const success = await donationService.donate(donation);
      if (!success) {
        message = "Donation not completed - some error occurred";
        return;
      }
      message = `Thanks! You donated ${amount} to ${candidate.firstName}`;
      dispatch("message", {
        donation: donation,
      });
    } else {
      message = "Please select amount, method and candidate";
    }
  }
</script>

<form on:submit|preventDefault={donate}>
  <div class="field">
    <label class="label" for="amount">Enter Amount</label> <input bind:value={amount} class="input" id="amount"
     name="amount" placeholder="Euros" type="number">
  </div>
  <div class="uk-field">
    <div class="uk-form-controls">
      {#each paymentMethods as method}
        <input bind:group={selectedMethod} class="uk-radio" type="radio" name="radio1" value="{method}"> {method}
      {/each}
    </div>
  </div>
  <div class="uk-form-label" for="form-stacked-select">
    <div class="uk-form-controls">
      <div class="uk-select">
        <select bind:value={selectedCandidate}>
          {#each candidateList as candidate}
            <option>{candidate.firstName}</option>
          {/each}
        </select>
      </div>
    </div>
  </div>
  <Coordinates bind:lat={lat} bind:lng={lng}/>
  <div class="field">
    <div class="control">
      <button class="button is-link is-light">Donate</button>
    </div>
  </div>
  <div class="section">
    {message}
  </div>
</form>

