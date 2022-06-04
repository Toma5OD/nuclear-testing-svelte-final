import axios from "axios";
import {user} from "../stores";

export class DonationService {
  // baseUrl = "https://obscure-refuge-81832.herokuapp.com";

  constructor(baseUrl) {
    console.log("HELLO");
    this.baseUrl = "http://localhost:4000";
    console.log(this.baseUrl);
    const donationCredentials = localStorage.donation;
    if (donationCredentials) {
      const savedUser = JSON.parse(donationCredentials);
      user.set({
        email: savedUser.email,
        token: savedUser.token,
      });
      axios.defaults.headers.common["Authorization"] = "Bearer " + savedUser.token;
    }
  }

  async login(email, password) {
    try {
      const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, {email, password});
      axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
      if (response.data.success) {
        user.set({
          email: email,
          token: response.data.token,
        });
        localStorage.donation = JSON.stringify({email: email, token: response.data.token});
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }

  async logout() {
    user.set({
      email: "",
      token: "",
    });
    axios.defaults.headers.common["Authorization"] = "";
    localStorage.removeItem("donation");
  }

  async signup(firstName, lastName, email, password) {
    if(firstName==null || firstName==""||lastName==null || lastName==""||password==null || password=="")
    {
      return false;
    }
    try {
      const userDetails = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      };
      await axios.post(this.baseUrl + "/api/users", userDetails);
      return true;
    } catch (error) {
      return false;
    }
  }

  async donate(donation) {
    try {
      const response = await axios.post(this.baseUrl + "/api/candidates/" + donation.candidate + "/donations", donation);
      return response.status == 200;
    } catch (error) {
      return false;
    }
  }

  async getCandidates() {
    try {
      const response = await axios.get(this.baseUrl + "/api/candidates");
      return response.data;
    } catch (error) {
      return [];
    }
  }

  async getDonations() {
    try {
      const response = await axios.get(this.baseUrl + "/api/donations");
      return response.data;
    } catch (error) {
      return [];
    }
  }
}



