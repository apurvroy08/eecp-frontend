"use client"
import { Box } from "@mui/material";
import ConnectingSection from "./components/connecting-section/page";
import EECPTreatment from "./components/EECPTreatment/page";
import NewVessel from "./components/new-vessel/page";
import FlowTherapy from "./components/flow-therapy/page";
import ContactUs from "./components/contact-us/page";
import NonInvasive from "./components/non-invasive/page";
import EECPBenefits from "./components/EECP-benifit/page";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Popup from "./forms/popup/PopUp";

export default function Home() {
  const [utmParams, setUtmParams] = useState({
    source: null,
    medium: null,
    campaign: null,
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utmSource = params.get("utm_source") || "Null";
    const utmMedium = params.get("utm_medium") || "Null";
    const utmCampaign = params.get("utm_campaign") || "Null";

    setUtmParams({
      source: utmSource,
      medium: utmMedium,
      campaign: utmCampaign,
    });
  }, []);
  Cookies.set('utm_source', utmParams.source);
  Cookies.set('utm_medium', utmParams.medium);
  Cookies.set('utm_campaign', utmParams.campaign);

  return (
    <Box>
      {/* <Popup /> */}
      <ConnectingSection />
      <EECPTreatment />
      <NewVessel />
      <FlowTherapy />
      <EECPBenefits />
      <NonInvasive />
      <ContactUs />
    </Box>
  );
}
