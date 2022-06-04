<script>
  import Chart from 'svelte-frappe-charts';
  import {getContext, onMount} from "svelte";

  const donationService = getContext("DonationService");

  let totalByMethod = {
    labels: ["paypal", "direct"],
    datasets: [
      {
        values: [0, 0]
      }
    ]
  };

  function populateByMethod(donationList) {
    donationList.forEach(donation => {
      if (donation.method == "paypal") {
        totalByMethod.datasets[0].values[0] += donation.amount
      } else if (donation.method == "direct") {
        totalByMethod.datasets[0].values[1] += donation.amount
      }
    });
  }

  onMount(async () => {
    let donationList = await donationService.getDonations();
    populateByMethod(donationList);
  });

</script>

<h1 class="title is-4">By Method</h1>
<Chart data={totalByMethod} type="pie"/>
