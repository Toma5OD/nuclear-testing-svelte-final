<script>
  // import 'leaflet/dist/leaflet.css';
  import {LeafletMap} from '../services/leaflet-map';
  import {getContext, onMount} from "svelte";

  const donationService = getContext("DonationService");

  const mapConfig = {
    location: {lat: 52.160858, lng: -7.152420},
    zoom: 8,
    minZoom: 1,
  };
  let map = null;

  onMount(async () => {
    map = new LeafletMap("donation-map", mapConfig);
    map.showZoomControl();
    map.addLayerGroup('Donations');
    map.showLayerControl();

    const donations = await donationService.getDonations();
    donations.forEach(donation => {
      addDonationMarker(donation);
    });
  });

  export function addDonationMarker(donation) {
    const donationStr = `${donation.candidate.firstName} ${donation.candidate.lastName} €${donation.amount.toString()}`;
    map.addMarker({lat: donation.lat, lng: donation.lng}, donationStr, "Donations");
    map.moveTo(11, {lat: donation.lat, lng: donation.lng});
  }
</script>

<div class="box" id="donation-map" style="height:800px"></div>

